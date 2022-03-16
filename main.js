//BACKPACK CLASS ASSIGNMENT

class Backpack {
  //Properties
  constructor(color, size) {
    this.color = color;
    this.size = size;
    this.items = [];
    this.open = false;
  }

  //Methods
  openBag() {
    this.open = true;
    console.log("Bag has been opened");
  }

  closeBag() {
    this.open = false;
    console.log("Bag has been closed");
  }

  putIn(...items) {
    this.open === true
      ? (this.items.push(...items), console.log(`Items added: ${items}`))
      : console.log("Backpack needs to be opened.");
  }

  takeOut(item) {
    this.open === true
      ? ((this.items = this.items.filter((keep) => keep != item)),
        console.log(`Items removed: ${item}`))
      : console.log("Backpack needs to be opened.");
  }
}

let backpack1 = new Backpack("blue", "small");
let backpack2 = new Backpack("red", "medium");
let backpack3 = new Backpack("green", "large");

backpack1.openBag();
backpack1.putIn("lunch");
backpack1.putIn("jacket");
backpack1.closeBag();
backpack1.openBag();
backpack1.takeOut("jacket");
backpack1.closeBag();

console.log(backpack1);
