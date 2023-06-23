import { getNumberToWords } from "../src/numbers-to-words"

describe('numbers-to-words', () => {
      
     describe('one digit',()=>{

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


     describe('two digits',()=>{
       
        describe('multiple of tens',()=>{
     
              test.each([
               {num:10,word:'ten'},
               {num:20,word:'twenty'},
               {num:30,word:'thirty'},
               {num:40,word:'forty'},
               {num:50,word:'fifty'},
               {num:60,word:'sixty'},
               {num:70,word:'seventy'},
               {num:80,word:'eighty'},
               {num:90,word:'ninety'},
             ])('$num gives $word',({num,word})=>{
                
                //Arrange
                  const sut= getNumberToWords()
     
                 //Act
                 const result= sut.convert(num)
                 
                 //Assert
                 expect(result).toBe(word)
     
              })
     
     
          })
        describe('between 11 and 19', () => {
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

        describe('between 21 and 99',()=>{
   
       test.each([

        {num:21,word:'twenty-one'},
        {num:22,word:'twenty-two'},
        {num:23,word:'twenty-three'},
        {num:95,word:'ninety-five'},
        {num:72,word:'seventy-two'},
        {num:89,word:'eighty-nine'},
        {num:99,word:'ninety-nine'},
   
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

     describe('three digits',()=>{
         
        describe('multiples of hundreds',()=>{

              test.each([
                {num:100,word:'one hundred'},
                {num:101,word:'one hundred one'},
                {num:209,word:'two hundred nine'},
                {num:999,word:'nine hundred ninety-nine'},
                {num:872,word:'eight hundred seventy-two'},
                {num :583, word :'five hundred eighty-three'},
                {num :123, word :'one hundred twenty-three'}
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

         describe('four digits',()=>{
         
        describe('multiples of thousands',()=>{

              test.each([
                {num:1000,word:'one thousand'},
                {num:2000,word:'two thousand'},
                {num:5000,word:'five thousand'},
                {num:9000,word:'nine thousand'},
  
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

})

