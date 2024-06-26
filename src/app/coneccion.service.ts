import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConeccionService {


 
  constructor(private httpClient: HttpClient) {

 
 
  }
 private apiUrl = environment.apiUrl



 login_frappe(usuario: any, password: any) {

   let params = { usuario: usuario, password: password };
   console.log('1 app_triplea==>', JSON.stringify(params));

   const header = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json',
     })
   };

  //  http://frappe15:8190/api/method/app_triplea.utils.sync.getdatos
   
   let url = this.apiUrl + 'method/app_triplea.utils.servicios.login';
   console.log('2 app_triplea==>', JSON.stringify(url));


   return this.httpClient.post(url, params, header);
 }


 getDocytpe_all_fields( doctype_name:String ) { 
   let token:any = '';
    token = sessionStorage.getItem('token');
   const header = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json',         
       'Authorization':  token      
     })
   };
   let url = this.apiUrl + `resource/${doctype_name}?fields=["*"]`;
   return this.httpClient.get(url,  header); 
 }



 getDocytpe_fields( doctype_name:String , campos:any) { 
   let token:any = '';
   token = sessionStorage.getItem('token');
   const header = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json',         
       'Authorization':   token      
     })
   };
   let texto ='"'+ campos.join('","') + '"';

   let url = this.apiUrl + `resource/${doctype_name}?fields=[${texto}]`;
   return this.httpClient.get(url,  header); 
 }

 getDocytpe( doctype_name:String , name:any) { 
   let token:any = '';
   token = sessionStorage.getItem('token');
   const header = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json',         
       'Authorization':   token      
     })
   };  

   let url = this.apiUrl + `resource/${doctype_name}/${name}`;
  
   return this.httpClient.get(url,  header); 
 }

 saveDoctype(doctype_name:String, datos:any){
   let token:any = '';
   token = sessionStorage.getItem('token');
   const header = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json',         
       'Authorization':   token      ,
       "Accept": "application/json"
      
     })
   };
   let url = this.apiUrl + `resource/${doctype_name}`;
   return this.httpClient.post(url, datos,  header); 
 }
 
 updateDoctype(doctype_name:String, name:String ,  datos:any){
   let token:any = '';
   token = sessionStorage.getItem('token');
   const header = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json',         
       'Authorization':   token      ,
       "Accept": "application/json"
      
     })
   };
   let url = this.apiUrl + `resource/${doctype_name}/${name}`;
   return this.httpClient.put(url, datos,  header); 
 }

 
 deleteDocytpe( doctype_name:String , name:any) { 
   let token:any = '';
   token = sessionStorage.getItem('token');
   const header = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json',         
       'Authorization':   token      
     })
   };  

   let url = this.apiUrl + `resource/${doctype_name}/${name}`;
   return this.httpClient.delete(url,  header); 
 }

 isAuthenticatedfn(): boolean {
   // Implementa la lógica para verificar si el usuario está autenticado
   // Por ejemplo, verifica si hay un token en el almacenamiento local o en una cookie
   return !!localStorage.getItem('token'); // Retorna verdadero si existe un token, falso si no
 }


 getCiudades(provincia:string){
  let token:any = '';
  token = sessionStorage.getItem('token');
  const header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',         
      'Authorization':   token      ,
      "Accept": "application/json"
     
    })
  };

  let  datos={'provincia':provincia};
  // let url = this.apiUrl + 'method/tarjetaapp.sw_envios.getCiudades';
  let url = this.apiUrl + 'method/app_triplea.utils.servicios.getCiudades';
  
  return this.httpClient.post(url, datos,  header); 
}


}

