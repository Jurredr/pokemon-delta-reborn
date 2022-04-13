import { Client } from './client'
import { Screen } from './view/screen'

export class Game {
  client: Client
  screen: Screen

  constructor(canvas: HTMLCanvasElement, fps: number) {
    // Check canvas
    const context = canvas.getContext('2d')
    if (canvas === null || context === null) {
      console.error('[FATAL]: Game canvas or context was null when trying to start!')
      return
    }

    // Set screen
    this.screen = new Screen(canvas, context, fps)
  }

  start() {
    this.screen.start()
  }

  stop() {}
}
