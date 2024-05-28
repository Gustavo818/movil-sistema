 
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { ConeccionService } from 'src/app/coneccion.service';

@Component({
  selector: 'app-remitente-lista',
  templateUrl: './remitente-lista.page.html',
  styleUrls: ['./remitente-lista.page.scss'],
})
export class RemitenteListaPage implements OnInit {

  datos : any;
 
  constructor( 
    private navController: NavController,
    private cnx: ConeccionService,
    public alertController: AlertController,
    private router: Router,

    ) { }

  ngOnInit() {
     this.getDatos();
  }

  async getDatos(){
    let  campos = ['name','nombre_completo'];

    this.cnx.getDocytpe_all_fields("envio_remitente").subscribe((datos:any)=>{
      console.log(datos.data);
      this.datos = datos.data;
      console.log(this.datos);
    });

  }


  regresarMenu() {
    console.log("Regresar")
    this.navController.navigateRoot("/menu");
  }



  deleteRegistro(id:any){
    console.log("Eliminar registro: " + id);
  

    this.cnx.deleteDocytpe("envio_remitente", id).subscribe(
      (resultado: any) => {
     
        this.getDatos();
      }
    );

 
  }



  async presentAlertConfirm(id:any) {
    
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Estás seguro de que quieres continuar?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Acción cancelada');
             
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            console.log('Acción confirmada');
            this.deleteRegistro(id);
            // Aquí puedes poner el código que se ejecutará al confirmar
            this.router.navigateByUrl('/menu/remitente-lista');
          }
        }
      ]
    });

    await alert.present();
  }  

}
