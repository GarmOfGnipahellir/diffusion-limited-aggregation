var draw, particles, setup, tex;

tex = void 0;

particles = [];

setup = function() {
  createCanvas(800, 800);
  noSmooth();
  tex = createImage(9, 9);
  return particles.push(new Particle(floor(tex.width / 2), floor(tex.height / 2), true));
};

draw = function() {
  var i, len, particle;
  background(0);
  tex.loadPixels();
  for (i = 0, len = particles.length; i < len; i++) {
    particle = particles[i];
    tex.set(particle.x, particle.y, color(255));
  }
  tex.updatePixels();
  push();
  scale(width / tex.width, height / tex.height);
  image(tex, 0, 0);
  return pop();
};
