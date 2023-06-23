import { getNumberToWords } from "../src/numbers-to-words"

describe('numbers-to-words', () => {
      

     describe('single number',()=>{

         test.each([
          {num:0,word:'zero'},
          {num:1,word:'one'},
          {num:2,word:'two'},
          {num:3,word:'three'},
          {num:4,word:'four'},
          {num:5,word:'five'},
          {num:6,word:'six'},
          {num:7,word:'seven'},
          {num:8,word:'eight'},
          {num:9,word:'nine'},
        ])('$num gives $word',({num,word})=>{
           
           //arrange
             const sut= getNumberToWords()

            //act
            const result= sut.convert(num)
            
            //assert
            expect(result).toBe(word)

         })

     })


     describe('double number',()=>{

          
         test.each([
          {num:10,word:'ten'},
          // {num:1,word:'one'},
          // {num:2,word:'two'},
          // {num:3,word:'three'},
          // {num:4,word:'four'},
          // {num:5,word:'five'},
          // {num:6,word:'six'},
          // {num:7,word:'seven'},
          // {num:8,word:'eight'},
          // {num:9,word:'nine'},
        ])('$num gives $word',({num,word})=>{
           
           //arrange
             const sut= getNumberToWords()
            //act
            const result= sut.convert(num)
            
            //assert
            expect(result).toBe(word)

         })


     })
})

