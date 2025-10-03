const questions = {
  'q1': { 
    pergunta: "Qual ODS fala sobre igualdade de gênero?", 
    opcoes: ["ODS 1: Erradicação da Pobreza", "ODS 5: Igualdade de Gênero", "ODS 7: Energia Limpa e Acessível"], 
    correta: 1,
    proxima_correta: 'q2',
    proxima_errada: 'q3'
  },
  'q2': { 
    pergunta: "Qual ODS fala sobre fome zero e agricultura sustentável?", 
    opcoes: ["ODS 2: Fome Zero e Agricultura Sustentável", "ODS 10: Redução das Desigualdades", "ODS 13: Ação Contra a Mudança Global do Clima"], 
    correta: 0,
    proxima_correta: 'q4',
    proxima_errada: 'q1'
  },
  'q3': { 
    pergunta: "Qual ODS trata de energia limpa e acessível?", 
    opcoes: ["ODS 7: Energia Limpa e Acessível", "ODS 12: Consumo e Produção Responsáveis", "ODS 14: Vida na Água"], 
    correta: 0,
    proxima_correta: 'q5',
    proxima_errada: 'q4'
  },
  'q4': { 
    pergunta: "Qual ODS fala sobre água potável e saneamento?", 
    opcoes: ["ODS 6: Água Potável e Saneamento", "ODS 9: Indústria, Inovação e Infraestrutura", "ODS 15: Vida Terrestre"], 
    correta: 0,
    proxima_correta: 'q6',
    proxima_errada: 'q5'
  },
  'q5': { 
    pergunta: "Qual ODS fala sobre cidades e comunidades sustentáveis?", 
    opcoes: ["ODS 11: Cidades e Comunidades Sustentáveis", "ODS 8: Trabalho Decente e Crescimento Econômico", "ODS 4: Educação de Qualidade"], 
    correta: 0,
    proxima_correta: 'q7',
    proxima_errada: 'q2'
  },
  'q6': {
    pergunta: "O que significa a sigla 'ODS'?",
    opcoes: ["Organizações de Desenvolvimento Social", "Objetivos de Desenvolvimento Sustentável", "Operações de Defesa da Selva"],
    correta: 1,
    proxima_correta: 'q8',
    proxima_errada: 'q7'
  },
  'q7': {
    pergunta: "O ODS 13 é dedicado a tomar medidas urgentes para combater qual problema global?",
    opcoes: ["A Pobreza Extrema", "A Desigualdade de Gênero", "A Mudança Climática"],
    correta: 2,
    proxima_correta: 'q9',
    proxima_errada: 'q8'
  },
  'q8': {
    pergunta: "Qual ODS foca em 'Paz, Justiça e Instituições Eficazes'?",
    opcoes: ["ODS 10: Redução das Desigualdades", "ODS 16: Paz, Justiça e Instituições Eficazes", "ODS 17: Parcerias e Meios de Implementação"],
    correta: 1,
    proxima_correta: 'q10',
    proxima_errada: 'q9'
  },
  'q9': {
    pergunta: "A Agenda 2030 é baseada em 5 pilares, os '5 Ps'. O que eles representam?",
    opcoes: ["Poder, Progresso, Pessoas, Praticidade, Paz", "Pessoas, Planeta, Prosperidade, Paz e Parcerias", "Plantações, Pecuária, Pesca, Petróleo, Potássio"],
    correta: 1,
    proxima_correta: 'q11',
    proxima_errada: 'q10'
  },
  'q10': {
    pergunta: "O objetivo de garantir 'Trabalho Decente e Crescimento Econômico' pertence a qual ODS?",
    opcoes: ["ODS 8: Trabalho Decente e Crescimento Econômico", "ODS 1: Erradicação da Pobreza", "ODS 12: Consumo e Produção Responsáveis"],
    correta: 0,
    proxima_correta: 'q12',
    proxima_errada: 'q11'
  },
  'q11': {
    pergunta: "Em que ano a Agenda 2030 foi adotada pelos Estados-membros da ONU?",
    opcoes: ["2005", "2015", "2020"],
    correta: 1,
    proxima_correta: 'q1', // Volta para o início, criando um ciclo
    proxima_errada: 'q12'
  },
  'q12': {
    pergunta: "O ODS 14, 'Vida na Água', busca a conservação e o uso sustentável de qual recurso?",
    opcoes: ["Rios e lagos", "Lençóis freáticos", "Oceanos e mares"],
    correta: 2,
    proxima_correta: 'q2', // Volta para o início, criando um ciclo
    proxima_errada: 'q3'
  }
};