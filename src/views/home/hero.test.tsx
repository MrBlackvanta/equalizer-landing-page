import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vite-plus/test";
import Backdrop from "./backdrop";
import Hero from "./hero";

describe("Hero", () => {
  it("opens the page with its one level-1 heading", () => {
    render(<Hero />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "We make your music sound extraordinary",
    );
  });

  it("keeps the backdrop art out of the accessibility tree", () => {
    const { container } = render(<Backdrop />);

    expect(container.firstElementChild).toHaveAttribute("aria-hidden", "true");
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });
});
