import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Producto } from './models/producto';
import { ProductoCard } from './components/producto-card/producto-card';

@Component({
  imports: [RouterOutlet, ProductoCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('input-output-app');
  productos: Producto[] = [
    { id: 1, nombre: `Mouse`, precio: 8500, img: "https://i0.wp.com/static.nb.com.ar/i/nb_MOUSE-TRUST-YVI-MULTI-DEVICE-WIRELESS-BLACK_export_b16b129e8de5c5e2200a0c1fa499add1.jpg?ssl=1", descripcion: `Un mouse o ratón es un dispositivo de entrada diseñado para apuntar e interactuar con los elementos de la interfaz gráfica de una computadora` },
    { id: 2, nombre: `Teclado`, precio: 15200, img: "https://fujiokadistribuidor.vteximg.com.br/arquivos/ids/201113", descripcion: `Un teclado es un dispositivo de entrada fundamental compuesto por un conjunto de teclas que permiten al usuario introducir texto, números, símbolos y órdenes de control en una computadora, tableta o teléfono inteligente. ` },
    { id: 3, nombre: `Monitor`, precio: 92000, img: "https://www.gadnic.com.ar/_next/image?url=https%3A%2F%2Fstatic.bidcom.com.ar%2FpublicacionesML%2Fproductos%2FMON00206%2F768x926-MON00206-6.jpg&w=3840&q=75", descripcion: `Un monitor es un dispositivo de salida que muestra de forma visual la interfaz gráfica, imágenes y datos procesados por una computadora u otro aparato electrónico conectado.` },
  ]
  onEliminado(id: number): void {
    this.productos = this.productos.filter(
      p => p.id !== id
    );
  }
}