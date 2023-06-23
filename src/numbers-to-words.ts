
interface INumberToWord{

      convert:(num : number)=>string
}



export function getNumberToWords() :INumberToWord{

      return {
         convert(num:number){
             if(num===1)
               return 'one' 
             else return 'two'
         }
      }
}