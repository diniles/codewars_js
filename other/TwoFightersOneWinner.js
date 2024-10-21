// https://www.codewars.com/kata/577bd8d4ae2807c64b00045b/train/javascript

// Create a function that returns the name of the winner in a fight between
// two fighters.

// Each fighter takes turns attacking the other and whoever kills the other
// first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below
// in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be
// integers larger than 0. You can mutate the Fighter objects.

// Your function also receives a third argument, a string, with the name of the
// fighter that attacks first.

// Example:

// declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"

//   Lew attacks Harry; Harry now has 3 health.
//   Harry attacks Lew; Lew now has 6 health.
//   Lew attacks Harry; Harry now has 1 health.
//   Harry attacks Lew; Lew now has 2 health.
//   Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.

function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function () {
    return this.name;
  };
}

function declareWinner(fighter1, fighter2, firstAttacker) {
  let attacker = fighter1.name === firstAttacker ? fighter1 : fighter2;
  let defender = attacker === fighter1 ? fighter2 : fighter1;
  while (attacker.health > 0 || defender.health > 0) {
    defender.health -= attacker.damagePerAttack;
    if (defender.health > 0) {
      console.log(
        `${attacker.name} attacks ${defender.name}; ${defender.name} now has ${defender.health} health.`
      );
    }
    [attacker, defender] = [defender, attacker];
  }

  console.log(
    `${attacker.name} attacks ${defender.name}: ${defender.name} now has ${defender.health} health and is dead. ${attacker.name} wins.`
  );
  return attacker.name;
}

console.log(
  declareWinner(new Fighter('Lew', 10, 2), new Fighter('Harry', 5, 4), 'Lew')
);

console.log(
  declareWinner(new Fighter('Lew', 10, 2), new Fighter('Harry', 5, 4), 'Harry')
);

console.log(
  declareWinner(
    new Fighter('Harald', 20, 5),
    new Fighter('Harry', 5, 4),
    'Harry'
  )
);

console.log(
  declareWinner(
    new Fighter('Harald', 20, 5),
    new Fighter('Harry', 5, 4),
    'Harald'
  )
);

console.log(
  declareWinner(
    new Fighter('Jerry', 30, 3),
    new Fighter('Harald', 20, 5),
    'Jerry'
  )
);

console.log(
  declareWinner(
    new Fighter('Jerry', 30, 3),
    new Fighter('Harald', 20, 5),
    'Harald'
  )
);
