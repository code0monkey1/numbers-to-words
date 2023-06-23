
interface INumberToWord{

      convert:(num : number)=>string
}



export function getNumberToWords() :INumberToWord{

  

      return {
         convert(num:number){

              let word = ''

             if(isTensDigit(num)){
                   const tens = getTensWord(num)

                   const ones = getOnesWord(num)
                  
                   word =tens+(ones!=='zero'?'-'+ones:'')
             }
             else{

                word= NumberToWord[num]
             }

        
            return word
         },

      
      }
}

function  isTensDigit(num:number):boolean{
    return num>20 && num <100
} 

function getTensWord(num:number):string{
     const tens = num - num%10

     return NumberToWord[tens]
}

function getOnesWord(num:number):string{
     const ones =  num%10
     return NumberToWord[ones]
}
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