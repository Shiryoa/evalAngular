export class Statistique {
    public id: string;
    public titre: string;
    public valeur: string;

    constructor(id: string, titre: string, valeur: string) {
        this.id = id;
        this.titre = titre;
        this.valeur = valeur;
    }
}