import { Component, Input, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';

@Component({
    moduleId : module.id,
    selector : 'painel',
    templateUrl : './painel.component.html',
    styleUrls : ['./painel.component.css'],
    encapsulation : ViewEncapsulation.Emulated // default - not necessary to specify
})
export class PainelComponent implements OnInit {

    @Input() titulo : string;
    private _elemento: ElementRef;

    constructor(elemento: ElementRef) {
        this._elemento = elemento;
    }

    ngOnInit(): void {
        this.titulo = this.titulo.length > 7
            ? `${this.titulo.substring(0, 7)}...`
            : this.titulo;
    }

    fadeOut(callback: any): void {
        $(this._elemento.nativeElement).fadeOut(callback);
    }
}