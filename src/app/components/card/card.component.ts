import { Component, OnInit, Input } from '@angular/core';
import { Photo } from '../../services/birthday.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() public photo: Photo;

  ngOnInit() {

  }

}
