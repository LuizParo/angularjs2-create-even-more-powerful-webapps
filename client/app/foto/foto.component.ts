import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    moduleId : module.id,
    selector : 'foto',
    templateUrl : './foto.component.html',
    styleUrls : ['./foto.component.css'],
    encapsulation : ViewEncapsulation.Emulated  // default - not necessary to specify
})
export class FotoComponent {
    _id: string;
    @Input() titulo : string = '';
    @Input() url : string = '';
    descricao : string = '';
}