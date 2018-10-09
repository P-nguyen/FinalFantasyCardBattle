import attack from '../../assets/images/cards/attackCard.jpg';
import shield from '../../assets/images/cards/shieldCard.jpg';
import heal from '../../assets/images/cards/healCard.jpg';
import bahamut from '../../assets/images/cards/bahamutCard.jpg';
import doubleStrike from '../../assets/images/cards/doubleStrikeCard.jpg';
import tripleStrike from '../../assets/images/cards/tripleStrikeCard.jpg';

export default {
    attack: {name: 'attack',
        address: attack,
        effect: 1,
        ability: function () {
            debugger;
            if ( targetPlayer.cardHeld === 'shield'){
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
        ability: function () {
            currentPlayer.cardHeld = 'shield';
            playerHeldCardEquipped( this.address );
            //play shield equip noise.
        },
        sound: function () {
            audioShield.play();
        }},
    heal: {name: 'heal',
        address: heal,
        effect: 2,//how much it heals
        ability: function () {
            currentPlayer.health += this.effect;
            //heal noise
        },
        sound: function () {
            audioHeal.play();
        }},
    bahamut: {name: 'bahamut',
        address: bahamut,
        effect: 2,
        ability: function(){
            //damage both players.
            for (var i = 0; i < 2; i++){
                totalPlayers[i].health -= this.effect;
            }
            setTimeout(resetDeck, 2000);
            resetPlayerAbilitys();
        },
        sound: function () {
            audioBahamut.play();
        }},
    doubleStrike: {name: 'doubleStrike',
        address: doubleStrike,
        effect: 4,
        ability: function () {
            currentPlayer.cardHeld = 'doubleStrike';
            currentPlayer.currentAttackPower = this.effect;
            playerHeldCardEquipped( this.address );
        },
        sound: function () {
            audioDblStrike.play();
        }},
    tripleStrike: {name: 'tripleStrike',
        address: tripleStrike,
        effect: 6,
        ability: function () {
            currentPlayer.cardHeld = 'tripleStrike';
            currentPlayer.currentAttackPower = this.effect;
            playerHeldCardEquipped( this.address );
        },
        sound: function () {
            audioTriStrike.play();
        }},
};