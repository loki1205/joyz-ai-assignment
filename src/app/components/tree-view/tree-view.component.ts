import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent {
  @Input() treeData: { [key: string]: string[] } = {};
  @Input() rootKey: string = '';
  @Input() isRoot: boolean = false; // root flag for hyphen control

  getChildren(node: string): string[] {
    return this.treeData[node] || [];
  }

  hasChildren(node: string): boolean {
    return !!this.treeData[node]?.length;
  }
}
