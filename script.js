let qwertyCharset = "qwertyuiopasdfghjklzxcvbnm";
let qwertyMap = qwertyCharset.split('');

function makeSameCase(rc, tc){
  if (rc == rc.toUpperCase()) {
    return tc.toUpperCase();
  }
  else {
    return tc.toLowerCase();
  }
}

function textToLa(text, wrap=['', '']){
  let laaText = '';
  text.split('').forEach((c) => {
    let lc = c.toLowerCase();
    if(lc == ' '){
      laaText += `${wrap[0]} ${wrap[1]}`;
    }
    else if(lc == '.' || lc == ','){
      laaText += `${wrap[0]}lc${wrap[1]}`;
    }
    else {
      laaText += `${wrap[0]}l${"a".repeat(qwertyCharset.indexOf(lc) + 1)}${wrap[1]}`;
    }
  })
  return laaText;
}

function laToText(laaText, wrap=['','']){
  let text = '';
  laaText.split(' ').forEach(lw => {
    lw.split('l').slice(1).forEach(lc => {
      let chIndex = lc.split('a').length - 2;
      if(chIndex >= 0){
        text += `${wrap[0]}${qwertyMap[chIndex]}${wrap[1]}`;
      }
    })
    text += `${wrap[0]} ${wrap[1]}`;
  })
  return text;
}
