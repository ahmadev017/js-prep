const p1 ={
    fname : "Ahmad",
    age : 25
}

const proxyP1 = new Proxy(p1,{
    get(target, prop){
        if(!(prop in target)){
            return "Property does not exist"
        }
        return Reflect.get(target, prop)
    },
    set(target, prop, value){
        if(!(prop in target)) throw new Error(`Property ${prop} does not exist`)
            switch(prop){
                case  'fname' :
                    if(typeof value != 'string') throw new Error(`${prop} should be a string`)
                        break;
                    case 'age':
                        if(typeof value!= 'number' || value<= 0 || value > 100) throw new Error(`${prop} should be a number and greater than 0 and less than 100`)
                            break;
                    }
                    Reflect.set(target, prop, value)
                    return true;
    }
})

proxyP1.age = 150

console.log(proxyP1.age)