// =========================
// GUEST DATA
// =========================
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
  }
];

// =========================
// CONVERT TO DICTIONARY
// =========================
const guestGroups = {};
guestList.forEach(entry => {
  guestGroups[entry.name] = [entry.name, ...entry.guests];
});

// =========================
// DOM ELEMENTS
// =========================
const searchInput = document.getElementById("searchName");
const suggestionsBox = document.getElementById("suggestions");
const guestListContainer = document.getElementById("guestList");
const continueBtn = document.getElementById("continueBtn");
const popupOverlay = document.getElementById("popupOverlay");

// =========================
// POPUP
// =========================
function openPopup() {
  if (popupOverlay) popupOverlay.style.display = "flex";
}

function closePopup() {
  if (popupOverlay) popupOverlay.style.display = "none";
}

// =========================
// AUTOCOMPLETE
// =========================
if (searchInput) {
  searchInput.addEventListener("input", () => {
    const text = searchInput.value.toLowerCase();
    suggestionsBox.innerHTML = "";

    if (!text) {
      suggestionsBox.style.display = "none";
      return;
    }

    const matches = Object.keys(guestGroups).filter(name =>
      name.toLowerCase().includes(text)
    );

    if (!matches.length) {
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

  // Allow manual typing
  searchInput.addEventListener("change", () => {
    const value = searchInput.value.trim();
    if (guestGroups[value]) {
      selectGuest(value);
    }
  });
}

// =========================
// SELECT GUEST
// =========================
function selectGuest(name) {
  searchInput.value = name;
  suggestionsBox.style.display = "none";

  loadGuestList(name);

  const seats = guestGroups[name].length;
  const reservedEl = document.getElementById("reservedSeatsText");
  if (reservedEl) {
    reservedEl.innerHTML = `We reserved <strong>${seats}</strong> seat(s) for you`;
  }

  openPopup();
}

// =========================
// LOAD GUEST LIST
// =========================
function loadGuestList(name) {
  guestListContainer.innerHTML = "";
  continueBtn.disabled = true;

  let guests = [...guestGroups[name]];

  // Split couples cleanly
  if (name.includes("&")) {
    const parts = name.split("&").map(n => n.trim());
    guests = [...parts, ...guestGroups[name].slice(1)];
  }

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

// =========================
// ACCEPT / DECLINE
// =========================
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

function checkAllAnswered() {
  const rows = guestListContainer.querySelectorAll(".guest-row");
  const allAnswered = [...rows].every(row =>
    row.querySelector(".accept-btn").classList.contains("selected") ||
    row.querySelector(".decline-btn").classList.contains("selected")
  );

  continueBtn.disabled = !allAnswered;
}

// =========================
// SUBMIT
// =========================
if (continueBtn) {
  continueBtn.addEventListener("click", () => {
    continueBtn.disabled = true;
    continueBtn.textContent = "Submitting...";

    const rows = guestListContainer.querySelectorAll(".guest-row");

    let guests = [];
    let acceptedCount = 0;

    rows.forEach(row => {
      const name = row.querySelector(".guest-name").textContent;
      const accepted = row.querySelector(".accept-btn").classList.contains("selected");

      if (accepted) acceptedCount++;

      guests.push({ name, accepted });
    });

    const payload = {
      groupName: searchInput.value.trim(),
      seats: acceptedCount,
      guests
    };

    fetch("https://script.google.com/macros/s/AKfycbwCj_BmGBLnFUqhZREABCmkkZJqqcVwygmXqhVdPxazfaBHUzah8e21fbaEsh_mniI4iQ/exec", {
      method: "POST",
      body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(() => {
      const acceptedGuests = guests
        .filter(g => g.accepted)
        .map(g => g.name);

      const guestsParam = encodeURIComponent(JSON.stringify(acceptedGuests));
      window.location.href = `confirmation.html?guests=${guestsParam}`;
    })
    .catch(error => {
      console.error("Error:", error);
      alert("Submission failed. Please try again.");
      continueBtn.disabled = false;
      continueBtn.textContent = "Continue";
    });
  });
}



