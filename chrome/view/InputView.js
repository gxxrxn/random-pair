export default class InputView {
  constructor(inputEl) {
    this.inputEl = inputEl;
  }

  init() {
    this.inputEl.value = "";
    this.inputEl.focus();
  }

  get value() {
    return this.inputEl.value;
  }
}
