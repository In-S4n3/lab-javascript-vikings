// Soldier
class Soldier {
  constructor(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
  }

  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
   this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(nameArg, healthArg, strengthArg) {
    super(healthArg, strengthArg);
    this.name = nameArg;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return (this.name + " has received " + damage + " points of damage");
    } else if (this.health <= 0) {
      return (this.name + " has died in act of combat");
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}


// Saxon
class Saxon extends Soldier {
  constructor(healthArg, strengthArg) {
    super(healthArg, strengthArg)
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return ("A Saxon has received " + damage + " points of damage");
    } else if (this.health <= 0) {
      return ("A Saxon has died in combat");
    }
  }

}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  
  vikingAttack() {
   let randSaxon = Math.floor(Math.random() * this.saxonArmy.length);
   let saxonDamaged = this.vikingArmy[randSaxon].strength;
   saxon.receiveDamage(saxonDamaged);
  }

}

