const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Miguel Angel', () => {
    expect(values.firstName).toEqual('Miguel Angel');
  });
  test('lastName is Restrepo Saavedra', () => {
    expect(values.lastName).toEqual('Restrepo Saavedra');
  });
  test('thisYear is 2025', () => {
    expect(values.thisYear).toEqual(2025);
  });
  test('birthYear is 2000', () => {
    expect(values.birthYear).toEqual(2000);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Miguel Angel Restrepo Saavedra and I am 25 years old.');
  });
});

describe('step 3', () => {
  test('fullName is Miguel Angel Restrepo Saavedra', () => {
    expect(values.fullName).toEqual('Miguel Angel Restrepo Saavedra');
  });
  test('age is 25', () => {
    expect(values.age).toEqual(25);
  });
});
