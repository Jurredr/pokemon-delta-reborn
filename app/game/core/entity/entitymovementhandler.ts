import { fromAnimatorY } from '../util/direction'
import { Entity } from './entity'

export class EntityMovementHandler {
  entity: Entity

  initialImgOffsetX: number
  initialImgOffsetY: number

  speed: number
  moving: boolean

  constructor(entity: Entity) {
    this.entity = entity
    entity.location.facing = fromAnimatorY(entity.animator.spritePosition.y)

    this.initialImgOffsetX = entity.location.imgOffsetX
    this.initialImgOffsetY = entity.location.imgOffsetY

    this.speed = 32
    this.moving = false
  }

  move(x: number, y: number) {
    if (this.moving) return

    if (y > 0) this.entity.animator.spritePosition.y = 0
    if (x < 0) this.entity.animator.spritePosition.y = 1
    if (x > 0) this.entity.animator.spritePosition.y = 2
    if (y < 0) this.entity.animator.spritePosition.y = 3
    this.entity.location.facing = fromAnimatorY(this.entity.animator.spritePosition.y)

    this.entity.location.position.x += x
    this.entity.location.position.y += y

    this.entity.location.imgOffsetX -= x * 16
    this.entity.location.imgOffsetY -= y * 16

    this.moving = true
    this.entity.animator.playing = true
  }

  update(deltaTime: number) {
    if (!this.moving) {
      this.entity.animator.playing = false
      this.entity.animator.spritePosition.x = 0
    }

    const speed = (this.speed / 1000) * deltaTime

    const distX = this.initialImgOffsetX - this.entity.location.imgOffsetX
    const distY = this.initialImgOffsetY - this.entity.location.imgOffsetY

    const dx = Math.min(Math.abs(distX), speed) * Math.sign(distX)
    const dy = Math.min(Math.abs(distY), speed) * Math.sign(distY)

    this.entity.location.imgOffsetX += dx
    this.entity.location.imgOffsetY += dy

    if (
      Math.abs(this.initialImgOffsetX - this.entity.location.imgOffsetX) < 0.01 &&
      Math.abs(this.initialImgOffsetY - this.entity.location.imgOffsetY) < 0.01
    ) {
      this.entity.location.imgOffsetX = this.initialImgOffsetX
      this.entity.location.imgOffsetY = this.initialImgOffsetY
      this.moving = false
    }
  }
}
