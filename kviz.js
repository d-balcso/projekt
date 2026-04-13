function checkQuiz() {

    let score = 0;

    function visszajelzes(id, helyes, helyesValasz) {
        let elem = document.getElementById(id);

        if (helyes) {
            elem.innerHTML = "Helyes válasz!";
            elem.style.color = "green";
        } else {
            elem.innerHTML = "Helytelen! Helyes: " + helyesValasz;
            elem.style.color = "red";
        }
    }

    //#region 1. kerdes
    let elso = document.querySelector('input[name="elso"]:checked');
    if (elso && elso.value === "luffy") {
        score++;
        visszajelzes("visszajelzes1", true, "Monkey D. Luffy");
    } else {
        visszajelzes("visszajelzes1", false, "Monkey D. Luffy");
    }
    //#endregion

    //#region 2. kerdes
    let masodik = document.getElementById("kalozcsapat").value.toLowerCase();
    if (masodik.includes("straw")) {
        score++;
        visszajelzes("visszajelzes2", true, "Straw Hat Pirates");
    } else {
        visszajelzes("visszajelzes2", false, "Straw Hat Pirates");
    }
    //#endregion

    //#region 3. kerdes
    
    let harmadik = document.querySelector('input[name="q3"]:checked');
    if (harmadik && harmadik.value === "nami") {
        score++;
        visszajelzes("visszajelzes3", true, "Nami");
    } else {
        visszajelzes("visszajelzes3", false, "Nami");
    }
    //#endregion

    //#region 4. kerdes
    let negyedik = document.getElementById("kalozkiraly").value.toLowerCase();
    if (negyedik.includes("roger")) {
        score++;
        visszajelzes("visszajelzes4", true, "Gol D. Roger");
    } else {
        visszajelzes("visszajelzes4", false, "Gol D. Roger");
    }
    //#endregion

    //#region 5. kerdes
    let otodik = document.querySelector('input[name="ötödik"]:checked');
    if (otodik && otodik.value === "brook") {
        score++;
        visszajelzes("visszajelzes5", true, "Brook");
    } else {
        visszajelzes("visszajelzes5", false, "Brook");
    }
    //#endregion

    //#region 6. kerdes
    let hatodik = document.querySelector('input[name="hatodik"]:checked');
    if (hatodik && hatodik.value === "sanji") {
        score++;
        visszajelzes("visszajelzes6", true, "Sanji");
    } else {
        visszajelzes("visszajelzes6", false, "Sanji");
    }
    //#endregion

    //#region 7. kerdes
    let hetedik = document.getElementById("devilfruit").value.toLowerCase();
    if (hetedik.includes("nika") || hetedik.includes("gomu")) {
        score++;
        visszajelzes("visszajelzes7", true, "Nika / Gomu Gomu");
    } else {
        visszajelzes("visszajelzes7", false, "Hito Hito no Mi, Model: Nika");
    }
    //#endregion

    //#region 8. kerdes
    let nyolcadik = document.querySelectorAll('input[name="nyolcadik"]:checked');
    let valaszok = Array.from(nyolcadik).map(el => el.value);

    if (
        valaszok.includes("shanks") &&
        valaszok.includes("kaido") &&
        valaszok.includes("blackbeard") &&
        !valaszok.includes("garp")
    ) {
        score++;
        visszajelzes("visszajelzes8", true, "Shanks, Kaido, Blackbeard");
    } else {
        visszajelzes("visszajelzes8", false, "Shanks, Kaido, Blackbeard");
    }
    //#endregion

    //#region 9. kerdes
    let kilencedik = document.querySelector('input[name="kilencedik"]:checked');
    if (kilencedik && kilencedik.value === "worldgovernment") {
        score++;
        visszajelzes("visszajelzes9", true, "World Government");
    } else {
        visszajelzes("visszajelzes9", false, "World Government");
    }
    //#endregion

    //#region 10. kerdes
    let tizedik = document.querySelector('input[name="tizedik"]:checked');
    if (tizedik && tizedik.value === "imu") {
        score++;
        visszajelzes("visszajelzes10", true, "Imu");
    } else {
        visszajelzes("visszajelzes10", false, "Imu");
    }
    //#endregion
    
    //#region 11. kerdes
    let tizenegy = Number(slider.value);

    if (tizenegy >= 1120 && tizenegy <= 1180) {
        score++;
        visszajelzes("visszajelzes11", true, "1157");
    } else {
        visszajelzes("visszajelzes11", false, "1157");
    }
    //#endregion

    //#region 12. kerdes
    let tizenkettedik = document.querySelector('input[name="tizenkettedik"]:checked');
    if (tizenkettedik && tizenkettedik.value === "franky") {
    score++;
    visszajelzes("visszajelzes12", true, "Franky");
    } else {
    visszajelzes("visszajelzes12", false, "Franky");
    }
    //#endregion

    //#region 13. kerdes
    let tizenharmadik = document.querySelectorAll('input[name="tizenharmadik"]:checked');
    let valaszok13 = Array.from(tizenharmadik).map(el => el.value);

    if (
        valaszok13.includes("mihawk") &&
        valaszok13.includes("crocodile") &&
        valaszok13.includes("doflamingo") &&
        !valaszok13.includes("luffy")
    ) {
        score++;
    visszajelzes("visszajelzes13", true, "Mihawk, Crocodile, Doflamingo");
    } else {
    visszajelzes("visszajelzes13", false, "Mihawk, Crocodile, Doflamingo");
    }
    //#endregion

    //#region eredmeny kiiras
    let eredmenyElem = document.getElementById("eredmeny");
    eredmenyElem.style.display = "block";
    eredmenyElem.style.opacity = "1";
    
    
    document.getElementById("eredmeny").textContent = score + "/13";    

    if (score === 13) {
        setTimeout(() => {
    window.location.href = "absoluteOP.html";
    }, 7000);
    }
    //#endregion
}

// 11. kerdeshez: 
let slider = document.getElementById("epizodok");
let output = document.getElementById("value");
output.textContent = slider.value;
slider.addEventListener("input", function () {
    output.textContent = slider.value;
});