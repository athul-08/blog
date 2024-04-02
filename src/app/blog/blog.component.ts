import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { TaskDirective } from '../Directive/task.directive';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink, RouterOutlet, TaskDirective],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
}
