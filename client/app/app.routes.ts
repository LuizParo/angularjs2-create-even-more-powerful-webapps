import { RouterModule, Routes } from '@angular/router';

import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';

const ROUTES : Routes = [
    {path : '', component : ListagemComponent},
    {path : 'cadastro', component : CadastroComponent},
    {path : 'cadastro/:id', component : CadastroComponent},
    {path : '**', redirectTo : ''}
];

export const ROUTING = RouterModule.forRoot(ROUTES);