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
          {num:11,word:'eleven'},
          {num:12,word:'twelve'},
          {num:13,word:'thirteen'},
          {num:14,word:'fourteen'},
          {num:15,word:'fifteen'},
          {num:16,word:'sixteen'},
          {num:17,word:'seventeen'},
          {num:18,word:'eighteen'},
          {num:19,word:'nineteen'},
        ])('$num gives $word',({num,word})=>{
           
           //Arrange
             const sut= getNumberToWords()

            //Act
            const result= sut.convert(num)
            
            //Assert
            expect(result).toBe(word)

         })


     })


     describe('double numbers multiple of tens',()=>{

         test.each([
          {num:10,word:'ten'},
          {num:20,word:'twenty'},
          // {num:20,word:'twelve'},
          // {num:13,word:'thirteen'},
          // {num:14,word:'fourteen'},
          // {num:15,word:'fifteen'},
          // {num:16,word:'sixteen'},
          // {num:17,word:'seventeen'},
          // {num:18,word:'eighteen'},
          // {num:19,word:'nineteen'},
        ])('$num gives $word',({num,word})=>{
           
           //Arrange
             const sut= getNumberToWords()

            //Act
            const result= sut.convert(num)
            
            //Assert
            expect(result).toBe(word)

         })


     })
})

