import { Pipe, PipeTransform } from "@angular/core";
import { VaccineCenter } from './vaccineCenters';
@Pipe(
    {
        name :'centerFilter'
    }
)


export class CenterFilterPipe implements PipeTransform{
    transform(CENTERS: VaccineCenter[], searchTerm: string ): VaccineCenter[] {
        if(!CENTERS || !searchTerm){
    return CENTERS;
        }
        return CENTERS.filter(VaccineCenter =>
         VaccineCenter.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 );
      }

}