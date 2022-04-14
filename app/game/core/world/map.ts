import { TileSet } from '../util/tileset'
import { Camera } from '../view/camera'

export class Map {
  tileset: TileSet

  constructor(tileset: TileSet) {
    this.tileset = tileset
  }

  draw(context: CanvasRenderingContext2D, camera: Camera) {
    context.drawImage(this.tileset.image, -camera.x, -camera.y)
  }
}
