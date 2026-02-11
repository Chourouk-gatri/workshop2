import { Component } from '@angular/core';
import { Suggestion } from '../../../models/suggestion';

@Component({
  selector: 'app-list-suggestion',
  templateUrl: './list-suggestion.component.html',
  styleUrls: ['./list-suggestion.component.css']
})
export class ListSuggestionComponent {
  suggestions: Suggestion[] = [
    { id: 1, title: 'Organiser une journée team building', description: 'Suggestion pour organiser une journée team building pour renforcer les liens entre les membres de l\'équipe.', category: 'Événements', date: new Date('2025-01-20'), status: 'acceptee', nbLikes:10 },
    { id: 2, title: 'Améliorer le système de réservation', description: 'Proposition pour améliorer la gestion des réservations en ligne.', category: 'Technologie', date: new Date('2025-01-15'), status: 'refusee', nbLikes:0 },
    { id: 3, title: 'Créer un système de récompenses', description: 'Programme de récompenses pour motiver les employés.', category: 'Ressources Humaines', date: new Date('2025-01-25'), status: 'refusee', nbLikes:0 },
    { id: 4, title: 'Moderniser l\'interface utilisateur', description: 'Refonte complète de l\'interface utilisateur pour une meilleure expérience.', category: 'Technologie', date: new Date('2025-01-30'), status: 'en_attente', nbLikes:0 },
  ];

  favorites: Suggestion[] = [];
  searchTerm: string = '';
  categoryFilter: string = '';

  get uniqueCategories(): string[] {
    return Array.from(new Set(this.suggestions.map(s => s.category)));
  }

  get filteredSuggestions(): Suggestion[] {
    return this.suggestions.filter(s =>
      (s.title.toLowerCase().includes(this.searchTerm.toLowerCase())) &&
      (this.categoryFilter === '' || s.category === this.categoryFilter)
    );
  }

  applyFilter() {
    // Cette fonction permet de rafraîchir filteredSuggestions
  }

  likeSuggestion(s: Suggestion) {
    if (s.status !== 'refusee') s.nbLikes++;
  }

  addToFavorites(s: Suggestion) {
    if (s.status !== 'refusee' && !this.favorites.includes(s)) {
      this.favorites.push(s);
    }
  }

  getStatusEmoji(status: string) {
    switch(status) {
      case 'acceptee': return '✅';
      case 'refusee': return '❌';
      case 'en_attente': return '⏳';
      default: return '';
    }
  }
}
