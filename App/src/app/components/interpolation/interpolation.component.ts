import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  public nome: String = "Fernando";
  public idade: number = 35;
  public sexo: String = "M"
  constructor() { }

  ngOnInit(): void {
  }

}
