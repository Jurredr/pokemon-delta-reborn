import { Camera } from './camera'

export class Screen {
  canvas: HTMLCanvasElement
  context: CanvasRenderingContext2D
  camera: Camera
  fps: number
  worldRenderer: (context: CanvasRenderingContext2D) => void

  constructor(
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    fps: number,
    worldRenderer: (context: CanvasRenderingContext2D) => void
  ) {
    // Set canvas
    this.canvas = canvas
    context.imageSmoothingEnabled = false
    this.context = context

    // Set fps
    this.fps = fps

    // Set world renderer
    this.worldRenderer = worldRenderer
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

    // Render the world with all entities
    if (this.worldRenderer) {
      this.worldRenderer(this.context)
    } else {
      console.warn("[WARNING]: Screen couldn't find world renderer")
    }
  }
}
