import readlineSync from 'readline-sync';

const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGcd(b, a % b);
};

const getLcm = (a, b) => (a * b) / getGcd(a, b);

const game = () => {
  console.log('brain-scm');
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the smallest common multiple of given numbers.');

  const rounds = 3;

  for (let i = 0; i < rounds; i += 1) {
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * 20) + 1;
    const num3 = Math.floor(Math.random() * 20) + 1;
    const lcm = getLcm(getLcm(num1, num2), num3);

    console.log(`Question: ${num1} ${num2} ${num3}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));

    if (userAnswer === lcm) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${lcm}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default game;
