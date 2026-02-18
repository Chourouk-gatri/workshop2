import {Component, NgIterable} from '@angular/core';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrl: './suggestions.component.css'
})
export class SuggestionsComponent {
  protected newSuggestion: any;
  protected categories: (NgIterable<unknown> & NgIterable<any>) | undefined | null;

  protected onSubmit() {

  }

  protected goBack() {

  }
}
