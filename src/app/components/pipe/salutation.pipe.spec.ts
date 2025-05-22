import { SalutationPipe } from '../pipe/salutation.pipe';

describe('SalutationPipe', () => {
  it('create an instance', () => {
    const pipe = new SalutationPipe();
    expect(pipe).toBeTruthy();
  });
});
