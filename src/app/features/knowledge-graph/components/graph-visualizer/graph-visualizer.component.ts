import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-graph-visualizer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './graph-visualizer.component.html',
  styleUrls: ['./graph-visualizer.component.css']
})
export class GraphVisualizerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
