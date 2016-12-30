import 'rxjs/add/operator/map';

import { ROUTING } from './app.routes';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BotaoModule } from './botao/botao.module';
import { FotoModule } from './foto/foto.module';
import { ModalModule } from './modal/modal.module';
import { PainelModule } from './painel/painel.module';

import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';

@NgModule({
    imports : [
        BrowserModule,
        HttpModule,
        BotaoModule,
        FormsModule,
        FotoModule,
        ModalModule,
        PainelModule,
        ReactiveFormsModule,
        ROUTING
    ],
    declarations : [AppComponent, ListagemComponent, CadastroComponent],
    bootstrap : [AppComponent]
})
export class AppModule {
    
}