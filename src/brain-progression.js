import readlineSync from 'readline-sync';

const generateGeometricProgression = () => {
  const progression = [];
  const start = Math.floor(Math.random() * 5) + 2;
  const ratio = Math.floor(Math.random() * 3) + 2;
  const hiddenIndex = Math.floor(Math.random() * 10) + 1;

  for (let i = 0; i < 10; i += 1) {
    if (i === hiddenIndex) {
      progression.push('..');
    } else {
      progression.push(start * (ratio ** i));
    }
  }

  return { progression, hiddenNumber: start * (ratio ** hiddenIndex) };
};

const game = () => {
  console.log('brain-proggression');
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the geometric progression?');

  const rounds = 3;

  for (let i = 0; i < rounds; i += 1) {
    const { progression, hiddenNumber } = generateGeometricProgression();

    console.log('Question:', progression.join(' '));
    const userAnswer = Number(readlineSync.question('Your answer: '));

    if (userAnswer === hiddenNumber) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${hiddenNumber}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default game;
