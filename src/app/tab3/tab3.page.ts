import {Component, ViewChild, OnInit, Renderer, ElementRef} from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

    public accordingExapandedeEST = false;
    public accordingExapandedeAPU = false;
    @ViewChild('ccc', { read: ElementRef  }) cardContentEST: any;
    @ViewChild('bbb', { read: ElementRef  }) cardContentAPU: any;

    constructor(public renderer: Renderer) {


    }

    ngOnInit(): void {

      this.renderer.setElementStyle(this.cardContentEST.nativeElement, 'webkitTransition', 'max-height 500ms');
      this.renderer.setElementStyle(this.cardContentAPU.nativeElement, 'webkitTransition', 'max-height 500ms');
    }
    toogleAccording(valor) {
        switch (valor) {
            case 'estudios':
                if (this.accordingExapandedeEST) {
                    this.accordingExapandedeEST = false;
                    this.renderer.setElementStyle(this.cardContentEST.nativeElement, 'max-height', '0px');
                    this.renderer.setElementStyle(this.cardContentEST.nativeElement, 'padding', '0px 16px');
                } else {
                    this.accordingExapandedeEST = true;
                    this.renderer.setElementStyle(this.cardContentEST.nativeElement, 'max-height', '500px');
                    this.renderer.setElementStyle(this.cardContentEST.nativeElement, 'padding', '13px 16px');
                }
                break;
            case 'apuntes':
                if (this.accordingExapandedeAPU) {
                    this.accordingExapandedeAPU = false;
                    this.renderer.setElementStyle(this.cardContentAPU.nativeElement, 'max-height', '0px');
                    this.renderer.setElementStyle(this.cardContentAPU.nativeElement, 'padding', '0px 16px');
                } else {
                    this.accordingExapandedeAPU = true;
                    this.renderer.setElementStyle(this.cardContentAPU.nativeElement, 'max-height', '500px');
                    this.renderer.setElementStyle(this.cardContentAPU.nativeElement, 'padding', '13px 16px');
                }
                break;
            default:
            // code block
        }

    }
}
