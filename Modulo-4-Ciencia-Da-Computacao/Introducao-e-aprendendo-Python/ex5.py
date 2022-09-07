# coding=utf-8

# 1 lata de 18 litros pinta = 54m²
# 1 lata custa = 80,00


def quantifyPrice(wall):
    priceOneCan = 80
    litters_required = wall / 3
    cans_required = litters_required // 18  # despreza o resto da divisão
    if litters_required > 18:
        cans_required += 1
    elif litters_required <= 18:
        cans_required = 1
    return cans_required, cans_required * priceOneCan


print(quantifyPrice(200))
