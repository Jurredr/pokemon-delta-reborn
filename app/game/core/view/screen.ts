import { World } from '../world/world'
import { Camera } from './camera'

export class Screen {
  canvas: HTMLCanvasElement
  context: CanvasRenderingContext2D
  fps: number
  camera: Camera

  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D, fps: number) {
    // Set canvas
    this.canvas = canvas
    context.imageSmoothingEnabled = false
    this.context = context

    // Set fps
    this.fps = fps

    // Create camer
    this.camera = new Camera()
  }

  update() {
    // Set canvas scale
    this.canvas.width = window.innerWidth / this.camera.zoom
    this.canvas.height = window.innerHeight / this.camera.zoom
  }

  draw(world: World) {
    // Draw the world
    world.draw(this.context, this.camera)
  }
}
