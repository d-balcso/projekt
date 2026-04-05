function checkQuiz() {

    let score = 0;

    function visszajelzes(id, helyes, helyesValasz) {
        let elem = document.getElementById(id);

        if (helyes) {
            elem.innerHTML = "✔ Helyes válasz!";
            elem.style.color = "green";
        } else {
            elem.innerHTML = "✘ Helytelen! Helyes: " + helyesValasz;
            elem.style.color = "red";
        }
    }

    // 1. feladat
    let elso = document.querySelector('input[name="elso"]:checked');
    if (elso && elso.value === "luffy") {
        score++;
        visszajelzes("visszajelzes1", true, "Monkey D. Luffy");
    } else {
        visszajelzes("visszajelzes1", false, "Monkey D. Luffy");
    }

    // 2. feladat
    let masodik = document.getElementById("kalozcsapat").value.toLowerCase();
    if (masodik.includes("straw")) {
        score++;
        visszajelzes("visszajelzes2", true, "Straw Hat Pirates");
    } else {
        visszajelzes("visszajelzes2", false, "Straw Hat Pirates");
    }

    // 3. feladat
    let harmadik = document.querySelector('input[name="q3"]:checked');
    if (harmadik && harmadik.value === "nami") {
        score++;
        visszajelzes("visszajelzes3", true, "Nami");
    } else {
        visszajelzes("visszajelzes3", false, "Nami");
    }

    // 4. feladat
    let negyedik = document.getElementById("kalozkiraly").value.toLowerCase();
    if (negyedik.includes("roger")) {
        score++;
        visszajelzes("visszajelzes4", true, "Gol D. Roger");
    } else {
        visszajelzes("visszajelzes4", false, "Gol D. Roger");
    }

    // 5. feladat
    let otodik = document.querySelector('input[name="ötödik"]:checked');
    if (otodik && otodik.value === "brook") {
        score++;
        visszajelzes("visszajelzes5", true, "Brook");
    } else {
        visszajelzes("visszajelzes5", false, "Brook");
    }

    // 6. feladat
    let hatodik = document.querySelector('input[name="hatodik"]:checked');
    if (hatodik && hatodik.value === "sanji") {
        score++;
        visszajelzes("visszajelzes6", true, "Sanji");
    } else {
        visszajelzes("visszajelzes6", false, "Sanji");
    }

    // 7. feladat
    let hetedik = document.getElementById("devilfruit").value.toLowerCase();
    if (hetedik.includes("nika") || hetedik.includes("gomu")) {
        score++;
        visszajelzes("visszajelzes7", true, "Nika / Gomu Gomu");
    } else {
        visszajelzes("visszajelzes7", false, "Hito Hito no Mi, Model: Nika");
    }

    // 8. feladat
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

    // 9. feladat
    let kilencedik = document.querySelector('input[name="kilencedik"]:checked');
    if (kilencedik && kilencedik.value === "worldgovernment") {
        score++;
        visszajelzes("visszajelzes9", true, "World Government");
    } else {
        visszajelzes("visszajelzes9", false, "World Government");
    }

    // 10. feladat
    let tizedik = document.querySelector('input[name="tizedik"]:checked');
    if (tizedik && tizedik.value === "imu") {
        score++;
        visszajelzes("visszajelzes10", true, "Imu");
    } else {
        visszajelzes("visszajelzes10", false, "Imu");
    }

    // eredmeny kiiras
    let eredmenyElem = document.getElementById("eredmeny");

    if (!eredmenyElem) {
        eredmenyElem = document.createElement("h2");
        eredmenyElem.id = "eredmeny";
        document.body.appendChild(eredmenyElem);
    }

    eredmenyElem.innerText = "Pontszám: " + score + "/10";

    if (score === 10) {
        setTimeout(() => {
    window.location.href = "absoluteOP.html";
    }, 2000);
    }
}


