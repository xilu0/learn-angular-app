import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import * as mockNodes from '../../../assets/mock-nodes.json';
import * as mockEdges from '../../../assets/mock-edges.json';

export interface KnowledgeNode {
  id: string;
  title: string;
  description: string;
  category: string;
  details?: string;
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
    return of((mockNodes as any).default as KnowledgeNode[]);
  }

  getEdges(): Observable<KnowledgeEdge[]> {
    return of((mockEdges as any).default as KnowledgeEdge[]);
  }
}
