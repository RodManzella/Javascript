// checked property: let us know if a button is selected. Gives us a boolean value.

document.getElementById("myButton").onclick = function () {
  const myCheckBox = document.getElementById("myCheckBox");
  const visaBtn = document.getElementById("visaBtn");
  const mastercardBtn = document.getElementById("masterCardBtn");
  const paypalBtn = document.getElementById("paypalBtn");

  if (myCheckBox.checked) {
    console.log("You are subscribed!");
  } else {
    console.log("You are not subscribed!");
  }

  if (visaBtn.checked) {
    console.log("You are paying with a visa!");
  } else if (mastercardBtn.checked) {
    console.log("You are paying with a mastercard!");
  } else if (paypalBtn.checked) {
    console.log("You are paying with PayPal!");
  } else {
    console.log("You must select a payment type!");
  }
};
