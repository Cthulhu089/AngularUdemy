import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emptyImage'
})
export class EmptyImagePipe implements PipeTransform {

  transform(image: any[]): any {

    let noimage = 'assets/img/noimage.png';

    if (!image) {
        return image;
    }
    return (image.length > 0) ? image[1] : noimage;
  }

}
