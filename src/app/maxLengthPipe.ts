/**
 * Created by JulienSere on 29/12/2016.
 */
import {Pipe} from '@angular/core';

@Pipe({
  name: 'maxLength'
})
export class MaxLengthPipe {
  transform(val, args) {
    if (val.length > 8){
      return val.substring(0, 8);
    }else{
      return val;
    }
  }
}
