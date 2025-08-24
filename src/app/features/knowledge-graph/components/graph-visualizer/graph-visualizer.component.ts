import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KnowledgeNode, KnowledgeEdge } from '../../../../core/services/knowledge-data.service';

@Component({
  selector: 'app-graph-visualizer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './graph-visualizer.component.html',
  styleUrls: ['./graph-visualizer.component.css']
})
export class GraphVisualizerComponent implements OnInit {
  @Input() nodes: KnowledgeNode[] = [];
  @Input() edges: KnowledgeEdge[] = [];
  @Output() nodeSelected = new EventEmitter<KnowledgeNode>();

  constructor() { }

  ngOnInit(): void {
  }

  onNodeClick(node: KnowledgeNode): void {
    this.nodeSelected.emit(node);
  }

}
