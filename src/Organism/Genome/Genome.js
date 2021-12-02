const MutationParams = require("./MutationParams");
const CellKinds = require("../Cell/CellKinds");
const Gene = require("./Gene");
const BodyGene = require("./Genes/BodyGene");
const MutabilityGene = require("./Genes/MutabilityGene");

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
        new BodyGene(CellKinds.mouth, 0, 0),
        new BodyGene(CellKinds.producer, 1, 1),
        new BodyGene(CellKinds.producer, -1, -1),
        new MutabilityGene(),
    ]);
}

module.exports = Genome;
