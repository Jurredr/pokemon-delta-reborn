import { Client } from './client'
import { Screen } from './view/screen'
import { World } from './world/world'

export class Game {
  client: Client
  world: World
  screen: Screen

  constructor(canvas: HTMLCanvasElement, fps: number) {
    // Check canvas
    const context = canvas.getContext('2d')
    if (canvas === null || context === null) {
      console.error('[FATAL]: Game canvas or context was null when trying to start!')
      return
    }

    // Create a client
    this.client = new Client()

    // Create the world
    this.world = new World()

    // Create the screen
    this.screen = new Screen(canvas, context, fps)
  }

  start() {
    this.world.spawnEntity(this.client.player)
    this.screen.camera.zoom = 3.0
    this.screen.camera.x = -50
    this.screen.camera.y = -50

    // Start updater
    requestAnimationFrame(() => this.update())
  }

  update() {
    window.requestAnimationFrame(() => this.update())

    this.world.update()
    this.screen.update()
    this.draw()
  }

  draw() {
    this.screen.draw(this.world)
  }

  stop() {}
}
