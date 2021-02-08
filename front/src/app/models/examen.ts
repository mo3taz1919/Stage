import { Classe } from "./classe";
import { Matiere } from "./matiere";
import { Trimestre } from "./trimestre";

export class Examen {

  constructor(
    private  Type: String,
    private  Hdebut:String,
    private  Hfin:String,
    private  DateDev :Date,
    private  Classes :Classe,
    private  Trimestre: Trimestre,
    private  Matiere: Matiere,
    ){

    }
}
