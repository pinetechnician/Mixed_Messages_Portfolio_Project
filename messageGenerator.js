const barkley = {
    name: 'Charles Barkley', 
    nickname: 'Chuck',
    height: '6\'6\"', 
    position: 'forward', 
    age: '60', 
    quotes: ['These are my new shoes. They\'re good shoes. They won\'t make you rich like me, they won\'t make you rebound like me, they definitely won\'t make you handsome like me. They\'ll only make you have shoes like me. That\'s it.', 
    'I\'m not a role model... Just because I dunk a basketball doesn\'t mean I should raise your kids.', 
    'You can\'t sit on the sidelines of life.']
}

const shaq = {
    name: 'Shaquille O\'Neal',
    nickname: 'Shaq',
    height: '7\'1\"',
    position: 'center',
    age: '51',
    quotes: ['If I were a painter, you\’d be calling me Shaqcasso.',
    'I am Superman. And the only thing that can kill Superman is Kryptonite. And Kryptonite doesn\’t exist.',
    'Some things you just can\’t question. Like you can\’t question why two plus two is four. So don\’t question it, don\’t try to look it up. I don\’t know who made it, all I know is it was put in my head that two plus two is four. So certain things happen. Why does it rain? Why am I so sexy? I don\’t know.']
}

const kenny = {
    name: 'Kenny Smith',
    nickname: 'Jet',
    height: '6\'3\"',
    position: 'point guard',
    age: '58',
    quotes: ['We win together as a team, and we lose together as a team.', 
    'My high school coach used to tell me there\'s no correct way to shoot, that the only correct way was to get the ball into the basket.',
    'You like to be part of a championship, but you always want to be an integral part.']
}

const ernie = {
    name: 'Ernie Johnson Jr.',
    nickname: 'Ernie',
    height: '6\'1\"',
    position: 'sportscaster',
    age: '67',
    quotes: ['You may hate the pilot but you don\'t want the plane to crash.', 
    'If you focus your thoughts on what you do have and not what you don\'t have you will always be grateful.',
    'I\'m the TV guy trying to get us from point A to point B to point C.']
}

const randomizer = num =>  Math.floor(Math.random() * num);

const hosts = [barkley, shaq, kenny, ernie];
const selectedHost = hosts[randomizer(hosts.length)];
const bio = `Also known as ${selectedHost.nickname}, he is a ${selectedHost.height} ${selectedHost.position} and he is ${selectedHost.age} years old.`;
const chosenQuote = selectedHost.quotes[randomizer(selectedHost.quotes.length)];

console.log('\nWelcome to Inside the NBA on TNT!\n-----------------------------------------------------');
console.log(`Meet one of the hosts, ${selectedHost.name}!\n-----------------------------------------------------\n${bio}\n-----------------------------------------------------`);
console.log(`${selectedHost.nickname} says: ${chosenQuote}`);


