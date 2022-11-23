import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl,FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Comanda } from '../models/Comanda';
import { ComandasService } from '../services/comandas.service';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {
 
  com = new Comanda()

  @ViewChild("mesa") mesa: ElementRef;


  mesaDisabled!:boolean
  platos: Array<string>=[]

  constructor(private comandasService:ComandasService,private toastr: ToastrService) { 
   
  }

  ngOnInit(): void {

 
  }

  addComanda(){

    if(this.platos.length==0){
      this.toastr.error('Error', 'Debe incluir algun plato en la comanda');
      return;
    }

        this.com.platos = this.platos
    this.com.mesa = this.mesa.nativeElement.value

    this.comandasService.addComanda(this.com).subscribe({next:data=>{
    
    },error:error=>{
      console.log("error",error)
    },complete:()=>{

      this.platos=[]
      this.mesa.nativeElement.value=""
      this.mesaDisabled=false
      this.com = new Comanda()

    }});


  }

  addPlato(plato:string){

    if(this.mesa.nativeElement.value=="" || this.mesa.nativeElement.value==null ){
        this.toastr.error('Error', 'Indique una mesa primero');    }else{
      this.platos.push(plato)
      this.mesaDisabled=true
      }

  }

}
