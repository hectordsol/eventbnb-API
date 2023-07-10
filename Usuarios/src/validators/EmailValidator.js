 class EmailValidator {
    #email;
    constructor(email) {
      this.#email = email;
    }
  
    validate() {
      let msg = '';
      if (typeof this.#email !== 'string' || !this.#email) msg = 'Email inválido!';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.#email)) msg = 'Formato de email incorrecto!';
      if (/\s/.test(this.#email)) msg = 'Formato de email incorrecto!';
  
      return msg;
    }
  }
  module.exports = {EmailValidator};