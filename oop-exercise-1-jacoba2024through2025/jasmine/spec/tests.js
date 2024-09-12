describe('Person Class and functions', () => {
    let originalConsoleLog;

    beforeEach(() => {
        // Store the original console.log method
        originalConsoleLog = console.log;
        // Replace console.log with a spy to capture log messages
        spyOn(console, 'log').and.callThrough();
    });

    afterEach(() => {
        // Restore the original console.log method after each test
        console.log = originalConsoleLog;
    });

    it('should create a Person object with correct properties', () => {
        // Arrange
        const person = new Person('John', 'Doe', 30, 'New York', 'USA');

        // Act and Assert
        expect(person.fname).toBe('John');
        expect(person.lname).toBe('Doe');
        expect(person.age).toBe(30);
        expect(person.state).toBe('New York');
        expect(person.country).toBe('USA');
    });

    it('should print details of all people', () => {
        // Arrange
        const peopleArray = [
            new Person('John', 'Doe', 30, 'New York', 'USA'),
            new Person('Alice', 'Smith', 25, 'California', 'USA'),
        ];

        // Act
        printInfo(peopleArray);

        // Assert
        expect(console.log).toHaveBeenCalledWith('Details of All People:');
        expect(console.log).toHaveBeenCalledWith('First Name: John');
        expect(console.log).toHaveBeenCalledWith('Last Name: Doe');
        expect(console.log).toHaveBeenCalledWith('Age: 30');
        expect(console.log).toHaveBeenCalledWith('State: New York');
        expect(console.log).toHaveBeenCalledWith('Country: USA');
        expect(console.log).toHaveBeenCalledWith('----------');
        expect(console.log).toHaveBeenCalledWith('First Name: Alice');
        expect(console.log).toHaveBeenCalledWith('Last Name: Smith');
        expect(console.log).toHaveBeenCalledWith('Age: 25');
        expect(console.log).toHaveBeenCalledWith('State: California');
        expect(console.log).toHaveBeenCalledWith('Country: USA');
        expect(console.log).toHaveBeenCalledWith('----------');
    });

    it('should filter and print details of people from a specific state', () => {
        // Arrange
        const peopleArray = [
            new Person('John', 'Doe', 30, 'New York', 'USA'),
            new Person('Alice', 'Smith', 25, 'California', 'USA'),
            new Person('Bob', 'Johnson', 35, 'Texas', 'USA'),
            new Person('Eva', 'Brown', 28, 'New York', 'USA'),
        ];

        // Act
        filterState('New York', peopleArray);

        // Assert
        expect(console.log).toHaveBeenCalledWith('People from New York:');
        expect(console.log).toHaveBeenCalledWith('First Name: John');
        expect(console.log).toHaveBeenCalledWith('Last Name: Doe');
        expect(console.log).toHaveBeenCalledWith('Age: 30');
        expect(console.log).toHaveBeenCalledWith('State: New York');
        expect(console.log).toHaveBeenCalledWith('Country: USA');
        expect(console.log).toHaveBeenCalledWith('----------');
        expect(console.log).toHaveBeenCalledWith('First Name: Eva');
        expect(console.log).toHaveBeenCalledWith('Last Name: Brown');
        expect(console.log).toHaveBeenCalledWith('Age: 28');
        expect(console.log).toHaveBeenCalledWith('State: New York');
        expect(console.log).toHaveBeenCalledWith('Country: USA');
        expect(console.log).toHaveBeenCalledWith('----------');
    });
});
