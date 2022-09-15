

class Geladeira:
    def __init__(self, cor, potencia, voltagem, preco):
        self.preco = preco
        self.__cor = cor
        self.__potencia = potencia
        self.__voltagem = voltagem
        self.__ligado = False


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.geladeira = None

    def comprar_geladeira(self, geladeira: Geladeira):
        if geladeira.preco < self.saldo_na_conta:
            self.saldo_na_conta -= geladeira.preco
            self.geladeira = geladeira

    def __str__(self):
        if self.geladeira == True:
               return f"{self.nome} - possui geladeira"
        else:       
                return f"{self.nome} - não possui geladeira"
              
geladeira_azul = Geladeira('Azul', 200, 220, 400)
pessoa_dona_geladeira = Pessoa('Joana', 2000)
pessoa_dona_geladeira.comprar_geladeira(geladeira_azul)

print(pessoa_dona_geladeira)  