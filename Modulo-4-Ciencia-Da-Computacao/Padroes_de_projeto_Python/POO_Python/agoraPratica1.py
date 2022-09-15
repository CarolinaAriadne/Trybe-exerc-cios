class Televisao:
    def __init__(self, volume, canal, tamanho, ligada):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False


    def aumentar_volume(self):
            if self.__volume < 99:
                self.__volume += 1

    def diminuir_volume(self):
            if self.__volume > 0:
                self.__volume -= 1

    def modificar_canal(self, canal):
            if canal < 1 and canal > 20:
                 raise ValueError('Não existe o canal procurado')
            else:
                self.__canal = canal
                

    def ligar_desligar(self):
        if self.__ligada:
            self.__ligada = False
        else:
            self.__ligada = True                  


