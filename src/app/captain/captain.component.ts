import { Component, OnInit } from '@angular/core';
import { CaptainService } from '../shared/services/captain.service';

@Component({
  selector: 'app-captain',
  templateUrl: './captain.component.html',
  styleUrls: ['./captain.component.css']
})
export class CaptainComponent implements OnInit {

  constructor(private captainService: CaptainService) { }

  ngOnInit(): void {
    this.captainService.index();
  }



  // onSaveBrickset($event: Brickset) {
  //   this.savedBrickset = $event;
  //   setTimeout(() => {
  //     this.savedBrickset = null;
  //   }, 3000);


}
