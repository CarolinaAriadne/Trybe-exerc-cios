# coding=utf-8

from datetime import datetime

class Pessoa:
    ano_atual = 2019    # int(datetime.strftime(datetime.now(), '%Y'))
    
    def __init__(self, nome, idade, comendo=False, falando=False):# a palavra self se refere a instância p1 ou p2 do outro arquivo
        self.nome = nome
        self.idade = idade
        self.comendo = comendo
        self.falando = falando

        variavel = 'Valor'  # variável válida somente dentro do init

    def falar(self, falar):
        if self.comendo:
            print('não pode falar comendo')
            return
        if self.falando:
            print('erro - já está falando')
            return
        else:
            print('está falando sobre POO')
            self.falando = True

    def parar_falar(self):
        if not self.falando:
            print(self.nome, 'não está falando')
            return
        else:
            print(self.nome, 'parou de falar')
            self.falando = False

    def comer(self, alimento):

        if self.comendo:
            print(self.nome, 'já está comendo')

            return
        if self.falando:
            print(self.nome, 'nao pode comer falando')
            return
        else:
            print(self.nome, 'esta comendo')

            self.comendo = True

    def parar_comer(self):
        if not self.comendo:
            print('error')
            return
        else:
            print('parou de comer')
            self.comendo = False

    def ano_nascimento(self):
        return self.ano_atual - self.idade        
