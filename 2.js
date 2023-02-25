function Fibonacci(n) {
    let a = 0, b = 1

    if (n <= 1)
        return 'Pertence a sequencia de fibonacci'
    
    while (a < n) {
        let temp = a
        a = b
        b = temp + b
    }

    if(a > n){
        return 'Náo pertence a sequencia de fibonacci'
    }else{
        return 'Pertence a sequencia de fibonacci'
    }

}

console.log(Fibonacci(22))