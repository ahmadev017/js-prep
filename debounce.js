


function debounce(fn, delay){
    let timerId;

    return function (...args){
        clearTimeout(timerId);
        timerId = setTimeout(()=>{
            fn(...args)
        },delay)
    }
}



const search = (query)=>{
    console.log(`searching for`, query)
};


const searchWithDebounce = debounce(search, 1000)

searchWithDebounce('Ha')
searchWithDebounce('Har')
searchWithDebounce('Hard')
searchWithDebounce('Hard j')
searchWithDebounce('Hard js')
searchWithDebounce('Hard js')
searchWithDebounce('Hard js')