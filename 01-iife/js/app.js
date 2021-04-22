// Your starting point, enjoy the ride!

// Declare variable to hold the name
const myName = 'JavaScript';

// Declare variable to hold the greeting
const greeting = formatGreeting(myName);

// Set greeting line in DOM to the greeting
document.getElementById('greeting').textContent = greeting;

/**
 * Creates a greeting line for a given name
 *
 * @param {string} name
 * @returns {string} Greeting for provided name.
 */
function formatGreeting(name = 'World') {
  return `Hello ${name}!`;
}
