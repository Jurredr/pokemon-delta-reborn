import { Client } from './client'
import { Screen } from './view/screen'
import { World } from './world'

export class Game {
  client: Client
  screen: Screen
  world: World

  constructor(canvas: HTMLCanvasElement, fps: number) {
    // Check canvas
    const context = canvas.getContext('2d')
    if (canvas === null || context === null) {
      console.error('[FATAL]: Game canvas or context was null when trying to start!')
      return
    }

    // Create a client
    this.client = new Client()

    // Set screen
    this.screen = new Screen(canvas, context, fps)
  }

  start() {
    this.screen.start()
  }

  stop() {}
}
