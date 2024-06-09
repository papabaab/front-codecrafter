import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  { path: '',
  pathMatch: 'full',
    redirectTo: '/admin',
   },
  { path: 'home',
  pathMatch: 'full',
  component: HomeComponent },
  {
    path: 'login',
    pathMatch: 'full',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'client',
    loadChildren: () => import('./pages/client/client.module').then(m => m.ClientModule)
  },
  {
    path: 'agent',
    pathMatch: 'full',
    loadChildren: () => import('./pages/agent/agent.module').then(m => m.AgentModule)
  },
  {
    path: 'admin',
    pathMatch: 'full',
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
