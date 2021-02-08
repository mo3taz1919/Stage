import { Classe } from "./classe";
import { Enseignant } from "./enseignant";

export class Matiere {

  constructor( 
  private  description :String,
  private classe: Classe,
  private enseignant: Enseignant

  ){

  }


}
