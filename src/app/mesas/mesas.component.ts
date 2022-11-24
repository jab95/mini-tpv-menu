import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.css']
})
export class MesasComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  comandaMesa(mesa:string){
    this.router.navigate(['menu',mesa])
   
  }

}
