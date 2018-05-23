import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Photo } from '../../services/birthday.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() public photo: Photo;
  @Output() cardSelected: EventEmitter<Photo> = new EventEmitter();

  ngOnInit() { }

  onClick() {
    this.cardSelected.emit(this.photo);
  }

}
