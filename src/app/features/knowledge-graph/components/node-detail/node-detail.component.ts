import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-node-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './node-detail.component.html',
  styleUrls: ['./node-detail.component.css']
})
export class NodeDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
