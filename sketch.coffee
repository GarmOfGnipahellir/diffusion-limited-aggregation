tex = undefined
particles = []

setup = () ->
    createCanvas(800, 800)
    noSmooth()
    
    tex = createImage(9, 9)
    particles.push(new Particle(floor(tex.width / 2), floor(tex.height / 2), true))

draw = () ->
    background(0)

    tex.loadPixels()
    for particle in particles
        tex.set(particle.x, particle.y, color(255))
    tex.updatePixels()

    push()
    scale(width / tex.width, height / tex.height)
    image(tex, 0, 0)
    pop()
