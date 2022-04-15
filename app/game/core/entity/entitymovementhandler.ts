import { Direction, fromAnimatorY } from '../util/direction'
import { Location } from '../util/location'
import { EntityAnimator } from './entityanimator'

export class EntityMovementHandler {
  location: Location
  animator: EntityAnimator

  initialImgOffsetX: number
  initialImgOffsetY: number

  speed: number
  moving: boolean

  constructor(location: Location, animator: EntityAnimator) {
    this.location = location
    this.animator = animator
    this.location.facing = fromAnimatorY(this.animator.spritePosition.y)

    this.initialImgOffsetX = location.imgOffsetX
    this.initialImgOffsetY = location.imgOffsetY

    this.speed = 128
    this.moving = false
  }

  move(x: number, y: number) {
    if (this.moving) return

    if (y > 0) this.animator.spritePosition.y = 0
    if (x < 0) this.animator.spritePosition.y = 1
    if (x > 0) this.animator.spritePosition.y = 2
    if (y < 0) this.animator.spritePosition.y = 3
    this.location.facing = fromAnimatorY(this.animator.spritePosition.y)

    this.location.position.x += x
    this.location.position.y += y

    this.location.imgOffsetX -= x * 16
    this.location.imgOffsetY -= y * 16

    this.moving = true
    this.animator.playing = true
  }

  update(deltaTime: number) {
    if (!this.moving) {
      this.animator.playing = false
      this.animator.spritePosition.x = 0
    }

    const speed = (this.speed / 1000) * deltaTime

    const distX = this.initialImgOffsetX - this.location.imgOffsetX
    const distY = this.initialImgOffsetY - this.location.imgOffsetY

    const dx = Math.min(Math.abs(distX), speed) * Math.sign(distX)
    const dy = Math.min(Math.abs(distY), speed) * Math.sign(distY)

    this.location.imgOffsetX += dx
    this.location.imgOffsetY += dy

    if (
      Math.abs(this.initialImgOffsetX - this.location.imgOffsetX) < 0.01 &&
      Math.abs(this.initialImgOffsetY - this.location.imgOffsetY) < 0.01
    ) {
      this.location.imgOffsetX = this.initialImgOffsetX
      this.location.imgOffsetY = this.initialImgOffsetY
      this.moving = false
    }
  }
}
