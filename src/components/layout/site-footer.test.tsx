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

  it("offers the support address as a mail link", () => {
    render(<SiteFooter />);

    expect(
      screen.getByRole("link", { name: "equalizer@example.com" }),
    ).toHaveAttribute("href", "mailto:equalizer@example.com");
  });

  it("names each social link after its network", () => {
    render(<SiteFooter />);

    expect(screen.getByRole("link", { name: "Facebook" })).toHaveAttribute(
      "href",
      "https://www.facebook.com/",
    );
    expect(screen.getByRole("link", { name: "Instagram" })).toHaveAttribute(
      "href",
      "https://www.instagram.com/",
    );
    expect(screen.getByRole("link", { name: "Twitter" })).toHaveAttribute(
      "href",
      "https://twitter.com/",
    );
  });
});
