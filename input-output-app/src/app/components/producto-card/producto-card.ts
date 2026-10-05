import { Component, Input,Output, EventEmitter } from '@angular/core';
import { Producto } from '../../models/producto';


@Component({
  imports: [],
  selector: 'app-producto-card',
  styleUrl: './producto-card.css',
  templateUrl: './producto-card.html',
})
export class ProductoCard {
  @Input() producto!: Producto;
  @Output() eliminado = new
    EventEmitter<number>();
  onEliminar(): void {
    this.eliminado.emit(this.producto.id);
  }
}