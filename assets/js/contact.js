const scriptURL = "https://script.google.com/macros/s/AKfycbx2qzzigApVDhjAPjemSAjFVt10VtMcuYmYh5sBx1OaYsecaIXgpLw6HLg1P-s8Et5mDQ/exec";
const form = document.forms["submit-to-google-sheet"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // ketika submit di klik

  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      myAlert.classList.toggle("d-none");
      form.reset();

      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});