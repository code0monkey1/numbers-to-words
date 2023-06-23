
interface INumberToWord{

      convert:(num : number)=>string
}

export function getNumberToWords() :INumberToWord{


      return {
         convert(num:number){

             let word = ''
              
             if(isBetween1000and9999(num)){
                
                const thousands = getThousandsWord(num)

                const hundreds = getHundredsWord(num)

                const tens = getTensWord(num)

                const ones = getOnesWord(num)
  
                word = thousands+
                (hundreds!=='zero'?` ${hundreds}`:'')+
                (tens !=='zero'?` ${tens}`:'')+
                (tens !=='zero'?`-`:'')+
                (ones!=='zero'?`${ones}`:'')
                
             }
             else if(isBetween100and999(num)){

                 word = getHundreds(num)
             }
             else if(isBetween21and99(num)){

                   word = getTens(num)
             }
             else{

                word= NumberToWord[num]
             }
        
            return word
         }

      
      }

  function getTens(num: number) {

    const tens = getTensWord(num)

    const ones = getOnesWord(num)

    return tens+(ones!=='zero'?'-'+ones:'')
  }

  function getHundreds(num: number) {

     num%=1000

    const parsedHundreds = getHundredsWord(num)

    const tens = getTensWord(num)

    const ones = getOnesWord(num)

    const parsedTens = tens !== 'zero' ?
      ` ${tens}` : ''

    const parsedOnes = ones!=='zero' ?
      `${tens !== 'zero' ? '-' : ' '}${ones}` : ''

    return parsedHundreds+parsedTens+parsedOnes
  }
}

function  isBetween21and99(num:number):boolean{

    return num>20 && num <100
} 

function getTensWord(num:number):string{
 
      let tens=num%100
  
       tens -= tens%10
     
       if(tens ===0){
        return 'zero'
       }

     return NumberToWord[tens]
}

function isBetween1000and9999(num:number):boolean{

     return num>=1000 && num<=9999
}


function isBetween100and999(num:number):boolean{

     return num>=100 && num<=999
}

function getOnesWord(num:number):string{

     const ones = num%10

     return NumberToWord[ones]

}

function getHundredsWord(num:number):string{
     
     let hundreds = num%1000

      hundreds = Math.floor(hundreds/100)
     
    if(hundreds===0){
      return 'zero'
    }

     return NumberToWord[hundreds] + ' hundred'
}

function getThousandsWord(num :number):string{

   const thousands = Math.floor(num/1000)

   return NumberToWord[thousands]+ ' thousand'
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