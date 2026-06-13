//find()
const array = [1,2,3,4,5,]
let c = array.find((num)=>
              num%2 == 0
) 
console.log(c)


//filter()

{
   let c = array.filter((num)=>
              num%2 == 0
) 
console.log(c) 
}

//slice()

const arr = ['a','b','c','d','e']
     const a = arr.slice(1,4)
     console.log(a)
     
//push()

const array1 = [1,2]
array1.push(3,4,8)
console.log(array1)

//concat()

const z = [1,2,3]
const x = z.concat(4,5,15,7)
console.log(x)
console.log(z)

//pop()

const y=[23,4,567,56]
const popped = y.pop(3)
console.log(popped)
console.log()

//shift()
{
   const y=[23,4,567,56]
const popped = y.shift(3)
console.log(popped)
console.log() 
}

//splice()

{
    const a =['x','y','d','g','g']
    const y=[23,4,567,56]
const result = y.splice(1,2,...a)
console.log(y)
console.log() 
}

//map()

{
  const a =[1,2,3,4,5]
  const result = a.map((e)=>
       e*2
)
console.log(result)
}

// forEach()

{
      const a =[1,2,3,4,5]
       const result = a.forEach((e)=>{
         console.log(e*2)
       }
      
)
}

//sort()
{

    const arr = ['a','r','b','f','c']

    const result = arr.sort()
    console.log(result)
}

//reverse()
{

    const arr = ['a','r','b','f','c']

    const result = arr.reverse()
    console.log(result)
}