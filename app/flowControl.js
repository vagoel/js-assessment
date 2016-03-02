exports = (typeof window === 'undefined') ? global : window;

exports.flowControlAnswers = {
  fizzBuzz : function(num) {
    // write a function that receives a number as its argument;
    // if the number is divisible by 3, the function should return 'fizz';
    // if the number is divisible by 5, the function should return 'buzz';
    // if the number is divisible by 3 and 5, the function should return
    // 'fizzbuzz';
    //
    // otherwise the function should return the number, or false if no number
    // was provided or the value provided is not a number
    if(arguments.length==0||typeof num!=='number')return false;
    var divisibleBy=function(by){
        return num%by==0;
    }

    if(divisibleBy(3)&&divisibleBy(5)){
        return 'fizzbuzz'
    }else if(divisibleBy(3)){
        return 'fizz'
    }
    else if(divisibleBy(5)){
        return 'buzz'
    }
    else{
        return num;
    }
  }
};
