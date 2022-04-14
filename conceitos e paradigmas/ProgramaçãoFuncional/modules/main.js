import User, { printName, printAge} from './user.js'

const user = new User("bob", 12);

console.log(user);
printName(user);
printAge(user);