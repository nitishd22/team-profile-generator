const Employee = require('../lib/class');

//new manager
test('create a new manager object', () => {

    const manager = new Manager('Nitish', 1, "nd@gmail.com", 5 );
    expect(manager.officeNum).toEqual(expect.any(Number));
    expect(manager.email).toEqual("nd@gmail.com");
});

//get manager role

test('get manager role', () => {

    const manager = new Manager('Nitish', 1, "nd@gmail.com", 5 );
    expect(manager.getRole()).toEqual('Manager');
});
