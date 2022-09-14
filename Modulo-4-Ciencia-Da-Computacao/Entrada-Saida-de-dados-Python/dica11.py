# coding=utf-8

# from lib2to3.pgen2.token import STRING
# from pyparsing import string


genero = input('Qual gênero de filme vc mais gosta de assistir?')
ano = input('De que ano é seu filme favorito?') # transformando em float o que o usuário digita
orcamento = float(input('Qual foi o orçamento gasto no filme?'))
nota = float(input('Qual a sua nota da crítica para esse filme?'))


string = ''

string += f'Gênero: {genero}\n'
string += f'Ano: {ano}\n'
string += f'Orçamento {orcamento:.0f}\n'  # 0 casas decimais
string += f'nota {nota:.2f}\n'  # duas casas decimais

# obs: toda vez que temos um input e nosso usuário vai digitar alguma coisa,
# isso será considerado uma string (tudo virá como string)

# no orçamento e na nota, está sendo realizada uma formatação dos números , pq será bugado propositalmente

# \n indica quebra de linha - f é como se fosse template literals no JS
