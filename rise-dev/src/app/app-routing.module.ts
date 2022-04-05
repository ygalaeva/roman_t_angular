import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/compiler/src/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/pages/main/main.component';
import { ProjectdetailComponent } from './components/pages/projectdetail/projectdetail.component';
// import { AdminComponent } from './components/pages/admin/admin.component';
// import { AuthComponent } from './components/pages/auth/auth.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'project/:id', component: ProjectdetailComponent },
  {
    path: 'admin', loadChildren: () => import('../app/components/pages/admin/admin.module')
      .then(m => m.AdminModule)
  },
  { path: '**', redirectTo: '/' }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
