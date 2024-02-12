function Calculadora() {
    this.display = document.querySelector('.display');

    this.iniciar = () => {
        this.btnClique();
        this.pressKey();
    };

    this.btnClique = () => {
        document.addEventListener('click', e => {
            const el = e.target;

            if (el.classList.contains('btn-num')) {
                this.btnDisplay(el.innerText);
            }

            if (el.classList.contains('btn-clear')) {
                this.clearDisplay();
            }

            if (el.classList.contains('btn-del')) {
                this.clearOne();
            }

            if (el.classList.contains('btn-eq')) {
                this.makeCount();
            }

            this.display.focus();
        });
    };

    this.btnDisplay = (valor) => {
        this.display.value += valor;
    };

    this.clearDisplay = () => {
        this.display.value = '';
    };

    this.clearOne = () => {
        this.display.value = this.display.value.slice(0, -1);
    };

    this.pressKey = () => {
        this.display.addEventListener('keyup', event => {

            if (event.code === 'Enter') {
                this.makeCount();
            }
        })
    };

    this.makeCount = () => {
        let conta = eval(this.display.value);

        try {

            if (!conta) {
                alert('Conta inválida!');
                return;
            }

            this.display.value = String(conta);
        } catch {
            alert('Ocorreu um erro!!');
            return;
        }
    };

}

const calculadora = new Calculadora();
calculadora.iniciar();