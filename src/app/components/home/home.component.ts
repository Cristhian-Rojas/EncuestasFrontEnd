import { HomeServiceService } from './../../services/home-service.service';
import { Polls } from './../../models/polls.model';
import { Brand } from './../../models/brands.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  lstBrands: Brand[] = [];
  gmail: any = localStorage.getItem('email');
  idUser?: number;

  getid(){
    this.homeService.getId(this.gmail).subscribe(
      y => { this.idUser = y ;
        this.objForm = {
        user: {id: y},
        comments: "",
        favoritebrand: -1
      }}
    );
  }


  objForm: Polls = {
    user: {id: this.idUser},
    comments: "",
    favoritebrand: -1,
  }



  constructor(private homeService: HomeServiceService) {

    this.homeService.listBrands().subscribe(
      x => {
        this.lstBrands = x;
      }

    );


  }
    registra(){
      this.homeService.registraForm(this.objForm).subscribe(

        x => {alert("Registro exitoso")  }
      );
       this.limpiar();

    }

    limpiar(){
      this.objForm = {
        user: {id: this.idUser},
        comments: "",
        favoritebrand: -1
      }
    }

  ngOnInit(): void {
    this.getid();
  }

}


