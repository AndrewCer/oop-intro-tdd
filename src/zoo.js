// do not remove this line...you're going to need it for your addAnimal method
var Animal = require("./animal");

function Zoo(name, location, status){
  this.name = name;
  this.location = location;
  this.status = 'closed';
  this.animals = [];
}

Zoo.prototype.changeLocation = function(newLocation){
  this.location = newLocation
  return this.location
};

Zoo.prototype.open = function () {
  return this.status = 'open';
}

Zoo.prototype.isOpen = function () {
  if (this.status === 'closed') {
    return 'Closed'
  }
  else {
    return 'Open!'
  }
}

Zoo.prototype.addAnimal = function (inputAnimal) {
  for (var i = 0; i < this.animals.length; i++) {
    if (this.animals[i] === inputAnimal) {
      return 'That animal already exists'
    }
  }
  if (this.status === 'open' && inputAnimal instanceof Animal === true) {
    this.animals.push(inputAnimal);
    return this.animals;
  }
  if (this.status === 'closed') {
    return 'Sorry Zoo is closed'
  }
  else {
    return 'That is not an animal'
  }
}

Zoo.prototype.removeAnimal = function (inputAnimal) {
  if (this.status === 'open') {
    this.animals.splice(inputAnimal)
  }
}

module.exports=Zoo;
