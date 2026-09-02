import { jest } from "@jest/globals";
import {
  buttonClicked,
  buttonClickedB,
  buttonClickedC,
} from "./01-passing-foo-as-argument.js";

const MESSAGE = "You clicked the button 2 seconds ago";
const DELAY = 2000;

// Each recipe passes its foo to setTimeout in a different way,
// so all three have to behave identically
const recipes = [
  {
    name: "buttonClicked (reference to a foo declared elsewhere)",
    foo: buttonClicked,
  },
  {
    name: "buttonClickedB (foo expression held in a variable)",
    foo: buttonClickedB,
  },
  {
    name: "buttonClickedC (foo declared inline in the call)",
    foo: buttonClickedC,
  },
];

describe.each(recipes)("$name", ({ foo }) => {
  let alertMock;

  beforeEach(() => {
    // Fake timers make the 2 second wait instant, and let us decide when it ends
    jest.useFakeTimers();
    // alert() is a browser API - it does not exist in Jest's node environment,
    // so we supply a mock we can inspect
    alertMock = jest.fn();
    globalThis.alert = alertMock;
  });

  afterEach(() => {
    jest.useRealTimers();
    delete globalThis.alert;
  });

  test("returns undefined, because the foo has no return statement", () => {
    expect(foo()).toBeUndefined();
  });

  test("schedules exactly one timer", () => {
    foo();
    expect(jest.getTimerCount()).toBe(1);
  });

  test("does not alert straight away", () => {
    foo();
    expect(alertMock).not.toHaveBeenCalled();
  });

  test(`does not alert until ${DELAY}ms have passed`, () => {
    foo();
    jest.advanceTimersByTime(DELAY - 1);
    expect(alertMock).not.toHaveBeenCalled();
  });

  test(`alerts exactly once after ${DELAY}ms`, () => {
    foo();
    jest.advanceTimersByTime(DELAY);
    expect(alertMock).toHaveBeenCalledTimes(1);
  });

  test("alerts with the expected message", () => {
    foo();
    jest.advanceTimersByTime(DELAY);
    expect(alertMock).toHaveBeenCalledWith(MESSAGE);
  });
});
