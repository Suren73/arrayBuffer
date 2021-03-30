import ArrayBufferConverter, { getBuffer } from '../app';

test('testing class ArrayBufferConverter', () => {
  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const arrayBufferConverter = new ArrayBufferConverter();
  arrayBufferConverter.load(getBuffer());
  const received = `${arrayBufferConverter.toString()}`;
  expect(received).toBe(expected);
});
