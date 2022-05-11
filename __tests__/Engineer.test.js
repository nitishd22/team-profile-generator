const Employee = require('../lib/class');

//new engineer
test('create a new engineer object', () => {

    const engineer = new Engineer('Nitish', 1, "nd@gmail.com", 'nitishd22' );
    expect(engineer.github).toEqual(expect.any(String));
});

test('get employee role', () => {

    const engineer = new Engineer('Nitish', 1, "nd@gmail.com", 'nitishd22' );
    expect(engineer.getRole()).toEqual("Engineer");
});

test('get Github', () => {

    const engineer = new Engineer('Nitish', 1, "nd@gmail.com", 'nitishd22' );
    expect(engineer.github()).toEqual("nitishd22");
});

