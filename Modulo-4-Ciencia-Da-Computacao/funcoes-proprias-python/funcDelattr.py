# A delattr()função excluirá o atributo especificado do objeto especificado.

class Person:
  name = "John"
  age = 36
  country = "Norway"

delattr(Person, 'age')

# o objeto Pessoa não mais irá
# conter a propriedade idade