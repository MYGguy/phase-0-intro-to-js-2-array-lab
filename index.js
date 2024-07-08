const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat() {
    cats.push("Ralph")
}

function destructivelyPrependCat() {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

/* function appendCat(name) {
    // console.log(cats.slice(0, 4, "Ralph"))

    // cats = [...cats, name]
    cats[cats.length] = name
    // cats[0] = name
}

// console.log(appendCat("Broom"))
// appendCat("Broom")
console.log(cats) */


/* function appendCat(name) {
    const appendCat = [...cats, name]

    console.log(appendCat);
} */

function appendCat() {
    const copyOfCats = [...cats, "Broom"]

    // console.log(copyOfCats);

    return copyOfCats;
}

// appendCat()
// console.log(cats);
appendCat()

function prependCat() {
    const prependCats = ["Arnold", ...cats]

    return prependCats;
}

function removeLastCat() {
    const removeLastCats = cats.slice(0, -1);

    return removeLastCats;
}

// console.log(removeLastCat());

function removeFirstCat() {
    const removeFirstCats = cats.slice(1)

    return removeFirstCats;
}