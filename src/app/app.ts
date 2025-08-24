import { Component, signal } from '@angular/core';
import { KnowledgeGraphPageComponent } from "./features/knowledge-graph/pages/knowledge-graph-page/knowledge-graph-page.component";

@Component({
  selector: 'app-root',
  imports: [KnowledgeGraphPageComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('learn-angular-app');
}
