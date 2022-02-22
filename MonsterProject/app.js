const monsterHealthBar = document.getElementById('monster-health');
const playerHealthBar = document.getElementById('player-health');
const bonusLife = document.getElementById('bonus-life');

//Buttons
const attackBtn = document.getElementById('attack-btn');
const strongAttackBtn = document.getElementById('strong-attack-btn');
const healBtn = document.getElementById('heal-btn');
const logBtn = document.getElementById('log-btn');

const ATTACK_VALUE = 10; // uppercase bc const global value
const MONSTER_ATTACK_VALUE = 21;
const STRONG_ATTACK_VALUE = 20;
const HEAL_VALUE = 20;
let maxLife = 100;
let currentMonsterHealth = maxLife;
let currentPlayerhealth = maxLife;

function adjustHealthBars(maxLife) {
    monsterHealthBar.max = maxLife;
    monsterHealthBar.value = maxLife;
    playerHealthBar.max = maxLife;
    playerHealthBar.value = maxLife;
}
function dealMonsterDamage (damage){
    const dealtMonsterDamage = Math.random() * damage;
    monsterHealthBar.value -= dealtMonsterDamage; // what we see in health bar
    return dealtMonsterDamage;
}

adjustHealthBars(maxLife);

function attackMonster(attackType) {
    let maxDamage;
    if (attackType === 'ATTACK') {
        maxDamage = ATTACK_VALUE;
    } else if (attackType === 'STRONG_ATTACK'){
        maxDamage = STRONG_ATTACK_VALUE;
    }
    const damage = dealMonsterDamage(maxDamage);
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentMonsterHealth -= damage;
    currentPlayerhealth -= playerDamage;
   endRound();
}
function endRound (){
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerhealth -= playerDamage;
    if(currentMonsterHealth <= 0 && currentPlayerhealth > 0){
        alert('you win!');
    } else if (currentPlayerhealth <= 0 && currentMonsterHealth > 0){
        alert('you lose');
    } else if (currentPlayerhealth <= 0 && currentMonsterHealth <= 0){
        alert('tie');
    }
}
function strongAttachHandler (){
attackMonster('STRONG_ATTACK')
}

function attackHandler (){ //handler bc attached to event listener
  attackMonster('ATTACK');
}

function dealPlayerDamage(damage) {
    const dealtDamage = Math.random() * damage;
    playerHealthBar.value = +playerHealthBar.value - dealtDamage;
    return dealtDamage;
}

function increasePlayerHealth(healValue) {
    playerHealthBar.value = +playerHealthBar.value + healValue;
}

function healPlayerHandler (){
    let maxHeal;
    if(currentPlayerhealth >= maxLife - HEAL_VALUE){
        alert("You can't heal more than max initial health")
        maxHeal = maxLife - currentPlayerhealth;
    } else {
        maxHeal = HEAL_VALUE;
    }
    increasePlayerHealth(HEAL_VALUE);
    currentPlayerhealth += HEAL_VALUE;
    endRound();
}
function resetGame(value) {
    playerHealthBar.value = value;
    monsterHealthBar.value = value;
}

function removeBonusLife() {
    bonusLifeEl.parentNode.removeChild(bonusLifeEl);
}

function setPlayerHealth(health) {
    playerHealthBar.value = health;
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttachHandler);
healBtn.addEventListener('click', healPlayerHandler);