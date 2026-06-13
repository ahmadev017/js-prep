const fruits = ['apple', 'orange','guava']
const arr = [fruit1,fruit2,fruit3] = fruits

console.log(fruit1)


//array like objects
{
    const a ='Ahmad'

console.log(a.length)
console.log(a[0])
}

{
     fun('ahmad',15,'kfueit','c')

      function fun(){
         console.log(arguments.length)
         console.log(arguments[2])
     }
}

//convert an array like object into an array

{
    const array1 = {0:'a',1:'b',2:'c',length:3}
    var result = Array.from(array1)
    console.log(result)
}

{
    const array1 = {0:'a',1:'b',2:'c',length:3}
    const result = [...array1]
    console.log(result)

}