//import images
import attack from '../../assets/images/cards/attackCard.jpg';
import shield from '../../assets/images/cards/shieldCard.jpg';
import heal from '../../assets/images/cards/healCard.jpg';
import bahamut from '../../assets/images/cards/bahamutCard.jpg';
import doubleStrike from '../../assets/images/cards/doubleStrikeCard.jpg';
import tripleStrike from '../../assets/images/cards/tripleStrikeCard.jpg';

//import audios
import swordSound from '../../assets/audio/sword.mp3';
import shieldSound from '../../assets/audio/shield.mp3';
import healSound from '../../assets/audio/heal.mp3';
import bahamutSound from '../../assets/audio/bahamut.mp3';
import dblStrikeSound from '../../assets/audio/dblStrike.mp3';
import triStrikeSound from '../../assets/audio/triStrike.mp3';


var audioSword =  new Audio(swordSound);
var audioShield =  new Audio(shieldSound);
var audioHeal =  new Audio(healSound);
var audioBahamut =  new Audio(bahamutSound);
var audioDblStrike =  new Audio(dblStrikeSound);
var audioTriStrike =  new Audio(triStrikeSound);



export default {
    attack: {name: 'attack',
        address: attack,
        effect: 1,
        ability: function (currentPlayer, enemyPlayer) {
            if ( enemyPlayer.equip === 'shield'){
                setTimeout(cardName.shield.sound,500);
            }else{
                enemyPlayer.health -= currentPlayer.attack;
                enemyPlayer.hurt = true;
            }
            return[currentPlayer, enemyPlayer];
        },
        sound: function () {
            audioSword.play();
        }},
    shield: {name: 'shield',
        address:shield ,
        effect: 0,
        ability: function (currentPlayer, enemyPlayer) {
            currentPlayer.equip = 'shield';
            currentPlayer.attack = currentPlayer.baseAtk;
            return[currentPlayer, enemyPlayer];
        },
        sound: function () {
            audioShield.play();
        }},
    heal: {name: 'heal',
        address: heal,
        effect: 4,//how much it heals
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
            currentPlayer.health -= this.effect;
            currentPlayer.hurt = true;
            enemyPlayer.health -= this.effect;
            enemyPlayer.hurt = true;
            return[currentPlayer, enemyPlayer];
        },
        sound: function () {
            audioBahamut.play();
        }},
    doubleStrike: {name: 'doubleStrike',
        address: doubleStrike,
        effect: 2,
        ability: function (currentPlayer, enemyPlayer) {
            currentPlayer.equip = 'doubleStrike';
            currentPlayer.attack = currentPlayer.baseAtk + this.effect;
            return[currentPlayer, enemyPlayer];
        },
        sound: function () {
            audioDblStrike.play();
        }},
    tripleStrike: {name: 'tripleStrike',
        address: tripleStrike,
        effect: 3,
        ability: function (currentPlayer, enemyPlayer) {
            currentPlayer.equip = 'tripleStrike';
            currentPlayer.attack = currentPlayer.baseAtk + this.effect;
            return[currentPlayer, enemyPlayer];
        },
        sound: function () {
            audioTriStrike.play();
        }},
};