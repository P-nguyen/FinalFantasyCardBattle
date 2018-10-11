//import images
import attack from '../../assets/images/cards/attackCard.jpg';
import shield from '../../assets/images/cards/shieldCard.jpg';
import heal from '../../assets/images/cards/healCard.jpg';
import bahamut from '../../assets/images/cards/bahamutCard.jpg';
import doubleStrike from '../../assets/images/cards/doubleStrikeCard.jpg';
import tripleStrike from '../../assets/images/cards/tripleStrikeCard.jpg';

//import audios
// var audioSword =  new Audio('audio/sword.mp3');
// var audioShield =  new Audio('audio/shield.mp3');
// var audioHeal =  new Audio('audio/heal.mp3');
// var audioBahamut =  new Audio('audio/bahamut.mp3');
// var audioDblStrike =  new Audio('audio/dblStrike.mp3');
// var audioTriStrike =  new Audio('audio/triStrike.mp3');



export default {
    attack: {name: 'attack',
        address: attack,
        effect: 1,
        ability: function (currentPlayer, enemyPlayer) {
            if ( targetPlayer.equip === 'shield'){
                setTimeout(cardName.shield.sound,1000);
            }else{
                targetPlayer.health -= currentPlayer.currentAttackPower;
            }
        },
        sound: function () {
            audioSword.play();
        }},
    shield: {name: 'shield',
        address:shield ,
        effect: 0,
        ability: function (currentPlayer, enemyPlayer) {
            currentPlayer.equip = 'shield';
            //play shield equip noise.
        },
        sound: function () {
            audioShield.play();
        }},
    heal: {name: 'heal',
        address: heal,
        effect: 2,//how much it heals
        ability: function (currentPlayer, enemyPlayer) {
            currentPlayer.health += this.effect;
            return[currentPlayer, enemyPlayer];
        },
        sound: function () {
            audioHeal.play();
        }},
    bahamut: {name: 'bahamut',
        address: bahamut,
        effect: 2,
        ability: function(currentPlayer, enemyPlayer){
            //damage both players.
            currentPlayer.health -= this.effect;
            enemyPlayer.health -= this.effect;
            return[currentPlayer, enemyPlayer];
            // setTimeout(resetDeck, 2000);
            // resetPlayerAbilitys();
        },
        sound: function () {
            audioBahamut.play();
        }},
    doubleStrike: {name: 'doubleStrike',
        address: doubleStrike,
        effect: 4,
        ability: function (currentPlayer, enemyPlayer) {
            currentPlayer.equip = 'doubleStrike';
            currentPlayer.currentAttackPower = this.effect;
        },
        sound: function () {
            audioDblStrike.play();
        }},
    tripleStrike: {name: 'tripleStrike',
        address: tripleStrike,
        effect: 6,
        ability: function (currentPlayer, enemyPlayer) {
            currentPlayer.equip = 'tripleStrike';
            currentPlayer.currentAttackPower = this.effect;
        },
        sound: function () {
            audioTriStrike.play();
        }},
};