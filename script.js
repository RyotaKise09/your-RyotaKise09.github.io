// GUEST DATA
const guestList = [
  {
    name: "Louie & Stephanie Luico", 
    guests: ["Mireya Atarah Luico", "Malika Arkisha Luico"]
  },
  {
    name: "Melinda Luico",
    guests: []
  },
  {
    name: "Melody Luico",
    guests: []
  },
  {
    name: "Brandon Bulahan",
    guests: ["Camille Palencia - Bulahan"]
  },
  {
    name: "Amiel Bulahan",
    guests: ["Antonette Bulahan"]
  },
  {
    name: "BabyRose & Joseph Keegan Perez",
    guests: ["Kirby Keegan Perez", "Kylie Rose Perez"]
  },
  {
    name: "Lorilyn & Nomer Reyes",
    guests: ["Anicka Loreen Reyes", "Nick Lorenz Reyes"]
  },
  {
    name: "Ryan James Reyes",
    guests: ["Kristel Jane Almarez"]
  },
  {
    name: "Angel Phony Reyes",
    guests: []
  },
  {
    name: "Carmen Reyes",
    guests: []
  },
  {
    name: "Madonna Luico & Howard Gonzales",
    guests: []
  },
  {
    name: "Orlan & Ingrid Miranda",
    guests: []
  },
  {
    name: "Jocelyn & Luisito Oblena",
    guests: []
  },
  {
    name: "Cesar Reyes",
    guests: []
  },
  {
    name: "Crishia Mae Reyes",
    guests: []
  },
  {
    name: "Xianna Reyes",
    guests: []
  },
  {
    name: "Maria France Tee",
    guests: []
  },
  {
    name: "Bea Carla Velasco",
    guests: []
  },
  {
    name: "Annrene Kyla Fandialan & Ivan Miguel Calabia",
    guests: []
  },
  {
    name: "Patricia Denise Silvestre",
    guests: []
  },
  {
    name: "Denise Jasiel Cruzada",
    guests: []
  },
  {
    name: "Mark Leonell Manalo",
    guests: []
  },
  {
    name: "Ashley Kiah Bustonera",
    guests: []
  },
  {
    name: "Kristine Mae Guerra",
    guests: []
  },
  {
    name: "Kristine Joyce Asis",
    guests: []
  },
  {
    name: "Jazmire Angela Isleta",
    guests: []
  },
  {
    name: "Zhyrus Jherwin Cariño",
    guests: []
  },
  {
    name: "Niño Castillo",
    guests: []
  },
  {
    name: "Dave Millares",
    guests: []
  },
  {
    name: "Glen Patrick Oba",
    guests: []
  },
  {
    name: "Lucy Marie Roque",
    guests: []
  },
  {
    name: "Hazel Faye Cabarios",
    guests: []
  },
  {
    name: "Redgie Santos",
    guests: []
  },
  {
    name: "Jovet Artillaga",
    guests: []
  },
  {
    name: "Charisma Maloles",
    guests: []
  },
  {
    name: "Glenn Jose Manito",
    guests: []
  },
  {
    name: "Marita Robinson",
    guests: []
  },
  {
    name: "Charito Manito & Joshua Consul",
    guests: ["Charles Tyler Villeno", "Kyra Fimmel Villeno"]
  },
  {
    name: "Liza Estayan",
    guests: ["Lita Estayan", "Kirby Estayan"]
  },
  {
    name: "Trycilaine Polo & Myra Pecaña",
    guests: ["Athena Polo"]
  },
  {
    name: "Imelda Alvero",
    guests: ["Angela Alvero", "Gabb Alvero"]
  },
  {
    name: "Cecil del Rosario",
    guests: []
  },
  {
    name: "Charisse Catipon & Lois Jayna",
    guests: []
  },
  {
    name: "Ramiro & Mary Ann Aguila",
    guests: []
  },
  {
    name: "Don Vincent Eseo",
    guests: []
  },
  {
    name: "Reginald John Fandialan",
    guests: []
  },
  {
    name: "Samuel Miles Hallari",
    guests: []
  },
  {
    name: "John Carlo Cajandab",
    guests: []
  },
  {
    name: "Karl Damasing",
    guests: []
  },
  {
    name: "Jhon Lloyd Loreto",
    guests: []
  },
  {
    name: "Jaydee Patrick Lacsam",
    guests: []
  },
  {
    name: "Ryuz Symon Villaruel & Ericka Acuña",
    guests: []
  },
  {
    name: "John Paul Sacueza",
    guests: []
  },
  {
    name: "John Patrick Almario",
    guests: []
  },
  {
    name: "Eloisa Polo",
    guests: ["Adrian Paul Polo", "Edmundo Polo"]
  },
  {
    name: "Angel Bicomong",
    guests: []
  },
  {
    name: "Raymarco Reyes",
    guests: []
  },
  {
    name: "Fonso Villapando",
    guests: []
  },
  {
    name: "Cyrix Avanzado",
    guests: []
  },
  {
    name: "Franz Horace Almario",
    guests: []
  },
  {
    name: "Luther Magnaye",
    guests: []
  },
  {
    name: "Clarence Ticzon",
    guests: []
  },
  {
    name: "Rommel Mateo",
    guests: []
  },
  {
    name: "Jerome & Aileen Martinez",
    guests: []
  },

];

// CONVERT LIST TO DICTIONARY FOR QUICK SEARCH
const guestGroups = {};
guestList.forEach(entry => {
    guestGroups[entry.name] = [entry.name, ...entry.guests];
});

// DOM ELEMENTS
const searchInput = document.getElementById("searchName");
const suggestionsBox = document.getElementById("suggestions");
const guestListContainer = document.getElementById("guestList");


// OPEN / CLOSE POPUP
function openPopup() {
    document.getElementById("popupOverlay").style.display = "flex";
}
function closePopup() {
    document.getElementById("popupOverlay").style.display = "none";
}


// ------------------ AUTOCOMPLETE -------------------
searchInput.addEventListener("input", () => {
    const text = searchInput.value.toLowerCase();
    suggestionsBox.innerHTML = "";

    if (text.length === 0) {
        suggestionsBox.style.display = "none";
        return;
    }

    const matches = Object.keys(guestGroups).filter(name =>
        name.toLowerCase().includes(text)
    );

    if (matches.length === 0) {
        suggestionsBox.style.display = "none";
        return;
    }

    suggestionsBox.style.display = "block";

    matches.forEach(name => {
        const div = document.createElement("div");
        div.className = "suggestion-item";
        div.textContent = name;
        div.onclick = () => selectGuest(name);
        suggestionsBox.appendChild(div);
    });

    
});


// ------------------ SELECT GUEST -------------------
function selectGuest(name) {
    searchInput.value = name;
    suggestionsBox.style.display = "none";
    loadGuestList(name);

    // SHOW RESERVED SEATS COUNT
   // Correct seat counting
    let seats;

// If combined couple
    if (name.includes("&")) {
    seats = guestGroups[name].length + 1; 
    // guestGroups[name] includes combined name as 1 entry
    // +1 converts it into 2 seats
    } else {
    seats = guestGroups[name].length;
    // single person + guests already correct
}
    // safe: ensure element exists then write HTML
    const reservedEl = document.getElementById("reservedSeatsText");
    if (reservedEl) {
    reservedEl.innerHTML = `We reserved <strong>${seats}</strong> seat(s) for you`;
}   else {
    console.warn("reservedSeatsText element not found");
}

}

// ------------------ LOAD GUEST LIST -------------------
function loadGuestList(name) {
    guestListContainer.innerHTML = "";
    continueBtn.disabled = true;

    let guests = [...guestGroups[name]];

    // ---------- SAFE NAME SPLITTING ----------
if (name.includes("&")) {

    let [person1, person2] = name.split("&").map(n => n.trim());

    // Extract last names safely
    const lastName1 = person1.split(" ").slice(-1)[0];
    const lastName2 = person2.split(" ").slice(-1)[0];

    // CASE 1: Last names are the same → give shared last name to both
    if (lastName1 === lastName2) {

        const shared = lastName1;

        // apply shared last name to person1 if missing
        if (!person1.split(" ").includes(shared)) {
            person1 = person1 + " " + shared;
        }

        // apply shared last name to person2 if missing
        if (!person2.split(" ").includes(shared)) {
            person2 = person2 + " " + shared;
        }
    }

    // CASE 2: Only one person has last name → copy it to the one who doesn't
    else {

        // person1 has NO last name but person2 does
        if (person1.split(" ").length === 1 && person2.split(" ").length >= 2) {
            person1 = person1 + " " + lastName2;
        }

        // person2 has NO last name but person1 does
        if (person2.split(" ").length === 1 && person1.split(" ").length >= 2) {
            person2 = person2 + " " + lastName1;
        }
    }

    // REPLACE in guest list
    guests = [person1, person2, ...guests.slice(1)];
}


    // ---------- BUILD LIST ----------
    guests.forEach(guest => {
        const row = document.createElement("div");
        row.className = "guest-row";

        row.innerHTML = `
            <div class="guest-left">
                <span class="guest-name">${guest}</span>
            </div>

            <div class="guest-right">
                <button class="accept-btn" onclick="acceptGuest(this)">Accept</button>
                <button class="decline-btn" onclick="declineGuest(this)">Decline</button>
            </div>
        `;

        guestListContainer.appendChild(row);
    });
}


// ------------------ ACCEPT / DECLINE LOGIC -------------------
function acceptGuest(btn) {
    btn.classList.add("selected");
    btn.nextElementSibling.classList.remove("selected");
    continueBtn.disabled = !checkAllAnswered();  // Enable button if all answered
}

function declineGuest(btn) {
    btn.classList.add("selected");
    btn.previousElementSibling.classList.remove("selected");
    continueBtn.disabled = !checkAllAnswered();  // Enable button if all answered
}


// ------------------ CHECK ALL ANSWERED -------------------
function checkAllAnswered() {
    const rows = guestListContainer.querySelectorAll(".guest-row");
    for (const row of rows) {
        const acceptBtn = row.querySelector(".accept-btn");
        const declineBtn = row.querySelector(".decline-btn");
        // Check if neither button is selected
        if (!acceptBtn.classList.contains("selected") && !declineBtn.classList.contains("selected")) {
            return false; // Not all have answered
        }
    }
    return true; // All have answered
}

    // Redirect with accepted guests encoded in URL
 continueBtn.addEventListener("click", () => {
    if (continueBtn.disabled) return;  // Prevent if disabled

    const rows = guestListContainer.querySelectorAll(".guest-row");
    let guests = [];
    let acceptedGuests = [];
    let acceptedCount = 0;

    rows.forEach(row => {
        const name = row.querySelector(".guest-name").textContent;
        const accepted = row.querySelector(".accept-btn").classList.contains("selected");
        if (accepted) {
            acceptedCount++;
            acceptedGuests.push(name);
        }
        guests.push({ name, accepted });
    });

    const groupName = searchInput.value.trim();
    const payload = { groupName, seats: acceptedCount, guests };

    // Submit with CORS for error visibility
    fetch("https://script.google.com/macros/s/AKfycbwNTpBvlANxg4xxkedNP6ZaPY0n3GopUNMJjNc0mpsKIPMCbSTR8Y1Ii3J8hXKulWs/exec", {  // Update with new URL if needed
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        return response.json();
    })
    .then(data => {
        console.log("Submission successful:", data);
        // Redirect only on success
        const params = new URLSearchParams();
        params.set("guests", JSON.stringify(acceptedGuests));
        window.location.href = "confirmation.html?" + params.toString();
    })
    .catch(err => {
        console.error("Submission failed:", err);
        alert("Submission failed. Check console and try again.");
        // No redirect on failure
    });
});













