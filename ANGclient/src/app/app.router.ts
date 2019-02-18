/*
Import
*/
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { RegisterPageComponent } from "./pages/register-page/register-page.component";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
//

/*
Definition
*/
const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'register',
        component: RegisterPageComponent
    },
    {
        path: 'login',
        component: LoginPageComponent
    },{
        path: 'chat',
        component: ChatPageComponent,
    }
]
//

/*
Export
*/
export const AppRouter: ModuleWithProviders = RouterModule.forRoot(routes, { enableTracing: true } )
//