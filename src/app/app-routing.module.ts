import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./tabs/tabs.module").then(m => m.TabsPageModule)
  },
  {
    path: "subpage",
    loadChildren: () =>
      import("./subpage/subpage.module").then(m => m.SubpagePageModule)
  },
  {
    path: "subpage2",
    loadChildren: () =>
      import("./subpage2/subpage2.module").then(m => m.SubpagePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
