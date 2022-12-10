import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegisterComponent } from "./register/register.component";

const routes:Routes=[{
    path:'auth',
    children:[
        {
            path:'login',
            component:LoginComponent,
            data:{
                title:'Login'
            }
        },
        {
            path:'register',
            component:RegisterComponent,
            data:{
                title:'Register'
            }
        },
        {
            path:'logout',
            component:LogoutComponent
        },
        {
            path:'profile',
            component:ProfileComponent,
            data:{
                title:'Profile'
            }
        }
    ]
   
}]
export const AuthRoutingModule=RouterModule.forChild(routes)