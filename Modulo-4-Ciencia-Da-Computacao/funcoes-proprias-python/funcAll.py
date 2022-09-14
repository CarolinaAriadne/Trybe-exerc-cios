
# Retornará se TODOS os itens de um iterável (lista, tupla, conjunto, dicionário)
# são true. No caso de dicionário, verifica se todas as CHAVES são os valores e n os valores.


# Se o objeto iterável estiver vazio, a all() função também retornará True.



mylist = [True, True, True]
x = all(mylist)  # retorna true

mylist2 = [0, 1, 1]
x = all(mylist2) # false, pq zero é falsy