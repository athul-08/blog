import { Component } from '@angular/core';
import { TaskDirective } from '../Directive/task.directive';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [TaskDirective],
  templateUrl: './author.component.html',
  styleUrl: './author.component.scss'
})
export class AuthorComponent {

}
