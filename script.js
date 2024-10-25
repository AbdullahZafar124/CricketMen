// Data for FIFA 24 featured players
const players = [
    {
        name: "Virat Kohli",
        role: "Batsman, India",
        image: "Virat Kohli.jpg",
        description: "Known for his fierce competitive spirit and exceptional batting technique, Virat Kohli has been a cornerstone of India's cricket team. As he steps onto the world stage one last time, fans are eager to see his final chapter in T20 history."
    },
    {
        name: "David Warner",
        role: "Batsman, Australia",
        image: "David Warner.jpeg",
        description: "A dynamic opening batsman, David Warner has thrilled crowds with his aggressive playing style. This World Cup marks the end of an era for Warner, who remains one of Australia's finest white-ball cricketers."
    },
    {
        name: "Trent Boult",
        role: "Bowler, New Zealand",
        image: "Trent Boult.jpeg",
        description: "A left-arm fast bowler known for his swing and accuracy, Trent Boult has played a crucial role in New Zealand's T20 campaigns. The 2025 World Cup will be his last, bringing an end to his storied career in international cricket."
    },
    {
        name: "Jos Buttler",
        role: "Wicketkeeper-Batsman, England",
        image: "Jos Buttler.jpeg",
        description: "Known for his explosive batting and agility behind the stumps, Jos Buttler has been a game-changer for England. As he prepares for his final World Cup, fans look forward to one last showcase of his match-winning abilities."
    },
    {
        name: "Shakib Al Hasan",
        role: "All-Rounder, Bangladesh",
        image: "Shakib-Al-Hasan.png",
        description: "An exceptional all-rounder, Shakib Al Hasan has been the pride of Bangladeshi cricket. With a career spanning impressive records, the 2025 World Cup will see him bid farewell to the T20 format, leaving an indelible mark on the sport."
    },
    {
        name:"Quinton de Kock",
        role: "Wicketkeeper-Batsman, South Africa",
        image: "Quinton de Kock.jpg",
        description: "De Kock's aggressive batting at the top of the order and reliable wicketkeeping have made him a key figure in South African cricket. As he steps down from the T20 stage, fans will witness his remarkable skill set for one last tournament."
    }



];

// Dynamically generate player cards
window.addEventListener('DOMContentLoaded', () => {
    const playersGrid = document.getElementById('players-grid');

    players.forEach(player => {
        // Create a card for each player
        const playerCard = document.createElement('div');
        playerCard.classList.add('player-card');

        // Populate the card with player details
        playerCard.innerHTML = `
            <img src="${player.image}" alt="${player.name}">
            <div class="player-info">
                <h3>${player.name}</h3>
                <p><strong>${player.role}</strong></p>
                <p>${player.description}</p>
            </div>
        `;

        // Append the card to the grid
        playersGrid.appendChild(playerCard);
    });
});