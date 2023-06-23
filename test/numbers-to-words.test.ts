import { getNumbersToWords } from "../src/numbers-to-words"

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
             const sut= getNumbersToWords()

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
                  const sut= getNumbersToWords()
     
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
              const sut= getNumbersToWords()
  
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
           const sut= getNumbersToWords()
   
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
                const sut= getNumbersToWords()
        
                //Act
                const result= sut.convert(num)
                
                //Assert
                expect(result).toBe(word)

              })

        })

     })

         describe('four digits',()=>{
       
           //Bonus 
        describe('pure multiples of hundreds',()=>{
      test.each([
                  {num:1100,word:'eleven hundred'},
                  {num:2300,word:'twenty-three hundred'},
                  {num:5600,word:'fifty-six hundred'},
                  {num:9800,word:'ninety-eight hundred'},
    
                ])('$num gives $word',({num,word})=>{

                  //Arrange
                  const sut= getNumbersToWords()
          
                  //Act
                  const result= sut.convert(num)
                  
                  //Assert
                  expect(result).toBe(word)

                })

        })
         
        describe('pure multiples of thousands',()=>{

              test.each([
                {num:1000,word:'ten hundred'},
                {num:2000,word:'twenty hundred'},
                {num:5000,word:'fifty hundred'},
                {num:9000,word:'ninety hundred'},
  
              ])('$num gives $word',({num,word})=>{

                 //Arrange
                const sut= getNumbersToWords()
        
                //Act
                const result= sut.convert(num)
                
                //Assert
                expect(result).toBe(word)

              })

        })

        describe('with non-zero hundreds',()=>{
              test.each([
                {num:1100,word:'eleven hundred'},
                {num:2200,word:'twenty-two hundred'},
                {num:5300,word:'fifty-three hundred'},
              
  
              ])('$num gives $word',({num,word})=>{

                 //Arrange
                const sut= getNumbersToWords()
        
                //Act
                const result= sut.convert(num)
                
                //Assert
                expect(result).toBe(word)

              })

        })


        describe('multiples of thousands, with non-zero hundreds, and non zero tens',()=>{

              test.each([
                {num:1121,word:'one thousand one hundred twenty-one'},
                {num:3006,word:'three thousand six'},
                {num:9999,word:'nine thousand nine hundred ninety-nine'}
  
              ])('$num gives $word',({num,word})=>{

                 //Arrange
                const sut= getNumbersToWords()
        
                //Act
                const result= sut.convert(num)
                
                //Assert
                expect(result).toBe(word)

              })

        })

      

     })

     describe('misc test cases',()=>{

       test.each([

                {num:0,word:'zero'},
                {num:5,word:'five'},
                {num:8,word:'eight'},
                {num:10,word:'ten'},
                {num:21,word:'twenty-one'},
                {num:77,word:'seventy-seven'},
                {num:100,word:'one hundred'},
                {num:303,word:'three hundred three'},
                {num:555,word:'five hundred fifty-five'},
                {num:2000,word:'twenty hundred'},
                {num:3466,word:'three thousand four hundred sixty-six'},
                {num:2400 ,word:'twenty-four hundred'}
  
              ])('$num gives $word',({num,word})=>{

                 //Arrange
                const sut= getNumbersToWords()
        
                //Act
                const result= sut.convert(num)
                
                //Assert
                expect(result).toBe(word)

              })


     })

})

