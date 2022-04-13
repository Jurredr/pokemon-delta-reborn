export class Camera {
  canvas: HTMLCanvasElement
  fps: number
  scale: number

  constructor(canvas: HTMLCanvasElement, fps: number) {
    this.canvas = canvas
    this.fps = fps

    // Set initial scale
    this.scale = 1
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight

    // Resize persister
    window.onresize = (event: UIEvent) => {
      canvas.width = window.innerWidth / this.scale
      canvas.height = window.innerHeight / this.scale
    }
  }

  setScale(scale: number) {
    this.scale = scale
    this.canvas.width = window.innerWidth / scale
    this.canvas.height = window.innerHeight / scale
  }
}
