export default class PairView {
  constructor(pairList) {
    this.pairList = pairList;
  }

  render(template) {
    this.pairList.innerHTML = template;
  }
}
