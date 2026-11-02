const details = (...arr : [string, number, boolean]) => {
    const [name, age, isActive] = arr

    console.log("Name is", name, "and age is", age, isActive);
}

details("Mezba", 24 ,true)


const arrNumbers : number[] = [12, 26]

const sumNumber = (...numbers : number [] ) => {
    return numbers.reduce((total, sum )=> total + sum, 0)
}

const totalNumber : number = sumNumber(1,2,3,4,5,6)
console.log(totalNumber);