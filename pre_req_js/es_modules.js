// Import user for user.js
// './filename' relative path
// './filename' absolute path
import User, { printName, printAge as pa } from './user.js';

// Create and user
const u1 = new User("BOB", 35);
console.log(u1);
printName(u1);
pa(u1);