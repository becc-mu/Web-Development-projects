let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 9);
const getAbsoluteDistance = (a = 0, b = 0) => {
  return Math.abs(a - b);
};
const secretTarget = generateTarget();
const compareGuesses = (user, machine, secretTarget) => {
  if (user < 0 || user > 9) {
    alert("Number is out of range use the '+' or '=' buttons ");
  }
  user = getAbsoluteDistance(user - secretTarget);
  machine = getAbsoluteDistance(machine - secretTarget);

  if (user < machine) {
    //  console.log(`user: ${user} machine: ${machine} secretTarget: ${secretTarget}`)
    // console.log('human')
    return "human";
  } else if (user > machine) {
    // console.log(`user: ${user} machine: ${machine} secretTarget: ${secretTarget}`)
    // console.log('computer')
    return "computer";
  } else {
    console.log(
      `user: ${user} machine: ${machine} secretTarget: ${secretTarget}`
    );
    return console.log("It is a tie");
  }
};

const updateScore = (winner) => {
  switch (winner) {
    case "human":
      humanScore = humanScore += 1;
      console.log("You win: " + humanScore);
      break;
    case "computer":
      computerScore = computerScore += 1;
      console.log("Computer winns: " + computerScore);
      break;
    default:
      "its a tie";
  }
};

const advanceRound = () => (currentRoundNumber = currentRoundNumber += 1);

const winner = compareGuesses(4, 4, generateTarget());
const update = updateScore(winner);
// console.log(`${updateScore(winner)}`)
