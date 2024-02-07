const perguntas = [
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
        respostas: [
          "variable",
          "var",
          "int"
        ],
        correta: 1
      },
      {
        pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
        respostas: [
          "==",
          "===",
          "="
        ],
        correta: 1
      },
      {
        pergunta: "Qual método de array é usado para adicionar elementos ao final de um array em JavaScript?",
        respostas: [
          "push()",
          "pop()",
          "splice()"
        ],
        correta: 0
      },
      {
        pergunta: "Qual é a maneira correta de escrever um comentário de uma linha em JavaScript?",
        respostas: [
          "// Este é um comentário",
          "/* Este é um comentário */",
          "' Este é um comentário"
        ],
        correta: 0
        },
      {
        pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
        respostas: [
          "Comparar dois valores",
          "Verificar o tipo de uma variável",
          "Concatenar strings"
        ],
        correta: 1
      },
      {
        pergunta: "Qual é o método correto para converter uma string em minúsculas em JavaScript?",
        respostas: [
          "toLowerCase()",
          "toLower()",
          "convertToLower()"
        ],
        correta: 0
      },
      {
        pergunta: "Qual é a sintaxe correta para escrever um loop 'for' em JavaScript?",
        respostas: [
          "for (var i = 0; i < 10; i++)",
          "loop (var i = 0; i < 10; i++)",
          "while (var i = 0; i < 10; i++)"
        ],
        correta: 0
      },
      {
        pergunta: "Qual método é usado para exibir uma mensagem de alerta em JavaScript?",
        respostas: [
          "console.log()",
          "alert()",
          "prompt()"
        ],
        correta: 1
      },
      {
        pergunta: "Qual é a maneira correta de concatenar duas strings em JavaScript?",
        respostas: [
          "str1 + str2",
          "str1 .concat(str2)",
          "str1 - str2"
        ],
        correta: 0
      },
      {
        pergunta: "Qual é a função do método 'parseInt()' em JavaScript?",
        respostas: [
          "Converte uma string em um número inteiro",
          "Arredonda um número para o inteiro mais próximo",
          "Converte um número em uma string"
        ],
        correta: 0
      }
    ];
    const quiz = document.querySelector('#quiz')
    const template = document.querySelector('template')
    
    const corretas = new Set()
    const totalDePerguntas = perguntas.length
    const mostrarTotal = document.querySelector('#acertos span')
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    
    for(const item of perguntas) {
     const quizitem =template.content.cloneNode(true)
     quizitem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.respostas){
      const dt = quizitem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-'+ perguntas.indexOf(item))
    dt.querySelector('input').value =item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
       const estaCorreta = event.target.value == item.correta
    
       corretas.delete(item)
       if(estaCorreta) {
         corretas.add(item)
    
       }
       
       mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    
    
      quizitem.querySelector('dl').appendChild(dt)
    }
    
    quizitem.querySelector('dl dt').remove()
    
     //coloca o item na tela
    quiz.appendChild(quizitem)
    
    }