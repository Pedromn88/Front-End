const array1 = [1, 2, 3, 4]
const array2 = [11, 22, 33, 44]


const head = ([first]) => first; // Implementation here.
console.log(head(array1))


const tail = ([, ...rest]) => rest;

console.log(tail(array1))


const init = (array) => array.slice(0,-1);

console.log(init(array1))



const last = (array) => array.splice(-1,1);
console.log(last(array1))


//concatenar

const concat = (a, [...rest] ) => a.concat(rest); // Protype function
console.log(concat(array1, array2));


//clonar

const clone = function (source) {
return Object.assign(source)
} 

console.log(clone(array1))
  

//merge

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

const merge = function (source, target) {
    return Object.assign(source, target)
}

console.log(merge(a, b))



//Books

const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
  ];

  function isBookRead(books, titleToSearch) {
    const title = books.find(books => books.title === titleToSearch);
    const result = title !== undefined ? find.isRead : false;
    return result

  }

  console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false

contador = 0;

class SlothMachine  {
    constructor (name) {
        this.name = name;
        this.win = "";
    }

    play () {
        let a = Math.random() >= 0.5; 
        let b = Math.random() >= 0.5; 
        let c = Math.random() >= 0.5; 

        let isWinner = a && b && c ? true : false;

        this.win = isWinner ? `Congratulations!!!. You won ${contador} coins!!` : `Good luck next time!!`;
        isWinner ? this.contador = 0 : contador++;
        console.log(this.win);
    }
}

const machine1 = new SlothMachine("Juego");
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();