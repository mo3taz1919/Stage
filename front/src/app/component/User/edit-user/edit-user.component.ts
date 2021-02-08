import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CrudService } from '.././../../service/crud.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  
  angForm: FormGroup;
  readonly apiUrl= ' http://localhost:8089/User';


  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditUserComponent>,
    private CrudService:CrudService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.createForm();
     }
     
     createForm() {
      this.angForm = this.fb.group({
        id: ['',],
        nom: ['', Validators.required],
        prenom: ['', Validators.required],
        sexe: ['', Validators.required],
        cin: ['', Validators.required],
        mail: ['', Validators.required],
        adresse: ['', Validators.required],
        tel: ['', Validators.required],


      });
      this.angForm.setValue({
        id :this.data.id,
        nom :this.data.nom,
        prenom :this.data.prenom,
        sexe :this.data.sexe,
        cin:this.data.cin,
        mail:this.data.mail,
        adresse:this.data.adresse,

        tel:this.data.tel,
      
       
    });
    }

    onClose(){
      console.log("close");
        this.dialogRef.close();
     }
  
 
            edit(angForm){
            this.CrudService.edit(this.apiUrl,angForm.value).subscribe(
              res =>console.log("res"+res)
            );
          }


 

    
  ngOnInit() {
    console.log(this.data);
  }

}
