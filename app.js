new Vue({
    el: '#app',
    data: {
        isOn: false,
        monsterLife: 100,
        humanLife: 100,
        attacks: [],
        mana: 5,
        super: 3
    },
    watch: {
        monsterLife: function () {
            if (this.monsterLife == 0) {
                alert("Parabéns! Você ganhou a luta!");
                this.isOn = false;
            }
        },
        humanLife: function () {
            if (this.humanLife == 0) {
                alert("Você perdeu a luta contra o monstro! Tente novamente!");
                this.isOn = false;
            }
        }

    },
    methods: {
        normalAttack: function () {
            let hAttack, mAttack;
            if (this.isOn) {
                if (this.monsterLife > 0) {
                    hAttack = Math.floor((Math.random() * (5)));
                    this.monsterLife -= hAttack;
                } else
                    this.monsterLife = 0;

                if (this.humanLife > 0) {
                    mAttack = Math.floor((Math.random() * (5)));
                    this.humanLife -= mAttack;
                } else
                    this.humanLife = 0;
                this.attacks.push(hAttack);
                this.attacks.push(mAttack);

                if (this.mana < 5) {
                    this.mana++
                }
                if (this.super < 3) {
                    this.super++;
                }
            }

        },
        specialAttack: function () {
            let hAttack, mAttack;
            if (this.monsterLife > 0) {
                
                if (this.super > 0) {
                    hAttack = Math.floor((Math.random() * (25)));
                    this.monsterLife -= hAttack;
                    mAttack = Math.floor((Math.random() * (5)));
                    this.humanLife -= mAttack;
                    this.super--;
                }
                else {
                    this.super = 0;
                    alert("Você zerou seus ataques críticos! Ataque normal para recarregar o ataque crítico!");
                }
            } else
                this.monsterLife = 0;

            this.attacks.push(hAttack);
            this.attacks.push(mAttack);
        },
        heal: function () {
            let hHeal, mAttack;
            if (this.isOn && this.humanLife < 100) {

                if (this.mana > 0) {
                    hHeal = Math.floor((100 - this.humanLife) * 0.5);
                    this.humanLife += hHeal;
                    mAttack = Math.floor((Math.random() * 5));
                    this.humanLife -= mAttack;
                    this.mana -= 1;
                    
                }
                else {
                    this.mana = 0;
                    alert("Você zerou sua mana! Ataque o monstro para carregar!")
                }
            }
        },
        startGame: function () {
            this.isOn = !this.isOn;
            this.monsterLife = 100;
            this.humanLife = 100;
        }
    }
});