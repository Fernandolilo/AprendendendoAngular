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

  public checkedDisabled: boolean =  true;
  public imgSrc: string = "https://www.google.com/search?q=site+de+imagens+png+gratis+ANGULAR&tbm=isch&ved=2ahUKEwjRjOax57_6AhUhNLkGHYreA5gQ2-cCegQIABAA&oq=site+de+imagens+png+gratis+ANGULAR&gs_lcp=CgNpbWcQAzoECCMQJzoECAAQHlCvA1idNWCNN2gAcAB4AIABdIgBjweSAQM0LjWYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=rZo4Y5GCPaHo5OUPir2PwAk&bih=693&biw=1517&hl=en#imgrc=TyepCGQ2x6dEvM";
  constructor() { }

  ngOnInit(): void {
  }

}
