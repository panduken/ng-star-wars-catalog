import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsEntity } from 'src/app/+state/films/films.models';

@Component({
  selector: 'app-film-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css'],
})
export class FilmCardComponent {
  @Input() film!: FilmsEntity;
}
