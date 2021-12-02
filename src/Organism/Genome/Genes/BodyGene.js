const Directions = require('../../Directions')
const Chromosome = require('../Chromosome')
const Gene = require('../Gene')


const DefaultRandom = Math.random;


class BodyGene extends Gene {
    /** Gene for a somatic cell.
     * BodyGenes are considered alleles if they code for the same location.
     * Priority determines which are dominant or recessive. This is a deliberately simplified system.
     * If this is not a desired feature, then during mutation, generate a cell regardless, then reduce
     * redundant genes in the genome.
     * For simplicity, all body cells have a direction, even if they don't use it.
     * This has the interesting feature that if a direction-aware cell mutates to a direction-naive
     * cell, and back again, it could potentially retain the same orientation.
     * @param {CellStates} state - Cell type
     * @param {int} col - Local column of cell relative to center
     * @param {int} row - Local row of cell
     * @param {Directions} direction - Direction cell is pointing
     * @param {int} priority - Allele priority
     */
    constructor(state, col, row, direction = Directions.up, priority = 0) {
        super(Chromosome.body, priority);
        this.state = state;
        this.direction = direction;
        this.col = col;
        this.row = row;
    }

    /** Produce a new, possibly mutated, copy of this gene.
     * The randomization function can be provided in order to mock behavior for unit testing.
     * @param {MutationParams} mutationParams - controls mutation behavior
     * @param {Loc} spawnPoint - Sets the point to bud off from
     * @param {function} random - Randomness function. A Nullary Callable which returns [0,1)
     * @returns {Gene}
     */
    mutated(mutationParams, spawnPoint = {row: 0, col: 0}, random = DefaultRandom) {
        if (random() <= mutationParams.mutateGeneProb) {
            // modify the state/row/col as determined by mutationParams
            // Basically this is where you would determine how to modify the various parameters
            var state = CellStates.getRandomLivingType();
            var growth_direction = Neighbors.all[Math.floor(random() * Neighbors.all.length)]
            var col = spawnPoint.col + growth_direction[0];
            var row = spawnPoint.row + growth_direction[1];
            var direction = Directions[Math.floor(random() * 4)]
            return new BodyGene(state, col, row, direction)
        } else {
            return this.copy();
        }
    }
}

module.exports = BodyGene;
