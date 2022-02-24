const monsterHealthBar = document.getElementById('monster-health');
const playerHealthBar = document.getElementById('player-health');
const bonusLife = document.getElementById('bonus-life');
const bonusLifeEl = document.getElementById('bonus-life');

//Buttons
const attackBtn = document.getElementById('attack-btn');
const strongAttackBtn = document.getElementById('strong-attack-btn');
const healBtn = document.getElementById('heal-btn');
const logBtn = document.getElementById('log-btn');

const ATTACK_VALUE = 10; // uppercase bc const global value
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;
const HEAL_VALUE = 20;
// User input max life
let enteredMaxLife = prompt('Enter max life value');
let maxLife = enteredMaxLife;

if (isNaN(enteredMaxLife) || enteredMaxLife <= 0){
    enteredMaxLife = 100;
}

let currentMonsterHealth = maxLife;
let currentPlayerHealth = maxLife;
let hasBonusLife = true ;


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

function endRound (){
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;

    if (currentPlayerHealth <= 0 && hasBonusLife){
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        alert('you would be dead but bonus life saved you');
        setPlayerHealth(initialPlayerHealth);
    }
    if(currentMonsterHealth <= 0 && currentPlayerHealth > 0){
        alert('you win!');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0){
        alert('you lose');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0){
        alert('tie');
    }
}

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
    currentPlayerHealth -= playerDamage;
   endRound();
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
    if(currentPlayerHealth >= maxLife - HEAL_VALUE){
        alert("You can't heal more than max initial health")
        maxHeal = maxLife - currentPlayerHealth;
    } else {
        maxHeal = HEAL_VALUE;
    }
    increasePlayerHealth(maxHeal);
    currentPlayerHealth += maxHeal;
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