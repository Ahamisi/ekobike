import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ride-history',
  templateUrl: './ride-history.page.html',
  styleUrls: ['./ride-history.page.scss'],
})
export class RideHistoryPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  ride_info() {
    this.route.navigate(['./ride-info']);
  }
}
