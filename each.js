Array.prototype.each=function(x){
	var f=x,i,m,l;
	if(f){i=0;m=this;l=m.length;while(i<l){f(m[i],i,m);++i;};};
};



/*
var m=[1,2,3,4,5];
m.each(function(value,index,thearray){console.log(index+'/'+value,thearray);});
*/
