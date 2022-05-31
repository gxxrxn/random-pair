export default class MemberView {
  constructor(descriptionEl, listEl) {
    this.descriptionEl = descriptionEl;
    this.listEl = listEl;
  }

  renderList(template) {
    this.listEl.innerHTML += template;
  }

  renderDescription(template) {
    this.descriptionEl.innerHTML = template;
  }
}
