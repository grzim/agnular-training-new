import { TestBed, async, inject } from '@angular/core/testing';

import { IsMatureGuard } from './is-mature.guard';

describe('IsMatureGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsMatureGuard]
    });
  });

  it('should ...', inject([IsMatureGuard], (guard: IsMatureGuard) => {
    expect(guard).toBeTruthy();
  }));
});
