import { Ui } from "./ui.js";
import { Details } from "./details.js";

export class Home{
    constructor() {
        const navCategory = document.querySelectorAll('#navbarNav .nav-link');
        const activeCate = document.querySelector('#navbarNav .active');

        this.getGamesCategory(activeCate.dataset.cat);
        navCategory.forEach((link) => {
            link.addEventListener('click', (e) => {
                document.querySelector('#navbarNav .active').classList.remove('active');
                console.log(e.target.dataset);
                this.getGamesCategory(e.target.dataset.cat);
                link.classList.add('active')
             })
        })

        this.ui = new Ui();
        
    }
    async getGamesCategory(category) {

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '2227e331c2msh05facf2c7e9f8afp193668jsn7171d1b785a1',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        document.querySelector('#loader').classList.remove('d-none');
        const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
        const result = await response.json();
        this.ui.displayGames(result);
        this.clickEvent();
        document.querySelector('#loader').classList.add('d-none');
    }
    clickEvent() {
        document.querySelectorAll('.card').forEach((gameCard) => {
            gameCard.addEventListener("click", (e) => {
                console.log(gameCard.dataset);
                this.show(gameCard.dataset.id)
            });
        });

    }
    
    show(gameId) {
        const details = new Details(gameId);
        document.querySelector('#details').classList.remove('d-none');
        document.querySelector('#home').classList.add('d-none');
     }
}