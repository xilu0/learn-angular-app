import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'knowledge-graph'
    },
    {
        path: 'knowledge-graph',
        loadComponent: () => import('./features/knowledge-graph/pages/knowledge-graph-page/knowledge-graph-page.component').then(c => c.KnowledgeGraphPageComponent)
    }
];
