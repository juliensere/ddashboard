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
  transform(val, args) {
    if (val == 0) return '0 Byte';
    var k = 1000; // or 1024 for binary
    var dm = 3;
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    var i = Math.floor(Math.log(val) / Math.log(k));
    return parseFloat((val / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
}


