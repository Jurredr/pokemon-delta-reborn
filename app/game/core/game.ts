import { Client } from './client'
import { Screen } from './view/screen'
import { World } from './world/world'

export class Game {
  client: Client
  world: World
  screen: Screen
  lastTime: number
  fps: number
  timeMeasurements: number[]

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

    // FPS
    this.fps = fps
    this.timeMeasurements = []
  }

  start() {
    this.world.spawnEntity(this.client.player)
    this.screen.camera.zoom = 5.0
    this.screen.camera.follow = this.client.player
    this.screen.start(this.world)

    // Start updater
    window.requestAnimationFrame(this.update.bind(this))
  }

  update(currentTime: number) {
    // Initialize lastTime if needed
    if (!this.lastTime) {
      this.lastTime = currentTime
    }
    window.requestAnimationFrame(this.update.bind(this))

    // Ensure consistent FPS
    const deltaTime = currentTime - this.lastTime
    const frameInterval = 1000 / this.fps

    // FPS counter
    this.timeMeasurements.push(currentTime)
    const msPassed =
      (this.timeMeasurements[this.timeMeasurements.length - 1] ?? 0) -
      (this.timeMeasurements[0] ?? 0)
    if (msPassed >= 1000) {
      console.log(Math.floor((this.timeMeasurements.length / msPassed) * 1000))
      this.timeMeasurements = []
    }

    if (deltaTime > frameInterval) {
      // Perform updates
      this.world.update(deltaTime)
      this.screen.update(this.world)
      this.draw(deltaTime)

      // Update last time
      this.lastTime = currentTime - (deltaTime % frameInterval)
    }
  }

  draw(deltaTime: number) {
    this.screen.draw(this.world, deltaTime, this.fps)
  }

  stop() {}
}
