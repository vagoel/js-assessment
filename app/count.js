exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
  	console.log(start);
  	var handler=setInterval(function(){
  		start++;
  		console.log(start);
  		if(start>=end){
  			clearInterval(handler);
  		}
  	},100)

  	var cancel=function(){
  		clearInterval(handler);
  	}

  	return {
  		cancel:cancel
  	}

  	
  }
};
