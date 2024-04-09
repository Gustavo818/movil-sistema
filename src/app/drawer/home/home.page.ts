import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { AnimationController, Platform, ToastController } from '@ionic/angular';
import { Template } from 'src/app/types/home';
import { ConeccionService } from 'src/app/coneccion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements AfterViewInit {
  datos   : any;
  v_nombre:any;
  v_logo  :any;
  
  // ref: "https://ionicframework.com/blog/building-interactive-ionic-apps-with-gestures-and-animations/"
  @ViewChildren('templateList', { read: ElementRef })
  templateListRef?: QueryList<ElementRef>;

  templates: Template[] = [
    {
      id: 'course-rive',
      background: 'assets/course_rive.png',
      screenPath: '/course-rive',
    },
    {
      id: 'hotel-booking',
      background: 'assets/course_rive.png',
      // screenPath: 'hotel-booking',
      screenPath: undefined,
    },
    {
      id: 'fitness-app',
      background: 'assets/course_rive.png',
      screenPath: undefined,
    },
    {
      id: 'design-course',
      background: 'assets/course_rive.png',
      screenPath: undefined,
    },
    {
      id: 'design-course',
      background: 'assets/course_rive.png',
      screenPath: undefined,
    },
    {
      id: 'design-course',
      background: 'assets/course_rive.png',
      screenPath: undefined,
    },
  ];
  multiple = true;

  constructor(
    public toastController: ToastController,
    private animationCtrl: AnimationController,
    private platform: Platform,
    private cnx: ConeccionService,
  ) {}


  ngOnInit() {
    // this.getinfoUser();
    this.getDatos();
  }



  getinfoUser() { 
    this.cnx.getDocytpe_all_fields('dat_empleado').subscribe( (data:any) => { 
      console.log("home.getinfoUser :");    
      this.v_nombre = data.data[0].emple_nombres;
      this.v_logo =  data.data[0].emple_cedula;
      console.log( data.data ); 
    });

  }

  async getDatos(){  
    let  campos = ['name','emple_nombres','emple_correo', 'emple_direccion'];
    this.cnx.getDocytpe_fields("dat_empleado",campos).subscribe((datos:any)=>{
      console.log("home.getDatos :");
      this.datos = datos.data;
      console.log(this.datos);
    });

  }


  
  async presentAlertConfirm(id:any) {
    console.log('presentAlertConfirm.id : ' + id);
     
 
  }  

 

  ngAfterViewInit() {
    // Workaround just to fix list flicker issue especially on Android
    setTimeout(
      () => this.initListAnimation(),
      this.platform.is('android') ? 500 : 0
    );
    // this.initListAnimation();
  }

  initListAnimation() {
    const itemRefArray = this.templateListRef?.toArray();
    for (let i = 0; i < itemRefArray!.length; i++) {
      const element = itemRefArray![i].nativeElement;

      this.animationCtrl
        .create()
        .addElement(element)
        .duration(1000)
        .delay(i * (1000 / 3))
        .easing('cubic-bezier(0.4, 0.0, 0.2, 1.0)')
        .fromTo('transform', 'translateY(50px)', 'translateY(0px)')
        .fromTo('opacity', '0', '1')
        .play();
    }
  }

  async onScreenClick(temp: Template) {
    if (!temp.screenPath) {
      const toast = await this.toastController.create({
        message: 'Coming soon...',
        duration: 2000,
      });
      toast.present();
    }
  }

  listKeyExtractor(_i: number, screen: Template) {
    return screen.id;
  }
}
