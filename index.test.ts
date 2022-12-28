import calculatePoints from "./index";

describe("calculatePoints", () => {
  it("should return the correct value", () => {
    expect(
      calculatePoints({ PBefore: 1300, I: 25, W: 1, PBeforeTeamB: 1500 })
    ).toBe(1317.07);
  });

  it("should calculate considering penalty shootouts", () => {
    expect(
      calculatePoints({
        PBefore: 1300,
        I: 25,
        W: 1,
        PBeforeTeamB: 1500,
        PSO: true,
      })
    ).toBe(1310.82);
  });

  it("should not reduce the points if loss was during knockout stage", () => {
    expect(
      calculatePoints({
        PBefore: 1300,
        I: 25,
        W: 0,
        PBeforeTeamB: 1500,
        KnockoutRound: true,
      })
    ).toBe(1300);
  });
});
