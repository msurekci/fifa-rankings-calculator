# FIFA Ranking Formula

Utility function to calculate the points of a national team based on the result.

The formula implemented is based on the documentation provided by FIFA: [Documentation](https://digitalhub.fifa.com/m/f99da4f73212220/original/edbm045h0udbwkqew35a-pdf.pdf)

## Example usage
```js
import calculatePoints from 'fifa-rankings-formula';

calculatePoints({ PBefore: 1300, I: 25, W: 1, PBeforeTeamB: 1500 })
```
### Todo
- Add Typescript support
