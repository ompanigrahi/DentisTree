document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const closeModalBtn = document.getElementById('closeModal');

    // Show the modal 3 seconds after the page loads
    setTimeout(() => {
        modal.classList.add('show');
    }, 3000); // 3000 milliseconds = 3 seconds

    // Close the modal when the close button is clicked
    closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('show');
    });

    // Close the modal when clicking outside of the modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.remove('show');
        }
    });
});








// document.addEventListener('DOMContentLoaded', () => {
//     const modal = document.getElementById('modal');
//     const closeModalBtn = document.getElementById('closeModal');

//     // Show the modal when the page loads
//     modal.classList.add('show');

//     // Close the modal when the close button is clicked
//     closeModalBtn.addEventListener('click', () => {
//         modal.classList.remove('show');
//     });

//     // Close the modal when clicking outside of the modal content
//     window.addEventListener('click', (event) => {
//         if (event.target === modal) {
//             modal.classList.remove('show');
//         }
//     });
// });
