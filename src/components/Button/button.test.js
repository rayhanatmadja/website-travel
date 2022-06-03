import React from "react";
import Button from "./Button";
import { render, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// test button apakah disable
test("the button is disabled, you cannot click it", () => {
  const { container } = render(<Button isDisabled />);

  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

// test loading (spinner)
test("still loading...", () => {
  const { container, getByText } = render(<Button isLoading />);

  expect(getByText(/loading/i)).toBeInTheDocument();
  expect(container.querySelector("span")).toBeInTheDocument();
});

// test a tag
test("rendering a tag, navigate to external", () => {
  const { container } = render(
    <Button type="link" href="" isExternal target="_blank" />
  );

  expect(container.querySelector("a")).toBeInTheDocument();
});

// test link component
test("rendering <Link/> component, navigate to internal", () => {
  const { container } = render(
    <Router>
      <Button type="link" href="" />
    </Router>
  );

  expect(container.querySelector("a")).toBeInTheDocument();
});
