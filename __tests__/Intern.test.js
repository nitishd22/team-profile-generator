const Employee = require('../lib/class');

//new intern object
test('create a new intern object', () => {

    const intern = new Intern('Nitish', 1, "nd@gmail.com", 'SJSU' );
    expect(intern.school).toEqual(expect.any(String));
});

//get role
test('get intern role', () => {

    const intern = new Intern('Nitish', 1, "nd@gmail.com", 'SJSU' );
    expect(intern.getRole()).toEqual("Intern");
});

//get school

test('get intern school', () => {

    const intern = new Intern('Nitish', 1, "nd@gmail.com", 'SJSU' );
    expect(intern.getSchool()).toEqual("SJSU");
});