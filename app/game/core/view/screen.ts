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

    // Create camera
    this.camera = new Camera()
  }

  start() {
    // Set initial size & camera
    updateSizeAndCamera(this.canvas, this.camera)

    // Update size & camera on resize
    window.onresize = (ev: UIEvent) => {
      updateSizeAndCamera(this.canvas, this.camera)
    }

    function updateSizeAndCamera(canvas: HTMLCanvasElement, camera: Camera) {
      canvas.width = window.innerWidth / camera.zoom
      canvas.height = window.innerHeight / camera.zoom

      if (camera.follow) {
        camera.x = Math.round(camera.follow.location.position.x - canvas.width / 2 + 16)
        camera.y = Math.round(camera.follow.location.position.y - canvas.height / 2 + 16)
        console.log('updated:', camera.x, camera.y)
      }
    }
  }

  update() {
    // Update camera position if following
    // if (this.camera.follow) {
    //   this.camera.x = this.camera.follow.location.position.x - this.canvas.width / 2 + 16
    //   this.camera.y = this.camera.follow.location.position.y - this.canvas.height / 2 + 16
    //   console.log('updated:', this.camera.x, this.camera.y)
    // }
  }

  draw(world: World) {
    // Draw the world
    world.draw(this.context, this.camera)
  }
}
