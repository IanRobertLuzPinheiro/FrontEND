
import { Component, OnInit } from '@angular/core';
import { JsonReaderService } from '../json-reader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: string[] = [];

  constructor(private jsonReaderService: JsonReaderService, private router: Router) {}

  ngOnInit(): void {
    this.jsonReaderService.getVeiculos().subscribe(veiculos => {
      this.categories = Object.keys(veiculos);
    });
  }

  onSelectCategory(category: string): void {
    this.router.navigate(['/vehicles', category]);
  }
}
