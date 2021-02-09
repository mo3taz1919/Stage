import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CrudService } from '../service/crud.service';

import * as jsPDF from 'jspdf'; 
import 'jspdf-autotable';

@Component({
  selector: 'app-contrat-stage',
  templateUrl: './contrat-stage.component.html',
  styleUrls: ['./contrat-stage.component.scss']
})
export class ContratStageComponent  {
  @ViewChild('htmlData') htmlData:ElementRef;
public data =[];
  readonly apiUrl = ' http://localhost:8089/User';

  constructor (private CrudService: CrudService){
    this.getList();
  }

  public openPDF():void {
    let DATA = this.htmlData.nativeElement;
    let doc = new jsPDF('p','pt', 'a4');
    doc.fromHTML(DATA.innerHTML,15,15);
    doc.output('dataurlnewwindow');
  }
  getList(){
    return this.CrudService.getList(this.apiUrl).subscribe(result => {this.data=result,console.log("data =",this.data);});
   }

  public downloadPDF():void {
    let DATA = this.htmlData.nativeElement;
    let doc = new jsPDF('p','pt', 'a4');

    let handleElement = {
      '#editor':function(element,renderer){
        return true;
      }
    };
    doc.fromHTML(DATA.innerHTML,15,15,{
      'width': 200,
      'elementHandlers': handleElement
    });

    doc.save('contrat-demo.pdf');
  }

}
