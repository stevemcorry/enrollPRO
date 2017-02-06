import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {

    transform(values: any, term: any): any {
        if(term === undefined) return values;

        return values.filter(value => {
            console.log('val',value,'term',term);
            return (value.id === term.id)
        })
    }

}