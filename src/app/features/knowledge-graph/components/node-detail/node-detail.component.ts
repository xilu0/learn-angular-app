import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KnowledgeNode } from '../../../../core/services/knowledge-data.service';

@Component({
  selector: 'app-node-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './node-detail.component.html',
  styleUrls: ['./node-detail.component.css']
})
export class NodeDetailComponent implements OnInit {

  @Input() node: KnowledgeNode | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
