import { Component, OnInit, NgZone } from '@angular/core';
import { FormControlName, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ApiServiceService } from '../../util/api-service.service';
import { RouteReuseStrategy, Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-clients',
  templateUrl: './new-clients.component.html',
  styleUrls: ['./new-clients.component.scss']
})
export class NewClientsComponent implements OnInit {
  CreatAccountForm: FormGroup;
  showLoading: Boolean;
  showForm: Boolean


  constructor( private fb: FormBuilder, private api: ApiServiceService,
    private zone: NgZone,
    private router: Router,
    private dialogRef: MatDialogRef<NewClientsComponent>) { }

  ngOnInit() {
    this.showLoading = false;
    this.showForm = true
    this.createForm()
  }
  createForm(){
    this.CreatAccountForm =this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      username: ['', [Validators.required]]
    })

  }
  submit(){
    //console.log('submiting');
    this.api.postResource('newUser', this.CreatAccountForm.value)
    .subscribe(resp=>{
      this.showLoading = true;
      this.showForm = false;
//console.log('responce from server ', resp)
   this.zone.run(()=>this.router.navigateByUrl('/welcome'))
  //  this.dialogRef.close();

    })
  }

}
