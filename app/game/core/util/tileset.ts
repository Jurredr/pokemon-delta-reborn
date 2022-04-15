export class TileSet {
  image: HTMLImageElement
  width: number
  height: number
  tileWidth: number
  tileHeight: number

  constructor(src: string, tileWidth: number, tileHeight: number) {
    const image = new Image()
    image.src = src
    this.image = image
    this.width = 0
    this.height = 0
    image.onload = () => {
      this.width = image.width
      this.height = image.height
    }
    this.tileWidth = tileWidth
    this.tileHeight = tileHeight
  }

  drawTile(
    x: number,
    y: number,
    spriteX: number,
    spriteY: number,
    context: CanvasRenderingContext2D
  ) {
    context.drawImage(
      this.image,
      spriteX * this.tileWidth,
      spriteY * this.tileHeight,
      this.tileWidth,
      this.tileHeight,
      x,
      y,
      this.tileWidth / 2,
      this.tileHeight / 2
    )
  }
}
