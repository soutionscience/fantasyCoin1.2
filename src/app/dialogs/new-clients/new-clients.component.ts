import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { FormControlName, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ApiServiceService } from '../../util/api-service.service';
import { RouteReuseStrategy, Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';
import { NewPayerService } from '../../util/new-payer.service';

@Component({
  selector: 'app-new-clients',
  templateUrl: './new-clients.component.html',
  styleUrls: ['./new-clients.component.scss']
})
export class NewClientsComponent implements OnInit {
  CreatAccountForm: FormGroup;
  showLoading: Boolean;
  showForm: Boolean;
  complete: Boolean;
  dataError: String;
  showDataError: Boolean;



  constructor( private fb: FormBuilder, private api: ApiServiceService,
    private zone: NgZone,
    private router: Router,
    private dialogRef: MatDialogRef<NewClientsComponent>,
    private  ref: ChangeDetectorRef,
    private newPlayer: NewPayerService) { }

  ngOnInit() {
    this.showLoading = false;
    this.showForm = true;
    this.complete = false;
    this.createForm();
    this.showDataError = false;
    this.complete = false
  }
  createForm(){
    this.CreatAccountForm =this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      username: ['', [Validators.required]]
    })

  }
  submit(){
    this.showLoading = true;
    this.showForm = false;
    this.api.postResource('newUser', this.CreatAccountForm.value)
    .subscribe(resp=>{

      this.newPlayer.setNewUserId(resp)
      this.showLoading = false;
      this.complete = true;
      this.showForm = false;
      this.api.postResource('messages', {"email": this.CreatAccountForm.value.email, "name": this.CreatAccountForm.value.username  })
       .subscribe();
      
   
     

    },error=>{
      console.log('what is the error ', error.data.error)
      if(error.data.error == "email already registered"){
        this.showDataError = true;
        this.dataError ="This Email is already registered!"
        this.showForm = true;
        this.showLoading= false;
        this.ref.detectChanges()

      }
      else if(error.data.error == "username in use"){
        this.showDataError = true;
        this.dataError ="The username is already in use"
        this.showForm = true;
        this.showLoading= false;
        this.ref.detectChanges()

      }else{
        this.showDataError = true;
        this.dataError ="unknown error please try again"
        this.showForm = true;
        this.showLoading= false;

      }
    })
  }
  close(){
    this.dialogRef.close();
    this.ref.detectChanges()
  }
  howToPlay(){
       this.zone.run(()=>this.router.navigateByUrl('/howto'));
       this.close()

  }

}
