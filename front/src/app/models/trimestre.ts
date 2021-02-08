import { annScolaire } from "./annScolaire";

export class Trimestre {
  constructor(
    private  libelle :String,
    private  dateDebut:Date,
    private  dateFin:Date,
    private annScolaire :annScolaire
    ){

    }
}
