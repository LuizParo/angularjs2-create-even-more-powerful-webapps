import { NgModule } from '@angular/core';

import { FotoComponent } from './foto.component';
import { FotoService } from './foto.service';
import { FiltroPorTitulo } from './foto.pipe';

@NgModule({
    declarations : [FotoComponent, FiltroPorTitulo],
    exports : [FotoComponent, FiltroPorTitulo],
    providers : [FotoService]
})
export class FotoModule {

}