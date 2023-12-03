let userName = 'Audrey';

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

let userQuestion = 'Will today be lucky for me?';

console.log(`Magic 8 Ball, ${userQuestion}`); 

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber) {
    case 'randomNumber':
        console.log('');
        break;
    case 0:
        eightBall = 'It is certain.';
        break;
    case 1:
        eightBall = 'It is decidedly so';
        break;
    case 2:
        eightBall = 'Maybe';
        break;
    case 3:
        eightBall = 'Cannot predict now';
        break;
    case 4:
        eightBall = 'Do not count on it';
        break;
    case 5:
        eightBall = 'My sources say no';
        break;
    case 6:
        eightBall = 'Outlook not so good';
        break;
    case 7:
        eightBall = 'Signs point to yes';
        break;
    default:
        console.log('Please try again');

}

console.log(eightBall);
