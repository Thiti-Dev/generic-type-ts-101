/*Suppose that don’t want the previous function to be able to create non-number or non-string states (like boolean). How can we ensure this?*/

function useState<S extends number | string = number>(){
    let state : S


    function getState(){
        return state
    }

    function setState(val:S):void{
        state = val
    }

    return { getState, setState }
}

//const myState = useState<number>() // If you want to specify the type
const myState = useState() // we also don't need to specify the type if the target type === number (as we already set as a default type)
console.log(myState.getState()) // should returns undefined at first
//myState.setState(true) // this is not possible , the ide with be throwing an error that the type is not satisfy
myState.setState(5550123) // this is allowed
console.log(myState.getState()) // should returns 5550123

export {}; // prevent block-scoped warning