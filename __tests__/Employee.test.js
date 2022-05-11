const Employee = require('../lib/class');

// employee object
test('create a new employee object with id, email, name', () => {

    const employee = new Employee('Nitish', 1, "nd@gmail.com" );
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

//get name
test("should get employee's name", () =>{

    const employee = new Employee('Nitish', 1, "nd@gmail.com" );

    expect(employee.getName()).toEqual(expect.any(String));
});

//get Id
test("should get employee's ID", () =>{

    const employee = new Employee('Nitish', 1, "nd@gmail.com" );

    expect(employee.getId()).toEqual(expect.any(Number));
});

//get email
test("should get employee's email", () =>{

    const employee = new Employee('Nitish', 1, "nd@gmail.com" );

    expect(employee.getEmail()).toEqual("nd@gmail.com");
});

//get Role

test("should get employee's role", () =>{

    const employee = new Employee('Nitish', 1, "nd@gmail.com" );

    expect(employee.getRole()).toEqual("Employee");
});