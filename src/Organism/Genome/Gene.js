const CellStates = require("../Cell/CellStates");
/**
 * Concept for static gene data structures.
 * The core idea is that each Genome is a static, immutable data structure.
 * Each organism's species maps one-to-one to a genome.
 * Genome would be used to create new organisms.
 * This has a couple key advantages:
 *  - Decouples much of the "game logic" (location, health, etc) from the "life logic"
 *  - Smaller, simpler data structure which is easier to manipulate
 *  - Easy to de/serialize so logic of editing, copying, and exporting is easier
 *  - More extensible - inspired by ECS principles (Entity Component System)
 */

/** This determines which Gene Interface to use. Helps with deserialization.
 */
const Chromosome = {
    base: 'base',  // Just the default state
    body: 'body',  // Determines anatomy
    brain: 'brain', // Determines behavior
    gamete: 'gamete', // Determines reproduction
}

class Gene {
    /** Base class for all genes. Genes should not mutate during "life", only during reproduction!
     * @param {Chromosome} chromosome - Determines class of gene
     * @param {int} priority - Determines priority of redundant genes. Map/reduce to get the "dominant" gene.
     */
    constructor(chromosome = base, priority = 0) {
        this.chromosome = chromosome;
        this.priority = priority;
    }

    /** Return a mutated copy of this gene, without modifying this one.
     * Subclasses should implement this interface to determine how they choose to mutate.
     */
    mutated(mutationParams) {
        throw new Error("Method 'mutated()' must be implemented.");
    }

    copy() {
        return Object.assign({}, this);
    }
}

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

class BodyGene extends Gene {
    /** Gene for a somatic cell
     * @param {CellStates} state - Cell type
     * @param {int} col - Local column of cell relative to center
     * @param {int} row - Local row of cell
     * @param {int} priority
     */
    constructor(state, col, row, priority = 0) {
        super(Chromosome.body, priority);
        this.state = state;
        this.col = col;
        this.row = row;
    }

    mutated(mutationParams) {
        var new_gene = this.copy();
        // modify the state/row/col as determined by mutationParams
        // Basically this is where you would determine how to modify the various parameters
        // I would just copy this logic from inherit/reproduce
        return new_gene
    }
}

class Genome {
    /** A collection of genes. This uses the "collection of objects" pattern.
     * All genes, regardless of type, are in this array. This makes expressing,
     * copying, mapping, filtering, adding, subtracting, and mutating a genome easy.
     * @param {Array.<Gene>} genes
     */
    constructor(genes) {
        this.genes = genes;
        // this could also just be the hash of `genes`
        this.name = '_' + Math.random().toString(36).substr(2, 9);

    }

}

/** Create the genome of the original organism.
 * @returns {Genome}
 */
Genome.original = () => {
    return new Genome([
        new BodyGene(CellStates.mouth, 0, 0),
        new BodyGene(CellStates.producer, 1, 1),
        new BodyGene(CellStates.producer, -1, -1),
        new MutabilityGene(),
    ]);
}

module.exports = {
    Chromosome: Chromosome,
    Gene: Gene,
    Genome: Genome,
}

