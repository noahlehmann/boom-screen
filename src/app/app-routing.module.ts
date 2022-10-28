import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CounterComponent} from "./counter/counter.component";
import {AlertComponent} from "./alert/alert.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: "", component: HomeComponent, pathMatch: "full"},
  {path: "counter", component: CounterComponent},
  {path: "alerts", component: AlertComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
