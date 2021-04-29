let scrolllc = 0,rc = null;

function hexToDec(hex) {
  hex = hex.replace('0x', '');
  hex = hex.replace('0X', '');

  let endRes = 0;
  let rp = 0;
  for (let p = hex.length - 1; p >= 0; p--) {
    if (hex[p] == 'a') 
      endRes += 10;
    else if (hex[p] == 'b') 
      endRes += 11;
    else if (hex[p] == 'c')
      endRes += 12;
    else if (hex[p] == 'd')
      endRes += 13;
    else if (hex[p] == 'e')
      endRes += 14;
    else if (hex[p] == 'f')
      endRes += 15;
    else if (!isNaN(parseInt(hex[p]))) 
      endRes += parseInt(hex[p]) * pow(16,rp);
    
    rp++;
  }

  return endRes;
}
function convertAndShow() {
  document.getElementById("0b2").value = hexToDec(document.getElementById("0a2").value);
}
function pow(num, exp) {
  let ret = num;
  if (exp == 0) {
    return 1;
  }
  for (let i = 0; i < exp - 1; i++) {
    ret *= num;
  }
  return ret;
}
function cColor(){
  let colors = ['lime','cyan','red','black','white','yellow','purple','magenta','green'];
  if(scrolllc == colors.length - 1)
  {
    scrolllc = -1;
  }
  scrolllc++;
  document.body.style.backgroundColor = colors[scrolllc];
}