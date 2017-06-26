import { Pipe, PipeTransform } from '@angular/core';
import {Member} from './member.model';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(input: Member[], chosenGender) {
    var output: Member[] = [];
    if(chosenGender === "maleMembers") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].gender === "male") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (chosenGender === "femaleMembers") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].gender === "femaleMembers") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
