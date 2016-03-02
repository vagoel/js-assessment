exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, count) {
  	var strArr=str.split('');
  	var i,start;
  	var temp=[];

  	for(i=0;i<strArr.length;i++){
  		start=i;
  		while(strArr[i]==strArr[i+1]){
  			i++;
  		}
  		temp.push(strArr.slice(start,i+1).join('').substr(0,count))
  	}

  	return temp.join('');
  },
  wordWrap: function(str, cols) {
  	var strArr=str.split(' ');
  	var temp=[];
  	var i,start,tempStr;

  	for(i=0;i<strArr.length;i++){

  		if(strArr[i].length>=5){
  			temp.push(strArr[i],'\n');
  		}
  		else{
  			tempStr='';

  			while(tempStr.length<5){
  				if((strArr[i]+" "+strArr[i+1]).length<5){
  					if(i==strArr.length-1){
  						tempStr+=strArr[i];
  					}
  					else{
  						tempStr+=strArr[i]+" "+strArr[i+1];
  						i++;
  					}
  				}
  				else{
  					if(i==strArr.length-1){
  						tempStr+=strArr[i];
  					}
  					else{
  						tempStr+=strArr[i]+"\n"+strArr[i+1];
  						i++;
  					}
  				}
  			}
  			if(i==strArr.length-1){
  				temp.push(tempStr);
  			}
  			else{
  				temp.push(tempStr,'\n');
  			}

  		}
  	}

  	return temp.join('');
  },
  reverseString: function(str) {
  	return str.split('').reverse().join('')
  }
};
