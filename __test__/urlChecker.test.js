import { checkUrl } from '../src/client/js/urlChecker'

test('test checkUrl', () => {
    expect(checkUrl("")).toBe(false);
    expect(checkUrl("123")).toBe(false);
    expect(checkUrl("invalid")).toBe(false);
    expect(checkUrl("http://neverssl.com")).toBe(true);
    expect(checkUrl("https://www.google.com")).toBe(true);
});