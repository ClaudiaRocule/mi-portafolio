document.addEventListener("DOMContentLoaded", (event)=> {
    setTimeout(() => {
    document.querySelector("#load-iframe-map").innerHTML = `
    <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"  loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d801.3679688392019!2d-4.646314224104092!3d36.542733693809744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72e135ca7900d1%3A0x3ca5ecc7fac721a8!2sC.%20R%C3%ADo%20Guadalteba%2C%2018%2C%2029651%20Las%20Lagunas%20de%20Mijas%2C%20M%C3%A1laga!5e0!3m2!1ses!2ses!4v1744024868844!5m2!1ses!2ses"></iframe>
    `;
    }, 500);
});