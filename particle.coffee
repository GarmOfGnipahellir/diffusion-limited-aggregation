class Particle
    constructor: (@x, @y) ->

    update: () ->
        switch floor(random(4))
            when 0 then @x++
            when 1 then @y++
            when 2 then @x--
            when 3 then @y--

    draw: () ->
        rect(floor(@x), floor(@y), 1, 1)

    isAdjacent: (x, y) ->
        result = false
        if (x == @x + 1 or x == @x - 1) and y == @y
            result = true
        if (y == @y + 1 or y == @y - 1) and x == @x
            result = true
        return result

    isOutOfBounds: () ->
        return @x < 0 or @y < 0 or @x >= tex.width or @y >= tex.height
