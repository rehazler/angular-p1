import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alphabetical'
})
export class AlphabeticalPipe implements PipeTransform {

  transform(array: any, filterBy: string): any[] {
    if(!array)
    {
    	return array;
    }
    if(!filterBy)
    {
        return array;
    }

    array.sort((previous, current) => 
    {

        if( (typeof previous[filterBy] || typeof current[filterBy] ) === 'string') {
        	previous = previous[filterBy].toLowerCase();
        	current = current[filterBy].toLowerCase();
        }
        else
        {
            previous = previous[filterBy];
            current = current[filterBy];   
        }

    	if(previous < current)
    	{
    		return -1
    	}
    	else if(previous > current)
    	{
    		return 1;
    	}
    	else
    	{
    		return 0;
    	}
    	// return previous.localeCompare(current);
    });
    return array;
  }

}
