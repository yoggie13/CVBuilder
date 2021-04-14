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

        sessionStorage.setItem(`opis${i}`, fixOpis(document.getElementById(`opis${i}`).value));
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


var counterL = 2;
var counterS = 3;
var counterH = 3;
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
    idz.setAttribute("style", "display: block");

    var ldz = document.createElement("label");
    ldz.innerText = "Datum završetka";
    ldz.setAttribute('for', idz.id);
    ldz.id = `datef${counterF}2l`;
    ldz.setAttribute("style", "display: block");

    var divdatum = document.createElement("div");

    var divcheck = document.createElement("div");
    divcheck.id = "check";

    var ct = document.createElement("input");
    ct.type = "checkbox";
    ct.id = `fakstrenutno${counterF}`;

    var lt = document.createElement("label");
    lt.setAttribute('for', `fakstrenutno${counterF}`);
    lt.innerText = "Trenutno studiram";

    divcheck.appendChild(lt);
    divcheck.appendChild(ct);

    divdatum.appendChild(divcheck);
    divdatum.appendChild(ldz);
    divdatum.appendChild(idz);

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
    div.appendChild(divdatum);
    div.appendChild(lnap);
    div.appendChild(inap);
    div.appendChild(snap);

    d.appendChild(div);

    document.querySelector(`#fakstrenutno${counterF}`).addEventListener('change', function() {

        document.getElementById(`datef${counterF}2`).readOnly = !document.getElementById(`datef${counterF}2`).readOnly;

        if (document.getElementById(`datef${counterF}2`).readOnly) {
            $(`#datef${counterF}2`).css('display', 'none');
            $(`#datef${counterF}2l`).css('display', 'none');
        } else {
            $(`#datef${counterF}2`).css('display', 'block');
            $(`#datef${counterF}2l`).css('display', 'block');
        }
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
    var o1 = document.createElement("option");
    o1.value = "Osnovni nivo";
    o1.innerText = "Osnovni nivo";
    var o2 = document.createElement("option");
    o2.value = "Srednji nivo";
    o2.innerText = "Srednji nivo";
    var o3 = document.createElement("option");
    o3.value = "Napredni nivo";
    o3.innerText = "Napredni nivo";
    var o4 = document.createElement("option");
    o4.value = "Maternji jezik";
    o4.innerText = "Maternji jezik";
    s.appendChild(o1);
    s.appendChild(o2);
    s.appendChild(o3);
    s.appendChild(o4);

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
    lp.setAttribute('for', ip.id);
    lp.innerText = "Pozicija";

    var imef = document.createElement("input");
    imef.id = `firma${counterJ}`;
    imef.type = "text";

    var lf = document.createElement("label");
    lf.setAttribute('for', imef.id);
    lf.innerText = "Ime firme";

    var idp = document.createElement("input");
    idp.type = "month";
    idp.id = `date${counterJ}1`;

    var ldp = document.createElement("label");
    ldp.setAttribute('for', idp.id);
    ldp.innerText = "Datum početka rada";

    var ct = document.createElement("input");
    ct.type = "checkbox";
    ct.id = `posaotrenutno${counterJ}`;

    var lt = document.createElement("label");
    lt.setAttribute('for', ct.id);
    lt.innerText = "Trenutno radim ovde";

    var idz = document.createElement("input");
    idz.type = "month";
    idz.id = `date${counterJ}2`;
    idz.setAttribute("style", "display: block");

    var ldz = document.createElement("label");
    ldz.innerText = "Datum završetka rada";
    ldz.id = `date${counterJ}2l`;
    ldz.setAttribute("style", "display: block");

    var divdatum = document.createElement("div");

    divdatum.appendChild(document.createElement("br"));

    var divcheck = document.createElement("div");
    divcheck.id = "check";

    var ct = document.createElement("input");
    ct.type = "checkbox";
    ct.id = `posaotrenutno${counterJ}`;

    var lt = document.createElement("label");
    lt.setAttribute('for', `posaotrenutno${counterJ}`);
    lt.innerText = "Trenutno radim tu";

    divcheck.appendChild(lt);
    divcheck.appendChild(ct);

    divdatum.appendChild(divcheck);
    divdatum.appendChild(ldz);
    divdatum.appendChild(idz);


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
    div.appendChild(divdatum);
    div.appendChild(lop);
    div.appendChild(top);

    d.appendChild(div);

    if (counterJ == 4) {
        $("#workb").css("display", "none");
    }


    document.querySelector(`#posaotrenutno${counterJ}`).addEventListener('change', function() {

        document.getElementById(`date${counterJ}2`).readOnly = !document.getElementById(`date${counterJ}2`).readOnly;

        if (document.getElementById(`date${counterJ}2`).readOnly) {
            $(`#date${counterJ}2`).css('display', 'none');
            $(`#date${counterJ}2l`).css('display', 'none');
        } else {
            $(`#date${counterJ}2`).css('display', 'block');
            $(`#date${counterJ}2l`).css('display', 'block');
        }
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
    'uputstvo',
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

    $(`#${sections[sectionCounter]}`).css("animation", "slideoutLeft .2s ease-in");

    setTimeout(function() {
        $(`#${sections[sectionCounter]}`).css("display", "none");
        $(`#${sections[sectionCounter]}`).css("grid-column", "1");
        $(`#${sections[sectionCounter]}`).css("grid-row", "${sectionCounter+1}");
        sectionCounter++;

        if (sectionCounter != sections.length - 1)
            $(`#${sections[sectionCounter]}`).css("display", "block");
        else
            $(`#${sections[sectionCounter]}`).css("display", "flex");

        $(`#${sections[sectionCounter]}`).css("grid-column", "2/2");
        $(`#${sections[sectionCounter]}`).css("grid-row", "1/1");
        $(`#${sections[sectionCounter]}`).css("animation", "slideinLeft .3s ease-in");

        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }, 100);



}

function previousSection() {
    event.preventDefault();

    $(`#${sections[sectionCounter]}`).css("display", "none");
    $(`#${sections[sectionCounter]}`).css("grid-column", "3");
    $(`#${sections[sectionCounter]}`).css(`grid-row","${sectionCounter-1}`);


    sectionCounter--;

    $(`#${sections[sectionCounter]}`).css("display", "block");
    $(`#${sections[sectionCounter]}`).css("grid-column", "2/2");
    $(`#${sections[sectionCounter]}`).css("grid-row", "1/1");

    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

document.querySelector('#fakstrenutno1').addEventListener('change', function() {
    document.getElementById("datef12").readOnly = !document.getElementById("datef12").readOnly;
    if (document.getElementById(`datef12`).readOnly) {
        $(`#datef12`).css('display', 'none');
        $(`#datef12l`).css('display', 'none');
    } else {
        $(`#datef12`).css('display', 'block');
        $(`#datef12l`).css('display', 'block');
    }
});

document.querySelector('#posaotrenutno1').addEventListener('change', function() {
    document.getElementById("date12").readOnly = !document.getElementById("date12").readOnly;
    if (document.getElementById("date12").readOnly) {
        $(`#date12`).css('display', 'none');
        $(`#date12l`).css('display', 'none');
    } else {
        $(`#date12`).css('display', 'block');
        $(`#date12l`).css('display', 'block');
    }
});

function fixOpis(opis) {
    return opis.replaceAll("\n", "<br>");
}