import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vite-plus/test";
import PremiumEq from "./premium-eq";

describe("PremiumEq", () => {
  it("names its region after the plan heading", () => {
    render(<PremiumEq />);

    expect(screen.getByRole("region", { name: "Premium EQ" })).toContainElement(
      screen.getByRole("heading", { level: 2 }),
    );
  });

  it("states the monthly price", () => {
    render(<PremiumEq />);

    expect(screen.getByText("$4").parentElement).toHaveTextContent(
      "$4 / month",
    );
  });

  it("links each platform to its store", () => {
    render(<PremiumEq />);
    const region = screen.getByRole("region");

    expect(
      within(region).getByRole("link", { name: "iOS Download" }),
    ).toHaveAttribute("href", "https://www.apple.com/app-store/");
    expect(
      within(region).getByRole("link", { name: "Android Download" }),
    ).toHaveAttribute("href", "https://play.google.com/store/apps");
  });

  it("describes the app screenshot and hides the pattern", () => {
    render(<PremiumEq />);

    expect(screen.getAllByRole("img")).toEqual([
      screen.getByAltText("The equalizer app boosting treble by 10 dB"),
    ]);
  });
});
