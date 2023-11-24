$document.ready(function() {
    //cup to teaspoon
    function cupToTeaspoon(cup) {
        return cup * 48;
    }
    
    const cup = parseInt(prompt("enter a number"));
    const result = cupToTeaspoon(cup);
    alert(result);


    //teaspoon to cup
    function teaspoonToCup(teaspoon) {
        return teaspoon / 48;
    }

    const teaspoon = parseInt(prompt("enter a number"));
    const ans = teaspoonToCup(teaspoon);
    alert(ans);


    //millimeters to meter
    function millimetersTocentimeters(mm) {
        return mm / 10;
    }

    const mm = parseInt(prompt("enter a number"));
    const answer = millimetersTocentimeters(mm);
    alert(answer);


    //centimeter to millimeter
    function centimetersTomillimeters(cm) {
        return cm * 10;
    }

    const cm = parseInt(prompt("enter a number"));
    const finalResult = centimetersTomillimeters(cm);
    alert(finalResult);


    //ounces to grams
    function ouncesToGrams(ounces) {
        return ounces / 0.03527396;
    }

    const ounces = parseInt(prompt("enter a number"));
    const finalAnswer = ouncesToGrams(ounces);
    alert(finalAnswer);

    

    //grams to ounces
    function gramsToOunces(grams) {
        return grams * 0.03527396;
    }

    const grams = parseInt(prompt("enter a number"));
    const finalAns = gramsToOunces(grams);
    alert(finalAns);



    //gallon to liter
    function gallonToLiter(gallon) {
        return gallon * 3.785;
    }

    const gallon = parseInt(prompt("enter a number"));
    const output = gallonToLiter(gallon);
    alert(output);
})