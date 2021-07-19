import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';

import { PlantDetails } from './../plant-details';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-range-filter',
  templateUrl: './range-filter.component.html',
  styleUrls: ['./range-filter.component.css']
})
export class RangeFilterComponent implements OnInit {

  plants !: PlantDetails[]
  
  filter1!:string
  filter2!:string
  type3!:string

  min !: number
  max !: number

  ranges!:string[]
  constructor(private prodService:ProductService,private activatedRouter:ActivatedRoute) { 
    this.filter1 = this.activatedRouter.snapshot.params["type1"];
  
  }
  ngOnInit(): void {
    this.getPlantsByRange(this.filter1)
  }

  getPlantsByRange(filter1:string){
    this.ranges = filter1.split("-")
    
    this.min = parseFloat(this.ranges[0])
    this.max = parseFloat(this.ranges[1])
    this.prodService.getPlants(this.min,this.max).subscribe(
      data=>{
        this.plants = data
      },
      err=>
        {
          console.log(err.error);  
        }
    );
  }
 /* getPlantsByRange(type1:string){
    if(type1 === '0-200'){
      this.prodService.getPlants(0,200).subscribe(
        data=>
        {
          this.plants = data;
        }
      );
    }
    else if(this.filter2 === '200-500'){
      this.prodService.getPlants(200,500).subscribe(
        data=>
        {
          this.plants = data
        }
      );
    }

    else if(type1 === '500-1000'){
      this.prodService.getPlants(500,1000).subscribe(
        data=>
        {
          this.plants = data
        }
      );
    }
  }*/
  share(plant:string) {
     
    console.log(plant+" shared");
  }
  
  addToCart(plant:PlantDetails) {
   console.log(plant);
    
  }
}
