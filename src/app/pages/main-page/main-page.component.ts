import { Component, OnInit } from '@angular/core';
import { Photo, BirthdayService } from '../../services/birthday.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  data: Photo[] = [];

  constructor(public service: BirthdayService) {
    this.data = service.loadPhotos();
  }

  onCardSelected(photo: Photo) {
    alert('Foto selecionada => ' + photo.name);
  }

  ngOnInit() { }

}
