import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { AuthorComponent } from './author/author.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, BlogComponent, AuthorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sports_blog';
}
