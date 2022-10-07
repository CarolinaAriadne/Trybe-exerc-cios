def biggerNumber(lista2, indice):
    if indice < len(lista2):
        if lista2[indice] > lista2[indice + 1]:
            # print(lista2[indice])
            return lista2[indice] + biggerNumber(lista2, indice + 1)
        else:
            return biggerNumber(lista2, indice + 1)
    return 0

lista = [2, 6, 10, 20, 40, 30, 8]
biggerNumber(lista, 0)
