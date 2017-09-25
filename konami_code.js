const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0;



function init() {

  var keyPressed = [];

  const key = parseInt(e.detail || e.which); 

  if (key === code[i]) {

    keyPressed.push(key);

    index++;

    if (keyPressed.length === code.length) {

      alert('You did it!')
      
    }
    
  }
  
}
