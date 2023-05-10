let s = 'hello world';
var result = [...s].reduce((a, e) => {
     a[e] = a[e] ? a[e] + 1 : 1; return a 
    }, 
{

}); 
console.log(result);