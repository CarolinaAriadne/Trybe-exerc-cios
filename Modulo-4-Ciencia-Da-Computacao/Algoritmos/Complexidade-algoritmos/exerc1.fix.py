def multiply_array(numbers):
    result = 1
    for number in numbers:
        result *= number

    return result

# O(n) - complexidade de tempo - tempo de execição cresce linearmente , a cada operação
# realizada
# O(1) - complexidade constante, já que não importa o tamanho da entrada
# a saída sempre será apenas um único número