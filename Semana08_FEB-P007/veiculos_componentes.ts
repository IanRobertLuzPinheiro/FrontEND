
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonReaderService } from '../json-reader.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  category: string;
  vehicles: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private jsonReaderService: JsonReaderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.category = this.route.snapshot.paramMap.get('category');
    this.jsonReaderService.getVeiculos().subscribe(veiculos => {
      this.vehicles = veiculos[this.category];
    });
  }

  onSelectVehicle(vehicle: string): void {
    this.router.navigate(['/properties', vehicle]);
  }
}
