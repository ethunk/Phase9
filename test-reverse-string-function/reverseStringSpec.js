describe('reverseString', () => {
  // your tests, here
  it('the function takes a string as input and returns the string in reverse order', () => {
    let testValue = reverseString('string');
    expect(testValue).toBeDefined();
    expect(testValue).toBe('gnirts');
    }
  );
});
