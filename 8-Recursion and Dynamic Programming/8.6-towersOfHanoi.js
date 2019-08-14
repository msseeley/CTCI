/*
  Towers of Hanoi:
  Three towers, n disks, each disk is a different size and can be slid onto any tower.
  Constraints -
    Only one disk can be moved @ a time
    A disk is slid off the top of one tower and onto another.
    a disk cannot be placed on a smaller disk

  Write an algorithm that moves disks from the first tower to the last (third) tower.
*/

class Tower {
  constructor(num, disks) {
    this.tower = new Array(num); //assuming the disks are already sorted greatest to smallest
  }
  peek() {
    return this.tower.length > 0 ? this.tower[tower.length - 1] : this.tower[0];
  }
  remove() {
    return this.tower.pop();
  }
  add(val) {
    this.tower.push(val);
  }
}

class HanoiTowers {
  constructor(n, disks) {
    this.towers = [];
    for (let i = 1; i <= 3; i++) {
      this.towers.push(new Tower(n))
    }
  }
  remove(tower) {
    if (tower.length > 0) tower.remove();
    else throw Error('Empty tower, no disk to remove')
  }
  add(tower, disk) {
    if (tower.peek() > disk || tower.peek() === undefined) tower.add(disk)
    else throw Error('Cannot place a larger disk on a smaller disk')
  }
  moveTopTo(tower) {
    const top =
  }
}




