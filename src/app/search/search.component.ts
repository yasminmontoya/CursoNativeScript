import { Component, ElementRef, OnInit, ViewChild } from "@angular/core"
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application, Color, View } from '@nativescript/core'
import { NoticiasService } from '../domain/noticias.service'

@Component({
  selector: 'Search',
  templateUrl: './search.component.html'/*,
  providers: [NoticiasService]*/
})
export class SearchComponent implements OnInit {
  noticias: NoticiasService;
  resultados: Array<string> = [];
  @ViewChild("layout") layout: ElementRef;

  constructor(noticias: NoticiasService) {
    this.noticias = noticias;
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

  onItemTap(x): void {
    console.dir(x);
  }

  buscarAhora(s: string) {
    this.resultados = this.noticias.buscar().filter((x) => x.indexOf(s) >= 0);

    const layout = <View>this.layout.nativeElement;
    layout.animate({
      backgroundColor: new Color("blue"),
      duration: 300,
      delay: 150
    }).then(() => layout.animate({
      backgroundColor: new Color("white"),
      duration: 300,
      delay: 150
    }));
  }

}
