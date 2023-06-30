const playerListContainer = document.getElementById('player-table')

const players = [
    // HARDCODED LIST TO BE REPLACED WITH LIVE DATA.
    {
        name: "kachra seth",
        score: "5"
    },
    {
        name: "Baburao",
        score: "5"
    }
    ,    {
        name: "Chacha",
        score: "5"
    },
    {
        name: "Vidhayak",
        score: "5"
    },
    {
        name: "Hai",
        score: "5"
    },
    {
        name: "Hamare",
        score: "5"
    }
]

function scoreBoard() {
    for(let i=0; i<players.length; i++){
        const tr = document.createElement('tr')
        tr.innerHTML = `<td>
                            <div class="profile-x">
                                <span><b>#${i+1}</b></span>
                                <span>${players[i].name}</span>
                            </div>
                        </td>
                        `
        playerListContainer.appendChild(tr)
    }
}

scoreBoard()