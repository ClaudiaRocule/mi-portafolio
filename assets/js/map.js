document.addEventListener("DOMContentLoaded", (event)=> {
    setTimeout(() => {
    document.querySelector("#load-iframe-map").innerHTML = `
    <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"  loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51170.895407404576!2d-4.490466339963751!3d36.71821490105197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7259c44fdb212d%3A0x6025dc92c9ca32cf!2zTcOhbGFnYQ!5e0!3m2!1ses!2ses!4v1745566331275!5m2!1ses!2ses"></iframe>

    `;
    }, 500);
});