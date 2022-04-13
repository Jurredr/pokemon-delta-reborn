import { Camera } from './camera'

export class Game {
  fps: number
  canvas: HTMLCanvasElement
  context: CanvasRenderingContext2D
  camera: Camera

  constructor(canvas: HTMLCanvasElement, fps: number) {
    // Check canvas
    const context = canvas.getContext('2d')
    if (canvas === null || context === null) {
      console.error('[FATAL]: Game canvas or context was null when trying to start!')
      return
    }

    // Set fps
    this.fps = fps

    // Set canvas
    this.canvas = canvas
    this.context = context
  }

  start() {
    // Initialize the camera
    this.camera = new Camera(this.canvas, this.fps)
    this.camera.setScale(2)

    setTimeout(() => {
      this.camera.setScale(3)
    }, 1000)

    // Start the animator
    requestAnimationFrame(() => this.animate())
  }

  animate() {
    window.requestAnimationFrame(() => this.animate())
    const image = new Image()
    image.src = '/29.png'
    image.onload = () => {
      this.context.drawImage(image, 0, 0)
    }
  }

  stop() {}
}
