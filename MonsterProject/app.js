const monsterHealthBar = document.getElementById('monster-health');
const playerHealthBar = document.getElementById('player-health');
const bonusLife = document.getElementById('bonus-life');

//Buttons
const attackBtn = document.getElementById('attack-btn');
const strongAttackBtn = document.getElementById('strong-attack-btn');
const healBtn = document.getElementById('heal-btn');
const logBtn = document.getElementById('log-btn');

const ATTACK_VALUE = 10; // uppercase bc const global value
let maxLife = 50;
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
    monsterHealthBar.value -= dealtMonsterDamage;
    return dealtMonsterDamage;
}

adjustHealthBars(maxLife);

function attackHandler (){
    let damage = dealMonsterDamage(ATTACK_VALUE);
    currentMonsterHealth -= damage;
    if(currentMonsterHealth <= 0){
        alert('you win!');
    }
}

function dealPlayerDamage(damage) {
    const dealtDamage = Math.random() * damage;
    playerHealthBar.value = +playerHealthBar.value - dealtDamage;
    return dealtDamage;
}

function increasePlayerHealth(healValue) {
    playerHealthBar.value = +playerHealthBar.value + healValue;
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
