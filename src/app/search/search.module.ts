import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { SearchRoutingModule } from './search-routing.module'
import { SearchComponent } from './search.component'
import { NoticiasService } from '../domain/noticias.service'

@NgModule({
  imports: [NativeScriptCommonModule, SearchRoutingModule],
  declarations: [SearchComponent],
  //providers: [NoticiasService],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SearchModule {}
