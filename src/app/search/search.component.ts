import { Component, ElementRef, OnInit, ViewChild } from "@angular/core"
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application, Color, View } from '@nativescript/core'
import { NoticiasService } from '../domain/noticias.service'
// import * as Toast from "nativescript-toast"
// import { Store } from "@ngrx/store"
// import { AppState } from "../app.module"
// import { Noticia, NuevaNoticiaAction } from "../domain/noticias-state.model"
import * as SocialShare from "@nativescript/social-share";

@Component({
  selector: 'Search',
  templateUrl: './search.component.html'/*,
  providers: [NoticiasService]*/
})
export class SearchComponent implements OnInit {
  noticias: NoticiasService;
  resultados: Array<string> = [];
  @ViewChild("layout") layout: ElementRef;

  constructor(noticias: NoticiasService/* , private store: Store<AppState> */) {
    this.noticias = noticias;
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
    // console.log("adasd");
    // console.log({nombre:{nombre:{nombre:{nombre:"pepe"}}}});
    // console.dir({nombre:{nombre:{nombre:{nombre:"pepe"}}}});
    // console.log([1,2,3]);
    // console.dir([4,5,6]);
    // this.noticias.agregar("hola!");
    // this.noticias.agregar("hola 2!");
    // this.noticias.agregar("hola 3!");
    // this.store.select((state) => state.noticias.sugerida)
    // .subscribe((data) => {
    //     const f = data;
    //     if (f != null) {
    //        Toast.show({text: "Sugerimos leer: " + f.titulo, duration: Toast.DURATION.SHORT});
    //     }
    // });
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

  onItemTap(args): void {
    console.dir(args);
    // this.store.dispatch(new NuevaNoticiaAction(new Noticia(args.view.bindingContext)));
  }

  buscarAhora(s: string) {
    console.dir("buscarAhora" + s);
    this.noticias.buscar(s).then((r: any) => {
        console.log("resultados buscarAhora: " + JSON.stringify(r));
        this.resultados = r;
    }, (e) => {
        console.log("error buscarAhora " + e);
        //Toast.show({text: "Error en la búsqueda", duration: Toast.DURATION.SHORT});
    });
  }

  onLongPress(s): void {
    console.log(s);
    SocialShare.shareText(s, "Asunto: compartido desde el curso!");
  }

}
