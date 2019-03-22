import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  //{ path: 'red-wine', loadChildren: './red-wine/red-wine.module#RedWinePageModule' },
  { path: 'red-wine', loadChildren: './red-wine/red-wine.module#RedWinePageModule' },
  { path: 'white-wine', loadChildren: './white-wine/white-wine.module#WhiteWinePageModule' },
  { path: 'french-wine', loadChildren: './french-wine/french-wine.module#FrenchWinePageModule' },
  { path: 'classic-wine', loadChildren: './classic-wine/classic-wine.module#ClassicWinePageModule' },
  { path: 'shopping-cart', loadChildren: './shopping-cart/shopping-cart.module#ShoppingCartPageModule' }
  //{ path: 'details/:id', loadChildren: './pages/todo-details/todo-details.module#TodoDetailsPageModule' },
  //{ path: 'details', loadChildren: './pages/todo-details/todo-details.module#TodoDetailsPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
