import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonReaderService } from '../json-reader.service';

@Component({
  selector: 'app-property',
})
export class PropertyComponent implements OnInit {
  veiculo: string;
  properties: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private jsonReaderService: JsonReaderService
  ) {}

  ngOnInit(): void {
    this.veiculo = this.route.snapshot.paramMap.get('veiculo');
    this.jsonReaderService.getVeiculos().subscribe(veiculos => {
      const selectedVeiculo = veiculos[this.veiculo];
      this.properties = Object.keys(selectedVeiculo);
    });
  }
}
