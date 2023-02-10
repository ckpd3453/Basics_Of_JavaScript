const animal = {
  animalName: "Cat",
  sound: "Meowing",
  display: function () {
    console.log(this.animalName, "is", this.sound);
  },
};

const animal1 = {
  animalName: "Dog",
  sound: "Barking",
};
const janwar = animal.display.bind(animal);
const janwar1 = animal.display.bind(animal1);

janwar();
janwar1();
