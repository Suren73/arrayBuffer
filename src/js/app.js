export function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i++) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

export default class ArrayBufferConverter {
  constructor() {
    this.buffer = new ArrayBuffer();
  }

  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    this.result = String.fromCharCode.apply(this, new Uint16Array(this.buffer));
    return this.result;
  }
}
