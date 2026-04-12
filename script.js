document.getElementById("bookBtn").addEventListener("click", function() {
    window.location.href = "contact.html";
});

// SELECT BUTTONS AND ROOMS
const buttons = document.querySelectorAll(".filter-btn");
const rooms = document.querySelectorAll(".room-item");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {

        const type = button.getAttribute("data-type");

        // REMOVE ACTIVE FROM ALL
        buttons.forEach(btn => {
            btn.classList.remove("btn-dark");
            btn.classList.add("btn-outline-dark");
        });

        // ADD ACTIVE TO CLICKED
        button.classList.remove("btn-outline-dark");
        button.classList.add("btn-dark");

        // FILTER LOGIC
        rooms.forEach(function(room) {
            const roomType = room.getAttribute("data-type");

            if (type === "all" || type === roomType) {
                room.style.display = "block";
                room.style.opacity = "1";
            } else {
               room.style.opacity = "0";
setTimeout(() => {
    room.style.display = "none";
}, 200);
            }
        });

    });
});


const form = document.getElementById("bookingForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const date = document.getElementById("date").value.trim();
    const errorMsg = document.getElementById("errorMsg");

    // VALIDATION
    if (name === "" || phone === "" || date === "") {
        errorMsg.textContent = "Please fill all fields";
        return;
    }

    if (phone.length !== 10 || isNaN(phone)) {
        errorMsg.textContent = "Enter a valid 10-digit phone number";
        return;
    }

    errorMsg.textContent = "";

    // WHATSAPP REDIRECT
    const message = `Hello, I want to book a visit.
Name: ${name}
Phone: ${phone}
Date: ${date}`;

    const whatsappURL = `https://wa.me/91 9711252978?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
});

const questions = document.querySelectorAll(".faq-question");

questions.forEach(function(q) {
    q.addEventListener("click", function() {
        const answer = this.nextElementSibling;

        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});

function bookVisit() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let date = document.getElementById("date").value;

    if (name === "" || phone === "" || date === "") {
        alert("Please fill all details");
        return;
    }

    let whatsappNumber = "919711252978";

    let message = `Hi, I want to book a visit.
Name: ${name}
Phone: ${phone}
Preferred Date: ${date}`;

    let url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
     alert("Redirecting to WhatsApp...");
    
    window.open(url, "_blank");
}
document.getElementById("bookingForm").reset();

