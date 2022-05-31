const getMemberDescription = (number) =>
  `총 ${number}명이 페어 프로그래밍에 참여합니다.`;
const createMemberTemplate = (name) => `<li class="member">${name}</li>`;
const createPairTemplate = (pair1, pair2) =>
  `<div id="pair">
    <li class="member">${pair1}</li>
    <span>💻</span>
    <li class="member">${pair2}</li>
  </div>`;
const createSinglePairTemplate = (pair) => `<div id="pair">
    <li class="member">${pair}</li>
  </div>`;
export {
  getMemberDescription,
  createMemberTemplate,
  createSinglePairTemplate,
  createPairTemplate,
};
