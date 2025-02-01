import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  count: number = 0;
  msg: any = '';
  constructor(private counter: CounterService){}

  updateCount() {
    this.count += 1;
    this.counter.serviceCounter.next(this.count);
  }

  receiveMessage(msg: any) {
    console.log(msg);
    this.msg = msg;
  }
}
