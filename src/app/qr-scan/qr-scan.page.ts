import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-qr-scan',
  templateUrl: './qr-scan.page.html',
  styleUrls: ['./qr-scan.page.scss'],
})
export class QrScanPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.unlocking();
    }, 2000)
  }
  unlocking() {
    this.route.navigate(['./unlocking']);
  }
}
