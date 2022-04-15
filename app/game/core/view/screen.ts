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

  start(world: World) {
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
        const follow = camera.follow
        camera.x =
          follow.location.position.x * world.map.tileset.tileWidth +
          follow.location.imgOffsetX -
          Math.round(canvas.width / 2) +
          8

        camera.y =
          follow.location.position.y * world.map.tileset.tileHeight +
          follow.location.imgOffsetY -
          Math.round(canvas.height / 2) +
          8
      }
    }
  }

  update(world: World) {
    if (this.camera.follow) {
      const follow = this.camera.follow
      this.camera.x =
        follow.location.position.x * world.map.tileset.tileWidth +
        follow.location.imgOffsetX -
        Math.round(this.canvas.width / 2) +
        8

      this.camera.y =
        follow.location.position.y * world.map.tileset.tileHeight +
        follow.location.imgOffsetY -
        Math.round(this.canvas.height / 2) +
        12
    }
  }

  draw(world: World, deltaTime: number, fps: number) {
    // Draw the background
    this.context.fillStyle = 'black'
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)

    // Draw the world
    world.draw(this.context, this.camera, deltaTime, fps)
  }
}
