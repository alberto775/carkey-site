
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    const response = await fetch("https://formspree.io/f/xblylrgd", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"
      }
    });

    if (response.ok) {
      alert("Спасибо! Сообщение отправлено.");
      form.reset();
    } else {
      alert("Ошибка при отправке. Пожалуйста, попробуйте снова.");
    }
  });
});
