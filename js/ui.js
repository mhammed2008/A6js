export class Ui {
    displayGames(games) {
        let box = ``;
        const gamesList = document.querySelector('#games-list');
        for (let index = 0; index < games.length; index++) {
            const game = games[index];
            box += `
                <div class="col-md-6 col-lg-4 col-xl-3" >
                    <div data-id="${game.id}" class="card bg-transparent" role="button">
                        <figure class="p-3 pb-0">
                            <img src="${game.thumbnail}" class="card-img-top" alt="${game.title}">
                        </figure>
                        <div class="card-body text-white pt-0">
                            <div class="d-flex justify-content-between align-items-center">
                                <h5 class="card-title fs-6 mb-1">${game.title}</h5>
                                <p class="bg-primary py-1 px-2 rounded-2 mb-1">Free</p>
                            </div>

                            <p class="card-text text-center text-secondary fw-bold overflow-hidden">
                                ${game.short_description.split(" " , 11) }
                            </p>
                        </div>
                        <div class="card-footer text-white d-flex justify-content-between align-items-center ">
                            <span class="p-1 rounded-2 fw-bold">${game.genre}</span>
                            <span class="p-1 rounded-2 fw-bold">${game.platform}</span>
                        </div>
                    </div>
                </div>
            `
        }
        gamesList.innerHTML = box;
    }

    detailsDisplay(game) {

        document.querySelector('#detailsShow').innerHTML = `
                <div class="col-md-4">
                    <figure>
                        <img src="${game.thumbnail}" class="w-100" alt="">
                    </figure>
                </div>
                <div class="col-md-8">
                    <div class="inner">
                        <h2 class="fs-3">Title: ${game.title}</h2>
                        <p>Category: <span class="py-1 px-2 rounded-2 fs-xs fw-bold text-black tag">${game.genre}</span></p>
                        <p>Platform: <span class="py-1 px-2 rounded-2 fs-xs fw-bold text-black tag">${game.platform}</span></p>
                        <p>Status: <span class="py-1 px-2 rounded-2 fs-xs fw-bold text-black tag">${game.status}</span></p>
                        <p class="fs-sm">
                            ${game.description}
                        </p>
                        <a href="${game.game_url}" class="btn btn-outline-warning text-white"  target="_blank">
                            Show Game
                        </a>
                    </div>
                </div>
        `
    }
}


