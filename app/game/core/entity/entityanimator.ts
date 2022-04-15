import { Location } from '../util/location'
import { Position } from '../util/position'
import { TileSet } from '../util/tileset'
import { Camera } from '../view/camera'

export class EntityAnimator {
  tileset: TileSet
  location: Location
  playing: boolean
  spritePosition: Position
  frameCount: number

  constructor(tileset: TileSet, location: Location) {
    this.tileset = tileset
    this.location = location
    this.playing = false
    this.spritePosition = new Position(0, 0)
    this.frameCount = 0
  }

  draw(context: CanvasRenderingContext2D, camera: Camera, deltaTime: number) {
    if (this.playing) {
      this.frameCount += deltaTime
      if (this.frameCount >= 1000 / 60) {
        this.frameCount -= 1000 / 60
        this.spritePosition.x += 1
        if (this.spritePosition.x >= this.tileset.width) this.spritePosition.x = 0
      }
    }
    this.tileset.drawTile(
      this.location.position.x * 16 + this.location.imgOffsetX - camera.x,
      this.location.position.y * 16 + this.location.imgOffsetY - camera.y,
      this.spritePosition.x,
      this.spritePosition.y,
      context
    )
  }
}
