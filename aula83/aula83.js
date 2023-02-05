class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume() {
        this.volume += 2;
    }
    // Método de instância
    diminuirVolume() {
        this.volume -= 2;
    }
    // Método estático
    static soma(x, y) {
        console.log(this) // [class ControleRemoto]
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);

ControleRemoto.soma();