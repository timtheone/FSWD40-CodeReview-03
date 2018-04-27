describe("calculateInsurance", function() {

 


    it("should return \"Tim, your insurance cost 550 &euro;\" for name: Tim, age:25, country: austria, and horsepower: 125",function(){


            expect(calculateInsurance("Tim", 25, "austria", 125)).toEqual("Tim, your insurance cost 550 &euro;");

    });

    it("should return \"Tim, your insurance cost 700 &euro;\" for name: Tim, age:25, country: germany, and horsepower: 125",function(){


        expect(calculateInsurance("Tim", 25, "germany", 125)).toEqual("Tim, your insurance cost 700 &euro;");

    });

    it("should return \"Tim, your insurance cost 844 &euro;\" for name: Tim, age:25, country: italy, and horsepower: 125",function(){


        expect(calculateInsurance("Tim", 25, "italy", 125)).toEqual("Tim, your insurance cost 844 &euro;");

    });

    it("should return \"Please enter your Name\" for name: empty,  age:25, country: italy, and horsepower: 125",function(){


        expect(calculateInsurance("", 25, "italy", 125)).toEqual("Please enter your Name");

    });

    it("should return \"Nothing to calculate. Please fill forms\" for name: Tim,  age: empty, country: italy, and horsepower: empty",function(){


        expect(calculateInsurance("Tim", NaN, "italy", NaN)).toEqual("Nothing to calculate. Please fill forms");

    });

    it("should return \"Nothing to calculate. Please fill forms\" for name: Tim,  age: 25, country: italy, and horsepower: empty",function(){


        expect(calculateInsurance("Tim", 25, "italy", NaN)).toEqual("Nothing to calculate. Please fill forms");

    });

    it("should return \"Nothing to calculate. Please fill forms\" for name: Tim,  age: empty, country: italy, and horsepower: 125",function(){


        expect(calculateInsurance("Tim", NaN, "italy", 125)).toEqual("Nothing to calculate. Please fill forms");

    });



});

