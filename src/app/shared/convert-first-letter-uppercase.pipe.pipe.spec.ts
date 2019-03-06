import { ConvertFirstLetterUppercase } from './convert-first-letter-uppercase.pipe.pipe';

describe('ConvertFirstLetterUppercase.PipePipe', () => {
  it('create an instance', () => {
    const pipe = new ConvertFirstLetterUppercase();
    expect(pipe).toBeTruthy();
  });
});
