import React from "react";
import { render } from "react-testing-library";

import App from "../App";
import filterEmoji from "../filterEmoji";

describe("<App />", () => {
  it("should render the app", () => {
    const myRenderedApp = render(<App />);
    expect(myRenderedApp).toBeDefined();
  });
});
describe("filterEmoji()", () => {
  it("should return the appropriate emoji", () => {
    // do something
    const smileyEmoji = [
      {
        title: "Grinning",
        symbol: "😀",
        keywords: "grinning face happy smiley emotion emotion"
      },
      {
        title: "Grin",
        symbol: "😁",
        keywords:
          "grinning face with smiling eyes happy silly smiley emotion emotion good good selfie selfie"
      }
    ];
    const filteredList = filterEmoji("grin", 2);
    console.log("filteredList", filteredList);
    expect(filteredList[0]).toEqual(smileyEmoji[0]);
    expect(filteredList[1]).toEqual(smileyEmoji[1]);

    // filterEmoji() is returning a list of filtered emojis
  });
});
// tests should mimic what the user does: greater confidence in tests
// TOTEST: if I type into the search bar, the results should return the associated emoji
