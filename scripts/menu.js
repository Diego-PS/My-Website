document.querySelector('.checkbox').addEventListener('change', function() {
    const mobileMenu = document.querySelector('.mobile-menu');
    if (this.checked) {
        mobileMenu.style.height = '48rem'; // Set to a large value or use another method to show the menu
        const menuItems = document.querySelectorAll('.mobile-item');
        menuItems.forEach(function (menuItem) {
            menuItem.style.display = 'block';
        })
    } else {
        mobileMenu.style.height = '0';
        setTimeout(function () {
            const menuItems = document.querySelectorAll('.mobile-item');
            menuItems.forEach(function (menuItem) {
                menuItem.style.display = 'none';
            })
        }, 500)
    }
})