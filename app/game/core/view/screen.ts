import { Camera } from '../camera'

export class Screen {
  canvas: HTMLCanvasElement
  context: CanvasRenderingContext2D
  camera: Camera
  fps: number

  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D, fps: number) {
    // Set canvas
    this.canvas = canvas
    context.imageSmoothingEnabled = false
    this.context = context

    // Set fps
    this.fps = fps
  }

  start() {
    // Initialize the camera
    this.camera = new Camera(this.canvas, this.fps)
    this.camera.setScale(3)

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
}
