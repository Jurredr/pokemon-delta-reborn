export class TileSet {
  image: HTMLImageElement
  width: number
  height: number
  tileWidth: number
  tileHeight: number

  constructor(src: string, width: number, height: number, tileWidth: number, tileHeight: number) {
    this.width = width
    this.height = height
    this.tileWidth = tileWidth
    this.tileHeight = tileHeight

    const image = new Image()
    image.src = src
    this.image = image
  }
}
