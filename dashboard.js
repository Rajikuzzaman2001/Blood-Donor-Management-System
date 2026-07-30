// ======================================
// Blood Donor Management System
// Dashboard
// ======================================

// Load Data
let donors = JSON.parse(localStorage.getItem("donors")) || [];

const donorList = document.getElementById("donorList");

// Show Data
displayDonors();

// ===============================
// Display Donors
// ===============================

function displayDonors() {

    donorList.innerHTML = "";

    if (donors.length === 0) {

        donorList.innerHTML = `
        <tr>
            <td colspan="6">No Donor Found</td>
        </tr>
        `;

    } else {

        donors.forEach(function (donor, index) {

            donorList.innerHTML += `

            <tr>

                <td>${donor.name}</td>
                <td>${donor.age}</td>
                <td>${donor.blood}</td>
                <td>${donor.phone}</td>
                <td>${donor.district}</td>

                <td>

                    <button onclick="editDonor(${index})">
                        Edit
                    </button>

                    <button class="delete-btn"
                    onclick="deleteDonor(${index})">
                        Delete
                    </button>

                </td>

            </tr>

            `;

        });

    }

    updateCounter();

}

// ===============================
// Edit Donor
// ===============================

function editDonor(index){

    localStorage.setItem("editIndex", index);

    window.location.href = "register.html";

}

// ===============================
// Delete Donor
// ===============================

function deleteDonor(index){

    if(confirm("Delete this donor?")){

        donors.splice(index,1);

        localStorage.setItem("donors", JSON.stringify(donors));

        displayDonors();

    }

}

// ===============================
// Search
// ===============================

function searchDonor(){

    let blood = document.getElementById("searchBlood").value.toUpperCase();

    donorList.innerHTML = "";

    let found = false;

    donors.forEach(function(donor,index){

        if(donor.blood.toUpperCase() === blood){

            found = true;

            donorList.innerHTML += `

            <tr>

                <td>${donor.name}</td>
                <td>${donor.age}</td>
                <td>${donor.blood}</td>
                <td>${donor.phone}</td>
                <td>${donor.district}</td>

                <td>

                    <button onclick="editDonor(${index})">
                        Edit
                    </button>

                    <button class="delete-btn"
                    onclick="deleteDonor(${index})">
                        Delete
                    </button>

                </td>

            </tr>

            `;

        }

    });

    if(!found){

        donorList.innerHTML = `
        <tr>
            <td colspan="6">No Donor Found</td>
        </tr>
        `;

    }

}

// ===============================
// Total Donors
// ===============================

function updateCounter(){

    document.getElementById("totalDonors").innerText = donors.length;

}

// ===============================
// Logout
// ===============================

function logout(){

    if(confirm("Do you want to Logout?")){

        localStorage.removeItem("editIndex");

        window.location.href = "login.html";

    }

}