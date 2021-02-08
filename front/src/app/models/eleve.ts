import { Classe } from './classe';

export class Eleve {
   
    constructor( 
      
        private  nomEleve:String,
        private  prenomEleve:String,
        private  sexe:String,
        private  nomParent:String, 
        private  prenomParent:String,
        private  telParent:String,
        private  mailParent:String,
        private  dateNaiss:Date,
        private  lieuNaissaince:String,
   

        private classe: Classe


        ) {
    }
}