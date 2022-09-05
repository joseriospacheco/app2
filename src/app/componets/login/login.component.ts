import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loading: boolean=false;


  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar ) { 

    this.form = this.fb.group({

      usuario:['',Validators.required],
      clave:['',Validators.required]
      
    })

  }

  ngOnInit(): void {
  }

  login(){

    const usuario = this.form.value.usuario;
    const clave = this.form.value.clave;
    //console.table(this.form);

    this.loading = true;
    setTimeout(()=>{

      if(usuario=="jose.rios" && clave=="12345"){


      }else {
  
        this.form.reset();
        this.openSnackBar("No se puedo iniciar sesión","Error");
      }
  
      this.loading = false;


    },1000);



  }

  openSnackBar ( mensaje: string , accion: string ) {
    this ._snackBar.open(mensaje, accion,{

      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'bottom'

    });
 }

}
