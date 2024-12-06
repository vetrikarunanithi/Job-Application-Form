// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.querySelector("form");
//     const result = document.createElement("p");
//     result.id = "result";
//     result.classList.add("text-gray-500");
//     form.parentNode.insertBefore(result, form.nextSibling); // Insert result message below the form
  
//     form.addEventListener("submit", function (e) {
//       e.preventDefault();
//       const formData = new FormData(form);
//       const fileInput = document.getElementById("resume");
//       const fileSize = fileInput.files[0]?.size / 1024; // File size in KB
  
//       // File size validation
//       if (fileSize > 1000) {
//         alert("Please upload a file less than 1 MB.");
//         return;
//       }
  
//       // Display loading message
//       result.style.display = "block";
//       result.innerHTML = "Please wait...";
  
//       fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formData
//       })
//         .then(async (response) => {
//           let json = await response.json();
//           if (response.status === 200) {
//             result.innerHTML = json.message;
//             result.classList.replace("text-gray-500", "text-green-500");
//           } else {
//             console.log(response);
//             result.innerHTML = json.message || "Error submitting the form.";
//             result.classList.replace("text-gray-500", "text-red-500");
//           }
//         })
//         .catch((error) => {
//           console.log(error);
//           result.innerHTML = "Something went wrong!";
//           result.classList.replace("text-gray-500", "text-red-500");
//         })
//         .finally(() => {
//           form.reset();
//           setTimeout(() => {
//             result.style.display = "none";
//           }, 5000);
//         });
//     });
//   });
  