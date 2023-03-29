import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-marcelo-lib [textColor]',
  template: `
    <p [style.color]="textColor" style="border: 1px solid; cursor: pointer; padding: 15px;" [style.border-color]="borderColor" (click)="emitClicked()">
      {{text}}
    </p>
  `,
  styles: [
  ]
})
export class NgxMarceloLibComponent {
  @Input('textColor') textColor: string = 'black';
  @Input('borderColor') borderColor: string = 'black';
  @Input() text: string = 'Library NgxMarcelo';
  @Output() clicked = new EventEmitter<string>();

  emitClicked(){
    this.clicked.emit('clicado');
  }
}
