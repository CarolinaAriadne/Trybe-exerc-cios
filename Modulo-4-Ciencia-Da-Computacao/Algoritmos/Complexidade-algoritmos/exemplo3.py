def calculations(n):
    number1 = 0
    for n1 in range(n): # complexidade linear: n (n + n + n)
        number1 += n1 #número de instruções, igual ao número de elementos recebidos
                      # complexidade linear : a medida que o n cresce (por ex, ao invés de 100, passa
                      # a entrada passa a ser 1000), o número de instruções cresce proporcionalmente, na mesma
                      # quantidade

    number2 = 0
    for n1 in range(n):   # primeiro for, complexidade linear
       for n2 in range(n): # segundo for, complexidade linear tbm
            number2 += n1 + n2 # logo, as complexididades se multiplicam - quadrática
                                # exemplo: primeiro for range (1,2)
                                #segunfo for range (3,4)
                                #então, será: n² (1 com 2, e com 4 - 2 com 1, e 2 com 4)

    number3 = 0
    for n1 in range(n): #complexidade linear
       for n2 in range(n): #complexidade linear
           for n3 in range(n): #complexidade linear
               number3 += n1 + n2 + n3 #logo, complexidade cúbica : n * n * n ou n³

    return number1, number2, number3

n1, n2, n3 = calculations(100)
print(f'{n1}, {n2}, {n3}')

#logo, a complexidade do algoritmo seria: n + n² + n³
# porém, quando fazemos análise de complexidade, vamos focar
# no nosso maior elemento, descartamos qualquer constante, e focamos no maior
#portanto, eu posso dizer que a complexidade deste algoritmo é n³ (que é a maior, que demora mais tempo)
