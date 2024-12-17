import { Ui } from "./ui.js";

export class Details{
    constructor(gameId) { 
        this.ui = new Ui;

        this.showDetails(gameId);
    }
    async showDetails(gameId) {
        document.querySelector('#loader').classList.remove('d-none');
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '2227e331c2msh05facf2c7e9f8afp193668jsn7171d1b785a1',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`, options);
        const result = await response.json();
        console.log(result);
        this.ui.detailsDisplay(result);
        document.querySelector("#xmark").addEventListener("click", () => {
            console.log('sdf');
            document.querySelector('#details').classList.add('d-none');
            document.querySelector('#home').classList.remove('d-none');
        });
        document.querySelector('#loader').classList.add('d-none');
    }
}