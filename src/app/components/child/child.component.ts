import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, inject, OnInit } from '@angular/core';

import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent implements OnChanges, OnInit {
  @Input() count = 0;
  @Output() message = new EventEmitter();
  counter = inject(CounterService);
  conterFromService:any = 0;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['count'].currentValue);
    this.message.emit(` Updated Count => ${this.count}`);
  }

  ngOnInit(): void {
    this.counter.serviceCounter.subscribe((data)=>{
      this.conterFromService = data;
    })
  }

}
