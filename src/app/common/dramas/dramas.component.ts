import { Component } from '@angular/core';
import { slideshow } from '../DramasPage';
import { DramasGetServicesService } from 'src/app/services/dramas-get-services.service';

@Component({
  selector: 'app-dramas',
  templateUrl: './dramas.component.html',
  styleUrls: ['./dramas.component.css']
})
export class DramasComponent{
  //from dramaspage, importing styles
  styles=slideshow
  //image urls for slidedhow
  imageUrls: string[] = ['ok.jpg', 'psychometric.webp', 'alices2.jpg','glory.webp','alsb.jfif'];
  // imageUrls:any;
  currentImageIndex: number = 0;

  //get latestBuzz from Database ---parent component
  latestBuzzList:any;
  constructor(private gs:DramasGetServicesService){
    this.gs.getLatestBuzz().subscribe(
      {
        next:(data:any)=>{
          this.latestBuzzList=data;
        },
        error:()=>this.latestBuzzList=[]
      }
    )
    // this.gs.getSlides().subscribe(
    //   {
    //     next:(data:any)=>{
    //       this.imageUrls=data;
    //     },
    //     error:()=>this.imageUrls=[]
    //   }
    // )
    setInterval(() => {
      this.currentImageIndex++;
      if (this.currentImageIndex >= this.imageUrls.length) {
        this.currentImageIndex = 0;
      }
    }, 2000);
  }
  //get username for alert
  getUsername(){
    return sessionStorage.getItem('username');
  }
}
