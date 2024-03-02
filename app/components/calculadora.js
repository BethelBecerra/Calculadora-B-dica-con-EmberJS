import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking'
import { action } from '@ember/object';

export default class CalculadoraComponent extends Component {
    @tracked numero1 = 0;
    @tracked numero2 = 0;
    @tracked total = 0;
     //@tracked count = 0;
    //@tracked multiple = 1;
    //@tracked suma = 0;


    @action
    updateNumero1(event) {
      // Convertimos el valor a número y lo asignamos al numero 1
      this.numero1 = parseFloat(event.target.value);
    }
  
    // Acción para actualizar el operando 2
    @action
    updateNumero2(event) {
      // Convertimos el valor a número y lo asignamos al numero 2
      this.numero2 = parseFloat(event.target.value);
    }
  
    // Acción para realizar la suma
    @action
    sum() {
      this.total = this.numero1 + this.numero2;
    }
  
    // Acción para realizar la resta
    @action
    subtract() {
      this.total = this.numero1 - this.numero2;
    }
  
    // Acción para realizar la multiplicación
    @action
    multiply() {
      this.total = this.numero1 * this.numero2;
    }
  
    // Acción para realizar la división
    @action
    divide() {
      // Verificamos si numero2 no es cero antes de realizar la división
      if (this.numero2 !== 0) {
        this.total = this.numero1 / this.numero2;
      } else {
        // Mostramos una alerta en caso de división por cero
        alert('0');
      }
    }
    @action
    appendNumber(number) {
      // Concatenar el número al operando actual
      this.numero1 = `${this.numero1}${number}`;
    }
  
    @action
    clearInput() {
      // Lógica para limpiar la entrada 
      this.numero1 = '';
      this.numero2 = '';
      this.total = 0;
    }
}