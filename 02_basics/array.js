//array  (elements can be same or different in array)(size are resizeable)
// we have to access array using [indexing]

//shallow copies(same reference )
//deep copies (different reference)
//(declaring array)
const myArr = [0,1,2,3,4,5]
const myHero = ["abraham","peter"]
const myArr2 = new Array(1,2,3,4)
//console.log(myHero[1]);

// Array Methods
//(push vaneko add garxa)
myArr.push(6)
//console.log(myArr);
//(pop vaneko last value remove garxa one element)
myArr.pop()
//console.log(myArr);

// unshift add value at start and shift remove the start value
myArr.unshift(9)
myArr.shift()
//console.log(myArr)

//questionare method in array
// includes le boolean ma answer dinxa ,, it is exist or not
//console.log(myArr,includes(8));
//console.log(myArr.indexOf(3));
const newArr = myArr.join()
//console.log(newArr);

// Slice(it doesnot include last range) and Splice(it doesnot include splice but change in original value that splice jati hatera baaki rahanxa)
//console.log("a",myArr)
const myn1 = myArr.slice(1,4)
//console.log("b",myArr)
//console.log(myn1);
const myn2 = myArr.splice(1,5)
//console.log(myn2)
//console.log("c",myArr);

/* Array second part */
//##########PUSH method

// hero variable ma heroine push garda heroine ko value euta element sochera linxa
const hero = ["sharuk","sallu","sahid"]
const heroine = ["rani","preeti","priyanka","karishma"]
//hero.push(heroine)
//console.log(hero);
//console.log(hero[3][1]);

// #######Concate method (limited)

//const film = hero.concat (heroine)
//console.log(film);

//#####SPREAD METHOD (no limitation)

const film = [...hero,...heroine]
//console.log(film);

//###array vitra array bhayo vane
//###FLAT

const array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_arrray = array.flat (Infinity)
//console.log(real_arrray);


///#### isArray,from,of method
console.log(Array.isArray("sonam"));
console.log(Array.from("sonam")); //array ma convert garnu parema
console.log(Array.from({name:"sonam"})) //interesting case we have to tell using key or value make array
let s1=100
let s2=200
let s3=300
console.log(Array.of(s1,s2,s3));







