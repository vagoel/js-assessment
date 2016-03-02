exports = (typeof window === 'undefined') ? global : window;

exports.modulesAnswers = {
  createModule : function(str1, str2) {
  	var module=(function(greeting,name){
  		this.name=name;
  		this.greeting=greeting;

  		var sayIt=function(){
  			return this.greeting+", "+this.name;
  		}

  		return{
  			sayIt:sayIt,
  			name:this.name,
  			greeting:this.greeting
  		}
  	})(str1,str2);

  	return module;
  }
};
