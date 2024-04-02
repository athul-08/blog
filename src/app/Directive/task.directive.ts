import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTask]' ,
  standalone: true
})
export class TaskDirective implements OnInit{
  @Input() customColor!: string;

  constructor(private _element: ElementRef) {

   }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('skyblue');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  highlight(color: string) {
    this._element.nativeElement.style.backgroundColor = color;
  }
  ngOnInit(){
    this._element.nativeElement.style.color= this.customColor
  }
}
