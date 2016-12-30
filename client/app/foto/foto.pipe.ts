import { PipeTransform, Pipe } from '@angular/core';
import { FotoComponent } from './foto.component';

@Pipe({
    name : 'filtroPorTitulo'
})
export class FiltroPorTitulo implements PipeTransform {
    
    transform(fotos : FotoComponent[], textoDigitado : string) : FotoComponent[] {
        textoDigitado = textoDigitado.toLowerCase();
        return fotos.filter(foto => foto.titulo.toLowerCase().includes(textoDigitado));
    }
}