import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import{EditUserComponent} from '../edit-user/edit-user.component'
import { CrudService } from '../../../service/crud.service';
import { AddUserComponent } from '../add-user/add-user.component';
import { jsPDF } from "jspdf";
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['id','nom', 'prenom','sexe','cin','tel','adresse','mail', 'actions'];
   sort: MatSort;
  searchKey: string;
  public data = [];
  dataSource= new MatTableDataSource(this.data);
  @ViewChild(MatPaginator) paginator:MatPaginator;
  readonly apiUrl= ' http://localhost:8089/User';


  constructor(private CrudService:CrudService,
    private matDialog:MatDialog,private matDialog2:MatDialog ) { 
      this.matDialog.afterAllClosed.subscribe(result => {
        this.refershuserist();
      });
      this.matDialog2.afterAllClosed.subscribe(result => {
        this.refershuserist();
      });
    }

  ngOnInit() {
    this.refershuserist();
    this.matDialog.afterAllClosed.subscribe(result => {
      this.refershuserist();
    });
    this.matDialog2.afterAllClosed.subscribe(result => {
      this.refershuserist();
    });
    this.CrudService.getList(this.apiUrl).subscribe(res => {
      // Use MatTableDataSource for paginator
      this.listData = new MatTableDataSource(res);
                            
      // Assign the paginator *after* dataSource is set
      this.listData.paginator = this.paginator;
    });
    
  }
  refershuserist(){
    this.CrudService.getList(this.apiUrl).subscribe((results) =>  {
      this.data = results;
      this.listData = new MatTableDataSource(this.data);
      console.log("data =" + JSON.stringify(results));
      console.log("nb "+this.data.length);
    })
    
  }
  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }
   getList(){
    return this.CrudService.getList(this.apiUrl).subscribe(result => {this.data=result,console.log("data =",this.data);});
   }
   getList2(){
    return this.CrudService.getList(this.apiUrl).subscribe(
      result => {this.data=result,  
          this.listData = new MatTableDataSource(this.data),
        console.log("data =",this.data);});
   }
   onCreate(){
    const DialogConfig = new MatDialogConfig();
    DialogConfig.autoFocus=true;
    DialogConfig.width="40%";
    this.matDialog.open(AddUserComponent,DialogConfig);
    this.matDialog.afterAllClosed.subscribe(result => {
    });
  }
  onEdit(row){

    const DialogConfig = new MatDialogConfig();
    DialogConfig.autoFocus=true;
    DialogConfig.width="40%";
    DialogConfig.data=row;
    this.matDialog.open(EditUserComponent,DialogConfig); 
    this.matDialog.afterAllClosed.subscribe(result => {
      this.refershuserist();
    });
    
  }
downloadPDF(){
const doc =new jsPDF();
doc.text (JSON.stringify(this.data),18,18);
doc.save ('fff.pdf');
}
  onDelete(id){
    this.CrudService.delete(this.apiUrl,id)
      .subscribe(
        data => {
          console.log(data);
          this.refershuserist();
        },
        error => console.log(error));
    }

  
}