import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ProductModel } from '../../../model/ProductModel';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent {
  @Input() product: ProductModel;
}
