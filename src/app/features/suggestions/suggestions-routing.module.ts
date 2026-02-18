import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSuggestionComponent } from './list-suggestion/list-suggestion.component';
import { SuggestionDetailsComponent } from './suggestion-details/suggestion-details.component';
import { SuggestionFormComponent } from './suggestion-form/suggestion-form.component'; //
// ✅ ajouté

const routes: Routes = [
  { path: '', component: ListSuggestionComponent },
  { path: 'add', component: SuggestionFormComponent },     // ✅ ajouté — /suggestions/add
  { path: ':id', component: SuggestionDetailsComponent }   // /suggestions/1, /suggestions/2...

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuggestionsRoutingModule { }
