import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application, Dialogs } from '@nativescript/core'
import * as Toast from "nativescript-toast"

@Component({
  selector: 'Settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit {
  constructor() {
    // Use the component constructor to inject providers.
  }

 ngOnInit(): void {
        /*
        this.doLater(() =>
            dialogs.action("Mensaje", "Cancelar!", ["Opcion1", "Opcion2"])
                    .then((result) => {
                                        console.log("resultado: " + result);
                                        if (result === "Opcion1") {
                                            this.doLater(() =>
                                                dialogs.alert({
                                                    title: "Titulo 1 ",
                                                    message: "mje 1",
                                                    okButtonText: "btn 1"
                                                }).then(()  => console.log("Cerrado 1!")));
                                        } else if (result === "Opcion2") {
                                            this.doLater(() =>
                                                dialogs.alert({
                                                    title: "Titulo 2",
                                                    message: "mje 2",
                                                    okButtonText: "btn 2"
                                                }).then(() => console.log("Cerrado 2!")));
                                        }
        }));
        */

/*        const toastOptions: Toast.ToastOptions = {text: "Hello World", duration: Toast.DURATION.SHORT};
       this.doLater(() => Toast.show(toastOptions)); */
    }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
}
