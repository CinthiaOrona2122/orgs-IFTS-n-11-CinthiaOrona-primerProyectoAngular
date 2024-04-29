import { Component } from '@angular/core';
import { JuegoComponent } from '../juego/juego.component';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [JuegoComponent],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  username="Pepe"

}
