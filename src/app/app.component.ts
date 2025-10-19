import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tree = {
    "a": ["b", "c"],
    "b": ["d", "e"],
    "c": ["f", "g"],
    "e": ["h", "i"],
    "f": ["j", "k"]
  };

  root: string = '';

  ngOnInit(): void {
    const keys = Object.keys(this.tree);
    if (keys.length > 0) {
      this.root = keys[0];
    }
  }
}