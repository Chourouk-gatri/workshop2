import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Suggestion } from '../../../models/suggestion';
import { SuggestionService } from '../../../core/services/suggestion.service';

@Component({
  selector: 'app-list-suggestion',
  templateUrl: './list-suggestion.component.html',
  styleUrls: ['./list-suggestion.component.css']
})
export class ListSuggestionComponent implements OnInit {

  suggestions: Suggestion[] = [];
  favorites: Suggestion[] = [];
  searchTerm: string = '';
  categoryFilter: string = '';

  constructor(
    private router: Router,
    private suggestionService: SuggestionService
  ) {}

  ngOnInit(): void {
    this.suggestions = this.suggestionService.getSuggestions();
  }

  get uniqueCategories(): string[] {
    return Array.from(new Set(this.suggestions.map(s => s.category)));
  }

  get filteredSuggestions(): Suggestion[] {
    return this.suggestions.filter(s =>
      s.title.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
      (this.categoryFilter === '' || s.category === this.categoryFilter)
    );
  }

  applyFilter(): void {}

  likeSuggestion(s: Suggestion): void {
    if (s.status !== 'refusee') s.nbLikes++;
  }

  addToFavorites(s: Suggestion): void {
    if (s.status !== 'refusee' && !this.favorites.includes(s)) {
      this.favorites.push(s);
    }
  }

  getStatusEmoji(status: string): string {
    switch (status) {
      case 'acceptee':   return '✅';
      case 'refusee':    return '❌';
      case 'en_attente': return '⏳';
      default:           return '';
    }
  }

  goToForm(): void {
    this.router.navigate(['/suggestions/add']);
  }
}
