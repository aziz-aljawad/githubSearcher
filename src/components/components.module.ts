import { NgModule } from "@angular/core";
import { SearchResultsComponent } from './search-results/search-results.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import {IonicModule} from 'ionic-angular'

@NgModule({
    declarations:[SearchResultsComponent,
    RepositoriesComponent],
    imports:[IonicModule],
    exports: [SearchResultsComponent,
    RepositoriesComponent]
})
export class ComponentsModule {

}