
interface INumberToWord{

      convert:(num : number)=>string
}



export function getNumberToWords() :INumberToWord{


      return {
         convert(num:number){

             let word = ''


             if(isBetween100and999(num)){

                  const hundreds = getHundredsWord(num)
                 
                  const tens = getTensWord(num%100)

                  const ones = getOnesWord(num%10)
                  
                  word = hundreds+
                        ' hundred '+
                        (tens!=='zero'?`${tens} `:'')+
                        (ones!=='zero'?ones:'')

             }
             else if(isBetween21and99(num)){
                   const tens = getTensWord(num)

                   const ones = getOnesWord(num)
                  
                   word =tens+(ones!=='zero'?'-'+ones:'')
             }
             else
                word= NumberToWord[num]
        
            return word
         },

      
      }
}

function  isBetween21and99(num:number):boolean{

    return num>20 && num <100
} 

function getTensWord(num:number):string{

     const tens = num - num%10

     return NumberToWord[tens]
}



function isBetween100and999(num:number):boolean{

     return num>=100 && num<=999
}

function getOnesWord(num:number):string{

     const ones =  num%10

     return NumberToWord[ones]

}

function getHundredsWord(num:number):string{

     const hundreds = Math.floor((num - num%100)/100)

     return NumberToWord[hundreds]+' hundred '
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