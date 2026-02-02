const singleForm = document.getElementById("singleForm");
const result = document.getElementById("result");

singleForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const input = document.getElementById("singleFile");
  if (!input.files.length) return alert("Please choose a file");
  const formData = new FormData();
  formData.append("myFile", input.files[0]);

  const res = await fetch("/upload-single", {
    method: "POST",
    body: formData,
  });
  const json = await res.json();
  result.textContent = JSON.stringify(json, null, 2);
});
