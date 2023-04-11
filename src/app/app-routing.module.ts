import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandingComponent } from "./landing/landing.component";
import { CaptainComponent } from "./captain/captain.component";
import { TreasureChestComponent } from "./treasure-chest/treasure-chest.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/landing", pathMatch: "full" },
  { path: "landing", component: LandingComponent },
  { path: "captain", component: CaptainComponent },
  { path: "treasure-chest", component: TreasureChestComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
