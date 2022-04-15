import { Location } from '../../util/location'
import { TileSet } from '../../util/tileset'
import { PlayerAnimator } from './playeranimator'
import { Entity } from '../entity'
import { EntityType } from '../entitytype'
import { PlayerMovementController } from '../../controller/playermovementcontroller'

export class PlayerEntity extends Entity {
  movementController: PlayerMovementController

  constructor(id: string, location: Location) {
    super(id, EntityType.PLAYER, location)
    this.tileset = new TileSet('/boy_run.png', 32, 48)
    this.animator = new PlayerAnimator(this.tileset, location)
    this.movementController = new PlayerMovementController(this.movement)
  }

  update(deltaTime: number) {
    this.movement.update(deltaTime)
    this.movementController.update()
  }
}
