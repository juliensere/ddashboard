/**
 * Created by JulienSere on 02/01/2017.
 */
/**
 * Created by JulienSere on 29/12/2016.
 */
import {Pipe} from '@angular/core';

@Pipe({
  name: 'formatSize'
})
export class FormatSizePipe {
  transform(bytes, args) {
    var sizes = ['Ko', 'Mo', 'Go', 'To', 'Po', 'Eo', 'Zo', 'Yo'];
    if (bytes == 0) return 'n/a';
    var temp:number = Math.log(bytes) / Math.log(1000);
    var i = Math.floor(temp);
    return ((i == 0)? (bytes / Math.pow(1000, i)) : (bytes / Math.pow(1000, i)).toFixed(1)) + ' ' + sizes[i];
  }
}


