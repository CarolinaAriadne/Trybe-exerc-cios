

# desempacotamento

x = 'ab'

x, y = 'ab'

x, y = y, x # trocando os valores entre as variáveis

nome_e_nascimento = [('Felps', 'Mexico'), ('Joao', 'Brasil')]

x,y = 'felps' # dá errado, o erro de ter muitos valors pra desempacotarm - a solução, é atribuir mais variáveis
#porém essa n é a melhor solução, já que cada variável ficará com uma letra diversa

x, y, z, w, k = 'felps'

x, *y = 'felps' # quando colocamos asterísco, quer dizer que estamos pegando o restante de informação e jogando dentro
# de uma lista, que vai ser atribuída ao y










# quando atribuímos mais de uma variável ao mesmo tempo, o python vai 
# pegar aquele valor que está depois do sinal de atribuição, e vai tentar quebrar aquilo ali
# para dividir para nossas variáveis