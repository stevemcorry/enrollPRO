import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'actionFilter'
})

export class ActionFilter implements PipeTransform {

    transform(values: any, term: any): any {
        console.log('values',values, 'term' ,term)
        if(term === undefined || values === undefined) return values;

        return values.filter(value => {
            console.log('val',value.complete)
            return (value.complete === term.complete)
        })
    }

}