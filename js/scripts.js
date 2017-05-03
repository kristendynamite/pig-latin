//////////// Business Logic! /////////////
var vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

var translate = function(textArray) {
  if (textArray.length === 1) {
    console.log("That was a one letter word")
  } else if ((textArray[0] === "a") || (textArray[0] === "e") || (textArray[0] === "i") || (textArray[0] === "o") || (textArray[0] === "u") || (textArray[0] === "A") || (textArray[0] === "E") || (textArray[0] === "I") || (textArray[0] === "O") || (textArray[0] === "U")) {
    textArray.push("w");
  } else if (textArray.length === 2) {
    textArray.push(textArray[0]);
    textArray.shift();
  } else {
    textArray.push(textArray[0]);
    textArray.shift();
      if ((textArray[0] !== "a") || (textArray[0] !== "e") || (textArray[0] !== "i") || (textArray[0] !== "o") || (textArray[0] !== "u") || (textArray[0] !== "A") || (textArray[0] !== "E") || (textArray[0] !== "I") || (textArray[0] !== "O") || (textArray[0] !== "U")) {
        textArray.push(textArray[0]);
        textArray.shift();
        if ((textArray[0] !== "a") || (textArray[0] !== "e") || (textArray[0] !== "i") || (textArray[0] !== "o") || (textArray[0] !== "u") || (textArray[0] !== "A") || (textArray[0] !== "E") || (textArray[0] !== "I") || (textArray[0] !== "O") || (textArray[0] !== "U")) {
          textArray.push(textArray[0]);
          textArray.shift();
        }
    }
  };

  textArray.push("ay");
  return textArray.join("");
};


///////////// User Logic! ///////////////
$(function() {
  $(".formOne").submit(function(event) {
    event.preventDefault();
    var text = $("#english").val();
    var textArray = text.split("");
    var result = translate(textArray);
    $("#pigLatin").text(result);
    console.log(textArray);
  });
});





// if (textArray.length > 0) {
//   textArray.push("ay");
//   result = textArray.join("");

// for (var i = 0; i < textArray.length; i++) {
//   if (vowel.includes(textArray[i])) {
//     textArray.push("ay");
//   }
// };
