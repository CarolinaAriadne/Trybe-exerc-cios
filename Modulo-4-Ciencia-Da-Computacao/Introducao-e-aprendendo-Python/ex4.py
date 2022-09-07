# coding=utf-8

def names(words):
    lenWord = len(words[0])
    word = words[0]
    for i in words:
        if len(i) > lenWord:
            lenWord = len(i)
            word = i
    print(word)


names(["José", "Lucas", "Nadia", "Fernanda", "Anastaciaaaa"])
