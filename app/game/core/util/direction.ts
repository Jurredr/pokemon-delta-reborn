export enum Direction {
  UP,
  RIGHT,
  DOWN,
  LEFT
}

export function fromAnimatorY(y: number) {
  switch (y) {
    case 0:
      return Direction.DOWN
    case 1:
      return Direction.LEFT
    case 2:
      return Direction.RIGHT
    case 3:
      return Direction.UP
  }
}
