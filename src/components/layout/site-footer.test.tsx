import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vite-plus/test";
import SiteFooter from "./site-footer";

describe("SiteFooter", () => {
  it("is the page's one footer landmark and carries the signature", () => {
    render(<SiteFooter />);

    const footer = screen.getByRole("contentinfo");

    expect(
      within(footer).getByRole("link", { name: "Abdelrhman Abdelaal" }),
    ).toBeInTheDocument();
  });
});
