import { Routes } from '@angular/router';
import { HomeComponent } from './_components/home/home.component';
import { InitComponent } from './_components/init/init.component';
import { MydriveComponent } from './_components/mydrive/mydrive.component';
import { SharedwithmeComponent } from './_components/sharedwithme/sharedwithme.component';
import { RecentsComponent } from './_components/recents/recents.component';
import { StarredComponent } from './_components/starred/starred.component';
import { StorageComponent } from './_components/storage/storage.component';
import { TrashComponent } from './_components/trash/trash.component';

export const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { 
        path: '',
        component: InitComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'home', component: HomeComponent },
            { path: 'mydrive', component: MydriveComponent },
            { path: 'shared', component: SharedwithmeComponent },
            { path: 'recent', component: RecentsComponent },
            { path: 'starred', component: StarredComponent },
            { path: 'trash', component: TrashComponent },
            { path: 'storage', component: StorageComponent },
        ]
    }
];
