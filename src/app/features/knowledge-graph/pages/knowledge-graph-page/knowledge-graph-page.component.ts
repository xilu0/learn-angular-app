import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KnowledgeDataService, KnowledgeNode, KnowledgeEdge } from '../../../../core/services/knowledge-data.service';
import { GraphVisualizerComponent } from '../../components/graph-visualizer/graph-visualizer.component';
import { NodeDetailComponent } from '../../components/node-detail/node-detail.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-knowledge-graph-page',
  standalone: true,
  imports: [
    CommonModule, 
    GraphVisualizerComponent, 
    NodeDetailComponent, 
    SearchBarComponent
  ],
  templateUrl: './knowledge-graph-page.component.html',
  styleUrls: ['./knowledge-graph-page.component.css']
})
export class KnowledgeGraphPageComponent implements OnInit {

  nodes$!: Observable<KnowledgeNode[]>;
  edges$!: Observable<KnowledgeEdge[]>;
  selectedNode: KnowledgeNode | null = null;

  constructor(private dataService: KnowledgeDataService) { }

  ngOnInit(): void {
    this.nodes$ = this.dataService.getNodes();
    this.edges$ = this.dataService.getEdges();
  }

  onNodeSelected(node: KnowledgeNode): void {
    this.selectedNode = node;
  }

}
