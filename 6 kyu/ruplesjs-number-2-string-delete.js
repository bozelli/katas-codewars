// http://www.codewars.com/kata/ruplesjs-number-2-string-delete

String.prototype.delete = function () {  
  var str = this.toString();
  
  for(let i = 0; i < arguments.length; i++) {
    switch(typeof arguments[i]) {
      case 'string':    
        str = str.replace(new RegExp(arguments[i], 'g'), "");
        break;
      case 'object':
        str = str.replace(arguments[i], "");    
        break;    
    }     
  }  
  
  return str;  
}