import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: "stock",
  templateUrl: "./stock.component.html",
  styleUrls: ["./stock.component.css"]
})
export class StockComponent {
  @Input() stock: number;
  @Input() productId: number;
  @Output() stockValueChange = new EventEmitter();
  color = "";
  updatedStockValue: number;

  stockValueChanged() {
    this.stockValueChange.emit({
      id: this.productId,
      updatedStockValue: this.updatedStockValue
    });
    this.updatedStockValue = null;
  }

  ngOnChanges() {
    if (this.stock > 10) {
      this.color = "green";
    } else {
      this.color = "red";
    }
  }
}
