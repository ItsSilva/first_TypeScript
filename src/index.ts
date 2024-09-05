const add = (a: number, b: number): number => {
    return a + b;
};
const value = add(3, 2);
console.log(value);

let myName: string | number = 'Juan';
myName = 2;

const myArray: number[] = [2, 2, 3];

enum Colors {
    "Red" = 'RED',
    "Green" = 'GREEN',
    "Blue" = 'BLUE',
}

let colors: Colors = Colors.Red;
console.log(colors);