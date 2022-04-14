export class TileSet {
  src: string
  width: number
  height: number
  tileWidth: number
  tileHeight: number

  constructor(src: string, width: number, height: number, tileWidth: number, tileHeight: number) {
    this.src = src
    this.width = width
    this.height = height
    this.tileWidth = tileWidth
    this.tileHeight = tileHeight
  }
}
