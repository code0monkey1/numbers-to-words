
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
      0: 'zero',

      10:'ten',
      11:'eleven',
      12:'twelve',
      13:'thirteen',
      14:'fourteen',
      15:'fifteen',
      16:'sixteen',
      17:'seventeen',
      18:'eighteen',
      19:'nineteen',

      20:'twenty',
      30:'thirty',
      40:'forty',
      50:'fifty',
      60:'sixty',
      70 :'seventy',
      80 :'eighty',
      90 :'ninety'

  }

      return {
         convert(num:number){

             if ( num === 21){
              return 'twenty-one'
             }
             if(num===22){
              return 'twenty-two'
             }

             return NumberToWord[num]

         }
      }
}