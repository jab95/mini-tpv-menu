import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl,FormGroup } from '@angular/forms';
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

  constructor(private comandasService:ComandasService,formBuilder: FormBuilder) { 
   
  }

  ngOnInit(): void {

 
  }

  addComanda(){


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

    this.platos.push(plato)
    this.mesaDisabled=true

  }

}
