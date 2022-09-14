# A compile()função retorna a fonte especificada como um objeto de código, pronto para ser executado.

x = compile('print(55)', 'test', 'eval')
exec(x)

#retorna 55