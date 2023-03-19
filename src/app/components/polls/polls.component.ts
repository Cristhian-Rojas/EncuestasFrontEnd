
import { Polls } from './../../models/polls.model';
import { PollServiecService } from './../../services/poll-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.css']
})
export class PollsComponent {

    polls: Polls []=[];

    poll:Polls ={
      id: 0,
      nmdocumento: "",
      emailpoll: "",
      comments: "",
      favoritebrand: 0,
      user: {},
      datetime: new Date()
    };

  constructor(private pollService: PollServiecService) {


   }

   consulta(){
      this.pollService.listPolls().subscribe(
        x => this.polls = x
      );
   }


   elimina(obj:Polls){
      this.pollService.elimina(obj.id || 0).subscribe(
        x => this.consulta()
      );alert("Registro eliminado");
   }
  ngOnInit() {
    this.consulta();
  }

}


