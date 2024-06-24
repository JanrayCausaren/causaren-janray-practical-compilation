const btnCheckWorks = document.getElementById('checkWorks');

btnCheckWorks.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);

    if (target) {
        const offsetTop = target.offsetTop + 60; // Adjust this value to match the height of your sticky header
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
});





// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         const targetId = this.getAttribute('href').substring(1);
//         const target = document.getElementById(targetId);

//         if (target) {
//             const offsetTop = target.offsetTop - 150; // Adjust this value to match the height of your sticky header
//             window.scrollTo({
//                 top: offsetTop,
//                 behavior: 'smooth'
//             }); console.log(targetId);
//         }
//     });
// });