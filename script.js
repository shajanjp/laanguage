const qwertyCharset = "qwertyuiopasdfghjklzxcvbnm";
const qwertyMap = qwertyCharset.split("");
let textInputStore = "";
const laaToCharMap = {};

qwertyMap.forEach((c, i) => {
  laaToCharMap[`l${"a".repeat(i + 1)}`] = c;
});

function makeSameCase(rc, tc) {
  if (rc == rc.toUpperCase()) {
    return tc.toUpperCase();
  } else {
    return tc.toLowerCase();
  }
}

function textToLa(text, wrap = ["", ""]) {
  let result = "";

  text.split("").map((ch) => {
    const lc = ch.toLowerCase();
    if (qwertyCharset.indexOf(lc) > -1) {
      result += `${wrap[0]}l${"a".repeat(qwertyCharset.indexOf(lc) + 1)}${
        wrap[1]
      }`;
    } else {
      result += `${wrap[0]}${ch}${wrap[1]}`;
    }
  });

  return result;
}

function laToText(laaText, wrap = ["", ""]) {
  let result = laaText.toLowerCase();

  Object.keys(laaToCharMap)
    .reverse()
    .map((laaChar) => {
      result = result.replaceAll(`${laaChar}`, laaToCharMap[laaChar]);
    });

  return result;
}

const contentText = document.getElementById("content-text");
const outputText = document.getElementById("output-text");
const laaInvert = document.getElementById("laa-invert");

contentText.onkeyup = (e) => {
  if (laaInvert.checked) {
    outputText.innerHTML = laToText(contentText.value);
  } else {
    outputText.innerHTML = textToLa(contentText.value);
  }
};
