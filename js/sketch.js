var draw, free, maxUsed, setup, stuck, tex;

tex = void 0;

stuck = [];

free = [];

maxUsed = 1000;

setup = function() {
  createCanvas(800, 800);
  frameRate(60);
  noSmooth();
  tex = createImage(128, 128);
  return stuck.push(new Particle(floor(tex.width / 2), floor(tex.height / 2)));
};

draw = function() {
  var c, f, i, j, k, l, len, len1, len2, len3, m, n, o, p, pos;
  background(0);
  for (f = k = 0; k < 100; f = ++k) {
    if (free.length <= 100 && maxUsed > 0) {
      pos = p5.Vector.random2D().mult(tex.width / 2 - tex.width / 10);
      pos.x += tex.width / 2;
      pos.y += tex.width / 2;
      free.push(new Particle(floor(pos.x), floor(pos.y)));
    }
    for (i = l = 0, len = free.length; l < len; i = ++l) {
      p = free[i];
      if (p === void 0) {
        continue;
      }
      p.update();
      for (j = m = 0, len1 = stuck.length; m < len1; j = ++m) {
        c = stuck[j];
        if (p.isAdjacent(c.x, c.y)) {
          free.splice(i, 1);
          stuck.push(p);
          maxUsed--;
        }
      }
      if (p.isOutOfBounds()) {
        free.splice(i, 1);
      }
    }
  }
  noStroke();
  push();
  scale(width / tex.width, height / tex.height);
  fill(255, 0, 0);
  for (n = 0, len2 = free.length; n < len2; n++) {
    p = free[n];
    p.draw();
  }
  fill(255);
  for (o = 0, len3 = stuck.length; o < len3; o++) {
    p = stuck[o];
    p.draw();
  }
  return pop();
};
