document.addEventListener('DOMContentLoaded', () => {
    const donateForm = document.getElementById('one-time-donation');
    const amountButtons = donateForm.querySelectorAll('.amount-buttons button');
    const otherAmountInput = document.getElementById('other-amount');

    amountButtons.forEach(button => {
        button.addEventListener('click', () => {
            amountButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
            otherAmountInput.value = button.dataset.amount;
        });
    });

    donateForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your donation! This is a demo form.');
    });

    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Your message has been sent! We will get back to you soon. This is a demo form.');
            contactForm.reset();
        });
    }

});