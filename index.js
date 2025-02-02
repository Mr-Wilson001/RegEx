//regEx for mastercard
let masterCard = /^5[1-5]\d{14}$/.test("5199120358725217")
console.log(masterCard);

//regEx for visa
let visaCard = /^4\d{15}$/.test("4229110358725217")
console.log(visaCard);

//regEx for verve card
let verveCard = /^(506|507|650)\d{13}(\d{2}|\d{3})?$/.test("5069117035875455562");
console.log(verveCard);
