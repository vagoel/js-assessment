exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item)
  },

  sum : function(arr) {
    return arr.reduce(function(a,b){
        return a+b;
    },0)
  },

  remove : function(arr, item) {

    var i;

      for(i=arr.length-1;i>=0;i--){
        if (arr[i] === item) arr.splice(i, 1);
      }
    
    return arr;
  },

  removeWithoutCopy : function(arr, item) {
    var i;

      for(i=arr.length-1;i>=0;i--){
        if (arr[i] === item) arr.splice(i, 1);
      }
    
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.splice(0,0,item);
    return arr;
  },

  curtail : function(arr) {
    arr.splice(0,1);
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index,0,item);
    return arr;
  },

  count : function(arr, item) {
    var count=0;
    arr.forEach(function(value,index,myArr){
      if(item==value){count++};
    })
    return count;
  },

  duplicates : function(arr) {
    var countMap={},
    i,
    results=[];

    arr.forEach(function(value,index,arr){
        if(!countMap[value])
        countMap[value]=this.count(arr,value);

    },this)

    Object.keys(countMap).forEach(function(value,index,arr){
      if(countMap[index]>1) results.push(index)
    })
    
      

    return results;
  },

  square : function(arr) {
    return arr.map(function(record){
      return Math.pow(record,2);
    })
  },

  findAllOccurrences : function(arr, target) {
    var results=[];
    arr.forEach(function(value,index,myArr){
      if(target==value){results.push(index)};
    })

    return results;
  }
};
