function makeCV() {
    event.preventDefault();
    sessionStorage.setItem("name", document.getElementById('nameform').value);
    sessionStorage.setItem("email", document.getElementById('emailform').value);
    sessionStorage.setItem("linkedin", document.getElementById('linkedInform').value);
    sessionStorage.setItem("phone", document.getElementById('phoneform').value);
    sessionStorage.setItem("address", document.getElementById('addressform').value);
    sessionStorage.setItem("middle", document.getElementById('middleform').value);
    sessionStorage.setItem("middlenapomena", document.getElementById('middlenapomenaform').value);

    sessionStorage.setItem("datem", getDate(document.getElementById('datem1').value) + " - " + getDate(document.getElementById('datem2').value));
    for (let i = 1; i < 4; i++) {

        if (document.getElementById(`facultyform${i}`) == null || document.getElementById(`facultyform${i}`).value == "") break;

        sessionStorage.setItem(`faculty${i}`, document.getElementById(`facultyform${i}`).value);
        sessionStorage.setItem(`course${i}`, document.getElementById(`courseform${i}`).value);
        sessionStorage.setItem(`facultynapomena${i}`, document.getElementById(`facultynapomenaform${i}`).value);
        if (document.getElementById(`fakstrenutno${i}`).checked) {
            sessionStorage.setItem(`datef${i}`, getDate(document.getElementById(`datef${i}1`).value) + " - " + "trenutno");
        } else {
            sessionStorage.setItem(`datef${i}`, getDate(document.getElementById(`datef${i}1`).value) + " - " + getDate(document.getElementById(`datef${i}2`).value));
        }
    }


    for (let i = 1; i < 10; i++) {
        if (document.getElementById(`naziv${i}`) == null || document.getElementById(`naziv${i}`).value == "") break;
        sessionStorage.setItem(`naziv${i}`, document.getElementById(`naziv${i}`).value);
        sessionStorage.setItem(`firma${i}`, document.getElementById(`firma${i}`).value);
        if (document.getElementById(`posaotrenutno${i}`).checked) {
            sessionStorage.setItem(`datum${i}`, getDate(document.getElementById(`date${i}1`).value) + " - " + "trenutno");
        } else {
            sessionStorage.setItem(`datum${i}`, getDate(document.getElementById(`date${i}1`).value) + " - " + getDate(document.getElementById(`date${i}2`).value));
        }
        sessionStorage.setItem(`opis${i}`, document.getElementById(`opis${i}`).value);
    }

    for (let i = 1; i < 15; i++) {
        if (document.getElementById(`language${i}`) == null || document.getElementById(`language${i}`).value == "") break;
        sessionStorage.setItem(`language${i}`, document.getElementById(`language${i}`).value);
        sessionStorage.setItem(`level${i}`, document.getElementById(`level${i}`).value);
    }
    for (let i = 1; i < 15; i++) {
        if (document.getElementById(`skill${i}`) == null || document.getElementById(`skill${i}`).value == "") break;
        sessionStorage.setItem(`skill${i}`, document.getElementById(`skill${i}`).value);
    }
    for (let i = 1; i < 15; i++) {
        if (document.getElementById(`hobby${i}`) == null || document.getElementById(`hobby${i}`).value == "") break;
        sessionStorage.setItem(`hobby${i}`, document.getElementById(`hobby${i}`).value);
    }


    window.open("cv.html", "_blank");
    window.sessionStorage.clear();
}

function getDate(datehtml) {
    date = new Date(datehtml);
    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'Maj',
        'Jun',
        'Jul',
        'Avg',
        'Sep',
        'Okt',
        'Nov',
        'Dec'
    ]

    var year = date.getFullYear();
    var month = months[date.getMonth()];
    return month + " " + year;

}


var counterL = 1;
var counterS = 1;
var counterH = 1;
var counterJ = 1;
var counterF = 1;

function addNewFacultyField() {
    event.preventDefault();

    counterF++;


    var d = document.getElementById('educationinput');

    var ifac = document.createElement("input");
    ifac.type = "text";
    ifac.id = `facultyform${counterF}`;

    var lfac = document.createElement("label");
    lfac.innerText = "Naziv fakulteta";

    var icou = document.createElement("input");
    icou.type = "text";
    icou.id = `courseform${counterF}`;

    var lcou = document.createElement("label");
    lcou.innerText = "Smer";
    lcou.setAttribute('for', `courseform${counterF}`);

    var idu = document.createElement("input");
    idu.type = "month";
    idu.id = `datef${counterF}1`;

    var ldu = document.createElement("label");
    ldu.setAttribute('for', `datef${counterF}1`);
    ldu.innerText = "Datum upisa";

    var idz = document.createElement("input");
    idz.type = "month";
    idz.id = `datef${counterF}2`;

    var ldz = document.createElement("label");
    ldz.setAttribute('for', `datef${counterF}2`);
    ldz.innerText = "Datum upisa";

    var ct = document.createElement("input");
    ct.type = "checkbox";
    ct.id = `fakstrenutno${counterF}`;

    var lt = document.createElement("label");
    lt.setAttribute('for', `fakstrenutno${counterF}`);
    lt.innerText = "Studiram trenutno";

    var inap = document.createElement("input");
    inap.type = "text";
    inap.id = `facultynapomenaform${counterF}`;

    var lnap = document.createElement("label");
    lnap.setAttribute('for', `facultynapomenaform${counterF}`);
    lnap.innerText = "Napomena";

    var snap = document.createElement("small");
    snap.innerText = "Prosek, učešće u nekom projektu fakulteta...";

    var div = document.createElement("div");

    div.appendChild(lfac);
    div.appendChild(ifac);
    div.appendChild(lcou);
    div.appendChild(icou);
    div.appendChild(ldu);
    div.appendChild(idu);
    div.appendChild(ldz);
    div.appendChild(idz);
    div.appendChild(lt);
    div.appendChild(ct);
    div.appendChild(lnap);
    div.appendChild(inap);
    div.appendChild(snap);

    d.appendChild(div);

    document.querySelector(`#fakstrenutno${counterF}`).addEventListener('change', function() {
        document.getElementById(`datef${counterF}2`).readOnly = !document.getElementById(`datef${counterF}2`).readOnly;
    });
}

function addNewLanguageField() {
    event.preventDefault();

    counterL++;

    var d = document.getElementById('lanugagesinput');

    var i = document.createElement("input");
    i.id = `language${counterL}`;
    i.type = "text";

    var li = document.createElement("label");
    li.setAttribute('for', `language${counterL}`);
    li.innerText = `Jezik ${counterL}`;

    var s = document.createElement("select");
    s.options = ["Osnovni nivo", "Srednji nivo", "Napredni nivo", "Maternji jezik"];
    s.id = `level${counterL}`;

    var ls = document.createElement("label");
    ls.setAttribute('for', `level${counterL}`);
    ls.innerText = "Nivo znanja";

    var div = document.createElement("div");

    div.appendChild(li);
    div.appendChild(i);
    div.appendChild(ls);
    div.appendChild(s);

    d.appendChild(div);

}


function addNewSkillsField() {
    event.preventDefault();

    counterS++;

    var d = document.getElementById('skillsinput');

    var i = document.createElement("input");
    i.id = `skill${counterS}`;
    i.type = "text";

    var li = document.createElement("label");
    li.setAttribute('for', `skills${counterS}`);
    li.innerText = `Veština ${counterS}`;

    var div = document.createElement("div");

    div.appendChild(li);
    div.appendChild(i);

    d.appendChild(div);

}

function addNewHobbyField() {
    event.preventDefault();
    counterH++;

    var d = document.getElementById('hobbiesinput');

    var i = document.createElement("input");
    i.id = `hobby${counterH}`;
    i.type = "text";

    var li = document.createElement("label");
    li.setAttribute('for', `hobby${counterH}`);
    li.innerText = `Hobi ${counterH}`;

    var div = document.createElement("div");

    div.appendChild(li);
    div.appendChild(i);

    d.appendChild(div);
}

function addNewJobExperienceField() {
    event.preventDefault();
    counterJ++;
    var d = document.getElementById('workinput');

    var ip = document.createElement("input");
    ip.type = "text";
    ip.id = `naziv${counterJ}`;

    var lp = document.createElement("label");
    lp.setAttribute('for', `naziv${counterJ}`);
    lp.innerText = "Pozicija";

    var imef = document.createElement("input");
    imef.id = `firma${counterJ}`;
    imef.type = "text";

    var lf = document.createElement("label");
    lf.setAttribute('for', `firma${counterJ}`);
    lf.innerText = "Ime firme";

    var idp = document.createElement("input");
    idp.type = "month";
    idp.id = `date${counterJ}1`;

    var ldp = document.createElement("label");
    ldp.setAttribute('for', `date${counterJ}1`);
    ldp.innerText = "Datum početka rada";

    var idz = document.createElement("input");
    idz.type = "month";
    idz.id = `date${counterJ}2`;

    var ldz = document.createElement("label");
    ldz.setAttribute('for', `date${counterJ}2`);
    ldz.innerText = "Datum završetka rada";

    var ct = document.createElement("input");
    ct.type = "checkbox";
    ct.id = `posaotrenutno${counterJ}`;

    var lt = document.createElement("label");
    lt.setAttribute('for', `posaotrenutno${counterJ}`);
    lt.innerText = "Trenutno radim ovde";

    var top = document.createElement("textarea");
    top.id = `opis${counterJ}`;
    top.setAttribute('cols', '40');
    top.setAttribute('rows', '6');

    var lop = document.createElement("label");
    lop.setAttribute('for', top.id);
    lop.innerText = "Opis posla";


    var div = document.createElement("div");

    div.appendChild(lp);
    div.appendChild(ip);
    div.appendChild(lf);
    div.appendChild(imef);
    div.appendChild(ldp);
    div.appendChild(idp);
    div.appendChild(ldz)
    div.appendChild(idz);
    div.appendChild(lt);
    div.appendChild(ct);
    div.appendChild(lop);
    div.appendChild(top);

    d.appendChild(div);

    if (counterJ == 4) {
        $("#workb").css("visibility", "hidden");
    }


    document.querySelector(`#posaotrenutno${counterJ}`).addEventListener('change', function() {
        document.getElementById(`date${counterJ}2`).readOnly = !document.getElementById(`date${counterJ}2`).readOnly;
    });
}

document.querySelector("#image").addEventListener("change", function() {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        sessionStorage.setItem("image", reader.result);
    });

    reader.readAsDataURL(this.files[0]);
});

var sectionCounter = 0;
const sections = [
    'general_info',
    'education',
    'work',
    'languages',
    'skills',
    'hobbies',
    'save_cv'
];

function nextSection() {
    event.preventDefault();

    $(`#${sections[sectionCounter]}`).css("visibility", "hidden");
    $(`#${sections[sectionCounter]}`).css("grid-column", "1");
    $(`#${sections[sectionCounter]}`).css(`grid-row","${sectionCounter+1}`);


    sectionCounter++;

    $(`#${sections[sectionCounter]}`).css("visibility", "visible");
    $(`#${sections[sectionCounter]}`).css("grid-column", "2/2");
    $(`#${sections[sectionCounter]}`).css("grid-row", "1/1");
}

function previousSection() {
    event.preventDefault();

    $(`#${sections[sectionCounter]}`).css("visibility", "hidden");
    $(`#${sections[sectionCounter]}`).css("grid-column", "3");
    $(`#${sections[sectionCounter]}`).css(`grid-row","${sectionCounter-1}`);


    sectionCounter--;

    $(`#${sections[sectionCounter]}`).css("visibility", "visible");
    $(`#${sections[sectionCounter]}`).css("grid-column", "2/2");
    $(`#${sections[sectionCounter]}`).css("grid-row", "1/1");
}
document.querySelector("#fakstrenutno1").addEventListener('change', function() {
    document.getElementById("datef12").readOnly = !document.getElementById("datef12").readOnly;
});
document.querySelector("#posaotrenutno1").addEventListener('change', function() {
    document.getElementById("date12").readOnly = !document.getElementById("date12").readOnly;
});