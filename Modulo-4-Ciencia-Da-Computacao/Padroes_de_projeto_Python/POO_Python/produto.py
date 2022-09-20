# coding=utf-8

from cmath import isnan


class Produto:
    def __init__(self, nome, preco):
        self.nome = nome
        self.preco = preco

    def desconto(self, percentual):
        self.preco = self.preco - (self.preco * (percentual / 100))

    #Getter - obtém valores que foram requeridos
    @property # uma propriedade
    def preco(self): # mesmo nome da variável q contém o valor que quero obter
        return self._preco

    # Setter - configura, atualiza,algum valor
    @preco.setter
    def preco(self, valor): #valor, o que será atribuído a variável preco
        if isinstance(valor, str):
            valor = float(valor.replace('R$', ''))
        self._preco = valor
      

p1 = Produto('Camiseta', 'R$50')
p1.desconto(10)         
print(p1.preco)

p2 = Produto('Caneca', 25)
p2.desconto(5)
print(p2.preco)