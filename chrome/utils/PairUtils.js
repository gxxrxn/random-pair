export default class PairUtils {
  static pickPairsInArray(members, number) {
    const result = [];
    const length = members.length;

    for (let i = 0; i < length; i += 1) {
      const pos = Math.floor(Math.random() * (i + 1));

      const temp = members[i];
      members[i] = members[pos];
      members[pos] = temp;
    }

    for (let i = 0; i < length; i += number) {
      result.push(members.slice(i, i + number));
    }

    return result;
  }
}
