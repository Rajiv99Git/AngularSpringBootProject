import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminDetail } from '../admin-details';
import { AdminService } from '../admin-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {  
  admin: AdminDetail= new AdminDetail();
  submitted = false;
  constructor(private adminService: AdminService,
    private router: Router) {}

  ngOnInit() {
    
  }

  AddAdmin()
  {
    this.adminService.saveAdminDetails(this.admin)
      .subscribe(
        data => {
          console.log(data);
          
        },
        error => console.log(error));
  }
  
}  