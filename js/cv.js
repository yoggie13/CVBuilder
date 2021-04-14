window.onload = function fillCV() {
        $("#name").html(sessionStorage.getItem("name").toLocaleUpperCase());

        let email = sessionStorage.getItem("email");
        if (email != null && email != "") {
            $("#email").html(email);
            $("#email").attr("href", "mailto:" + email);
        } else {
            $("#emailp").remove();
        }

        let linkedin = sessionStorage.getItem("linkedin");
        if (linkedin != null && linkedin != "") {
            $("#linkedin").html(linkedin);
            $("#linkedin").attr("href", linkedin);
        } else {
            $("#linkedinp").remove();
        }

        let github = sessionStorage.getItem("github");
        if (github != null && github != "") {
            $("#github").html(github);
            $("#github").attr("href", github);
        } else {
            $("#githubp").remove();
        }

        let phone = sessionStorage.getItem("phone");
        if (phone != null && phone != "") {
            $("#phone").html("Telefon: " + phone);
        } else {
            $("#phone").remove();
        }

        let address = sessionStorage.getItem("address");
        if (address != null && address != "") {
            $("#address").html("Adresa: " + address);
        } else {
            $("#address").remove();
        }

        if (sessionStorage.getItem("middle") != null && sessionStorage.getItem("middle") != "") {

            document.getElementById('school').innerHTML += "<h3 id='middle'></h3><h5 id = 'moddo'></h5><p id ='middlenapomena'></p>";

            $("#middle").html(sessionStorage.getItem("middle"));
            let middlenapomena = sessionStorage.getItem("middlenapomena");
            if (middlenapomena != null && middlenapomena != "") {
                $("#middlenapomena").html(middlenapomena);
            } else {
                $("#middlenapomena").remove();
            }
            if (sessionStorage.getItem("datem") != null && sessionStorage.getItem("datem") != "" && !sessionStorage.getItem("datem").includes("undefined")) {
                $("#moddo").html(sessionStorage.getItem("datem"));
            }
        }

        for (let i = 1; i < 4; i++) {

            if (sessionStorage.getItem(`faculty${i}`) == null || sessionStorage.getItem(`faculty${i}`) == "") break;


            document.getElementById('school').innerHTML += `<div id="faks${i}">
            <h3 id="faculty${i}"></h3>
            <h4 id="course${i}"></h4>
            <h5 id="foddo${i}"></h5>
            <p id="facultynapomena${i}"></p>
            </div>`;

            $(`#faculty${i}`).html(sessionStorage.getItem(`faculty${i}`));
            if (sessionStorage.getIem(`datef${i}`) != null && sessionStorage.getItem(`datem`) != "" && sessionStorage.getItem("datem").includes("undefined")) {
                $(`#foddo${i}`).html(sessionStorage.getItem(`datef${i}`))
            }
            $(`#course${i}`).html(sessionStorage.getItem(`course${i}`));
            let facultynapomena = sessionStorage.getItem(`facultynapomena${i}`);
            if (facultynapomena != null && facultynapomena != "") {
                $(`#facultynapomena${i}`).html(facultynapomena);
            } else {
                $(`#facultynapomena${i}`).remove();
            }
        }

        if (document.getElementById("middle") == null && document.getElementById("faculty1") == null && document.getElementById("faculty2") == null)
            $("#school").remove();

        for (let i = 1; i < 10; i++) {
            if (sessionStorage.getItem(`naziv${i}`) == null) {
                if (i == 1) {
                    $('#work').remove();
                }
                break;
            }
            document.getElementById('radno_iskustvo').innerHTML +=
                `<div id = "rad_isk${i}"><h3 id="nazivcv${i}"></h3>` +
                `<h4 id="firmacv${i}"></h4>` +
                `<h5 id="datumcv${i}"></h5>` +
                `<p id="opiscv${i}"></p><div>`;
            $(`#nazivcv${i}`).html(sessionStorage.getItem(`naziv${i}`));
            $(`#firmacv${i}`).html(sessionStorage.getItem(`firma${i}`));
            $(`#datumcv${i}`).html(sessionStorage.getItem(`datum${i}`));
            fixOpis(i);
        }
        for (let i = 1; i < 15; i++) {
            if (sessionStorage.getItem(`language${i}`) == null) {
                if (i == 1) {
                    $('#languages').remove();
                }
                break;
            }
            document.getElementById('language-list').innerHTML +=
                `<li id="lang">${sessionStorage.getItem(`language${i}`)}</li>`+
            `<li id="grade">${sessionStorage.getItem(`level${i}`)}</li>`;
    }
    for (let i = 1; i < 15; i++) {
        if (sessionStorage.getItem(`hobby${i}`) == null) {
            if(i == 1){
                $('#hobbies').remove();
            }
            break;
        }
        document.getElementById('hobbies-list').innerHTML +=
            `<li>${sessionStorage.getItem(`hobby${i}`)}</li>`;
    }
    for (let i = 1; i < 15; i++) {
        if (sessionStorage.getItem(`skill${i}`) == null) {
            if (i == 1) {
                $('#skills').remove();
            }
            break;
        }
        document.getElementById('skills-list').innerHTML +=
            `<li>${sessionStorage.getItem(`skill${i}`)}</li>`;
    }
    if(sessionStorage.getItem("image") == null){
        $('#hleft').remove();
        $('#hright').css('grid-column','1 / span 2');

    }else{
        $('#profile_image').attr("src", sessionStorage.getItem("image"));
    }
    setTimeout(function(){
        downloadPDF();
    }, 500);
}
function downloadPDF(){

    var element = document.getElementById('print');
    var opt = {
        margin: 0,
        filename: `${sessionStorage.getItem("name")} - CV.pdf`,
        image: {
            type: 'png',
            quality: 3
        },
        html2canvas: {
            scale: 3
        },
        jsPDF: {
            unit: 'cm',
            format: 'A4',
            orientation: 'portrait'
        }
    };
    
    /*alert("Download će krenuti uskoro, nemoj refreshovati :)")
 
    html2pdf().set(opt).from(element).save();*/
    
}
function fixOpis(i) {
    var opis =sessionStorage.getItem(`opis${i}`);
    if(opis.includes('\n')){
        bulleti = opis.split('\n');
        listOpis = "<ul id='opisbullet'>";
        for(let j = 0; j < bulleti.length; j++){
            listOpis += "<li>"+bulleti[j]+"</li>";
        }
        listOpis+="</ul>"
        $(`#opiscv${i}`).html(listOpis);
    }
    else
    $(`#opiscv${i}`).html(opis);
}