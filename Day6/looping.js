/*
two types of looping 
1.typical loop
->for loop,while loop,do...while 
2.advanced looping
->for  in,for of,for each
*/
var a=[10,20,30]
var b={"count":70,"abs":1}
for(let i in a){
    console.log(a[i])
}
for(let i in b){
    console.log(i,b[i])
}
//set
set=new Set(["hello",1,2,3,"Sece","44",2,"hello",15])
console.log(set)