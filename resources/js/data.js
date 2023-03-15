
// json
let drivers = [
    {
        id: 1,
        firstName: 'Lewis',
        lastName: 'Hamilton',
        team: 'Mercedes',
        nationality: 'British',
        worldChampion: 'yes (7 Titles)',
        raceWinner: 'yes (103 Wins)',
        rookie: 'no',
        imagename: "./resources/images/hamilton.png",
        imagealt: 'Photo of Mercedes Driver Lewis Hamilton',
        color: "#01d2bd",
        font: "#ffffff"
    },
    {
        id: 2,
        firstName: 'George',
        lastName: 'Russell',
        team: 'Mercedes',
        nationality: 'British',
        worldChampion: 'no',
        raceWinner: 'no',
        rookie: 'no',
        imagename: "./resources/images/russell.png",
        imagealt: 'Photo of Mercedes Driver George Russell',
        color: "#01d2bd",
        font: "#ffffff"
    },
    {
        id: 3,
        firstName: 'Max',
        lastName: 'Verstappen',
        team: 'Red Bull',
        nationality: 'Dutch',
        worldChampion: 'yes (1 Title)',
        raceWinner: 'yes (24 Wins)',
        rookie: 'no',
        imagename: "./resources/images/verstappen.png",
        imagealt: 'Photo of Red Bull Driver Max Verstappen',
        color: "#0700ee",
        font: "#ffffff"
    },
    {
        id: 4,
        firstName: 'Sergio "Checo"',
        lastName: 'Pérez',
        team: 'Red bull',
        nationality: 'Mexican',
        worldChampion: 'no',
        raceWinner: 'yes (3 Wins)',
        rookie: 'no',
        imagename: "./resources/images/perez.png",
        imagealt: 'Photo of Red Bull Driver Sergio "Checo" Pérez',
        color: "#0700ee",
        font: "#ffffff"
    },
    {
        id: 5,
        firstName: 'Charles',
        lastName: 'Leclerc',
        team: 'Ferrari',
        nationality: 'Monegasque',
        worldChampion: 'no',
        raceWinner: 'yes (4 Wins)',
        rookie: 'no',
        imagename: "./resources/images/leclerc.png",
        imagealt: 'Photo of Ferrari Driver Charles Leclerc',
        color: "#dc0000",
        font: "#ffffff"
    },
    {
        id: 6,
        firstName: 'Carlos',
        lastName: 'Sainz Jr.',
        team: 'Ferrari',
        nationality: 'Spanish',
        worldChampion: 'no',
        raceWinner: 'no',
        rookie: 'no',
        imagename: "./resources/images/sainz.png",
        imagealt: 'Photo of Ferrari Driver Carlos Sainz Jr.',
        color: "#dc0000",
        font: "#ffffff"
    },
    {
        id: 7,
        firstName: 'Lando',
        lastName: 'Norris',
        team: 'McLaren',
        nationality: 'British',
        worldChampion: 'no',
        raceWinner: 'no',
        rookie: 'no',
        imagename: "./resources/images/norris.png",
        imagealt: 'Photo of McLaren Driver Lando Norris',
        color: "#ff8700",
        font: "#ffffff"
    },
    {
        id: 8,
        firstName: 'Daniel',
        lastName: 'Ricciardo',
        team: 'Mclaren',
        nationality: 'Australian',
        worldChampion: 'no',
        raceWinner: 'yes (8 Wins)',
        rookie: 'no',
        imagename: "./resources/images/ricciardo.png",
        imagealt: 'Photo of McLaren Driver Daniel Ricciardo',
        color: "#ff8700",
        font: "#ffffff"
    },
    {
        id: 9,
        firstName: 'Pierre',
        lastName: 'Gasly',
        team: 'Alpha Tauri',
        nationality: 'French',
        worldChampion: 'no',
        raceWinner: 'yes (1 Win)',
        rookie: 'no',
        imagename: "./resources/images/gasly.png",
        imagealt: 'Photo of Alpha Tauri Driver Pierre Gasly',
        color: "#2c4563",
        font: "#ffffff"
    },
    {
        id: 10,
        firstName: 'Yuki',
        lastName: 'Tsunoda',
        team: 'Alpha Tauri',
        nationality: 'Japanese',
        worldChampion: 'no',
        raceWinner: 'no',
        rookie: 'no',
        imagename: "./resources/images/tsunoda.png",
        imagealt: 'Photo of Alpha Tauri Driver Yuki Tsunoda',
        color: "#2c4563",
        font: "#ffffff"
    },
    {
        id: 11,
        firstName: 'Esteban',
        lastName: 'Ocon',
        team: 'Alpine',
        nationality: 'French',
        worldChampion: 'no',
        raceWinner: 'yes (1 Win)',
        rookie: 'no',
        imagename: "./resources/images/ocon.png",
        imagealt: 'Photo of Alpine Driver Esteban Ocon',
        color: "#0090ff",
        font: "#ffffff"
    },
    {
        id: 12,
        firstName: 'Fernando',
        lastName: 'Alonso',
        team: 'Alpine',
        nationality: 'Spanish',
        worldChampion: 'yes (2 Titles)',
        raceWinner: 'yes (32 Wins)',
        rookie: 'no',
        imagename: "./resources/images/alonso.png",
        imagealt: 'Photo of Alpine Driver Fernando Alonso',
        color: "#0090ff",
        font: "#ffffff"
    },
    {
        id: 13,
        firstName: 'Alex',
        lastName: 'Albon',
        team: 'Williams',
        nationality: 'Thai',
        worldChampion: 'no',
        raceWinner: 'no',
        rookie: 'no',
        imagename: "./resources/images/albon.png",
        imagealt: 'Photo of Williams Driver Alex Albon',
        color: "#015aff",
        font: "#ffffff"
    },
    {
        id: 14,
        firstName: 'Nicholas',
        lastName: 'Latifi',
        team: 'Williams',
        nationality: 'Canadian',
        worldChampion: 'no',
        raceWinner: 'no',
        rookie: 'no',
        imagename: "./resources/images/latifi.png",
        imagealt: 'Photo of Williams Driver Nicholas Latifi',
        color: "#015aff",
        font: "#ffffff"
    },
    {
        id: 15,
        firstName: 'Valtteri',
        lastName: 'Bottas',
        team: 'Alfa Romeo',
        nationality: 'Finnish',
        worldChampion: 'no',
        raceWinner: 'yes (10 Wins)',
        rookie: 'no',
        imagename: "./resources/images/bottas.png",
        imagealt: 'Photo of Alfa Romeo Driver Valtteri Bottas',
        color: "#900000",
        font: "#ffffff"
    },
    {
        id: 16,
        firstName: 'Guanyu',
        lastName: 'Zhou',
        team: 'Alfa Romeo',
        nationality: 'Chinese',
        worldChampion: 'no',
        raceWinner: 'no',
        rookie: 'yes',
        imagename: "./resources/images/zhou.png",
        imagealt: 'Photo of Alfa Romeo Driver Zhou Guanyu',
        color: "#900000",
        font: "#ffffff"
    },
    {
        id: 17,
        firstName: 'Sebastian',
        lastName: 'Vettel',
        team: 'Aston Martin',
        nationality: 'German',
        worldChampion: 'yes (4 Titles)',
        raceWinner: 'yes (53 Wins)',
        rookie: 'no',
        imagename: "./resources/images/vettel.png",
        imagealt: 'Photo of Aston Martin Driver Sebastian Vettel',
        color: "#006e61",
        font: "#ffffff"
    },
    {
        id: 18,
        firstName: 'Lance',
        lastName: 'Stroll',
        team: 'Aston Martin',
        nationality: 'Canadian',
        worldChampion: 'no',
        raceWinner: 'no',
        rookie: 'no',
        imagename: "./resources/images/stroll.png",
        imagealt: 'Photo of Aston Martin Driver Lance Stroll',
        color: "#006e61",
        font: "#ffffff"
    },
    {
        id: 19,
        firstName: 'Kevin',
        lastName: 'Magnussen',
        team: 'Haas',
        nationality: 'Danish',
        worldChampion: 'no',
        raceWinner: 'no',
        rookie: 'no',
        imagename: "./resources/images/magnussen.png",
        imagealt: 'Photo of Haas Driver Kevin Magnussen',
        color: "#ffffff",
        font: "#000"
    },
    {
        id: 20,
        firstName: 'Mick',
        lastName: 'Schumacher',
        team: 'Haas',
        nationality: 'German',
        worldChampion: 'no',
        raceWinner: 'no',
        rookie: 'no',
        imagename: "./resources/images/schumacher.png",
        imagealt: 'Photo of Haas Driver Mick Schumacher',
        color: "#ffffff",
        font: "#000"
    }

];

// Create card function
function generateCard(drivers, i) {

    let card = `

    <div id="info-${drivers[i].id}" class="modal" style="background-color:${drivers[i].color}; color:${drivers[i].font}">

        <div>
            <img class="img-top" src="${drivers[i].imagename}" alt="${drivers[i].imagealt}" />
        </div>

        <div class="modalText">
            <span> <h3>${drivers[i].firstName} ${drivers[i].lastName}</h3> </span>
            <h5>${drivers[i].firstName} drives for ${drivers[i].team}.</h5></b>  
            <p><b> Nationality:</b> ${drivers[i].nationality}.<br>
            <b> World Champion: </b>${drivers[i].worldChampion}.<br>
            <b> Race Winner: </b>${drivers[i].raceWinner}.<br>
            <b> Rookie:</b> ${drivers[i].rookie}.
            </p>
        </div>

        <a href="#" class="infoButton" rel="modal:close">Close</a>
    </div>

    <div class="col-6 col-md-4 col-lg-3 mb-4">
            <div class="card mx-auto text-center">
            <img class="card-img-top" src="${drivers[i].imagename}" alt="${drivers[i].imagealt}" />
        
                <div class="card-body" style="background-color:${drivers[i].color}; color:${drivers[i].font}">
                    <h4>${drivers[i].firstName}</h4>
                    <h3>${drivers[i].lastName}</h3>
                    <h6>${drivers[i].team}</h6>
                    <input type="button" class="infoButton" value="More Info" id="${drivers[i].id}" />
                </div>
            </div>
        </div>
        `;
    $("#cardContent").append(card);


};

// display function
function showAll(drivers) {
    for (let i = 0; i < drivers.length; i++) {

        generateCard(drivers, i);
    };
};

//modal popup function
function moreInfo() {
    $(".infoButton").click(function () {
        console.log(this.id);
        $("#info-" + this.id).modal({ showClose: false });
    });
};

// reset button
function filterReset() {
    let refresh = document.getElementById("reset");

    refresh.addEventListener("click", function () {
        location.reload();
    });
};

//sort function
function sort(arg) {

    let nameSort = [];

    for (let i = 0; i < drivers.length; i++) {
        nameSort.push(drivers[i].lastName);
    };

    nameSort.sort();

    if (arg) {
        nameSort.reverse();
    };

    $("#cardContent").html("");

    for (let i = 0; i < nameSort.length; i++) {
        let sorted = nameSort[i];
        for (let j = 0; j < drivers.length; j++) {
            let driverName = drivers[j].lastName;
            if (sorted === driverName) {
                generateCard(drivers, j);
            };
        };

    };
};

// document ready
$(() => {

    // display all on first load
    showAll(drivers);

    //reset button
    filterReset();

    // sort A-Z
    $("#azFilter").click(function () {
        sort();
        moreInfo();
    });

    // sort A-Z
    $("#zaFilter").click(function () {
        sort(true);
        moreInfo();
    });

    // Search
    $("#searchButton").click(function () {

        let needle = $("#search").val();
        let reggEx = new RegExp(needle, "gi");

        if (needle) {

            let result = [];
            for (let i = 0; i < drivers.length; i++) {
                // I didnt want all of the content inside the object to be searched - so this way I can target specific parts
                let haystack1 = drivers[i].firstName + drivers[i].lastName + drivers[i].team + drivers[i].nationality;
                let match = haystack1.match(reggEx);
                if (match) {
                    result.push(i);
                };
            };

            $("#cardContent").html("");
            for (let i = 0; i < result.length; i++) {
                generateCard(drivers, result[i]);
            };
        };
        moreInfo();
    });

    //filter function
    $("input[type='checkbox']").click(function () {

        let checkboxes = document.querySelectorAll("input[type='checkbox']");
        $("#cardContent").html("");
        let result = [];

        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                result.push(checkboxes[i].value);
            };
        };

        if (result.length === 0) {
            showAll(drivers);
        };

        for (let i = 0; i < result.length; i++) {

            let filterResult = result[i];
            let regEx = new RegExp(filterResult, "gi");

            for (let j = 0; j < drivers.length; j++) {
                let filter = drivers[j].team;
                let res = filter.match(regEx);
                console.log(res);
                if (res != null) {
                    generateCard(drivers, j);
                };
            };
        };
        moreInfo();

    });


    moreInfo();

});

