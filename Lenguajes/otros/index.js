//1

function biggestWord(phrase) {
  var palabra = phrase.split(' ');
	var resultado = "";
	
	for (var i = 0; i < palabra.length; i++) {
		if (palabra[i].length > resultado.length) {
			resultado = palabra[i];
		};
	};
	  return resultado;
};

console.log(biggestWord("Esta frase puede contener muchas palabras")); 


// Values

function values(obj) {
  var valores = Object.values(obj)
  return valores
}

console.log(values({ id: 31, duration: 310, name: "long video", format: "mp4" }));

//clonar funciones

function clone(source) {
  var clonar = object.assign(source)
  return clonar
}

var a = { name: "Maria", surname: "Ibañez", country: "SPA" };
var b = { name: "Luisa", age: 31, married: true };

function merge(source, target) {
  const returnedTarget = Object.assign(target, source);
  return returnedTarget
}

merge(a, b)


//equal

var user = { name: "María", age: 30 };
var clonedUser = { name: "María", age: 30 };

function isEqual(a, b) {
  if (a === b) {
    return "son iguales"
  } else (a !== b); {
    return "son distintos"
  }
 }

 console.log(isEqual(user, clonedUser));


 function isEqual(a, b) {
  if (typeof[a] === typeof[b]) {
    return "son iguales"
  } else  {
    return "son distintos"
  }
 }

 console.log(isEqual(user, clonedUser))


 function includes(array, value) {
  var incluido = array.includes(value)
  return incluido
}

// Ejemplo:
console.log(includes([1, 2, 3], 3)); // true
console.log(includes([1, 2, 3], 0)); //

function reverseText(text) {
  // Implementation here.
}


function zipObject(keys, values) {
  
}

const eso2o = {
  David: 8.25,
  Maria: 9.5,
  Jose: 6.75,
  Juan: 5.5,
  Blanca: 7.75,
  Carmen: 8
};

const notaMedia =
  (eso2o.David +
    eso2o.Maria +
    eso2o.Jose +
    eso2o.Juan +
    eso2o.Blanca +
    eso2o.Carmen) /
  6;

/*function printAverage(classResults) {
  const calification = Object.assign(classResults);
  switch (true) {
    case calification === 10:
      return "Matrícula";
    case calification < 10 && calification >= 8:
      return "Sobresaliente";
    case calification < 8 && calification >= 6:
      return "bien";
    case calification < 6 && calification >= 5:
      return "suficiente";
    case calification < 4:
      return "insusuficiente";
  }
}

console.log(printAverage(eso2o.David));*/

function printAverage(classResults) {
  const calification = Object.assign(classResults);
  if (calification === 10) {
    return "matricula";
  } else if (calification < 10 && calification >= 8) {
    return "sobresaliente";
  } else if (calification < 8 && calification >= 6) {
    return "notable";
  } else if (calification < 6 && calification >= 5) {
    return "bien";
  } else if (calification < 5) {
    return "insuficiente";
  }
}

console.log(printAverage(eso2o.David));
