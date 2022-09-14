# A dir()função retorna todas as propriedades e métodos do objeto especificado, sem os valores.

# Esta função retornará todas as propriedades e métodos, mesmo as propriedades internas que são padrão para todos os objetos

class Person:
  name = "John"
  age = 36
  country = "Norway"

print(dir(Person))

# retorna:
# ['__class__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', 
# '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__le__', '__lt__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', 'age', 'country', 'name']