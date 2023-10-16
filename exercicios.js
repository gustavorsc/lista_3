function ex1() {
    let a, b, c, d, aux, conta2 = 1

    while (conta2 <= 5) {


        a = Number(prompt("Informe A: "))
        b = Number(prompt("Informe B: "))
        c = Number(prompt("Informe C: "))
        d = Number(prompt("Informe D: "))

        let conta = 0
        while (conta <= 3) {
            if (a > b) {
                aux = a, a = b, b = aux
            }
            if (b > c) {
                aux = b, b = c, c = aux
            }
            if (c > d) {
                aux = c, c = d, d = aux
            }
            conta++
        }
        alert(`Ordem crescente ${a}, ${b}, ${c}, ${d}`)
        alert(`Ordem decrescente ${d}, ${c}, ${b}, ${a}`)
        conta2++
    }

}

function ex2() {
    let ingi = 5.00
    let ving = 5.00
    let qtding = 120
    let contador = 0
    let lucro

    while (ving >= 1.00) {
        qtding = 120 + (26 * contador)
        lucro = (ving * qtding) - 200
        ving = ving - 0.50
        contador++

        console.log("Preço Inicial: " + ingi)
        console.log("Quantidade de ingressos: " + qtding)
        console.log("Lucro maximo: " + lucro)
        console.log("Preço novo: " + ving)
        console.log("  ")
        ingi = ingi - 0.50
    }
}

function ex3() {

    let contador = 0
    let fxe1 = 0
    let fxe2 = 0
    let fxe3 = 0
    let fxe4 = 0
    let fxe5 = 0

    while (contador < 8) {
        let idade = Number(prompt("Informe a idade: "))
        if (idade > 0 && idade < 15) {
            fxe1 += 1
        }
        else {
            if (idade > 15 && idade <= 30) {
                fxe2 += 1
            }
            else {
                if (idade > 30 && idade < + 45) {
                    fxe3 += 1
                }
                else {
                    if (idade > 45 && idade <= 60) {
                        fxe4 += 1
                    }
                    else {
                        if (idade > 60) {
                            fxee5 + 1
                        }
                        else {
                            console.log("Idade invalida")
                        }
                    }
                }
            }
        }
        contador = contador + 1
    }

    console.log("faixa etaria 1: " + (fxe1))
    console.log("faixa etaria 2: " + (fxe2))
    console.log("faixa etaria 3: " + (fxe3))
    console.log("faixa etaria 4: " + (fxe4))
    console.log("faixa etaria 5: " + (fxe5))
    console.log("PErcentual faixa etaria 1: " + (fxe1 / 8 * 100))
    console.log("PErcentual faixa etaria 5: " + (fxe5 / 8 * 100))

}

function ex4() {
    let numero = Number(prompt("Informe o número para a tabuada"))
    let contador = 0
    let resultado
    while (contador <= 10) {
        resultado = numero * contador
        contador = contador + 1
        console.log("A tabuada é: " + resultado)
    }

}

function ex5() {
    let num = 1
    while (num <= 10) {
        console.log(num, "*", 1, " = " + num * 1)
        console.log(num, "*", 2, " = " + num * 2)
        console.log(num, "*", 3, " = " + num * 3)
        console.log(num, "*", 4, " = " + num * 4)
        console.log(num, "*", 5, " = " + num * 5)
        console.log(num, "*", 6, " = " + num * 6)
        console.log(num, "*", 7, " = " + num * 7)
        console.log(num, "*", 8, " = " + num * 8)
        console.log(num, "*", 9, " = " + num * 9)
        console.log(num, "*", 10, " = " + num * 10)
        num++
    }
}

function ex6() {

    let cont = 0
    let total = 0
    let parcela = 0
    let totalV = 0
    let totalP = 0

    while (cont < 15) {
        let codigo = String(prompt("Informe o código:")).toUpperCase()
        let valor = Number(prompt("Informe o valor:"))

        if (codigo == 'V') {
            totalV = totalV + valor
        }
        else {
            if (codigo == 'P') {
                totalP = totalP + valor
            }
            else {
                alert("Código inválido, valor não será contabilizado")
                //cont --
                continue // faz com que ignore o conta ++ nessa situação, pois retorna para o while
            }
        }


        cont++
    }

    total = totalP + totalV

    parcela = totalP / 3

    alert(`Valor total: ${total} \n Valor à vista ${totalV} \n Valor a prazo: ${totalP} \n valor da parcela: ${parcela.toFixed(2)}`)
    //console.log(`Valor total à vista: ${totalV}.`)
    //console.log(`Valor total a prazo: ${totalP}.`)
    //console.log(`Valor total: ${total}.`)
    //console.log(`Valor de uma parcela ${parcela}.`)
}

function ex7() {

    let cont = 0
    let id50 = 0
    let per40 = 0
    let qntalt = 0
    let salt = 0
    let media = 0
    let per40r = 0
    while (cont < 5) {
        let idade = Number(prompt("Infome sua idade:"))
        let alt = Number(prompt("Informe sua altura:"))
        let peso = Number(prompt("Informe seu peso:"))

        if (idade > 50) {
            id50++
        }

        if (idade >= 10 && idade <= 20) {
            salt = salt + alt
            qntalt++
        }
        if (peso < 40) {
            per40++
        }

        cont++
    }
    media = salt / qntalt
    per40r = (per40 * 100) / 5
    alert(`SUperior a 50 anos: ${id50} \n  media de altura: ${media} \n Porcentagem de pessoas abaixo de 40kg: ${per40r}`)

}

function ex8() {

    let idade, peso, altura, corOlhos, corCabelos;

    let item1 = 0
    let item2soma = 0
    let item2conta = 0
    let item3 = 0
    let item4 = 0

    for (let conta = 1; conta <= 6; conta++) {

        idade = Number(prompt("Infome sua idade:"))
        peso = Number(prompt("Infome seu peso:"))
        altura = Number(prompt("Infome sua altura:"))
        corOlhos = (prompt("Informe a cor do seu olho(A(Azul),P(Preto),V(Verde) ou C(Castanho)):")).toUpperCase()
        corCabelos = (prompt("Informe a cor do seu cabelo(P(Preto),C(Castanho),L(Louro),R(Ruivo)):")).toUpperCase()

        if (idade > 50 && peso < 60) {
            item1++
        }
        if (altura < 1.50) {
            item2conta++
            item2soma = item2soma + idade
        }
        if (corOlhos == 'A') {
            item3++
        }
        if (corCabelos == 'R' && corOlhos != 'A') {
            item4++
        }

    }
    alert(`valor item1: ${item1}`)
    alert(`valor item2: ${item2soma / item2conta}`)
    alert(`valor item3: ${item3 / conta * 100}`)
    alert(`valor item4: ${item4}`)
}

function ex9() {
    let idades = 0, quantPessoas90kg = 0, quant2 = 0
    
    for(let i = 0; i < 10; i++) {
      let idade = Number(prompt(`Digite a idade da ${i+1}ª pessoa: `));
      let peso = Number(prompt(`Digite o peso da ${i+1}ª pessoa: (em kg)`));
      let altura = Number(prompt(`Digite a altura da ${i+1}ª pessoa: (em cm)`));

      idades += idade;

      if(peso > 90 && altura < 150) {
          quantPessoas90kg++;
      }

      if(idade >= 10 && idade <= 30 && altura > 190) {
          quant2++;
      }
    }

    let mediaIdades = idades / 10

    alert(`Média das idades: ${mediaIdades}\nQuantidade de pessoas com peso superior à 90kg e altura inferior à 1,50 m: ${quantPessoas90kg}\nPorcentagem de pessoas entre 10 a 30 anos que medem mais de 1,90m: ${quant2}`)
}

function ex10a() {

    let resto = 0
    let somaPar = 0
    let somaPrimo = 0
    let divisor = 1
    for (let conta = 1; conta <= 10; conta++) {
        let numero = Number(prompt("Informe o numero: "))
        if (numero % 2 == 0 && numero != 2) {
            somaPar += numero
        }
        else {
            while (divisor <= numero && resto <= 2) {
                if (numero % divisor == 0) {
                    resto++
                }
                if (resto <= 2) {
                    somaPrimo += numero
                }
                divisor++
            }

        }
    }
    console.log(`Soma pares: ${somaPar}`)
    console.log(`Soma primos: ${somaPrimo}`)

}

function ex20() {
    let opcao
    let n1, n2, n3, ma, mp, p1, p2, p3, somap
    do {
        opcao = Number(prompt("\n 1. média aritimetica \n 2. média onderada \n Sair"))
        switch (opcao) {
            case 1: alert("Você escolheu Média aritimetica")

                n1 = Number(prompt("digite a nota 1:"))
                n2 = Number(prompt("digite a nota 2:"))
                n3 = Number(prompt("digite a nota 3:"))

                ma = (n1 + n2 + n3) / 3

                alert(`Média aritimetica: ${ma}`)

                break

            case 2: alert("Você escolheu Média ponderada")

                n1 = Number(prompt("digite a nota 1:"))
                n2 = Number(prompt("digite a nota 2:"))
                n3 = Number(prompt("digite a nota 3:"))
                p1 = Number(prompt("digite o peso da nota 1:"))
                p2 = Number(prompt("digite o peso da nota 2:"))
                p3 = Number(prompt("digite o peso da nota 3:"))

                somap = p1 + p2 + p3
                if (somap != 0) {
                    mp = ((n1 * p1) + (n2 * p2) + (n3 * p3)) / somap
                    alert(`Média ponderada: ${mp}`)
                }
                else {
                    alert("peso inválido.")
                }
                break

            case 3: alert("O programa será finalizado")
                break
            default: alert("Opção invalida.")
        }

    }
    while (opcao != 3)
}

function ex21() {
    let op
    let c1 = 0, c2 = 0, c3 = 0, c4 = 0, n = 0, b = 0, totalV = 0
    do {
        op = Number(prompt("Vote \n 1 = candidato 1 \n 2 = candidato 2 \n 3 = candidato 3 \n 4 = candidato 4 \n 5 = voto nulo \n 6 = voto em branco \n 0 = encerrar a votação"))
        switch (op) {
            case 1:
                c1++
                break

            case 2:
                c2++
                break

            case 3:
                c3++
                break

            case 4:
                c4++
                break

            case 5:
                n++
                break

            case 6:
                b++
                break

            default: alert("Opção inválida.")

        }
    }
    while (op != 0)
    totalV = c1 + c2 + c3 + c4 + n + b

    alert(`Total de votos do candidato 1: ${c1}`)
    alert(`Total de votos do candidato 2: ${c2}`)
    alert(`Total de votos do candidato 3: ${c3}`)
    alert(`Total de votos do candidato 4: ${c4}`)
    alert(`Votos nulos ${n}`)
    alert(`Votos em brancos ${b}`)
    alert(`Porcentagem de votos nulos: ${(100 / totalV * n).toFixed(2)}%`)
    alert(`Porcentagem de votos em brancos: ${(100 / totalV * b).toFixed(2)}%`)
}

function ex23() {
    let op
    let sal = 0, newSal = 0, ferias = 0, dter = 0, mesTrab = 0

    do {
        op = Number(prompt(`Informe a opção desejada: \n 1: Novo salário. \n 2: Férias. \n 3: Décimo terceiro. \n 4: Sair.`))
        if (op > 4 || op <= 0) {
            alert("Número invalido.")
        }
        else {



            switch (op) {

                case 1: sal = Number(prompt(`Informe o seu salário atual: `))
                    if (sal < 210) {
                        newSal = sal + (sal / 100 * 15)
                        alert(`Novo salário ${newSal}`)
                    }
                    else if (sal >= 210 && sal <= 600) {
                        newSal = sal + (sal / 100 * 10)
                        alert(`Novo salário ${newSal}`)
                    }
                    else if (sal > 600) {
                        newSal = sal + (sal / 100 * 5)
                        alert(`Novo salário ${newSal}`)
                    }
                    break

                case 2: sal = Number(prompt(`Informe o seu salário atual: `))
                    ferias = (sal + (sal / 3)).toFixed(2)
                    alert(`Valor das ferias ${ferias}`)
                    break

                case 3: sal = Number(prompt(`Informe o seu salário atual: `))
                    mesTrab = Number(prompt(`Informe o periodo trabalhado tendo em vista que o maximo é de 12 meses: `))
                    if (mesTrab > 12) {
                        alert(`Quantidade inválida.`)
                    }
                    else {
                        dter = (sal * mesTrab / 12).toFixed(2)
                        alert(`Valor do décimo terceiro: ${dter}`)
                    }
                    break

                case 4: alert("Programa finalizado.")
            }

        }
    }
    while (op != 4)

}