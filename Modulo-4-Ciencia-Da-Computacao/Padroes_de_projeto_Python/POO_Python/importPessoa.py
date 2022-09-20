# coding=utf-8

from pessoa import Pessoa
from pessoa2 import Pessoa2

p1 = Pessoa('Luiz', 29) # criando um objeto, a partir da classe Pessoa , utilizando o molde class Pessoa pra criar de fato uma pessoa
# p1.nome = 'Luiz' >> # se fizer assim, precisa ir lá na class e fazer o self.nome , self.idade etc
p2 = Pessoa('Joao', 32)
p1A = Pessoa2.por_ano_nascimento('Luiz', 1987)
p1A.get_ano_nascimento()
print(p1A.nome, p1A.idade)
p1A.get_ano_nascimento()
print(Pessoa2.gera_id())
print(p1A.gera_id())

# p1.comer('laranja')
# # p1.parar_comer()
# # p1.parar_comer()
# # p1.comer('uva')
# p1.falar('POO')
# p1.parar_comer()
# p1.falar('POO')
# p1.comer('bolacha')
# p1.parar_falar()
# # p1.falar('assunto')
# print(p1.ano_atual)
# print(p1.ano_nascimento())

# print(p1) # <pessoa.Pessoa instance at 0x7fc2f5998a50>
# print(p2) # <pessoa.Pessoa instance at 0x7fc2f5998aa0>  >> pessoas !==, instanciadas em locais diferentes da memória


