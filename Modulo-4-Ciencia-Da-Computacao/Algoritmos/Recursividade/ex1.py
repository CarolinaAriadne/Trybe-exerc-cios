def count(list):
    pares = 0
    for number in list:
        if number % 2 == 0:
           pares += 1
    return pares       

list2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]
print(count(list2))
