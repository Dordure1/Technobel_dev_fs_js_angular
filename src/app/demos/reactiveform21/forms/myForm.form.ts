import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { nameValidator } from "./validators/name.validator";

export function generateMyForm(fb: FormBuilder): FormGroup {
    return fb.group({
            // Controls
            name: [
                "", // Valeur par défaut. (Le champ ne sera pas considéré comme touché et toujours pristine)
                [   // Tableaux de validateurs (Tous statiques de la classe Validators)
                    // L'ordre n'a aucune importance
                    Validators.required,        // On doit le mettre 
                    Validators.minLength(2),
                    nameValidator               // on appelle notre validateur perso
                ]
            ],
            email: [
                "", // Valeur par défaut.
                [
                    Validators.email,
                ]
            ],
            password: [
                "", // Valeur par défaut.
                [
                    Validators.required,
                    Validators.minLength(6),
                ]
            ],
            confirmPwd: [
                "", // Valeur par défaut.
                [
                    Validators.required,
                    Validators.minLength(6),
                ]
            ],
        },
        {
            // Options
            validators: [
                //Validators.required
            ]        
        })
}
