import { DOM_ID } from "../constants.js";
import {
  createMemberTemplate,
  createSinglePairTemplate,
  createPairTemplate,
  getMemberDescription,
} from "../utils/helpers.js";

import PairUtils from "../utils/PairUtils.js";

export default class Controller {
  constructor(inputView, memberView, pairView, model) {
    this.inputView = inputView;
    this.memberView = memberView;
    this.pairView = pairView;
    this.model = model;

    this.submitButton = document.getElementById(DOM_ID.SUBMIT);
    this.generateButton = document.getElementById(DOM_ID.GENERATE);

    this.submitButton.addEventListener(
      "click",
      this.submitMemberHandler.bind(this)
    );
    this.generateButton.addEventListener(
      "click",
      this.generatePairHandler.bind(this)
    );
  }

  submitMemberHandler(event) {
    event.preventDefault();

    const name = this.inputView.value.trim();

    if (!name) return;
    if (!this.model.addMember(name)) return;

    this.updateMemberView(name);
    this.inputView.init();
  }

  generatePairHandler(event) {
    event.preventDefault();

    const number = 2;
    const pairResult = PairUtils.pickPairsInArray(this.model.members, number);

    let pairTemplate = "";
    pairResult.forEach((pairs) => {
      pairTemplate +=
        pairs.length === number
          ? createPairTemplate(...pairs)
          : createSinglePairTemplate(pairs[0]);
    });
    this.pairView.render(pairTemplate);
  }

  updateMemberView(name) {
    this.memberView.renderList(createMemberTemplate(name));
    this.memberView.renderDescription(
      getMemberDescription(this.model.memberNumber)
    );
  }
}
