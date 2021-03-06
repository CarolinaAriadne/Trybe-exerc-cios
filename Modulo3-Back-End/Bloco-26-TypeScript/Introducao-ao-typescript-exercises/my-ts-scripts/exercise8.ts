// ./area.ts

const units4 = ["km²", "hm²", "dam²", "m²", "dm²", "cm²", "mm²"];

function convert4(value: number, fromUnit: string, toUnit: string): number {
    const fromIndex = units.indexOf(fromUnit);
    const toIndex = units.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);

    return value * Math.pow(100, exponent);
}

convert4(10,"km²", "hm²")