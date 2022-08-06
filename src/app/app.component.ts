import { Component, ElementRef, ViewChild } from '@angular/core';

declare var require: any;

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wordPad';
  message:string ="";
  count = 0;
  @ViewChild('pdfTable')
  pdfTable!: ElementRef;

  public downloadAsPDF() {
    const pdfTable = this.pdfTable.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download(); 
     
  }


  public addParagraph(event : Event)
  {
    var textAreaMessage = document.querySelector(".txtArea")?.innerHTML ;
   this.message = `${this.message}\r\n`;  
   this.count=0;
   textAreaMessage = this.message;
   console.log(textAreaMessage);
  }

  public addPoints()
  {
    var textAreaMessage = document.querySelector(".txtArea")?.innerHTML ;
   
    this.message = `${this.message}\r\n `+ `${this.count})`;  
    this.count += 1;
    textAreaMessage = this.message;
    console.log(textAreaMessage);
  }

  public clearAll()
  {
    var textAreaMessage = document.querySelector(".txtArea")?.innerHTML ;
    this.message = "";
    this.count=0;
    textAreaMessage = this.message;
    console.log(textAreaMessage);
  }
 

}
