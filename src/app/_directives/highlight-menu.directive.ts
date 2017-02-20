import  {Directive, ElementRef, Host}  from '@angular/core';


@Directive({
  selector: '[highlight-menu-item]',
  host: {
    '(click)' : 'onItemClick()'
  }
})

export class HighlightMenuItemDirective{

  constructor(private el: ElementRef){
    this.el = el;
  }

  onItemClick(){
    var val = this.el.nativeElement.value;
    //this.el.nativeElement.value = val.replace(/[^0-9]/g, '');
    console.log(this.el.nativeElement);
  }
}
