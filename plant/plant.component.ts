import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { PlantDetails } from '../plant-details';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css']
})
export class PlantComponent implements OnInit {
  plants!: PlantDetails[];
  filteredProd !: PlantDetails[];

  Asc:string = "Asc";
  Dsc:string = "Dsc";
  filter1:string = "200-500"
  filter2:string = "500-1000"
  filter3:string = "1000-1500"

  constructor(
    private productService:ProductService,
    private cartService:CartService,public router: Router) {
      this.getAllPlants();
  }
 
  

  
  
  ngOnInit(): void {
  }
  
  /*getAllPlantsByAsc() {
    this.productService.getPlantsByAsc().subscribe(data=>{
      this.filteredProd = data;
  },
  err=>
  {
    console.log(err.error);
  }
  
  );
  //console.log(this.laptops.length);
  }*/
  getAllPlants() {
    this.productService.getAllPlantList().subscribe(data=>{
      this.plants = data;
  },
  err=>
  {
    console.log(err.error);
  }
  
  );
  //console.log(this.laptops.length);
  }

  rangedPlants(){
    this.productService.getAllPlantList().subscribe(data=>{
      
    })
  }



  share(plant:string) {
     
    console.log(plant+" shared");
  }
  
  addToCart(plant:PlantDetails) {
   console.log(plant);
    
  }
}
