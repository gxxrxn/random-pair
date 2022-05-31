export default class Model {
  #members;

  constructor() {
    this.#members = new Set();
  }

  addMember(name) {
    const pre = this.memberNumber;
    this.#members.add(name);
    return pre !== this.memberNumber;
  }

  get members() {
    return [...this.#members];
  }

  get memberNumber() {
    return this.#members.size;
  }
}
