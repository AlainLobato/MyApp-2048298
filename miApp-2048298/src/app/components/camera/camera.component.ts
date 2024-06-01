import { Component, OnInit, inject } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Foto } from 'src/app/foto.model';
import { FotoServiceService } from 'src/app/services/foto-service.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
})
export class CameraComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  fotoSvc = inject(FotoServiceService)
  actionSheetCtrl = inject(ActionSheetController)

  public fotos: Foto[] = this.fotoSvc.fotos;


  async optionsToSelectImage() {
    const actionSheet = await this.actionSheetCtrl.create({
      mode: 'ios',
      header: 'Image',
      buttons: [
        {
          text: 'Select image from gallery',
          handler: () => {
            this.selectImage();
          },
        },
        {
          text: 'Take a photo',
          handler: () => {
            this.takePhoto();
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }

  selectImage(){
    this.fotoSvc.select();
  }

  takePhoto(){
    this.fotoSvc.take();
  }
}
