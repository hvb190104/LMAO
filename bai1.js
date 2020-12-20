let n = parseInt(prompt('Enter the number: '))

function findEven(number) {
    let arr = []
    for (i = 0; i <= number; i++) {
        if (i % 2 == 0) {
            arr.push(i)
        }
        
    }
    console.log(arr)
}
console.log(findEven(n))
