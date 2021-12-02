/** This enum determines which Gene Interface to use. Helps with deserialization.
 */
const Chromosome = {
    base: 'base',  // Just the default state
    body: 'body',  // Determines anatomy
    brain: 'brain', // Determines behavior
    gamete: 'gamete', // Determines reproduction
}

module.exports = Chromosome;
