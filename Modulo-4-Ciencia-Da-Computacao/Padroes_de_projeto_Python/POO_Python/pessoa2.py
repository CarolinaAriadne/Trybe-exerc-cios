# coding=utf-8

from random import randint

class Pessoa2:
    ano_atual = 2018

    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade

    def get_ano_nascimento(self): # method de instância
        print(self.ano_atual - self.idade)

    @classmethod # method de classe, vai ser padrão aquilo q foi definido, para todas as instâncias / objetos    
    def por_ano_nascimento(cls, nome, ano_nascimento): # cls se refere a class Pessoa2
        idade = cls.ano_atual - ano_nascimento
        return cls(nome, idade) #executando a classe Pessoa2 dentro do método

    @staticmethod    # metodo que não precisa nem da instância, nem da classe - como se fosse uma func normal
    def gera_id():
        rand =  randint(10000, 19999)
        return rand


    