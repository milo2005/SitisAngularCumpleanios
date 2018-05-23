import { Component, OnInit } from '@angular/core';
import { Photo, BirthdayService } from '../../services/birthday.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {

  photo: Photo = new Photo('', new Date(), '');

  constructor(public service: BirthdayService,
    public router: Router, public route: ActivatedRoute) { }

  ngOnInit() {
  }

  add() {
    this.service.addPhoto(this.photo);
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
