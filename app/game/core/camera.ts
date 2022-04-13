export class Camera {
  canvas: HTMLCanvasElement
  fps: number

  constructor(canvas: HTMLCanvasElement, fps: number) {
    this.canvas = canvas
    this.fps = fps

    // Set initial scale
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
  }

  setScale(scale: number) {
    this.canvas.width = window.innerWidth / scale
    this.canvas.height = window.innerHeight / scale
  }
}
