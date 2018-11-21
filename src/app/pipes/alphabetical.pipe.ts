import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alphabetical'
})
export class AlphabeticalPipe implements PipeTransform {

  transform(array: any, args?: any): any[] {
    if(!array)
    {
    	return array;
    }

    array.sort((previous, current) => 
    {
    	previous = previous.name.toLowerCase();
    	current = current.name.toLowerCase();

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
