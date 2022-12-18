import Decimal from "decimal.js";

export const RESULT_SCORE = {
  WIN: 1,
  DRAW: 0.5,
  LOSS: 0,
};

export const IMPORTANCE = {
  FRIENDLY_OUTSIDE_WINDOW: 5,
  FRIENDLY_INSIDE_WINDOW: 10,
  GROUP_NATIONS_LEAGUE: 15,
  PLAY_OFF_AND_FINAL_NATIONS_LEAGUE: 25,
  CONF_FINAL_UP_TO_QF: 35,
  CONF_FINAL_QF_AND_ABOVE: 40,
  WORLD_CUP_UP_TO_QF: 50,
  WORLD_CUP_QF_AND_ABOVE: 60,
};

const calculateWe = (PBefore, PBeforeTeamB) => {
  const dr = new Decimal(PBefore).minus(PBeforeTeamB);
  const powerOf = -dr.dividedBy(600);
  return 1 / new Decimal(10).pow(powerOf).plus(1);
};

const calculateW = (W, PSO) => {
  if (!PSO) return W;

  return W === 1 ? 0.75 : 0.5;
};

const calculatePoints = ({
  PBefore,
  I,
  W,
  PBeforeTeamB,
  PSO,
  KnockoutRound,
}) => {
  const resultScore = calculateW(W, PSO);
  const We = calculateWe(PBefore, PBeforeTeamB);

  if (W - We < 0 && KnockoutRound) return PBefore;

  return PBefore + I * (resultScore - We);
};

export default calculatePoints;
