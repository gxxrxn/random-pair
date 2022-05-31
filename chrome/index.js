import { DOM_ID } from "./constants.js";

import Model from "./model/Model.js";
import InputView from "./view/InputView.js";
import MemberView from "./view/MemberView.js";
import PairView from "./view/PairView.js";
import Controller from "./controller/Controller.js";

const inputElement = document.getElementById(DOM_ID.INPUT);
const memberDescription = document.getElementById(DOM_ID.MEMBERS.DESC);
const memberList = document.getElementById(DOM_ID.MEMBERS.LIST);
const pairList = document.getElementById(DOM_ID.PAIR_LIST);

const model = new Model();
const inputView = new InputView(inputElement);
const memberView = new MemberView(memberDescription, memberList);
const pairView = new PairView(pairList);
const controller = new Controller(inputView, memberView, pairView, model);
