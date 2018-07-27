// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten (name) {
  kittens.push(name);
  return kittens;
}

kittens = ["Milo", "Otis", "Garfield"];

function destructivelyPrependKitten (name) {
  kittens.unshift(name);
  return kittens;
}

kittens = ["Milo", "Otis", "Garfield"];

function destructivelyRemoveLastKitten () {
  kittens.pop();
  return kittens;
}

kittens = ["Milo", "Otis", "Garfield"];

function destructivelyRemoveFirstKitten () {
  kittens.shift();
  return kittens;
}

kittens = ["Milo", "Otis", "Garfield"];

function appendKitten (name) {
  return [...kittens, name];
}

function prependKitten (name) {
  return [name, ...kittens];
}

function removeLastKitten() {
  kittens.slice(-);
  return kittens;
}

function removeFirstKitten() {
  kittens.slice();
  return kittens;
}