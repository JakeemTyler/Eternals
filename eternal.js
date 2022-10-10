const eternals = [
    {
        name: "Ajak",
        skills: ["Gold and Blue Armor", "Healing", "Spiritual Powers"],
        pic: "eternalsimg/ajak.jpeg"
    },
    {
        name:"Kingo",
        skills: ["Sword", "Acting","Shotgun"],
        pic: "eternalsimg/kingo.jpg"
    },
    {
        name: "Thena",
        skills: ["Spear", "Teleport", "Telepathy"],
        pic: "eternalsimg/thena.jpeg"
    },
    {
        name: "Starfox",
        skills: ["Speed","Stamina", "Hyper Reflex"],
        pic: "eternalsimg/starfox.png"
    },
    {
        name: "Ikaris",
        skills: ["Super Strength", "Laser Eyes", "Cosmic Energy"],
        pic: "eternalsimg/ikaris.jpg"
    }
];


const showInfo = function() {

let getAtt = document.querySelector("#inputSkill").value;

document.querySelector("#eternalIMG").src = ``;
document.querySelector("#displayedString").innerHTML = ``;


eternals.forEach((eternal) => {
    for (let index = 0; index < eternal.skills.length; index++) {
        if(getAtt == eternal.skills[index]) {
            document.querySelector("#displayedString").innerHTML = `${eternal.name} is skilled in ${eternal.skills[index]}`;
            document.querySelector("#eternalIMG").src = eternal.pic;
            
        } 
    }
});
}

const displayedHeroes = function() {
    let heroDisplayed = ""
    eternals.forEach((eternal) => {
        heroDisplayed += `<li> ${eternal.name} </li>`
    });

    document.querySelector("#displayedHero").innerHTML = heroDisplayed

}

displayedHeroes();