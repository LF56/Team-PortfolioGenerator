const Intern = require('../lib/Intern');


test('create intern object', () => {
    const name = 'Alex';
    const id = '6780';
    const email = 'alex@gmail.com';
    const school = 'Community College of Lake Mary';

    const Intern = new Intern(name, id, email, school);