import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonReaderService } from '../json-reader.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  vehicle: string;
  properties: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private jsonReaderService: JsonReaderService
  ) {}

  ngOnInit(): void {
    this.vehicle = this.route.snapshot.paramMap.get('vehicle');
    this.jsonReaderService.getVeiculos().subscribe(veiculos => {
      const selectedVehicle = veiculos[this.vehicle];
      this.properties = Object.keys(selectedVehicle);
    });
  }
}
