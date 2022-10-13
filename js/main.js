const profilesList = [
  {
    img: "images/1.jpg",
    name: "Divine Ode",
    lastText: "Where are you?",
  },
  {
    img: "images/6.jpg",
    name: "Daniel Ugwumba",
    lastText: "My birthday na on 19th of October Ohh?",
  },
  {
    img: "images/7.jpg",
    name: "Promise Madu",
    lastText: "Will you be around during teenagers meeting?",
  },
  {
    img: "images/manager.jpg",
    name: "Manager Fabs & Sons",
    lastText: "lorem thiklddfi thankodf thalid?",
  },
  {
    img: "images/5.jpg",
    name: "Gode Samuel",
    lastText: "lorem thiklddfi thankodf thalid?",
  },
];

insertProfiles();

function insertProfiles() {
  const profiles = document.querySelector(".wrappedP");
  profiles.innerHTML = `
        <div class="profiles">
            <div class="imgWrapper">
              <img src=${profilesList[0].img} alt="Picture of a person" />
            </div>
            <div class="profileInp">
              <h3 class="name">${profilesList[0].name}</h3>
              <label class="last-text"
                >${profilesList[0].lastText}</label
              >
            </div>
        </div>
        <div class="profiles">
            <div class="imgWrapper">
              <img src=${profilesList[1].img} alt="Picture of a person" />
            </div>
            <div class="profileInp">
              <h3 class="name">${profilesList[1].name}</h3>
              <label class="last-text"
                >${profilesList[1].lastText}</label
              >
            </div>
        </div>
                <div class="profiles">
            <div class="imgWrapper">
              <img src=${profilesList[2].img} alt="Picture of a person" />
            </div>
            <div class="profileInp">
              <h3 class="name">${profilesList[2].name}</h3>
              <label class="last-text"
                >${profilesList[2].lastText}</label
              >
            </div>
        </div>
                <div class="profiles">
            <div class="imgWrapper">
              <img src=${profilesList[3].img} alt="Picture of a person" />
            </div>
            <div class="profileInp">
              <h3 class="name">${profilesList[3].name}</h3>
              <label class="last-text"
                >${profilesList[3].lastText}</label
              >
            </div>
        </div>
                <div class="profiles">
            <div class="imgWrapper">
              <img src=${profilesList[4].img} alt="Picture of a person" />
            </div>
            <div class="profileInp">
              <h3 class="name">${profilesList[4].name}</h3>
              <label class="last-text"
                >${profilesList[4].lastText}</label
              >
            </div>
        </div>

    `;
}
