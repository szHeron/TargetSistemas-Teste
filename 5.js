function InverterString(string){
    let stringInvertida = ''

    for(let i = string.length - 1; i >= 0; i--) {
        stringInvertida += string[i]
    }

    console.log(stringInvertida)
}

InverterString("Target Sistemas, Me contrata!")