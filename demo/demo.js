const park = {
  btn: true,
  desc: "hello world",
  location() {
    if (btn === true) {
      console.log(btn);
      btn = false;
    } else if (btn === false) {
      console.log(btn);
    }
  },
};

class daysDown {
  constructor(definition, attribute, button) {
    this.button = button;
    this.definition = definition;
    this.attribute = attribute;
  }
}
const element = new daysDown("AFI 21-101", "<p>", "true");
console.log(element);
console.log(park.btn, park.desc, park.location);
