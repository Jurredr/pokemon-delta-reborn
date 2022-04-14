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
}
