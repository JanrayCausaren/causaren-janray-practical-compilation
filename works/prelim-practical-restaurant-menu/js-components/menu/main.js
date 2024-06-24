  // Get the header element
  const getheader = document.querySelector('.menu__section');
  console.log(getheader)
  
  // Get the offset position of the header
  const sticky = getheader.offsetTop;
  
  // Add a scroll event listener
  window.addEventListener('scroll', () => {
    // Add the 'sticky' class to the header when scrolling down past the sticky position
    if (window.pageYOffset > sticky) {
      getheader.classList.add('sticky');
    } else {
      // Remove the 'sticky' class when scrolling back up
      getheader.classList.remove('sticky');
    }
  });

  window.onload = function() {
      document.getElementById('menu').focus();
      document.getElementById('menu').style.outline = 'none';
};
