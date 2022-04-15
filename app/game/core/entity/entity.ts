import { Location } from '../util/location'
import { TileSet } from '../util/tileset'
import { Camera } from '../view/camera'
import { EntityAnimator } from './entityanimator'
import { EntityMovementHandler } from './entitymovementhandler'
import { EntityType } from './entitytype'

export class Entity {
  id: string
  type: EntityType
  location: Location
  tileset: TileSet
  animator: EntityAnimator
  movement: EntityMovementHandler

  constructor(id: string, type: EntityType, location: Location) {
    this.id = id
    this.type = type
    this.location = location

    this.animator = new EntityAnimator(this.tileset, this.location)
    this.movement = new EntityMovementHandler(this)
  }

  update(deltaTime: number) {
    this.movement.update(deltaTime)
  }

  draw(context: CanvasRenderingContext2D, camera: Camera, deltaTime: number, fps: number) {
    this.animator.draw(context, camera, deltaTime, fps)
  }
}
