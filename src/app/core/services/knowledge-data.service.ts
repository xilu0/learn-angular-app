import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface KnowledgeNode {
  id: string;
  label: string;
  type?: string;
}

export interface KnowledgeEdge {
  id: string;
  source: string;
  target: string;
}

@Injectable({
  providedIn: 'root'
})
export class KnowledgeDataService {

  constructor(private http: HttpClient) { }

  getNodes(): Observable<KnowledgeNode[]> {
    return this.http.get<KnowledgeNode[]>('/assets/mock-nodes.json');
  }

  getEdges(): Observable<KnowledgeEdge[]> {
    return this.http.get<KnowledgeEdge[]>('/assets/mock-edges.json');
  }
}
