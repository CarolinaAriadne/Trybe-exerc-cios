interface Employee{
    registration: string;
    salary: number;
    admissionDate: Date;

    generateRegistration(): string;
}


const testInterfaceEmployee: Employee = {
    registration: 'hjhakalaj',
    salary: 1300.00,
    admissionDate: new Date(),

    generateRegistration(): string {
        const randon = String(Date.now() * (Math.random() + 1)).replace(/\w/g,'');
    }
}

console.log(testInterfaceEmployee);