// Character Management
let characters = JSON.parse(localStorage.getItem('characters')) || [];

document.getElementById('add-character-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const newCharacter = {
        name: document.getElementById('char-name').value,
        class: document.getElementById('char-class').value,
        level: document.getElementById('char-level').value,
        strength: document.getElementById('char-strength').value,
        dexterity: document.getElementById('char-dexterity').value,
        constitution: document.getElementById('char-constitution').value,
        intelligence: document.getElementById('char-intelligence').value,
        wisdom: document.getElementById('char-wisdom').value,
        charisma: document.getElementById('char-charisma').value
    };
    
    characters.push(newCharacter);
    localStorage.setItem('characters', JSON.stringify(characters));
    displayCharacters();
    this.reset(); // Clear the form
});

function displayCharacters() {
    const characterList = document.getElementById('character-list');
    if (characterList) {
        characterList.innerHTML = ''; // Clear the current list

        characters.forEach((character, index) => {
            characterList.innerHTML += `
                <div class="character-card">
                    <h4>${character.name} (${character.class}, Level ${character.level})</h4>
                    <p>Strength: ${character.strength}, Dexterity: ${character.dexterity}, Constitution: ${character.constitution}, Intelligence: ${character.intelligence}, Wisdom: ${character.wisdom}, Charisma: ${character.charisma}</p>
                    <button onclick="deleteCharacter(${index})">Delete</button>
                </div>
            `;
        });
    }
}

function deleteCharacter(index) {
    characters.splice(index, 1);
    localStorage.setItem('characters', JSON.stringify(characters));
    displayCharacters();
}

// Generate Random Character
document.getElementById('generate-random-character-btn')?.addEventListener('click', function() {
    const randomCharacter = {
        name: 'Random Character ' + (characters.length + 1),
        class: 'Random Class',
        level: Math.floor(Math.random() * 20) + 1,
        strength: Math.floor(Math.random() * 20) + 1,
        dexterity: Math.floor(Math.random() * 20) + 1,
        constitution: Math.floor(Math.random() * 20) + 1,
        intelligence: Math.floor(Math.random() * 20) + 1,
        wisdom: Math.floor(Math.random() * 20) + 1,
        charisma: Math.floor(Math.random() * 20) + 1,
    };
    
    characters.push(randomCharacter);
    localStorage.setItem('characters', JSON.stringify(characters));
    displayCharacters();
});

// On page load, display characters
if (document.getElementById('character-list')) {
    displayCharacters();
}

// NPC Management
let npcs = JSON.parse(localStorage.getItem('npcs')) || [];

document.getElementById('add-npc-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const newNpc = {
        name: document.getElementById('npc-name').value,
        role: document.getElementById('npc-role').value
    };
    
    npcs.push(newNpc);
    localStorage.setItem('npcs', JSON.stringify(npcs));
    displayNpcs();
    this.reset(); // Clear the form
});

function displayNpcs() {
    const npcList = document.getElementById('npc-list');
    if (npcList) {
        npcList.innerHTML = ''; // Clear the current list

        npcs.forEach(npc => {
            npcList.innerHTML += `
                <div class="npc-card">
                    <h4>${npc.name} (${npc.role})</h4>
                </div>
            `;
        });
    }
}

// On page load, display NPCs
if (document.getElementById('npc-list')) {
    displayNpcs();
}

// Initiative Tracker
let initiativeList = JSON.parse(localStorage.getItem('initiativeList')) || [];

function addPlayer() {
    const playerName = document.getElementById('player-name').value;
    const initiativeValue = document.getElementById('initiative-value').value;

    const newPlayer = {
        name: playerName,
        initiative: parseInt(initiativeValue)
    };

    initiativeList.push(newPlayer);
    localStorage.setItem('initiativeList', JSON.stringify(initiativeList));

    displayInitiative();
}

function displayInitiative() {
    const initiativeListDiv = document.getElementById('initiative-list');
    if (initiativeListDiv) {
        initiativeListDiv.innerHTML = '';

        initiativeList.sort((a, b) => b.initiative - a.initiative);

        initiativeList.forEach(player => {
            initiativeListDiv.innerHTML += `
                <div class="initiative-card">
                    <h4>${player.name} (Initiative: ${player.initiative})</h4>
                </div>
            `;
        });
    }
}

// On page load, display the initiative list
if (document.getElementById('initiative-list')) {
    displayInitiative();
}

// Dice Roller Function
function rollDice(sides) {
    const result = Math.floor(Math.random() * sides) + 1;
    document.getElementById('dice-result').textContent = `Result: ${result}`;
}

// Story Management
document.getElementById('save-story')?.addEventListener('click', function() {
    const storyText = document.getElementById('story-text').value;
    localStorage.setItem('story', storyText);
});

document.addEventListener('DOMContentLoaded', function() {
    const savedStory = localStorage.getItem('story');
    if (savedStory) {
        document.getElementById('story-text').value = savedStory;
    }
});
