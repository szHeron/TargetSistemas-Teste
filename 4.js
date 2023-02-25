function PercentualMensal(){
    const estados = {
        "SP": 67836.43,
        "RJ": 36678.66, 
        "MG": 29229.88, 
        "ES": 27165.48, 
        "Outros": 19849.53
    }
    const total = estados.SP + estados.RJ + estados.MG + estados.ES + estados.Outros

    for(let estado in estados) {
        console.log(`A porcentagem do ${estado} é ${((estados[estado]/total)*100).toFixed(2)}%`);
    }
}

PercentualMensal()