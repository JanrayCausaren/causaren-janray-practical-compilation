const allDish = document.querySelector('#alldish');
const mainDish = document.querySelector('#mainDish');
const vegetable = document.querySelector('#vegetable');
const desserts = document.querySelector('#dessert');
const drinks = document.querySelector('#drinks');
const addsOn = document.querySelector('#addsOn');


const main__dish = document.querySelectorAll('.main__dish');
const vegetable__dish = document.querySelectorAll('.vegetable__dish');
const dessert__dish = document.querySelectorAll('.dessert__dish');
const drinks__dish = document.querySelectorAll('.drinks__dish');
const addsOn__dish = document.querySelectorAll('.addsOn__dish');


// document.getElementById('alldish').addEventListener('focus', function() {
//     this.style.outline = 'none';
// });

// // Trigger focus
// document.getElementById('alldish').focus();

// document.addEventListener('focus', function() {
//     var focusDish = document.getElementById('alldish');
//     focusDish.classList.add('hovered');
//   focusDish.style.outline = 'none';
// });

window.onscroll = function() {
    var header = document.getElementById("header__section");
    var sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
        
    //   header.style.position = "sticky"
    //   header.style.top = "0"
      header.classList.add("sticky");
    } else {
    //   header.style.position = "none"
      header.classList.remove("sticky");
    }
  };

function handleClick(event) {
    event.preventDefault(); // Prevent the default behavior of the anchor tag
    // 'Anchor clicked without page reload'
}

allDish.addEventListener('click', () => {
    main__dish.forEach(element => {
        element.style.display = 'block';
    });

    vegetable__dish.forEach(element => {
        element.style.display = 'block';
    });
	
	dessert__dish.forEach(element => {
        element.style.display = 'block';
    });
	drinks__dish.forEach(element => {
        element.style.display = 'block';
    });
	addsOn__dish.forEach(element => {
        element.style.display = 'block';
    });
})

mainDish.addEventListener('click', () => {
    main__dish.forEach(element => {
        element.style.display = 'block';
    });

    vegetable__dish.forEach(element => {
        element.style.display = 'none';
    });
	dessert__dish.forEach(element => {
        element.style.display = 'none';
    });
	drinks__dish.forEach(element => {
        element.style.display = 'none';
    });
	addsOn__dish.forEach(element => {
        element.style.display = 'none';
    });
})

vegetable.addEventListener('click', () => {
    vegetable__dish.forEach(element => {
        element.style.display = 'block';
    });

    main__dish.forEach(element => {
        element.style.display = 'none';
    });
	dessert__dish.forEach(element => {
        element.style.display = 'none';
    });
	drinks__dish.forEach(element => {
        element.style.display = 'none';
    });
	addsOn__dish.forEach(element => {
        element.style.display = 'none';
    });
  })
  
  desserts.addEventListener('click', () => {
    dessert__dish.forEach(element => {
        element.style.display = 'block';
    });

    main__dish.forEach(element => {
        element.style.display = 'none';
    });
	vegetable__dish.forEach(element => {
        element.style.display = 'none';
    });
	drinks__dish.forEach(element => {
        element.style.display = 'none';
    });
	addsOn__dish.forEach(element => {
        element.style.display = 'none';
    });
  })
  
 drinks.addEventListener('click', () => {
    drinks__dish.forEach(element => {
        element.style.display = 'block';
    });

    main__dish.forEach(element => {
        element.style.display = 'none';
    });
	vegetable__dish.forEach(element => {
        element.style.display = 'none';
    });
	dessert__dish.forEach(element => {
        element.style.display = 'none';
    });
	addsOn__dish.forEach(element => {
        element.style.display = 'none';
    });
  })
  
   addsOn.addEventListener('click', () => {
    addsOn__dish.forEach(element => {
        element.style.display = 'block';
    });

    main__dish.forEach(element => {
        element.style.display = 'none';
    });
	vegetable__dish.forEach(element => {
        element.style.display = 'none';
    });
	dessert__dish.forEach(element => {
        element.style.display = 'none';
    });
	drinks__dish.forEach(element => {
        element.style.display = 'none';
    });
  })

 

//   allDish.addEventListener('click', () => {
//     main__dish.style.display = 'block';
//     vegetable__dish.style.display = 'block';
// })

// mainDish.addEventListener('click', () => {
//     main__dish.style.display = 'block';
//     vegetable__dish.style.display = 'none';
// })

// vegetable.addEventListener('click', () => {
//     vegetable__dish.style.display = 'block';
//     main__dish.style.display = 'none';
//   })