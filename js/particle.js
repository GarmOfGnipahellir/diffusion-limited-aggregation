var Particle;

Particle = (function() {
  function Particle(x1, y1) {
    this.x = x1;
    this.y = y1;
  }

  Particle.prototype.update = function() {
    switch (floor(random(4))) {
      case 0:
        return this.x++;
      case 1:
        return this.y++;
      case 2:
        return this.x--;
      case 3:
        return this.y--;
    }
  };

  Particle.prototype.draw = function() {
    return rect(floor(this.x), floor(this.y), 1, 1);
  };

  Particle.prototype.isAdjacent = function(x, y) {
    var result;
    result = false;
    if ((x === this.x + 1 || x === this.x - 1) && y === this.y) {
      result = true;
    }
    if ((y === this.y + 1 || y === this.y - 1) && x === this.x) {
      result = true;
    }
    return result;
  };

  Particle.prototype.isOutOfBounds = function() {
    return this.x < 0 || this.y < 0 || this.x >= tex.width || this.y >= tex.height;
  };

  return Particle;

})();
