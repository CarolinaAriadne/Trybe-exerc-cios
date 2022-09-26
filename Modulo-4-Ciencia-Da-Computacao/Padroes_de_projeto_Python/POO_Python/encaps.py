# coding=utf-8

# outras linguagens,clássica: temos métodos modificadores como public (acesso dentro e fora class), protected (acesso na classe e suas filhas)
# e private (acesso somente na classe)

# no python: utilizamos um ou dois underlines
# se um atributo estiver com underline, recomenda - se que não seja acessado fora da classe
# _ não toque no atributo ou método fora da classe
# __ não toque MESMO no atributo  ou método fora da classe

from email.mime import base


class BaseDados:
    def __init__(self):  # constructor em python
        self.__dados = {}

    @property
    def dados(self):
            return self.__dados    # fazendo um método da classe, parecer uma propriedade da classe

    def inserir_cliente(self, id, nome):
        if 'clientes' not in self.__dados:
            self.__dados['clientes'] = {id: nome}
        else:
            self.__dados['clientes'].update({id: nome})

    def lista_clientes(self):
        for id, nome in self.__dados['clientes'].items():
            print(id, nome)

    def apaga_clientes(self, id):
        del self.__dados['clientes'][id]


baseDados = BaseDados()
baseDados.inserir_cliente(1, 'Carol')
baseDados.inserir_cliente(2, 'Ana')
baseDados.apaga_clientes(2)
baseDados.lista_clientes()
baseDados.inserir_cliente(2, 'Joao')
baseDados.inserir_cliente(3, 'Pedro')
# baseDados.dados = 'Outra coisa' > isso quebra toda classe
print(baseDados.dados)
