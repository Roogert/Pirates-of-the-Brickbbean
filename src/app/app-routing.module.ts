import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandingComponent } from "./landing/landing.component";
import { CaptainComponent } from "./captain/captain.component";
import { TreasureChestComponent } from "./treasure-chest/treasure-chest.component";
import { LoginComponent } from "./shared/auth/login/login.component";
import { SignoutComponent } from "./shared/auth/signout/signout.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/landing", pathMatch: "full" },
  { path: "landing", component: LandingComponent },
  { path: "captain", component: CaptainComponent },
  { path: "treasure-chest", component: TreasureChestComponent },
  {path: "login", component: LoginComponent},
  {path: "signout", component: SignoutComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
