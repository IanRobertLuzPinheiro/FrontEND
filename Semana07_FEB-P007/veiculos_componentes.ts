
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonReaderService } from '../json-reader.service';

@Component({
  selector: 'app-veiculo',
})
export class VeiculoComponente implements OnInit {
  categoria: string;
  veiculo: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private jsonReaderService: JsonReaderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.category = this.route.snapshot.paramMap.get('category');
    this.jsonReaderService.getVeiculos().subscribe(veiculos => {
      this.veiculo = veiculos[this.category];
    });
  }

  onSelectVeiculo(veiculo: string): void {
    this.router.navigate(['/properties', veiculo]);
  }
}
