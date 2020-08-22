//
// ─── CLONE CONCEPT FROM HOOK ────────────────────────────────────────────────────
//
/*
function useState(){
    let state:any;

    function getState(){
        return state
    }

    function setState(val:any):void{
        state = val
    }

    return { getState, setState }
}

const myState = useState()
myState.setState('Hello')
console.log(myState.getState())

const myState2 = useState()
myState2.setState(5550123)
console.log(myState2.getState())
*/
// ────────────────────────────────────────────────────────────────────────────────

//
// ─── WHAT IF WE WANT USE STATE TO SUPPORT ONLY ONE TYPE BUT DEPEND ON HOW WE DECLARE? 
//

/*function useState() {
    let state: number | string
    function getState() {
      return state
    }
    function setState(x: number | string) {
      state = x
    }
    return { getState, setState }
}*/

// This won't work , it will be ending up creating a state that allow both number and strings like an above (but the above one support any var type)

// ────────────────────────────────────────────────────────────────────────────────

//
// ─── TO ARCHIVE GOAL ────────────────────────────────────────────────────────────
//
function useState<S>(){
    let state : S


    function getState(){
        return state
    }

    function setState(val:S):void{
        state = val
    }

    return { getState, setState }
}

// The supported type depend on how we declared the variable

const myState = useState<string>() // now this function which is binded to myState only support for string typed value
console.log(myState.getState()) // should returns undefined at first
myState.setState('Hello')
console.log(myState.getState()) // should returns "HELLO"

const myState2 = useState<number>() // now this function which is binded to myState only support for number typed value
console.log(myState2.getState()) // should returns undefined at first
myState2.setState(5550123)
console.log(myState2.getState()) // should returns "5550123"

// ────────────────────────────────────────────────────────────────────────────────

export {}; // prevent block-scoped warning