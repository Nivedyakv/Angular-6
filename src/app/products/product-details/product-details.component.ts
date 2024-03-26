import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent  implements OnInit {
  
    productId!: number;
    product: any;
   
    constructor(private route: ActivatedRoute, private dataService: DataService) { }
   
    ngOnInit(): void {
     
      this.productId = +this.route.snapshot.paramMap.get('id')!;
     
      this.product = this.dataService.getProductById(this.productId);
    }
  }
