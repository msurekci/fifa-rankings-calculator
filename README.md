# FIFA Ranking Formula

[![npm version](https://img.shields.io/npm/v/fifa-ranking-formula.svg)](https://www.npmjs.com/package/fifa-ranking-formula)

Utility function to calculate the points of a national team based on the result.


The formula implemented is based on the documentation provided by FIFA: [Documentation](https://digitalhub.fifa.com/m/f99da4f73212220/original/edbm045h0udbwkqew35a-pdf.pdf)

## Example usage
```js
import calculatePoints, { IMPORTANCE, RESULT_SCORE } from 'fifa-ranking-formula';

calculatePoints({ 
  PBefore: 1300, 
  I: IMPORTANCE.PLAY_OFF_AND_FINAL_NATIONS_LEAGUE, 
  W: RESULT_SCORE.WIN, 
  PBeforeTeamB: 1500 
});
```

### Options
```js

const options = {
  PBefore: 1300 // Points of the team before at the start of the game
  I: IMPORTANCE; // Importance score of the game 
  W: RESULT_SCORE; // Result for PBefore team (1 for win, 0.75 for draw, 0.5 for loss)
  PBeforeTeamB: number; // Points of the team played against at the start of the game
  PSO?: boolean; // Did the game finish with a penalty shootout?
  KnockoutRound?: boolean; // Was it a knockout round game?
}
```
