import { Ingredient } from 'src/app/shared/model/ingredients';

export interface Recipe {
    name: string;
    description:string;
    imgeURL: string;
    ingredients: Ingredient [];
}

/*export class Recipe {
    name: string;
    description:string;
    imgeURL: string;

    constructor(name:string, desc:string, imgUrl:string){
        this.name = name;
        this.description = desc;
        this.imgeURL = imgUrl;
        
    }
}*/