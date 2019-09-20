class FormCheck {
  constructor() {
    (this.formEl = document.getElementById('form')), this.eListener();
  }

  checkEmail(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  }

  checkName(name) {
    const regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
    return regex.test(name);
  }

  checkPhone(phone) {
    const regex = /^\+?3?8?(0\d{9})$/;
    return regex.test(phone);
  }

  handleSubmit(e) {
    e.preventDefault();
    const checkName = this.checkName,
      checkEmail = this.checkEmail,
      checkPhone = this.checkPhone;

    const nameValue = document.getElementById('name').value,
      phoneValue = document.getElementById('phone').value,
      emailValue = document.getElementById('email').value;

    if (
      checkName(nameValue) &&
      checkEmail(emailValue) &&
      checkPhone(phoneValue)
    ) {
      alert('All right!');
      location.reload();
    } else if (!checkName(nameValue)) {
      alert('Incorrect name!');
      return null;
    } else if (!checkEmail(emailValue)) {
      alert('Incorrect email!');
      return null;
    } else if (!checkPhone(phoneValue)) {
      alert('Incorrect phone!');
      return null;
    } else {
      alert('ERROR!');
      location.reload();
    }
  }

  eListener() {
    const $this = this;
    this.formEl.addEventListener('submit', this.handleSubmit.bind($this));
    console.log('ok');
  }
}

new FormCheck();
