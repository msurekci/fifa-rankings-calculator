import Decimal from "decimal.js";

export enum RESULT_SCORE {
  WIN = 1,
  DRAW = 0.5,
  LOSS = 0,
}

export enum IMPORTANCE {
  FRIENDLY_OUTSIDE_WINDOW = 5,
  FRIENDLY_INSIDE_WINDOW = 10,
  GROUP_NATIONS_LEAGUE = 15,
  PLAY_OFF_AND_FINAL_NATIONS_LEAGUE = 25,
  CONF_FINAL_UP_TO_QF = 35,
  CONF_FINAL_QF_AND_ABOVE = 40,
  WORLD_CUP_UP_TO_QF = 50,
  WORLD_CUP_QF_AND_ABOVE = 60,
}

const calculateWe = (PBefore: number, PBeforeTeamB: number) => {
  const dr = new Decimal(PBefore).minus(PBeforeTeamB);
  const powerOf = -dr.dividedBy(600);
  return new Decimal(1).dividedBy(new Decimal(10).pow(powerOf).plus(1));
};

const calculateW = (W: number, PSO: boolean) => {
  if (!PSO) return W;

  return W === 1 ? 0.75 : 0.5;
};

interface calculatePointsOptions {
  PBefore: number;
  I: IMPORTANCE;
  W: RESULT_SCORE;
  PBeforeTeamB: number;
  PSO?: boolean;
  KnockoutRound?: boolean;
}

const calculatePoints = ({
  PBefore,
  I,
  W,
  PBeforeTeamB,
  PSO,
  KnockoutRound,
}: calculatePointsOptions) => {
  const resultScore = calculateW(W, PSO);
  const We = calculateWe(PBefore, PBeforeTeamB);

  if (new Decimal(W).minus(We).isNegative && KnockoutRound) return PBefore;

  const firstCalc = new Decimal(resultScore).minus(We);
  const secondCalc = new Decimal(I).times(firstCalc);
  const finalCalc = secondCalc.plus(PBefore);
  return Number(finalCalc);
};

export default calculatePoints;
