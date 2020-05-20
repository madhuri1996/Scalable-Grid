import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabledataComponent } from './table-data/tabledata/tabledata.component';


const routes: Routes = [
  {path: 'grid', component: TabledataComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
