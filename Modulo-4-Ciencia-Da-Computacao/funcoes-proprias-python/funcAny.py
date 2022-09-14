# A any func retornará True se ALGUM item em um iterável
# for true, caso contrário, retorna false

#Se o objeto iterável estiver vazio, retorna false

# Quando usada em um dicionário, a função any() verifica se alguma das chaves é verdadeira, não os valores .

mytuple = (0, 1, False)
x = any(mytuple)  #retorna true, 1 é true


mytuple = (0, 0, 0)
x = any(mytuple)  #retorna false, zero é false