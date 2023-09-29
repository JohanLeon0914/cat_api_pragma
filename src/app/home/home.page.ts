import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Cat } from '../models/Cat';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cats: Cat[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getCats().subscribe((cats) => {
      this.cats = cats;
      console.log(this.cats)
    });
  }

}
