import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
home()
{
  this.router.navigate(['/header']);
 
}
btn()
{
  this.router.navigate(['/login']);
 
}
busdetails()
{
  this.router.navigate(['/bussearch']); 
 
}
sign()
{
  this.router.navigate(['/sign']); 
 
}
seats()
{
  this.router.navigate(['/seats']);

}
bus()
{
  this.router.navigate(['/bus']);

}
driver()
{
  this.router.navigate(['/Driver']);

}
busroute()
{
  this.router.navigate(['/busroute']);

}
passanger()
{
  this.router.navigate(['/Passanger'])
}
payment()
{
  this.router.navigate(['/Payment'])
}
booking()
{
  this.router.navigate(['/Booking'])
}

return()
{
  this.router.navigate(['/']);

}
}
