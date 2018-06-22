import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { File, FileEntry, IFile } from '@ionic-native/file';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private imagePicker: ImagePicker, private file: File) {

  }

  onChoose() {
    this.chooseFromAlbum(1, 400, 400).then(
      path => {
        console.warn('chooseFromAlbum ImgPath: ' + path);

        this.file.readAsArrayBuffer(path, name)
        .then(arrayBuf => {
          console.warn('readAsArrayBuffer: ' + arrayBuf);
        }).catch(error => {
          console.log("readAsArrayBuffer catch:", error);
        });
      })
      .catch(reason=>{
        console.warn('chooseFromAlbum catch: ' + reason);
      });
  }

  private chooseFromAlbum(count: number = 1, width: number = 0, height: number = 0): Promise<any> {
    const options: ImagePickerOptions = {
      maximumImagesCount: count,
      width: width,
      height: height
    };
    return this.imagePicker.getPictures(options);
  }

}
