//////////// Business Logic! /////////////


var translate = function(sentenceArray) {
  var newArray = [];
  for (var i = 0; i < sentenceArray.length; i++) {
    var textArray = sentenceArray[i].split("");

  if (textArray.length === 1) {
    console.log("That was a one letter word")
  } else if ((textArray[0] === "a") || (textArray[0] === "e") || (textArray[0] === "i") || (textArray[0] === "o") || (textArray[0] === "u")) {
    textArray.push("w");
  } else if (textArray.length === 2) {
    textArray.push(textArray[0]);
    textArray.shift();
  } else if ((textArray[0] === "q") && (textArray[1] === "u")) {
    textArray.push(textArray[0]);
    textArray.shift();
    textArray.push(textArray[0]);
    textArray.shift();
  } else {
    textArray.push(textArray[0]);
    textArray.shift();
      if ((textArray[0] === "q") && (textArray[1] === "u")) {
        textArray.push(textArray[0]);
        textArray.shift();
        textArray.push(textArray[0]);
        textArray.shift();
      } else if ((textArray[0] !== "a") && (textArray[0] !== "e") && (textArray[0] !== "i") && (textArray[0] !== "o") && (textArray[0] !== "u")) {
        textArray.push(textArray[0]);
        textArray.shift();
        if ((textArray[0] !== "a") && (textArray[0] !== "e") && (textArray[0] !== "i") && (textArray[0] !== "o") && (textArray[0] !== "u")) {
          textArray.push(textArray[0]);
          textArray.shift();
        }
    }

  };

  textArray.push("ay");
  var str = textArray.join("");
  newArray.push(str);
};
return newArray.join(" ");
};


///////////// User Logic! ///////////////
$(function() {
  $(".formOne").submit(function(event) {
    event.preventDefault();
    var text = $("#english").val().toLowerCase();
    var sentenceArray = text.split(" ");
    // var textArray = text.split(" ");
    var result = translate(sentenceArray);
    $("#pigLatin").text(result);
    console.log(newArray);
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

// var sentence = function() {
//   for (var i = 0; i < textArray.length; i++) {
//     translate(textArray[i]);
//   };
// };
