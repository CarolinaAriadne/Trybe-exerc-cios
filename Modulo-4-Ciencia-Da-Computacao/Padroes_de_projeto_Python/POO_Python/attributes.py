# coding=utf-8

class A:
    vc = 123

    def __init__(self):
        self.vc = 321  


a1 = A()
a2 = A()
a1.vc = 321 # n está alterando o valor da variável, mas está criando um atributo direto na minha instância a1
print(a1.__dict__)
print(a2.__dict__)
print(a1.vc)
print(a2.vc)
print(A.vc)    