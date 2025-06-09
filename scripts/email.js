const form = document.getElementById("contact-form");

(function () {
  emailjs.init({
    publicKey: "lVT1ZbvhXY_SLLXgb",
  });
})();

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default submission

  emailjs.sendForm("service_5ckv8t4", "template_pjod1ay", this).then(
    () => {
      console.log("SUCCESS!");
    },
    (error) => {
      console.log("FAILED...", error);
    }
  );
});
