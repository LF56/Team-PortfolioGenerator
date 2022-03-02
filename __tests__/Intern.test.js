const Intern  = require('../lib/Intern');

test('create intern object', () => {
    const name = 'Alex';
    const id = '7890';
    const email = 'Alex@gmail.com';
    const school = 'Community School Of Heathrow';
    
    const intern = new Intern(name,id,email,school);

    expect(intern.name).toBe(name);
    expect(intern.id).toBe(id);
    expect(intern.email).toBe(email);
    expect(intern.school).toBe(school);
})