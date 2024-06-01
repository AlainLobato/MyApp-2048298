import { Component, OnInit } from '@angular/core';
import { alumno } from 'src/app/alumno.model';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
})
export class ListaAlumnosComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  //alumnos : any = ["Carlos", "Ailton", "Regina", "Barbara", "Karla", "Valeria", "Simone"];

  alumno: alumno = {
    nombre: '',
    presente: false
  }

  async Eliminate() {
    const actionSheet = document.createElement('ion-action-sheet');
    actionSheet.header = 'Acciones';

    actionSheet.buttons = [
      {
        text: 'Eliminar',
        role: 'destructive',
        data: {
          action: 'delete',
        },
      },
      {
        text: 'Cancelar',
        role: 'cancel',
        data: {
          action: 'cancel',
        },
      },
    ];

    document.body.appendChild(actionSheet);
    await actionSheet.present();
  }

  async Fav() {
    const actionSheet = document.createElement('ion-action-sheet');
    actionSheet.header = 'Acciones';

    actionSheet.buttons = [
      {
        text: 'Favorite',
      },
      {
        text: 'Cancelar',
        role: 'cancel',
        data: {
          action: 'cancel',
        },
      },
    ];

    document.body.appendChild(actionSheet);
    await actionSheet.present();
  }

  alumnos : alumno[] = [];

  isActionSheetOpen = false;
  public actionSheetButtons = [];

  setOpen(isOpen: boolean) {
    this.isActionSheetOpen = isOpen;
  }

  agregaAlumno(): void{

    this.alumnos.push(this.alumno)
    this.alumno = {
      nombre: '',
      presente: false
    }
  }

  eliminarAlumno(alumno: any) {
    const index = this.alumnos.indexOf(alumno);
    if (index > -1) {
      this.alumnos.splice(index, 1);
    }
  }

  result: string = '';


}
