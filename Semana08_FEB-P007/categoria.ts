
import { Component, OnInit } from '@angular/core';
import { JsonReaderService } from '../json-reader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
})
export class CategoriaComponente implements OnInit {
  categories: string[] = [];

  constructor(private jsonReaderService: JsonReaderService, private router: Router) {}

  ngOnInit(): void {
    this.jsonReaderService.getVeiculos().subscribe(veiculos => {
      this.categories = Object.keys(veiculos);
    });
  }

  onSelectCategoria(categoria: string): void {
    this.router.navigate(['/vehicles', categoria]);
  }
}
