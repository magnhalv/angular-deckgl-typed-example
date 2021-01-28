import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  DeckGL,
  OrbitView,
  PolygonLayer,
  COORDINATE_SYSTEM,
  Deck,
  ScatterplotLayer,
} from 'deck.gl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'help';

  @ViewChild('myCanvas', { static: true })
  canvasEl: ElementRef<HTMLCanvasElement>;

  deck: Deck;

  ngOnInit() {
    this.deck = new Deck({
      canvas: this.canvasEl.nativeElement,
      controller: true,
      initialViewState: {
        latitude: 37.8,
        longitude: -122.45,
        zoom: 15,
      },
      layers: [
        new ScatterplotLayer({
          data: [
            {position: [-122.45, 37.8], color: [255, 0, 0], radius: 100}
          ],
          getColor: d => d.color,
          getRadius: d => d.radius
        })
      ],
      width: '100vw',
      height: '100vh',
      effects: [],
    });
  }
}
