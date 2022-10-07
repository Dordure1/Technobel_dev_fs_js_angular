import { AbstractControl } from "@angular/forms";

// On simule un maxLength, on fait comme si ce validateur n'existait pas déja, c'est pour l'exemple.
export function nameValidator(
    //nbMax: number,        // on ne peut pas avoir un autre paramètre ici, sinon Angular ne s'y retrouve plus avec le param 'control'
    control: AbstractControl    
){
    console.log(control)
}
