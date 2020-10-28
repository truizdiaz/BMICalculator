import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  edad = 25;
  peso = 60;
  altura = 170;
  sexo = 'Masculino';

  constructor() { }

  ngOnInit(): void {
  }

  cambiarAltura(event: any): void{
    console.log(event);
    this.altura = event.target.value;
  }

  masculino(): void {
    this.sexo = 'Masculino';
  }

  femenino(): void {
    this.sexo = 'Femenino';
  }

  calcular(): void {
    const BMI = this.peso / Math.pow(this.altura / 100, 2);
    console.log(BMI.toFixed(1));
  }


}
