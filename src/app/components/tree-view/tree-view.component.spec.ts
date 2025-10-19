// AI Generated Unit Tests for TreeViewComponent

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TreeViewComponent } from './tree-view.component';
import { Component } from '@angular/core';

@Component({
  template: `
    <app-tree-view
      [treeData]="tree"
      [rootKey]="root"
      [isRoot]="true">
    </app-tree-view>
  `
})
class TestHostComponent {
  tree = {
    "a": ["b", "c"],
    "b": ["d", "e"],
    "c": ["f", "g"],
    "e": ["h", "i"],
    "f": ["j", "k"]
  };
  root = "a";
}

describe('TreeViewComponent', () => {
  let component: TreeViewComponent;
  let fixture: ComponentFixture<TreeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TreeViewComponent, TestHostComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeViewComponent);
    component = fixture.componentInstance;
    component.treeData = {
      "a": ["b", "c"],
      "b": ["d"],
      "c": []
    };
    component.rootKey = 'a';
    component.isRoot = true;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the root node without a hyphen', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const rootText = compiled.querySelector('li')?.textContent?.trim();
    expect(rootText?.startsWith('-')).toBeFalse();
  });

  it('should render children nodes', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const children = compiled.querySelectorAll('ul ul li');
    expect(children.length).toBeGreaterThan(0);
  });

  it('should correctly fetch children of a node', () => {
    const children = component.getChildren('a');
    expect(children).toEqual(['b', 'c']);
  });

  it('should return empty array for node without children', () => {
    const children = component.getChildren('c');
    expect(children).toEqual([]);
  });

  it('should detect if a node has children', () => {
    expect(component.hasChildren('a')).toBeTrue();
    expect(component.hasChildren('c')).toBeFalse();
  });

  it('should display hyphens for non-root nodes', () => {
    // Create a new fixture using the host to test recursive rendering
    const hostFixture = TestBed.createComponent(TestHostComponent);
    hostFixture.detectChanges();

    const compiled = hostFixture.nativeElement as HTMLElement;
    const allLis = Array.from(compiled.querySelectorAll('li'));

    // Root node 'a' should NOT have a hyphen
    const rootText = allLis[0].textContent?.trim();
    expect(rootText?.startsWith('-')).toBeFalse();

    // At least one child node should have a hyphen
    const childNode = allLis.find(li => li.textContent?.trim().startsWith('-'));
    expect(childNode).toBeTruthy();
  });
});
