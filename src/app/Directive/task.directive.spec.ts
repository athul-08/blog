import { TaskDirective } from './task.directive';
import { ElementRef } from '@angular/core';

describe('TaskDirective', () => {
  it('should create an instance', () => {
    const elementRefMock = {} as ElementRef;
    const directive = new TaskDirective(elementRefMock);
    expect(directive).toBeTruthy();
  });
});
