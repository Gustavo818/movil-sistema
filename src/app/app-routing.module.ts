import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./seguridad/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./drawer/drawer.module').then( m => m.DrawerPageModule)
  },  {
    path: 'remitente-formulario',
    loadChildren: () => import('./paginas/remitente-formulario/remitente-formulario.module').then( m => m.RemitenteFormularioPageModule)
  },
  {
    path: 'remitente-lista',
    loadChildren: () => import('./paginas/remitente-lista/remitente-lista.module').then( m => m.RemitenteListaPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
