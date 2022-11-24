import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl,FormGroup } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';
import { ActivatedRoute } from '@angular/router';
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

  @ViewChild(MatTabGroup) matTabGroup: MatTabGroup;

  public updatePagination() {
    setTimeout(() => {
      if (this.matTabGroup) {
        this.matTabGroup._tabHeader._alignInkBarToSelectedTab();
      }
    }, 1);
    }


  numeroMesa:number
  mesaDisabled!:boolean
  platos: Array<string>=[]

  constructor(private comandasService:ComandasService,private toastr: ToastrService,private _Activatedroute:ActivatedRoute) { 
    this.numeroMesa=Number(this._Activatedroute.snapshot.paramMap.get("mesa"))
   this.platos=[]

  }

  ngOnInit(): void {

 
  }

  addComanda(){

    if(this.platos.length==0){
      this.toastr.error('Error', 'Debe incluir algun plato en la comanda');
      return;
    }

        this.com.platos = this.platos
    this.com.mesa = this.numeroMesa

    this.comandasService.addComanda(this.com).subscribe({next:data=>{
    
    },error:error=>{
      console.log("error",error)
    },complete:()=>{

      this.platos=[]
      this.mesaDisabled=false
      this.com = new Comanda()

    }});


  }

  addPlato(plato:string){

      this.platos.push(plato)
      this.mesaDisabled=true

  }

}
