/**
 * Determines the winner between Pete and Phil based on their scores.
 *
 * @param x - An array of tuples where each tuple contains an object with properties `P1` and `P2` representing the scores of Pete and Phil respectively, and a boolean value.
 * @returns A string indicating the winner ("Pete Wins!", "Phil Wins!", or "Draw!").
 */
export function shoot(x: [{P1: string; P2: string}, boolean][]) {
  let p1Score = 0;
  let p2Score = 0;
  for (let item of x) {
    let [p1, p2] = calculateScore(item);
    p1Score += p1;
    p2Score += p2;
  }
  if (p1Score > p2Score) {
    return "Pete Wins!";
  } else if (p2Score > p1Score) {
    return "Phil Wins!";
  } else {
    return "Draw!";
  }
}

/**
 * Counts the number of occurrences of the character 'X' in a given string.
 *
 * @param str - The string to be searched.
 * @returns The number of 'X' characters found in the string.
 */
function countX(str: string) {
  return str.split("").filter((char) => char === "X").length;
}

/**
 * Calculates the score for two players based on the provided item.
 *
 * @param item - An array where the first element is an object containing the scores for P1 and P2 as strings,
 *               and the second element is a boolean indicating whether to double the scores.
 * @returns A tuple containing the scores for P1 and P2. If the boolean is true, the scores are doubled.
 */
function calculateScore(item: [{P1: string; P2: string}, boolean]) {
  let p1Score = countX(item[0].P1);
  let p2Score = countX(item[0].P2);
  if (item[1]) {
    return [p1Score * 2, p2Score * 2];
  }
  return [p1Score, p2Score];
}
