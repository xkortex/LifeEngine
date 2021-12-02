const Chromosome = require('../Chromosome')
const Gene = require('../Gene')

class MutabilityGene extends Gene {
    /** A gene which expresses
     * @param mutability - relative mutation rate
     * @param priority
     */
    constructor(mutability = 5, priority = 0) {
        super(Chromosome.gamete, priority);
        this.mutability = mutability;
    }
}

module.exports = MutabilityGene;