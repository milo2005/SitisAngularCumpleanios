import { Component, OnInit } from '@angular/core';
import { Photo, BirthdayService } from '../../services/birthday.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  data: Photo[] = [];

  constructor(public service: BirthdayService,
    public router: Router,
    public route: ActivatedRoute) {

    this.data = service.loadPhotos();
  }

  onCardSelected(photo: Photo) {
    alert('Foto selecionada => ' + photo.name);
  }

  ngOnInit() { }

  goToAdd() {
    this.router.navigate(['add'], { relativeTo: this.route });
  }

}
