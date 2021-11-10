import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuardGuard } from 'src/Guards/admin-guard.guard';
import { AuthGuardGuard } from 'src/Guards/auth-guard.guard';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { MainModule } from './main/main.module';

const routes: Routes = [
  {
    path:'movies',loadChildren:()=>MainModule,canActivate:[AuthGuardGuard],
    
  },
  {
    path:'Admin',loadChildren:()=>AdminModule, canActivate:[AdminGuardGuard]
  },
  {
    path:'',loadChildren:()=>AuthModule
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
