import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { MediaComponent } from './media/media.component';
import { ConfigurationComponent } from './configuration/configuration.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'statistics', component: StatisticsComponent},
  { path: 'media', component: MediaComponent},
  { path: 'configuration', component: ConfigurationComponent},
  // TODO: I have to write the other components, every time I create one
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
