class MutationParams {
    /**
     * Defines the parameters which control how mutation operates.
     * This is provided as a singe data structure, rather than separate parameter functions,
     * because it makes it easy to propagate recursively through calls to .mutate().
     * A dedicated data structure is superior to global Hyperparameters, since it makes
     * it much easier to write unit tests.
     *
     * tbd: how to handle mutateGeneProb, does this apply per-gene or per-genome?
     * @param {int} minCol - Lower bound on column where cells can spawn
     * @param {int} maxCol - Upper bound on column where cells can spawn
     * @param {int} minRow - Lower bound on row where cells can spawn
     * @param {int} maxRow - Upper bound on column where cells can spawn
     * @param addGeneProb - Probability of adding a gene to the genome
     * @param removeGeneProb - Probability of deleting a gene from the genome
     * @param mutateGeneProb - Probability of mutating a gene
     */
    constructor(minCol = -1,
                maxCol = 1,
                minRow = -1,
                maxRow = 1,
                addGeneProb = 0.33,
                removeGeneProb = 0.33,
                mutateGeneProb = 0.33) {
        Object.assign(this, {minCol, maxCol, minRow, maxRow, addGeneProb, removeGeneProb, mutateGeneProb});
    }

}
