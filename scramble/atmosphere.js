const SUNNYSIDE_SHADER = `
struct LightField {
  time: f32,
  aspect: f32,
  energy: f32,
  motion: f32,
}
@group(0) @binding(0) var<uniform> light: LightField;

fn hash(position: vec2f) -> f32 {
  return fract(sin(dot(position, vec2f(127.1, 311.7))) * 43758.5453);
}

@fragment fn fs_main(@location(0) uv: vec2f) -> @location(0) vec4f {
  let pixel = floor(uv * vec2f(490.0, 290.0));
  let grain = hash(pixel + floor(light.time * 4.0 * light.motion));
  let p = vec2f((uv.x - 0.5) * light.aspect, uv.y - 0.5);
  let wobble = vec2f(
    sin(light.time * 0.14 * light.motion) * 0.016,
    cos(light.time * 0.11 * light.motion) * 0.013
  );
  let yolk = length(p - vec2f(-0.3 * light.aspect, -0.23) - wobble);
  let halo = exp(-yolk * 4.0);
  let rim = exp(-abs(yolk - 0.21) * 23.0);
  let white = exp(-length(p - vec2f(-0.3 * light.aspect, -0.23)) * 2.2);
  let stripes = sin((p.x + p.y * 0.36) * 36.0 + light.time * 0.35 * light.motion);
  let pixels = abs(fract(uv * vec2f(54.0, 34.0)) - 0.5);
  let grid = smoothstep(0.475, 0.5, max(pixels.x, pixels.y));
  let rgb =
    vec3f(0.96, 0.45, 0.22) * halo * 0.34 +
    vec3f(1.0, 0.79, 0.35) * rim * 0.18 +
    vec3f(0.53, 0.89, 0.81) * white * 0.11 +
    vec3f(0.69, 0.61, 0.9) * max(stripes, 0.0) * 0.017 +
    vec3f(0.56, 0.77, 0.72) * grid * 0.09 +
    vec3f(grain * 0.047);
  let alpha = (0.025 + halo * 0.13 + rim * 0.032 + white * 0.046 + grid * 0.032 + grain * 0.014) * light.energy;
  return vec4f(rgb * alpha, alpha);
}
`;

export async function startAtmosphere(canvas) {
  if (!navigator.gpu || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.documentElement.classList.add("gpu-fallback");
    return;
  }

  try {
    const { clock, effect, frameLoop, init, surface } = await import("vgpu");
    const gpu = await init();
    const target = surface(gpu, canvas, {
      alphaMode: "premultiplied",
      clearColor: [0, 0, 0, 0],
      dpr: [1, 1.5],
    });
    const shader = effect(gpu, SUNNYSIDE_SHADER, {
      set: { light: { time: 0, aspect: innerWidth / innerHeight, energy: 1, motion: 1 } },
    });
    const timer = clock(gpu);
    let loop = null;
    const start = () => {
      if (loop || document.hidden) return;
      loop = frameLoop(gpu, (frame) => {
        shader.set({
          light: {
            time: timer.time,
            aspect: innerWidth / innerHeight,
            energy: document.body.classList.contains("run-active") ? 1.15 : 0.75,
            motion: 1,
          },
        });
        frame.pass(target, shader);
      }, { fps: 30 });
    };
    const stop = () => {
      loop?.stop();
      loop = null;
    };
    document.addEventListener("visibilitychange", () => document.hidden ? stop() : start());
    start();
    document.documentElement.classList.add("gpu-active");
  } catch (error) {
    console.warn("Scramble shader fell back to CSS.", error);
    document.documentElement.classList.add("gpu-fallback");
  }
}
