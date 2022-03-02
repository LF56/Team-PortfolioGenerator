const Employee = require('../lib/Employee');

test('create employee object', () => {
    const name = 'Kate';
    const id = '4739';
    const email = 'kate@gmail.com';
    const employee = new Employee(name,id,email);

    expect(employee.name).toBe(name);
    expect(employee.id).toBe(id);
    expect(employee.email).toBe(email);

})

