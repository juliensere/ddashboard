/**
 * Created by JulienSere on 29/12/2016.
 */
/**
 * Created by JulienSere on 29/12/2016.
 */
import {Pipe} from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe {
  transform(val, args) {
    var days = Math.floor(val/86400000);
    val = val%86400000;
    var hours = Math.floor(val/3600000);
    val = val%3600000;
    var minutes = Math.floor(val/60000);
    val = val%60000;
    var seconds = Math.floor(val/1000);
    return (days? days + ' days ': '') + (hours? hours + ' hours ': '') + (minutes? minutes + ' minutes ': '') + (seconds? seconds + ' seconds ': '')
  }
}
