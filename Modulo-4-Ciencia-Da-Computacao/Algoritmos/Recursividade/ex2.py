

# def count(list):
#     pares = 0
#     for number in list:
#         if number % 2 == 0:
#            pares += 1
#     return pares

# list2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]
# print(count(list2))


from textwrap import indent


def countRecursivo(list, indice):
    if indice < len(list):
        if list[indice] % 2 == 0:
            print(list[indice])
            return 1 + countRecursivo(list, indice + 1)
        else:
            return countRecursivo(list, indice + 1)
    return 0


list2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(countRecursivo(list2, 0))
