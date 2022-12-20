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
