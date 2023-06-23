import { getNumberToWords } from "../src/numbers-to-words"

describe('numbers-to-words', () => {
      

     describe('single number',()=>{

         
         test('1 gives one',()=>{
           
           //arrange
             const sut= getNumberToWords()
            //act
            const result= sut.convert(1)
            
            //assert
            expect(result).toBe('one')

         })

            test('2 gives two',()=>{
           
           //arrange
             const sut= getNumberToWords()
            //act
            const result= sut.convert(2)
            
            //assert
            expect(result).toBe('two')

         })

     })
})

