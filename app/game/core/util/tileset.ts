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

    this.width = image.width
    this.height = image.height
    this.tileWidth = tileWidth
    this.tileHeight = tileHeight
  }
}
