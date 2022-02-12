// STRENGTH OF ATATCK
const attackValue = 10;
//Monster attack strength
const monsterAttackValue = 3;

// MAX LIFE FOR PLAYER AND MONSTER
let chosenMaxLife = 100;

//UPDATES ON SCREEN
adjustHealthBars(chosenMaxLife);

//current Monster Health
let currentMonsterHealth = chosenMaxLife;

//Current Player Health
let currentPlayerHealth = chosenMaxLife;
//CONNECT ATTACK BUTTON
function attackHandler () {
   let damage = dealMonsterDamage(attackValue);
   currentMonsterHealth = currentMonsterHealth - damage;

   const playerDamage = dealPlayerDamage(monsterAttackValue);
   currentPlayerHealth = currentPlayerHealth - playerDamage;

   if (currentMonsterHealth <=0 && currentPlayerHealth > 0) {
       alert('You won!');
   } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0){
      alert('You lost!')
   } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0){
      alert('Draw')
   }

}
attackBtn.addEventListener('click', attackHandler);