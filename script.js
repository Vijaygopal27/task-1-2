var arr= ['GUVI', 'I', 'am', 'a geek'];
function transformFirstAndLast(arr){
    let newObject={}
    let arrlength=arr.length
    newObject[arr[0]]=arr[arrlength-1]
    
 return newObject;
}
console.log(transformFirstAndLast(arr))