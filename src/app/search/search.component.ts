import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import { NoticiasService } from '../domain/noticias.service'

@Component({
  selector: 'Search',
  templateUrl: './search.component.html'/*,
  providers: [NoticiasService]*/
})
export class SearchComponent implements OnInit {

  constructor(private noticias: NoticiasService) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
 /* console.log("adasd");
    console.log({nombre:{nombre:{nombre:{nombre:"pepe"}}}});
    console.dir({nombre:{nombre:{nombre:{nombre:"pepe"}}}});
    console.log([1,2,3]);
    console.dir([4,5,6]); */
    this.noticias.agregar("hola!");
    this.noticias.agregar("hola 2!");
    this.noticias.agregar("hola 3!");
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
}
