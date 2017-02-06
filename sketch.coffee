tex = undefined
stuck = []
free = []

maxUsed = 1000

setup = () ->
    createCanvas(800, 800)
    frameRate(60)
    noSmooth()

    tex = createImage(128, 128)
    stuck.push(new Particle(floor(tex.width / 2), floor(tex.height / 2)))

draw = () ->
    background(0)

    for f in [0...100]
        if free.length <= 100 and maxUsed > 0
            pos = p5.Vector.random2D().mult(tex.width / 2 - tex.width / 10)
            pos.x += tex.width / 2
            pos.y += tex.width / 2
            free.push(new Particle(floor(pos.x), floor(pos.y)))

        for p, i in free
            continue if p == undefined
            p.update()
            for c, j in stuck
                if p.isAdjacent(c.x, c.y)
                    free.splice(i, 1)
                    stuck.push(p)
                    maxUsed--
            if p.isOutOfBounds()
                free.splice(i, 1)

    noStroke()
    push()
    scale(width / tex.width, height / tex.height)
    fill(255, 0, 0)
    for p in free
        p.draw()
    fill(255)
    for p in stuck
        p.draw()
    pop()
