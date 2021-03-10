import { Component, OnInit } from '@angular/core';
import { DatasetService} from '../dataset.service';
import { Iquiz } from '../quiz.interface';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
   datajson: Iquiz[];
  constructor(private ds:DatasetService) {
  
  }
  
  ngOnInit(): void {
    this.ds.getData().subscribe(data => {
      
      this.datajson = data;
      console.log(this.datajson);
    });
  }
}
    

