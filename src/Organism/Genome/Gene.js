const MutationParams = require("./MutationParams");
const CellKinds = require("../Cell/CellKinds");
const CellStates = require("../Cell/CellStates");
const Directions = require("../Directions");
const Chromosome = require("./Chromosome");

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


class Loc {
    constructor(col, row) {
        this.col = col;
        this.row = row;
    }

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


module.exports = Gene;

