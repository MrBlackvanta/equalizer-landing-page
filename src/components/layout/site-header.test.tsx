import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vite-plus/test";
import SiteHeader from "./site-header";

describe("SiteHeader", () => {
  it("is the banner landmark and its logo links home by name", () => {
    render(<SiteHeader />);

    const home = within(screen.getByRole("banner")).getByRole("link", {
      name: "equalizer home",
    });

    expect(home).toHaveAttribute("href", "/");
  });
});
