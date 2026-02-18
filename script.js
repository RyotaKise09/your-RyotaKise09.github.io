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
const continueBtn = document.getElementById("continueBtn");
const popupOverlay = document.getElementById("popupOverlay");

// OPEN / CLOSE POPUP
function openPopup() {
  if (popupOverlay) {
    popupOverlay.style.display = "flex";
  }
}
function closePopup() {
  if (popupOverlay) {
    popupOverlay.style.display = "none";
  }
}

// ------------------ AUTOCOMPLETE -------------------
if (searchInput) {
  searchInput.addEventListener("input", () => {
    const text = searchInput.value.toLowerCase();
    if (suggestionsBox) suggestionsBox.innerHTML = "";

    if (text.length === 0) {
      if (suggestionsBox) suggestionsBox.style.display = "none";
      return;
    }

    const matches = Object.keys(guestGroups).filter(name =>
      name.toLowerCase().includes(text)
    );

    if (matches.length === 0) {
      if (suggestionsBox) suggestionsBox.style.display = "none";
      return;
    }

    if (suggestionsBox) suggestionsBox.style.display = "block";

    matches.forEach(name => {
      const div = document.createElement("div");
      div.className = "suggestion-item";
      div.textContent = name;
      div.onclick = () => selectGuest(name);
      if (suggestionsBox) suggestionsBox.appendChild(div);
    });
  });
}

// ------------------ SELECT GUEST -------------------
function selectGuest(name) {
  if (searchInput) searchInput.value = name;
  if (suggestionsBox) suggestionsBox.style.display = "none";
  loadGuestList(name);

  // SHOW RESERVED SEATS COUNT
  let seats;
  if (name.includes("&")) {
    seats = guestGroups[name].length + 1;
  } else {
    seats = guestGroups[name].length;
  }
  const reservedEl = document.getElementById("reservedSeatsText");
  if (reservedEl) {
    reservedEl.innerHTML = `We reserved <strong>${seats}</strong> seat(s) for you`;
  }

  // Open the popup after loading the guest list
  openPopup();
}

// ------------------ LOAD GUEST LIST -------------------
function loadGuestList(name) {
  if (guestListContainer) guestListContainer.innerHTML = "";
  if (continueBtn) continueBtn.disabled = true;

  let guests = [...guestGroups[name]];

  // ---------- SAFE NAME SPLITTING ----------
  if (name.includes("&")) {
    let [person1, person2] = name.split("&").map(n => n.trim());

    const lastName1 = person1.split(" ").slice(-1)[0];
    const lastName2 = person2.split(" ").slice(-1)[0];

    if (lastName1 === lastName2) {
      const shared = lastName1;
      if (!person1.split(" ").includes(shared)) {
        person1 = person1 + " " + shared;
      }
      if (!person2.split(" ").includes(shared)) {
        person2 = person2 + " " + shared;
      }
    } else {
      if (person1.split(" ").length === 1 && person2.split(" ").length >= 2) {
        person1 = person1 + " " + lastName2;
      }
      if (person2.split(" ").length === 1 && person1.split(" ").length >= 2) {
        person2 = person2 + " " + lastName1;
      }
    }

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

    if (guestListContainer) guestListContainer.appendChild(row);
  });
}

// ------------------ ACCEPT / DECLINE LOGIC -------------------
function acceptGuest(btn) {
  btn.classList.add("selected");
  btn.nextElementSibling.classList.remove("selected");
  checkAllAnswered();
}

function declineGuest(btn) {
  btn.classList.add("selected");
  btn.previousElementSibling.classList.remove("selected");
  checkAllAnswered();
}

// ------------------ CHECK ALL ANSWERED -------------------
function checkAllAnswered() {
  if (!guestListContainer) return;
  const rows = guestListContainer.querySelectorAll(".guest-row");
  let allAnswered = true;

  rows.forEach(row => {
    const acc = row.querySelector(".accept-btn").classList.contains("selected");
    const dec = row.querySelector(".decline-btn").classList.contains("selected");
    if (!acc && !dec) allAnswered = false;
  });

  if (continueBtn) continueBtn.disabled = !allAnswered;
}

// ------------------ CONTINUE BUTTON LOGIC -------------------
if (continueBtn) {
  continueBtn.addEventListener("click", () => {
    if (!guestListContainer) return;
    const rows = guestListContainer.querySelectorAll(".guest-row");

    let guests = [];
    let acceptedCount = 0;

    rows.forEach(row => {
      const name = row.querySelector(".guest-name").textContent;
      const accepted = row.querySelector(".accept-btn").classList.contains("selected");

      if (accepted) acceptedCount++;

      guests.push({
        name,
        accepted
      });
    });

    const groupName = searchInput ? searchInput.value.trim() : "";

    const payload = {
      groupName,
      seats: acceptedCount,
      guests
    };

   fetch("https://script.google.com/macros/s/AKfycbz-QyZA9X7ivn7LMvI00ziy2bplWcz8NTggaHd7TlihX2Zfwj8aZaRVgSdFpnoj9FeOFQ/exec", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(payload)
})
.then(res => res.json())
.then(data => {
  console.log(data);
})
.catch(err => {
  console.error(err);
});

    // Redirect after submit
   const acceptedGuests = guests.filter(guest => guest.accepted).map(guest => guest.name);
    const guestsParam = encodeURIComponent(JSON.stringify(acceptedGuests));
    window.location.href = `confirmation.html?guests=${guestsParam}`;
  });
}











