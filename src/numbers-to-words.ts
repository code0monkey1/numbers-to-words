
interface INumberToWord{

      convert:(num : number)=>string
}



export function getNumberToWords() :INumberToWord{

  const NumberToWord:Record<number,string> ={
      1:'one',
      2:'two',
      3:'three',
      4: 'four',
      5 :'five',
      6 :'six',
      7: 'seven',
      8: 'eight',
      9 : 'nine',
      0: 'zero'
  }

      return {
         convert(num:number){

             return NumberToWord[num]
             
         }
      }
}