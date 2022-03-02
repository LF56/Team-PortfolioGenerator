const Manager  = require('../lib/Manager');

test('create manager object', () => {
    const name = 'Holly';
    const id = '2222';
    const email = 'Holly@gmail.com';
    const officeNumber = '4073334421'
    const manager = new Manager(name,id,email,officeNumber);

    expect(manager.name).toBe(name);
    expect(manager.id).toBe(id);
    expect(manager.email).toBe(email);
    expect(manager.officeNumber).toBe(officeNumber);
  
})
test('retrieve manager office number', () => {
    const name = 'Holly';
    const id = '2222';
    const email = 'Holly@gmail.com';
    const officeNumber = '4073334421'
    const manager = new Manager(name,id,email,officeNumber);
   

    expect(manager.getofficeNumber()).toStrictEqual(expect.stringContaining(manager.officeNumber.toString()));
})

