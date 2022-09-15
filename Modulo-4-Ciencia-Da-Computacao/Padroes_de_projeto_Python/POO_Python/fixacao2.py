

class Eletrodomestico:
    def __init__(self, cor, potencia, voltagem, preco):
        self.preco = preco
        self.__cor = cor
        self.__potencia = potencia
        self.__voltagem = voltagem
        self.__ligado = False
        self._amperagem_atual_no_motor = 0

    def ligar(self, velocidade):
        self.__velocidade = velocidade
        self.__amperagem_atual_no_motor = (
            (self.__potencia / self.__voltagem) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        return self.__ligado

     # Getter
    @property
    def cor(self):
        return self.__cor

    # Setter
    @cor.setter
    def cor(self, nova_cor):
        self.__cor = nova_cor            


class Geladeira(Eletrodomestico):
    def __init__(self, cor, potencia, voltagem, preco):
        #c chamando o método da classe mãe
        super().__init__(cor, potencia, voltagem, preco)

class Microondas(Eletrodomestico):
    def __init__(self, cor, potencia, voltagem, preco, quantidade_botao):
        super().__init__(cor, potencia, voltagem, preco)
        # sobrescrita do método da classe mãe
        self.quantidade_de_botao = quantidade_botao   

class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.eletromestico = []

        # permitindo a aquisição de qualquer eletrodoméstico

    def comprar_eletrodomestico(self, eletromestico: Eletrodomestico):
        if eletromestico.preco < self.saldo_na_conta:
            self.saldo_na_conta -= eletromestico.preco
            self.eletromestico.append(eletromestico)

geladeira_azul = Geladeira('Azul', 200, 220, 400)
pessoa_dona_geladeira = Pessoa('Joana', 2000)
pessoa_dona_geladeira.comprar_eletrodomestico(geladeira_azul)


microondas_verde = Microondas('Verde',200,220, 450)
pessoa_dona_microondas = Pessoa('Pedro', 1200)
pessoa_dona_microondas.comprar_eletrodomestico(microondas_verde)

print(f"Microondas possui a cor {microondas_verde.cor}")
print(f"A geladeira custa {geladeira_azul.preco}")