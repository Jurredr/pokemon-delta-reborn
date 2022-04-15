import { EntityMovementHandler } from '../entity/entitymovementhandler'
import { Keybind } from './keybinds'

export class PlayerMovementController {
  movement: EntityMovementHandler
  keysDown: Keybind[]
  currentKey: Keybind | undefined
  nextKey: Keybind | undefined

  constructor(movement: EntityMovementHandler) {
    this.movement = movement
    this.keysDown = []

    // Create listeners
    window.onkeydown = (ev: KeyboardEvent) => {
      switch (ev.key) {
        case Keybind.WALK_FORWARD:
          if (!this.keysDown.includes(Keybind.WALK_FORWARD)) {
            this.keysDown.push(Keybind.WALK_FORWARD)
          }
          break
        case Keybind.WALK_LEFT:
          if (!this.keysDown.includes(Keybind.WALK_LEFT)) {
            this.keysDown.push(Keybind.WALK_LEFT)
          }
          break
        case Keybind.WALK_BACKWARD:
          if (!this.keysDown.includes(Keybind.WALK_BACKWARD)) {
            this.keysDown.push(Keybind.WALK_BACKWARD)
          }
          break
        case Keybind.WALK_RIGHT:
          if (!this.keysDown.includes(Keybind.WALK_RIGHT)) {
            this.keysDown.push(Keybind.WALK_RIGHT)
          }
          break
      }
    }

    window.onkeyup = (ev: KeyboardEvent) => {
      switch (ev.key) {
        case Keybind.WALK_FORWARD:
          if (this.keysDown.indexOf(Keybind.WALK_FORWARD) > -1) {
            this.keysDown.splice(this.keysDown.indexOf(Keybind.WALK_FORWARD), 1)
          }
          break
        case Keybind.WALK_LEFT:
          if (this.keysDown.indexOf(Keybind.WALK_LEFT) > -1) {
            this.keysDown.splice(this.keysDown.indexOf(Keybind.WALK_LEFT), 1)
          }
          break
        case Keybind.WALK_BACKWARD:
          if (this.keysDown.indexOf(Keybind.WALK_BACKWARD) > -1) {
            this.keysDown.splice(this.keysDown.indexOf(Keybind.WALK_BACKWARD), 1)
          }
          break
        case Keybind.WALK_RIGHT:
          if (this.keysDown.indexOf(Keybind.WALK_RIGHT) > -1) {
            this.keysDown.splice(this.keysDown.indexOf(Keybind.WALK_RIGHT), 1)
          }
          break
      }
    }
  }

  update() {
    let lastKey: Keybind | undefined

    if (this.keysDown.length > 0) {
      lastKey = this.keysDown[this.keysDown.length - 1]
    }

    if (this.movement.moving) {
      if (lastKey && lastKey !== this.currentKey) {
        this.nextKey = lastKey
      }
    } else {
      this.currentKey = undefined
      if (this.nextKey) {
        this.currentKey = this.nextKey
        this.nextKey = undefined
      } else {
        this.currentKey = lastKey
      }
    }

    switch (this.currentKey) {
      case Keybind.WALK_FORWARD:
        this.movement.move(0, -1)
        break
      case Keybind.WALK_BACKWARD:
        this.movement.move(0, 1)
        break
      case Keybind.WALK_LEFT:
        this.movement.move(-1, 0)
        break
      case Keybind.WALK_RIGHT:
        this.movement.move(1, 0)
        break
    }
  }
}
