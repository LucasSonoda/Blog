import { Component, HostListener, ViewChild, ElementRef, Renderer2, OnInit, AfterContentInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit, AfterContentInit {


  private stickyNavbar:number = 0;

  navbar:ElementRef;
  
  ngAfterContentInit (): void {
  }

  constructor(private renderer:Renderer2) {
  
  }

  ngOnInit(): void {
  }

  
  setNavbar($event){
    console.log("1",$event)
    this.navbar = $event;
   this.stickyNavbar = this.navbar.nativeElement.offsetTop;
  }


  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset >= this.stickyNavbar) {
      this.renderer.addClass(this.navbar.nativeElement,"sticky")
    } else {
      this.renderer.removeClass(this.navbar.nativeElement,"sticky")
    }
  }
}
