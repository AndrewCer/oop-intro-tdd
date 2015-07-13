function Animal(name, age, kind){
  this.name = name;
  this.age = age;
  this.kind = kind;
  this.awake = false;
}

Animal.prototype.oink = function(){
  if (this.kind === 'Pig') {
    return 'oink'
  }
  else {
    return 'I am not a pig'
  }
};

Animal.prototype.growUp = function () {
  this.age += 1
  return this.age
};

Animal.prototype.wakeUp = function () {
  return this.awake = 'awake'
};

Animal.prototype.sleep = function () {
  return this.awake = false;
};

Animal.prototype.feed = function () {
  if (this.awake === 'awake') {
    return 'NOM NOM NOM'
  }
  else {
    return 'sleepy sleeps'
  }
}

module.exports=Animal;
