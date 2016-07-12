# js-each

var m=[1,2,3,4,5];

Array.prototype.each=function(x){
	var f=x,i,m,l;
	if(f){i=0;m=this;l=m.length;while(i<l){f(m[i],i);++i;};};
};

m.each(function(value,index){console.log(index+'/'+value);});
