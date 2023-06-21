// toLocaleString() = returns a string with a language sensitive representation of this number

// number.toLocaleString(locale, {options});

// 'locale' = specify that language(undefined = default set in browser)
// 'options' = object with formatting options

let myNum = 12356.789;

// myNum = myNum.toLocaleString("en-US")  // US English
// myNum = myNum.toLocaleString("hi-IN")  // Hindi
// myNum = myNum.toLocaleString("de-DE")  // Standard German

// myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"})
// myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"})
console.log(myNum);
