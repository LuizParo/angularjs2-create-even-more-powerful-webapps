import { Component } from '@angular/core';

import { FotoComponent } from '../foto/foto.component';
import { FotoService } from '../foto/foto.service';
import { PainelComponent } from '../painel/painel.component';

@Component({
    moduleId : module.id,
    selector : 'listagem',
    templateUrl : './listagem.component.html'
})
export class ListagemComponent {
    fotos : FotoComponent[] = [];
    service: FotoService;
    mensagem: string = '';

    constructor(service: FotoService) {
        this.service = service;

        this.service.lista()
            .subscribe(
                fotos => this.fotos = fotos,
                error => {
                    console.log(error);
                    this.mensagem = `Não foi possível buscar fotos: ${error}`;
                }
            );
    }

    remove(foto: FotoComponent, painel: PainelComponent): void {
        console.log('removendo foto: ' + foto.titulo);

        this.service.remove(foto)
            .subscribe(
                () => {
                    painel.fadeOut(() => {
                        let tempFotos = this.fotos.slice(0);
                        let index = tempFotos.indexOf(foto);
                        tempFotos.splice(index, 1);
                        this.fotos = tempFotos;

                        this.mensagem = `Foto '${foto.titulo}' removida com sucesso!!`;
                    });
                },
                error => {
                    console.log(error);
                    this.mensagem = `Não foi possível remover foto '${foto.titulo}': ${error}`;
                }
            );
    }
}