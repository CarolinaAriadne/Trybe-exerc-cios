const units2 = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];

function convert2(value: number, fromUnit: string, toUnit: string): number {
    const fromIndex = units.indexOf(fromUnit);
    const toIndex = units.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);

    return value * Math.pow(10, exponent);
}

convert2(10,"kg", "cg")