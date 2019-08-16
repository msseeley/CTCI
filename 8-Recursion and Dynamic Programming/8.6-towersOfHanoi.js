/*
  Towers of Hanoi:
  Three towers, n disks, each disk is a different size and can be slid onto any tower.
  Constraints -
    Only one disk can be moved @ a time
    A disk is slid off the top of one tower and onto another.
    a disk cannot be placed on a smaller disk

  Write an algorithm that moves disks from the first tower to the last (third) tower.
*/

class Stack {
  constructor(numDisks) {
    this.tower = new Array(numDisks); //assuming the disks are already sorted greatest to smallest
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
  constructor(numDisks) {
    this.towers = [];
    for (let i = 1; i <= 3; i++) {
      this.towers.push(new Stack(numDisks))
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
  moveTopTo(destination, origin) {
    const top = origin.pop();
    destination.add(top);
  }

  moveDisks(numDisks, origin, destination, via) {
    if (numDisks <= 0) return;
    this.moveDisks(numDisks - 1, origin, via, destination) //moves top disks all but the bottom (ie n-1) to the buffer 'via'
    this.moveTop(origin, destination) //moves the remaining disk to the destination, by pullin the now top of that stack
    this.moveDisks(numDisks - 1, via, destination, origin) //moves remaining disks in the buffer to
  }

}




