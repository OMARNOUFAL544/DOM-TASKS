
document.addEventListener("DOMContentLoaded", () => {
   
   
    // Form Validation


    const registerForm = document.getElementById("registerForm");
    const inputs = registerForm.querySelectorAll("input");
    const registerBtn = document.getElementById("registerBtn");
    const registrationMessage = document.getElementById("registrationMessage");
  
    inputs.forEach(input => {
      input.addEventListener("input", validateForm);
    });
  
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      registrationMessage.textContent = "User registered successfully!";
      registrationMessage.style.color = "green";
    });
  
    function validateForm() {
      let valid = true;
      inputs.forEach(input => {
        const errorMessage = input.nextElementSibling;
        if (!input.value) {
          valid = false;
          errorMessage.textContent = "required.";
          errorMessage.style.display = "block";
        } else {
          errorMessage.style.display = "none";
        }
  
        if (input.id === "confirmPassword") {
          const password = document.getElementById("password").value;
          if (input.value !== password) {
            valid = false;
            errorMessage.textContent = "Passwords do not match.";
            errorMessage.style.display = "block";
          }
        }
      });
  
      registerBtn.disabled = !valid;
    }

  
    // Highlight Words with Over 8 Letters


    const paragraph = document.getElementById("paragraph");
    const words = paragraph.textContent.split(" ");
    paragraph.innerHTML = words
      .map(word => word.length > 8 ? `<span class="highlight">${word}</span>` : word)
      .join(" ");

  
    // Shopping List


    const shoppingListForm = document.getElementById("shoppingListForm");
    const shoppingList = document.getElementById("shoppingList");
    shoppingListForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const itemInput = document.getElementById("item");
      const newItem = document.createElement("li");
      newItem.classList.add("list-group-item");
      newItem.textContent = itemInput.value;
  
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.classList.add("btn", "btn-danger", "btn-sm");
      deleteBtn.addEventListener("click", () => newItem.remove());
  
      newItem.appendChild(deleteBtn);
      shoppingList.appendChild(newItem);
  
      itemInput.value = "";
      itemInput.focus();
    });
  });
  