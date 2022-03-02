const Engineer = require('../lib/Engineer');

test('create engineer object', () => {
    const name = 'Dave';
    const id = '0123';
    const email = 'Dave@gmail.com';
    const github = 'Dave45'
    const engineer = new Engineer(name,id,email,github);

    expect(engineer.name).toBe(name);
    expect(engineer.id).toBe(id);
    expect(engineer.email).toBe(email);
    expect(engineer.github).toBe(github)
})

test('retrieve Github from engineer', () => {
    const name = 'Dave';
    const id = '0123';
    const email = 'Dave@gmail.com';
    const github = 'Dave45'
    const engineer = new Engineer(name,id,email,github);

    expect(engineer.getGithub()).toStrictEqual(expect.stringContaining(engineer.github.toString()));

})
