// ===============================
// Blood Donor Management System
// Register & Edit Donor
// ===============================

// Load Donors
let donors = JSON.parse(localStorage.getItem("donors")) || [];

// Edit Index
let editIndex = localStorage.getItem("editIndex");

// Form
const donorForm = document.getElementById("donorForm");

// ===============================
// If Edit Mode
// ===============================

if (editIndex !== null) {

    let donor = donors[editIndex];

    document.getElementById("name").value = donor.name;
    document.getElementById("age").value = donor.age;
    document.getElementById("bloodGroup").value = donor.blood;
    document.getElementById("phone").value = donor.phone;
    document.getElementById("district").value = donor.district;
    document.getElementById("address").value = donor.address;

    document.getElementById("formTitle").innerText = "Edit Donor";

    document.getElementById("submitBtn").innerText = "Update Donor";

}

// ===============================
// Register / Update
// ===============================

donorForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const donor = {

        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        blood: document.getElementById("bloodGroup").value,
        phone: document.getElementById("phone").value,
        district: document.getElementById("district").value,
        address: document.getElementById("address").value

    };

    if (editIndex === null) {

        donors.push(donor);

        alert("Donor Registered Successfully!");

    } else {

        donors[editIndex] = donor;

        localStorage.removeItem("editIndex");

        alert("Donor Updated Successfully!");

    }

    localStorage.setItem("donors", JSON.stringify(donors));

    donorForm.reset();

    window.location.href = "dashboard.html";

});