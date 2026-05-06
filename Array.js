// 1) REVERSE AN ARRAY  //

// METHOD 1:- REDUCE //
// let a=[10,21,49,32,64]
// let b=a.reduce((acc,cur)=>{
//     acc.unshift(cur)
//     return acc
    
// },[])
// console.log("The reverse array are:-",b);

// METHOD 2:- REVERSE METHOD
// let arr=[10,21,49,32,64]
// let arr2=arr.reverse()
// console.log("The reverse array are:-",arr2);

// METHOD 3:- CUSTOM CODE //
// let a=[10,21,49,32,64]
// let b=[]
// for(let i=0;i<a.length;i++){
//     b.unshift(a[i])
// }
// console.log("The reverse array are:-",b);


// 2) FIND THE MAXIMUM AND MINIMUM ELEMENT //


// METHOD 1:- REDUCE //
// let a=[10,20,40,50,30]
// let b=a.reduce((acc,cur)=>{
//     if(cur > acc){
//         acc=cur
//     }
//     return acc

// },0)
// console.log("The maximum element in an array is:- ",b);
// let c=a.reduce((acc,cur)=>{
//     if(cur <acc){
//         acc=cur
//     }
//     return acc
// })
// console.log("The minimum element in an array is:- ",c);

// METHOD 2:- CUSTOM CODE:- //
// let a=[10,20,30,40,50,60,7]
// let b=0
// for(let i=0;i<a.length;i++){
    
//     if(a[i]>b){
//         b=a[i]
//     }
    
// }
// console.log("The maximum element in this array is:-",b);
// let c=a[0]
// for(let i=0;i<a.length;i++){
//     if(a[i]<c){
//         c=a[i]
//     }
// }
// console.log("The minimum element in this array is ",c);


// 3) COUNT EVEN AND ODD NUMBER //

// let even=0
// let odd=0
// let a=[2,4,24,16,17,19,30,45,80]
// for(let i=0;i<a.length;i++){
//     if(a[i] % 2==0){
//         even++
//     }
//     else{
//         odd++
//     }
// }
// console.log("The total even number is",even);
// console.log("The total odd number is",odd);

// 4) SUM OF ALL ELEMENTS //

// METHOD 1:- REDUCE //
// let a=[10,20,30,40]
// let b=a.reduce((acc,cur)=>{
//     acc+=cur
//     return acc

// },0)
// console.log("The sum of all elements in an array is:-",b);

// METHOD 2:- CUSTOM CODE //
// let a=[10,20,30,40]
// let b=0
// for(let i=0;i<a.length;i++){
//     b+=a[i]
    
// }
// console.log("The sum of all elements in an array is:-",b);



// 5) REMOVE DUPLICATES FROM AN ARRAY

// METHOD 1:- FILTER
// let a=[1,2,3,3,4,5,6]
// let b=a.filter((item,index,arr)=>{
//     return arr.indexOf(item)==index
// })
// console.log("The original array is:- ",b);

// METHOD 2:- REDUCE
// let a=[1,2,3,3,4,5,6]
// let b=a.reduce((acc,cur)=>{
//     !acc.includes(cur)?acc.push(cur):""
//     return acc

// },[])
// console.log("The original array is:-",b);

// METHOD 3:- CUSTOM CODE
// let a=[1,2,3,3,4,5,6]
// let b=[]
// for(let i=0;i<a.length;i++){
//     if(!b.includes(a[i])){
//         b.push(a[i])
//     }
// }
// console.log("The original array is:-",b);

// 6) FIND THE SECOND LARGEST NUMBER


// 7) MERGE TWO ARRAYS 

// METHOD 1:-CONCAT METHOD //
// let a=[1,2,3,4]
// let b=[5,6,7,8]
// let c=a.concat(b)
// console.log(c);

// METHOD 2:-SPREAD OPERATOR
// let c=[...a,...b]
// console.log(c);

// 8)	Find common elements between two arrays

// METHOD 1:- REDUCE
// let a=[1,2,3,4]
// let b=[3,4,5,6]
// let c=a.reduce((acc,cur)=>{
//     if(b.includes(cur)){
//         acc.push(cur)
//     }
//     return acc
// },[])
// console.log(c);

//METHOD 2:- CUSTOM CODE
// let a=[1,2,3,4]
// let b=[3,4,5,6]
// let c=[]
// for(let i=0;i<a.length;i++){
//     if(b.includes(a[i])){
//         c.push(a[i])
//     }
// }
// console.log(c);


// METHOD 3:- FILTER
// let a=[1,2,3,4]
// let b=[3,4,5,6]
// let c=a.filter((item)=>{
//     return item=b.includes(item)
// })
// console.log("The common elements between two arrays are:-",c);



// 9)	Rotate array by k positions

// METHOD 2:-CUSTOM CODE //
// let rotate=(arr,k)=>{
//     let n= arr.length
//     let result=[]
//     for(let i=n-k;i<n;i++){
//         result.push(arr[i])
        
//     }
//     for(let i=0;i<n-k;i++){
//         result.push(arr[i])
//     }
//     return result
// }
// console.log(rotate([1,2,3,4],2));

// 16)	Count number of keys
// let a={
//     name:"Mahadev",
//     address:"Kailash",
//     hobby:"Blessing",
//     wife:"Mata Parvati"

// }
// let b=Object.keys(a)
// console.log("The number of keys are:-",b.length);

// 17)	Merge two objects
// let a={
//     name:"Mahadev",
//     address:"Kailash"
// }
// let b={
//     Wife:"Parvati",
//     Hobby:"Tandav"

// }
// USING SPREAD OPERATOR
// let c={...a,...b}
// console.log(c);

// USING OBJECT.ASSIGN METHOD //
// let c=Object.assign({},a,b)
// console.log(c);

// 18)	CONVERT OBJECT TO ARRAY
// let a={
//     name:"Mahadev",
//     address:"Kailash",
//     Wife:"Parvati",
//     Hobby:"Tandav"
// }
// let b=Object.entries(a)
// console.log(b);

// 19) DEEP CLONE AN OBJECT
// let a={
//     name:"Mahadev",
//     address:"Kailash",
//     hobbies:{
//         one:"Tandav",
//         two:"Blessing"
//     }
// }
// METHOD 1:- BY USING JSON.PARSE //
// let b=JSON.parse(JSON.stringify(a))    

// METHOD 2:- BY USING STRUCTURED CLONE //
// let b=structuredClone(a) 

// b.name="Mata Parvati"
// b.hobbies.one="Praising"

// console.log(a);
// console.log(b);

// 23)	Convert array of objects into a single object
let a=[
    {
        name:"Somali",
        address:"Kolkata"
    }
]
// let b=Object.assign(a)
let b={...a}
console.log(b);















