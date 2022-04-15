export class TileSet {
  image: HTMLImageElement
  width: number
  height: number
  tileWidth: number
  tileHeight: number
  offsetX: number
  offsetY: number

  constructor(
    src: string,
    tileWidth: number,
    tileHeight: number,
    offsetX: number,
    offsetY: number
  ) {
    const image = new Image()
    image.src = src
    this.image = image

    this.width = image.width
    this.height = image.height
    this.tileWidth = tileWidth
    this.tileHeight = tileHeight

    this.offsetX = offsetX
    this.offsetY = offsetY
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
      x,
      y,
      this.tileWidth,
      this.tileHeight,
      spriteX * this.tileWidth,
      spriteY * this.tileHeight,
      this.tileWidth / 2,
      this.tileHeight / 2
    )
  }
}
