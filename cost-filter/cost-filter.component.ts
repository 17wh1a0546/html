import { PlantDetails } from './../plant-details';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cost-filter',
  templateUrl: './cost-filter.component.html',
  styleUrls: ['./cost-filter.component.css']
})
export class CostFilterComponent implements OnInit {

  
  plants !: PlantDetails[]
  
  type1 !: string
  constructor(private activatedRouter:ActivatedRoute, private  prodService:ProductService) {
    this.type1 = this.activatedRouter.snapshot.params['type'];
    
  }
  

  ngOnInit(): void {
    
    this.getAllPlants(this.type1);
  
  }

  getAllPlants(type1:string){
    if(type1 === 'Asc'){
      this.prodService.getPlantsByAsc().subscribe(data=>
        {
          this.plants = data;
        },
        err=>
        {
          console.log(err.error);
          
        });
    }
    else {
      this.prodService.getPlantsByDsc().subscribe(data=>
        {
          this.plants = data;
        });
    }
  }
 /* getPlantsAsc(){
    this.prodService.getPlantsByAsc().subscribe(data=>
      {
        this.plants=data;
      });
  }
  getPlants(type:string){
    this.ranges = type.split("-")
    
    this.min = parseInt(this.ranges[0])
    this.max = parseInt(this.ranges[1])
    this.prodService.getPlants(this.min,this.max).subscribe(
      data=>{
        this.plants = data
      }
    );
  }*/

  share(plant:string) {
     
    console.log(plant+" shared");
  }
  
  addToCart(plant:PlantDetails) {
   console.log(plant);
    
  }

}
