function getText(text) {
  do {
    text = prompt(text);
  } while (text === "" || text === " ");
  return text;
}

function getNum(num) {
  do {
    num = parseInt(prompt(num));
  } while (num <= 0 || isNaN(num));
  return num;
}

function age(pAge) {
  do {
    pAge = getNum("How old are you?");
  } while (pAge === "" || isNaN(pAge) || pAge < 18 || pAge > 100 || pAge === " ");
  return pAge;
}


