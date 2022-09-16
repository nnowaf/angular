import { Pipe, PipeTransform } from '@angular/core';
import { Students } from 'src/app/models/Students';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(students: Students[], searchValue: string): any {
    if (students.length === 0 || searchValue === '') {
      return students;
    } else {
      return students.filter(std => {
        return std.nama.toLowerCase().includes(searchValue.toLowerCase());
      })
    }
  }

}
