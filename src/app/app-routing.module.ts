import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

import { LayoutComponent } from "./layout/layout.component";
import { ProductDetailComponent } from "./product/components/product-detail/product-detail.component";

import { AdminGuard } from "./admin.guard";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "/home",
        pathMatch: "full",
      },
      {
        path: "home",
        loadChildren: () =>
          import("./home/home.module").then((m) => m.HomeModule),
      },
      {
        path: "contact",
        loadChildren: () =>
          import("./contact/contact.module").then((m) => m.ContactModule),
      },

      {
        path: "login",
        loadChildren: () =>
          import("./login/login.module").then((m) => m.LoginModule),
      },
      {
        path: "products",
        loadChildren: () =>
          import("./product/product.module").then((m) => m.ProductModule),
      },
      {
        path: "id",
        component: ProductDetailComponent,
      },
    ],
  },
  {
    path: "**",
    loadChildren: () =>
      import("./page-not-found/page-not-found.module").then(
        (m) => m.PageNotFoundModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
