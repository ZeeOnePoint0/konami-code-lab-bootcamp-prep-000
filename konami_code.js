const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0;



function init() {

  const key = [];

  function onKeyDownHandler(e) {

    const key = parseInt(e.detail || e.which);

    if (key.length === code.length) {

      key.shift()

      if (key.toString() == code.toString()) {

        alert("You did it!")

      }


    }

  }

}
