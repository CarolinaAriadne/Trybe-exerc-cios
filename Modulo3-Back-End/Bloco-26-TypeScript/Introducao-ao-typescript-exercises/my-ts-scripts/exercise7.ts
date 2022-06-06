// ./capacity.ts

const units3 = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];

function convert3(value: number, fromUnit: string, toUnit: string): number {
    const fromIndex = units.indexOf(fromUnit);
    const toIndex = units.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);

    return value * Math.pow(10, exponent);
}


convert2(10,"kl", "dl")