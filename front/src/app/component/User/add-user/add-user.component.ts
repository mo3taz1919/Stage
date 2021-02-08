import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CrudService } from '.././../../service/crud.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  angForm: FormGroup;
  readonly apiUrl= ' http://localhost:8089/User';


  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddUserComponent>,
    private CrudService:CrudService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.createForm();
     }
    
     
  createForm() {
  this.angForm = this.fb.group({
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
    sexe: ['', Validators.required],
    cin: ['', Validators.required],
    mail: ['', Validators.required],
    adresse: ['', Validators.required],
    tel: ['', Validators.required],
  });
 /*  this.angForm.setValue({
    nom :this.data.nom,
    prenom :this.data.prenom,
    sexe :this.data.sexe,
    cin:this.data.cin,
    mail:this.data.mail,
    adresse:this.data.adresse,

    tel:this.data.tel,
  }); */
}

onClose() {
  console.log("close");
  this.dialogRef.close();
}

add(angForm) {
  this.CrudService.add(this.apiUrl, angForm.value).subscribe(
    res => console.log("res" + res)
  );
  this.onClose();
}

ngOnInit() {
  console.log(this.data);
}
}




  
