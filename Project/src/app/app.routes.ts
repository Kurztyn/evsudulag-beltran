import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'users',
        loadChildren: () => import('./module/users.module').then(m => m.UsersModule)
    },
    {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
    }
];
