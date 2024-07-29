import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
 @Input() image=[];
 @Input() title="";
 @Input() price=0
}
