import { Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { AuthorComponent } from './author/author.component';
export const routes: Routes = [
    { path: '', 
      component: BlogComponent
    },
    {
        path: 'author-details', 
        component: AuthorComponent
    }
    
];

