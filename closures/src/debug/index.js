let a = 'Hello'

function hello() {
    let b = 'Hello World'
    const c = 'Hello World!'
    debugger
}

hello()

function sum(a) {
    return function(b) {
        return a +b
    }
}

console.log( sum(1)(2))
