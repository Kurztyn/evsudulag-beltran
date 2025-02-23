import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'users',
        loadChildren: () => import('./module/users/users.module').then(m => m.UsersModule)
    },
    {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
    }
];
