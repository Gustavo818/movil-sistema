import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ConeccionService } from 'src/app/coneccion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  private isAuthenticated = false;
  private authSecretKey = 'Bearer Token';

  constructor(private formBuilder: FormBuilder,
              private route: Router,
              private cnx: ConeccionService,
              private loadingController: LoadingController,
              private alertController: AlertController) {

    this.loginForm = formBuilder.group({
      username: ['gustavoyancha@gmail.com', Validators.required],
      password: ['Ambato.3000', Validators.required]
    });

    this.isAuthenticated = !!localStorage.getItem(this.authSecretKey);
 
  }

  ngOnInit() {
  }
  ionViewWillEnter(){
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('usuario');
 
  }

  async onClick() {
   
   this.cnx.login_frappe(this.loginForm.value.username, this.loginForm.value.password).subscribe(
      (result: any) => {
         
        console.log( result.message );
        if (result.message.success_key == 0) {
          this.mensaje( result.message.message);
        } else { 
          console.log(result.message);
          console.log(">");
          console.log(result.message.csrf_token);
          sessionStorage.setItem('usuario', result.message.user);
          sessionStorage.setItem('token', result.message.csrf_token);    
          sessionStorage.setItem('cliente_name', result.message.cliente_username);         
          console.log(">>");   
          console.log(sessionStorage.getItem('usuario'));   
          console.log(sessionStorage.getItem('token'));   
          console.log(sessionStorage.getItem('cliente_name'));   
          console.log("<<");   
          this.route.navigateByUrl('menu');
        }

       
      },
      (error:any) => {
 

      });  

 
  }
  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  logout(): void {
    localStorage.removeItem(this.authSecretKey);
    this.isAuthenticated = false;
  }

  async mensaje(msg:any) {
    const alert = await this.alertController.create({
      header: 'App!',
      message:  msg  ,
      buttons: [
        {
          text: 'Aceptar',
          role: 'cancel',
          cssClass: 'secondary'
        }
      ]
    });
    await alert.present();

  }

}