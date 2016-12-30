import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { FotoComponent } from '../foto/foto.component';
import { FotoService } from '../foto/foto.service';

@Component({
    moduleId : module.id,
    selector : 'cadastro',
    templateUrl : './cadastro.component.html'
})
export class CadastroComponent {
    foto : FotoComponent = new FotoComponent();
    service: FotoService;
    meuForm : FormGroup;
    route: ActivatedRoute;
    router: Router;
    mensagem : string = '';

    constructor(service: FotoService, formBuilder: FormBuilder, route: ActivatedRoute, router: Router) {
        this.service = service;
        this.route = route;
        this.router = router;

        this.route.params.subscribe(params => {
            let id = params['id'];

            if(id) {
                this.service.buscaPorId(id)
                    .subscribe(
                        foto => this.foto = foto,
                        error => {
                            console.log(error);
                            this.mensagem = `Não foi possível recuperar foto: ${error}`;
                        }
                    );
            }
        });

        this.meuForm = formBuilder.group({
            titulo : ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            url : ['', Validators.required],
            descricao : ['']
        });
    }

    cadastrar(event) {
        event.preventDefault();
        
        this.service.cadastra(this.foto)
            .subscribe((res) => {
                this.mensagem = res.mensagem;
                this.foto = new FotoComponent();

                if(!res.inclusao) {
                    this.router.navigate(['']);
                }
            }, error => console.log(error));
    }
}