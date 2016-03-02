exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(this,arr)
  },

  speak : function(fn, obj) {
    return fn.apply(obj)
  },

  functionFunction : function(str) {

      var callback=function(str2){
        return str+', '+str2
      }

      return callback;
  },

  makeClosures : function(arr, fn) {
    return arr.map(function(record){
      return function(){
        return fn(record)
      }
    })
  },

  partial : function(fn, str1, str2) {
    return function(str3){
      return fn.call(this,str1,str2,str3)
    }
  },

  useArguments : function() {
    var obj=[],i;
    for(i in arguments){
      obj.push(arguments[i]);
    }
    return obj.reduce(function(a,b){
      return a+b;
    })
  },

  callIt : function(fn) {
    var arg=[],i;
    for(i in arguments){
      if(i==0){
        continue;
      }
      arg.push(arguments[i]);
    }
    return fn.apply(this,arg)
  },

  partialUsingArguments : function(fn) {
    var arg=[],i;
    for(i in arguments){
      if(i==0){
        continue;
      }
      arg.push(arguments[i]);
    }

    return function(){
      var arg2=[],i;
      for(i in arguments){
        arg2.push(arguments[i]);
      }

      return fn.apply(this,arg.concat(arg2))
    }
  },

  curryIt : function(fn) {
    var arg=[],i;
    for(i in arguments){
      if(i==0){
        continue;
      }
      arg.push(arguments[i]);
    }

    return function(){
      return fn.apply(this,arg)
    }
  }
};
