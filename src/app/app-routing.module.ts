import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SentEmail} from "./SentEmail";
import {Contact} from "./contact";

const routes: Routes = [
  {path: '', component: Contact},
  {
    path: 'sent',
    component: SentEmail
  },

  {path: 'animalss', redirectTo: 'animals', pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
