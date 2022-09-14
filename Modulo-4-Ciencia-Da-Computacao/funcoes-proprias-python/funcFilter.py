# A filter()função retorna um iterador onde os itens são filtrados por meio de uma função para testar se o item é aceito ou não.

ages = [5, 12, 17, 18, 24, 32]

def myFunc(idade):
#   print(idade, 'aqui')
  if idade < 18:
    return False
  else:
    return True

adults = filter(myFunc, ages)

for age2 in adults:
  print(age2)

  #result 18 24 32




 