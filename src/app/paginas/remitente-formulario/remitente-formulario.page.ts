import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormGroup, Validators } from '@angular/forms';
import { LoadingController, AlertController, IonicModule } from '@ionic/angular';
import { ConeccionService } from 'src/app/coneccion.service';

import { NavController } from '@ionic/angular';




@Component({
  selector: 'app-remitente-formulario',
  templateUrl: './remitente-formulario.page.html',
  styleUrls: ['./remitente-formulario.page.scss'],
})
export class RemitenteFormularioPage implements OnInit {

 
  id              : any;
  lstSocios       : any;
  nuevo           : number = 0;
  remi_nom        : string ="";
  remi_apellido   : string ="";
  nombre_completo : string ="";
  remi_telf       : string ="";
  remi_prov       : string ="";
  remi_ciu        : string ="";
  remi_dir        : string ="";
  remi_ref        : string ="";
  cliente         : any;
  remi_ref_inter  : string ="";
  remi_numer      : string ="";
  codigo_postal   : string ="";
  remi_email      : string ="";
  remi_pais       : string ="Ecuador";
  ciudades:  any ;
  provincias: string[] = [
    'Azuay',
    'Bolívar',
    'Cañar',
    'Carchi',
    'Chimborazo',
    'Cotopaxi',
    'El Oro',
    'Esmeraldas',
    'Galápagos',
    'Guayas',
    'Imbabura',
    'Loja',
    'Los Ríos',
    'Manabí',
    'Morona Santiago',
    'Napo',
    'Orellana',
    'Pastaza',
    'Pichincha',
    'Santa Elena',
    'Santo Domingo de los Tsáchilas',
    'Sucumbíos',
    'Tungurahua',
    'Zamora Chinchipe',
  ];

  paises: string[] = [
    'Ecuador'
  ];


  constructor(
    private navController: NavController,
    private cnx: ConeccionService,
    private alertController: AlertController,
 
    private route: ActivatedRoute,
    private loadingController: LoadingController,
  ) {
     
      this.cliente =    sessionStorage.getItem('cliente_name');
 

   }

  ngOnInit() {
    this.getCiudades();

    var id = this.route.snapshot.paramMap.get('id');
    this.id = id;
    if (id == 'new') {
    
   
    }
    else {
      
      console.log(id)

      this.cnx.getDocytpe("EnvioRemitente",id).subscribe((datos:any)=>{
        console.log(datos);
        this.remi_nom         = datos.data.remi_nom ; 
        this.remi_apellido    = datos.data.remi_apellido ; 
        this.nombre_completo  = datos.data.nombre_completo ; 
        this.remi_telf        = datos.data.remi_telf;
        this.remi_prov        = datos.data.remi_prov;
        this.remi_ciu         = datos.data.remi_ciu;
        this.remi_dir         = datos.data.remi_dir;
        this.remi_ref         = datos.data.remi_ref;
      
        this.remi_ref_inter   = datos.data.remi_ref_inter;
        this.remi_numer       = datos.data.remi_numer;
        this.codigo_postal    = datos.data.código_postal;
        this.remi_email       = datos.data.remi_email;
        this.remi_pais        = datos.data.remi_pais;
      });      
    }

  }  

  regresarMenu() {   
    this.navController.navigateRoot("/menu");
  }
  guardar(){

    var id = this.route.snapshot.paramMap.get('id');
    this.id = id;
    if (id == 'new') {    
      this.insertRemitente();
    }
    else{
      this.editRemitente();
    }

  } 

  async insertRemitente(){
   
    this.nombre_completo = this.remi_apellido + " " + this.remi_nom 
    
    let datos = {
      'remi_nom'        : this.remi_nom,
      'remi_apellido'   : this.remi_apellido,
      'nombre_completo' : this.nombre_completo,
      'remi_telf'       : this.remi_telf,
      'remi_prov'       : this.remi_prov,
      'remi_ciu'        : this.remi_ciu,
      'remi_dir'        : this.remi_dir,
      'remi_ref'        : this.remi_ref,
      'cliente'         : this.cliente,
      'remi_ref_inter'  : this.remi_ref_inter,
      'remi_numer'      : this.remi_numer,
      'código_postal'   : this.codigo_postal,
      'remi_email'      : this.remi_email,
      'remi_pais'       : this.remi_pais
    };
    this.cnx.saveDoctype("EnvioRemitente", datos).subscribe(
      (resultado: any) => {
   
        if( resultado.nombre_completo){
           this.mensaje("Se ha ingresado:" +resultado.nombre_completo  );
        }    
       

      }
      , (error:any)=>{
        this.mensaje( error);
      }
    );
  }

  async editRemitente(){
   
    this.nombre_completo = this.remi_apellido + " " + this.remi_nom 
   
    let datos = {
      'remi_nom'        : this.remi_nom,
      'remi_apellido'   : this.remi_apellido,
      'nombre_completo' : this.nombre_completo,
      'remi_telf'       : this.remi_telf,
      'remi_prov'       : this.remi_prov,
      'remi_ciu'        : this.remi_ciu,
      'remi_dir'        : this.remi_dir,
      'remi_ref'        : this.remi_ref,
      'cliente'         : this.cliente,
      'remi_ref_inter'  : this.remi_ref_inter,
      'remi_numer'      : this.remi_numer,
      'código_postal'   : this.codigo_postal,
      'remi_email'      : this.remi_email,
      'remi_pais'       : this.remi_pais
    };
    this.cnx.updateDoctype("EnvioRemitente", this.id, datos).subscribe(
      (resultado: any) => {
        console.log(resultado);
      }
    );
   
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
  getCiudades(){
    this.cnx.getCiudades(this.remi_prov).subscribe(  (resultado:any)=>{
      console.log(resultado);
      this.ciudades = resultado.message;
    } );
  }


}
