import { TruncateTextPipe } from './truncate-text.pipe';

describe('TruncateTextPipe', () => {
  const pipe = new TruncateTextPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return empty string if value is not found', () => {
    const value = pipe.transform(undefined);
    expect(value).toBe('');
  });

  it('should truncate the string and append "..." if value length is greater than maxLength', () => {
    const value = 'This is a long string';
    const maxLength = 10;

    const result = pipe.transform(value, maxLength);

    expect(result).toBe('This is a ...');
  });
});
