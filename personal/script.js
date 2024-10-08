// Placeholder character data
let characters = [
    { name: 'Eldor', class: 'Wizard', level: 5 },
    { name: 'Thalia', class: 'Rogue', level: 4 }
];

// Placeholder NPC data
let npcs = [
    { name: 'Innkeeper', role: 'Quest Giver' },
    { name: 'Blacksmith', role: 'Vendor' }
];

// Display characters on the page
function displayCharacters() {
    const characterList = document.getElementById('character-list');
    characterList.innerHTML = characters.map(character => `
        <div class="character-card">
            <h3>${character.name}</h3>
            <p>Class: ${character.class}</p>
            <p>Level: ${character.level}</p>
        </div>
    `).join('');
}

// Display NPCs on the page
function displayNPCs() {
    const npcList = document.getElementById('npc-list');
    npcList.innerHTML = npcs.map(npc => `
        <div class="npc-card">
            <h3>${npc.name}</h3>
            <p>Role: ${npc.role}</p>
        </div>
    `).join('');
}

// Handle adding a new character
document.getElementById('add-character-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload on form submission

    const charName = document.getElementById('char-name').value;
    const charClass = document.getElementById('char-class').value;
    const charLevel = document.getElementById('char-level').value;

    characters.push({ name: charName, class: charClass, level: parseInt(charLevel) });
    displayCharacters();

    // Clear the form inputs after submission
    document.getElementById('add-character-form').reset();
});

// Handle adding a new NPC
document.getElementById('add-npc-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload on form submission

    const npcName = document.getElementById('npc-name').value;
    const npcRole = document.getElementById('npc-role').value;

    npcs.push({ name: npcName, role: npcRole });
    displayNPCs();

    // Clear the form inputs after submission
    document.getElementById('add-npc-form').reset();
});

// Initiative Tracker
let initiativeOrder = [];

function addPlayer() {
    const playerName = prompt("Enter player's name:");
    const initiative = prompt("Enter initiative roll:");
    initiativeOrder.push({ player: playerName, roll: initiative });
    displayInitiative();
}

function displayInitiative() {
    const initiativeList = document.getElementById('initiative-list');
    initiativeOrder.sort((a, b) => b.roll - a.roll); // Sort by highest roll
    initiativeList.innerHTML = initiativeOrder.map(entry => `
        <div>
            ${entry.player}: ${entry.roll}
        </div>
    `).join('');
}

// Initialize page content
window.onload = function() {
    if (document.getElementById('character-list')) displayCharacters();
    if (document.getElementById('npc-list')) displayNPCs();
}
