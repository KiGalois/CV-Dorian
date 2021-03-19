var x;
var y = 0;
var b = 0;
var c = 1;
var mouseout;

function burger(){
    if ( b == 0 ){
        document.getElementsByClassName("menu")[0].style.display = "flex";
        b = 1;
        return;
    }
    if ( b == 1 ){
        document.getElementsByClassName("menu")[0].style.display = "none";
        b = 0;
        return;
    }
}

function change_card(){
    if (window.innerWidth < 1000){
        if (c == 1){
            //Circle
            document.querySelector('.circle_h').style.background = "linear-gradient( to right, rgba(13, 211, 102, 0.85), rgba(17, 126, 177, 0.85))";
            //Logo
            document.querySelector('.logo_1').style.width = "13rem";
            document.querySelector('.logo_1').src = "css3-alt-brands.svg";
            //Titre
            document.querySelector('.title_h').innerHTML = "CSS";
            //Descri
            document.querySelector('.descri_h').innerHTML = "Le language CSS est lui le deuxième language de programmation (même si lui aussi n'est pas reconnu comme tel) que j'ai appris, je l'ai appris dans le but de complété le HTML que je connaissais déjà à ce moment là. Le language CSS reste simple même si très très utile.";
            c = 2;
            return;
        }
        if (c == 2){
            //Circle
            document.querySelector('.circle_h').style.background = "linear-gradient( to right, rgba(176, 10, 209, 0.85), rgba(15, 219, 15, 0.85))";
            //Logo
            document.querySelector('.logo_1').style.width = "13rem";
            document.querySelector('.logo_1').src = "js-square-brands.svg";
            //Titre
            document.querySelector('.title_h').innerHTML = "JS";
            //Descri
            document.querySelector('.descri_h').innerHTML = "Le JavaScript est donc lui le premier language de programmation que j'ai appris qui est reconnu comme un language de programmation. Il m'a été asser dur à apprendre, et même encore aujourd'hui je ne pense connaître que peu des fonctions que propose JavaScript.";
            c = 3;
            return;
        }
        if (c == 3){
            //Circle
            document.querySelector('.circle_h').style.background = "linear-gradient( to right, rgba(238, 70, 4, 0.85), rgba(4, 160, 64, 0.85))";
            //Logo
            document.querySelector('.logo_1').style.width = "19rem";
            document.querySelector('.logo_1').src = "code-solid.svg";
            //Titre
            document.querySelector('.title_h').innerHTML = "Autres";
            //Descri
            document.querySelector('.descri_h').innerHTML = "Avant d'apprendre ces languages de web developpement j'avais déjà utilisé des languages comme Python que je n'est que très rarement utiliser. Au lycée j'ai aussi apris le language Arduino, je l'ai plus souvent utilisé que Python mais je ne l'utilise quand même pas chez moi quand je m'amuse à programmer. Ces vrai languages de programmation m'intéresse beaucoup même si il m'arrive rarement de les utiliser.";
            c = 4;
            return;
        }
        if (c == 4){
            //Circle
            document.querySelector('.circle_h').style.background = "linear-gradient( to right, rgba(9, 150, 231, 0.85), rgba(126, 7, 126, 0.85))";
            //Logo
            document.querySelector('.logo_1').style.width = "13rem";
            document.querySelector('.logo_1').src = "html5-brands.svg";
            //Titre
            document.querySelector('.title_h').innerHTML = "HTML";
            //Descri
            document.querySelector('.descri_h').innerHTML = "Le language HTML est le premier language de programmation (même si il n'est pas reconnu comme tel) que j'ai appris dans le but de m'amuser avec. Je ne considère pas maitriser à 100% le HTML mais je le maitrise suffisament pour le web developpement vue que la majeur partie du web developpement est dû au CSS et JavaScript";
            c = 1;
            return;
        }
    }
    if (window.innerWidth >= 1000 && window.innerWidth < 1800){
        if (c == 1){
            //Circles
            document.querySelector('.circle_h').style.background = "linear-gradient( to right, rgba(13, 211, 102, 0.85), rgba(17, 126, 177, 0.85))";
            document.querySelector('.circle_c').style.background = "linear-gradient( to right, rgba(13, 211, 102, 0.85), rgba(17, 126, 177, 0.85))";
            document.querySelector('.circle_j').style.background = "linear-gradient( to right, rgba(13, 211, 102, 0.85), rgba(17, 126, 177, 0.85))";
            document.querySelector('.circle_o').style.background = "linear-gradient( to right, rgba(13, 211, 102, 0.85), rgba(17, 126, 177, 0.85))";
            //Logo
            document.querySelector('.logo_4').style.width = "7rem";
            document.querySelector('.logo_1').style.width = "10rem";
            document.querySelector('.logo_1').src = "code-solid.svg";
            document.querySelector('.logo_2').src = "html5-brands.svg";
            document.querySelector('.logo_3').src = "css3-alt-brands.svg";
            document.querySelector('.logo_4').src = "js-square-brands.svg";
            //Title
            document.querySelector('.title_h').innerHTML = "Autres";
            document.querySelector('.title_c').innerHTML = "HTML";
            document.querySelector('.title_j').innerHTML = "CSS";
            document.querySelector('.title_o').innerHTML = "JS";
            //DESCRI
            document.querySelector('.descri_h').innerHTML = "Avant d'apprendre ces languages de web developpement j'avais déjà utilisé des languages comme Python que je n'est que très rarement utiliser. Au lycée j'ai aussi apris le language Arduino, je l'ai plus souvent utilisé que Python mais je ne l'utilise quand même pas chez moi quand je m'amuse à programmer. Ces vrai languages de programmation m'intéresse beaucoup même si il m'arrive rarement de les utiliser.";
            document.querySelector('.descri_c').innerHTML = "Le language HTML est le premier language de programmation (même si il n'est pas reconnu comme tel) que j'ai appris dans le but de m'amuser avec. Je ne considère pas maitriser à 100% le HTML mais je le maitrise suffisament pour le web developpement vue que la majeur partie du web developpement est dû au CSS et JavaScript";
            document.querySelector('.descri_j').innerHTML = "Le language CSS est lui le deuxième language de programmation (même si lui aussi n'est pas reconnu comme tel) que j'ai appris, je l'ai appris dans le but de complété le HTML que je connaissais déjà à ce moment là. Le language CSS reste simple même si très très utile.";
            document.querySelector('.descri_o').innerHTML = "Le JavaScript est donc lui le premier language de programmation que j'ai appris qui est reconnu comme un language de programmation. Il m'a été asser dur à apprendre, et même encore aujourd'hui je ne pense connaître que peu des fonctions que propose JavaScript.";
            c = 2;
            return; 
        }
        if (c == 2){
            //Circles
            document.querySelector('.circle_h').style.background = "linear-gradient( to right, rgba(176, 10, 209, 0.85), rgba(15, 219, 15, 0.85))";
            document.querySelector('.circle_c').style.background = "linear-gradient( to right, rgba(176, 10, 209, 0.85), rgba(15, 219, 15, 0.85))";
            document.querySelector('.circle_j').style.background = "linear-gradient( to right, rgba(176, 10, 209, 0.85), rgba(15, 219, 15, 0.85))";
            document.querySelector('.circle_o').style.background = "linear-gradient( to right, rgba(176, 10, 209, 0.85), rgba(15, 219, 15, 0.85))";
            //Logo
            document.querySelector('.logo_1').style.width = "7rem";
            document.querySelector('.logo_2').style.width = "10rem";
            document.querySelector('.logo_2').src = "code-solid.svg";
            document.querySelector('.logo_3').src = "html5-brands.svg";
            document.querySelector('.logo_4').src = "css3-alt-brands.svg";
            document.querySelector('.logo_1').src = "js-square-brands.svg";
            //Title
            document.querySelector('.title_h').innerHTML = "JS";
            document.querySelector('.title_c').innerHTML = "Autres";
            document.querySelector('.title_j').innerHTML = "HTML";
            document.querySelector('.title_o').innerHTML = "CSS";
            //DESCRI
            document.querySelector('.descri_c').innerHTML = "Avant d'apprendre ces languages de web developpement j'avais déjà utilisé des languages comme Python que je n'est que très rarement utiliser. Au lycée j'ai aussi apris le language Arduino, je l'ai plus souvent utilisé que Python mais je ne l'utilise quand même pas chez moi quand je m'amuse à programmer. Ces vrai languages de programmation m'intéresse beaucoup même si il m'arrive rarement de les utiliser.";
            document.querySelector('.descri_j').innerHTML = "Le language HTML est le premier language de programmation (même si il n'est pas reconnu comme tel) que j'ai appris dans le but de m'amuser avec. Je ne considère pas maitriser à 100% le HTML mais je le maitrise suffisament pour le web developpement vue que la majeur partie du web developpement est dû au CSS et JavaScript";
            document.querySelector('.descri_o').innerHTML = "Le language CSS est lui le deuxième language de programmation (même si lui aussi n'est pas reconnu comme tel) que j'ai appris, je l'ai appris dans le but de complété le HTML que je connaissais déjà à ce moment là. Le language CSS reste simple même si très très utile.";
            document.querySelector('.descri_h').innerHTML = "Le JavaScript est donc lui le premier language de programmation que j'ai appris qui est reconnu comme un language de programmation. Il m'a été asser dur à apprendre, et même encore aujourd'hui je ne pense connaître que peu des fonctions que propose JavaScript.";
            c = 3;
            return; 
        }
        if (c == 3){
            //Circles
            document.querySelector('.circle_h').style.background = "linear-gradient( to right, rgba(238, 70, 4, 0.85), rgba(4, 160, 64, 0.85))";
            document.querySelector('.circle_c').style.background = "linear-gradient( to right, rgba(238, 70, 4, 0.85), rgba(4, 160, 64, 0.85))";
            document.querySelector('.circle_j').style.background = "linear-gradient( to right, rgba(238, 70, 4, 0.85), rgba(4, 160, 64, 0.85))";
            document.querySelector('.circle_o').style.background = "linear-gradient( to right, rgba(238, 70, 4, 0.85), rgba(4, 160, 64, 0.85))";
            //Logo
            document.querySelector('.logo_2').style.width = "7rem";
            document.querySelector('.logo_3').style.width = "10rem";
            document.querySelector('.logo_3').src = "code-solid.svg";
            document.querySelector('.logo_4').src = "html5-brands.svg";
            document.querySelector('.logo_1').src = "css3-alt-brands.svg";
            document.querySelector('.logo_2').src = "js-square-brands.svg";
            //Title
            document.querySelector('.title_h').innerHTML = "CSS";
            document.querySelector('.title_c').innerHTML = "JS";
            document.querySelector('.title_j').innerHTML = "Autres";
            document.querySelector('.title_o').innerHTML = "HTML";
            //DESCRI
            document.querySelector('.descri_j').innerHTML = "Avant d'apprendre ces languages de web developpement j'avais déjà utilisé des languages comme Python que je n'est que très rarement utiliser. Au lycée j'ai aussi apris le language Arduino, je l'ai plus souvent utilisé que Python mais je ne l'utilise quand même pas chez moi quand je m'amuse à programmer. Ces vrai languages de programmation m'intéresse beaucoup même si il m'arrive rarement de les utiliser.";
            document.querySelector('.descri_o').innerHTML = "Le language HTML est le premier language de programmation (même si il n'est pas reconnu comme tel) que j'ai appris dans le but de m'amuser avec. Je ne considère pas maitriser à 100% le HTML mais je le maitrise suffisament pour le web developpement vue que la majeur partie du web developpement est dû au CSS et JavaScript";
            document.querySelector('.descri_h').innerHTML = "Le language CSS est lui le deuxième language de programmation (même si lui aussi n'est pas reconnu comme tel) que j'ai appris, je l'ai appris dans le but de complété le HTML que je connaissais déjà à ce moment là. Le language CSS reste simple même si très très utile.";
            document.querySelector('.descri_c').innerHTML = "Le JavaScript est donc lui le premier language de programmation que j'ai appris qui est reconnu comme un language de programmation. Il m'a été asser dur à apprendre, et même encore aujourd'hui je ne pense connaître que peu des fonctions que propose JavaScript.";
            c = 4;
            return; 
        }
        if (c == 4){
            //Circles
            document.querySelector('.circle_h').style.background = "linear-gradient( to right, rgba(9, 150, 231, 0.85), rgba(126, 7, 126, 0.85))";
            document.querySelector('.circle_c').style.background = "linear-gradient( to right, rgba(9, 150, 231, 0.85), rgba(126, 7, 126, 0.85))";
            document.querySelector('.circle_j').style.background = "linear-gradient( to right, rgba(9, 150, 231, 0.85), rgba(126, 7, 126, 0.85))";
            document.querySelector('.circle_o').style.background = "linear-gradient( to right, rgba(9, 150, 231, 0.85), rgba(126, 7, 126, 0.85))";
            //Logo
            document.querySelector('.logo_3').style.width = "7rem";
            document.querySelector('.logo_4').style.width = "10rem";
            document.querySelector('.logo_4').src = "code-solid.svg";
            document.querySelector('.logo_1').src = "html5-brands.svg";
            document.querySelector('.logo_2').src = "css3-alt-brands.svg";
            document.querySelector('.logo_3').src = "js-square-brands.svg";
            //Title
            document.querySelector('.title_h').innerHTML = "HTML";
            document.querySelector('.title_c').innerHTML = "CSS";
            document.querySelector('.title_j').innerHTML = "JS";
            document.querySelector('.title_o').innerHTML = "Autres";
            //DESCRI
            document.querySelector('.descri_o').innerHTML = "Avant d'apprendre ces languages de web developpement j'avais déjà utilisé des languages comme Python que je n'est que très rarement utiliser. Au lycée j'ai aussi apris le language Arduino, je l'ai plus souvent utilisé que Python mais je ne l'utilise quand même pas chez moi quand je m'amuse à programmer. Ces vrai languages de programmation m'intéresse beaucoup même si il m'arrive rarement de les utiliser.";
            document.querySelector('.descri_h').innerHTML = "Le language HTML est le premier language de programmation (même si il n'est pas reconnu comme tel) que j'ai appris dans le but de m'amuser avec. Je ne considère pas maitriser à 100% le HTML mais je le maitrise suffisament pour le web developpement vue que la majeur partie du web developpement est dû au CSS et JavaScript";
            document.querySelector('.descri_c').innerHTML = "Le language CSS est lui le deuxième language de programmation (même si lui aussi n'est pas reconnu comme tel) que j'ai appris, je l'ai appris dans le but de complété le HTML que je connaissais déjà à ce moment là. Le language CSS reste simple même si très très utile.";
            document.querySelector('.descri_j').innerHTML = "Le JavaScript est donc lui le premier language de programmation que j'ai appris qui est reconnu comme un language de programmation. Il m'a été asser dur à apprendre, et même encore aujourd'hui je ne pense connaître que peu des fonctions que propose JavaScript.";
            c = 1;
            return; 
        } 
    }
    if (window.innerWidth > 1800){
        if (c == 1){
            //Circles
            document.querySelector('.circle_h').style.background = "linear-gradient( to right, rgba(13, 211, 102, 0.85), rgba(17, 126, 177, 0.85))";
            document.querySelector('.circle_c').style.background = "linear-gradient( to right, rgba(13, 211, 102, 0.85), rgba(17, 126, 177, 0.85))";
            document.querySelector('.circle_j').style.background = "linear-gradient( to right, rgba(13, 211, 102, 0.85), rgba(17, 126, 177, 0.85))";
            document.querySelector('.circle_o').style.background = "linear-gradient( to right, rgba(13, 211, 102, 0.85), rgba(17, 126, 177, 0.85))";
            //Logo
            document.querySelector('.logo_4').style.width = "9rem";
            document.querySelector('.logo_1').style.width = "12.5rem";
            document.querySelector('.logo_1').src = "code-solid.svg";
            document.querySelector('.logo_2').src = "html5-brands.svg";
            document.querySelector('.logo_3').src = "css3-alt-brands.svg";
            document.querySelector('.logo_4').src = "js-square-brands.svg";
            //Title
            document.querySelector('.title_h').innerHTML = "Autres";
            document.querySelector('.title_c').innerHTML = "HTML";
            document.querySelector('.title_j').innerHTML = "CSS";
            document.querySelector('.title_o').innerHTML = "JS";
            //DESCRI
            document.querySelector('.descri_h').innerHTML = "Avant d'apprendre ces languages de web developpement j'avais déjà utilisé des languages comme Python que je n'est que très rarement utiliser. Au lycée j'ai aussi apris le language Arduino, je l'ai plus souvent utilisé que Python mais je ne l'utilise quand même pas chez moi quand je m'amuse à programmer. Ces vrai languages de programmation m'intéresse beaucoup même si il m'arrive rarement de les utiliser.";
            document.querySelector('.descri_c').innerHTML = "Le language HTML est le premier language de programmation (même si il n'est pas reconnu comme tel) que j'ai appris dans le but de m'amuser avec. Je ne considère pas maitriser à 100% le HTML mais je le maitrise suffisament pour le web developpement vue que la majeur partie du web developpement est dû au CSS et JavaScript";
            document.querySelector('.descri_j').innerHTML = "Le language CSS est lui le deuxième language de programmation (même si lui aussi n'est pas reconnu comme tel) que j'ai appris, je l'ai appris dans le but de complété le HTML que je connaissais déjà à ce moment là. Le language CSS reste simple même si très très utile.";
            document.querySelector('.descri_o').innerHTML = "Le JavaScript est donc lui le premier language de programmation que j'ai appris qui est reconnu comme un language de programmation. Il m'a été asser dur à apprendre, et même encore aujourd'hui je ne pense connaître que peu des fonctions que propose JavaScript.";
            c = 2;
            return; 
        }
        if (c == 2){
            //Circles
            document.querySelector('.circle_h').style.background = "linear-gradient( to right, rgba(176, 10, 209, 0.85), rgba(15, 219, 15, 0.85))";
            document.querySelector('.circle_c').style.background = "linear-gradient( to right, rgba(176, 10, 209, 0.85), rgba(15, 219, 15, 0.85))";
            document.querySelector('.circle_j').style.background = "linear-gradient( to right, rgba(176, 10, 209, 0.85), rgba(15, 219, 15, 0.85))";
            document.querySelector('.circle_o').style.background = "linear-gradient( to right, rgba(176, 10, 209, 0.85), rgba(15, 219, 15, 0.85))";
            //Logo
            document.querySelector('.logo_1').style.width = "9rem";
            document.querySelector('.logo_2').style.width = "12.5rem";
            document.querySelector('.logo_2').src = "code-solid.svg";
            document.querySelector('.logo_3').src = "html5-brands.svg";
            document.querySelector('.logo_4').src = "css3-alt-brands.svg";
            document.querySelector('.logo_1').src = "js-square-brands.svg";
            //Title
            document.querySelector('.title_h').innerHTML = "JS";
            document.querySelector('.title_c').innerHTML = "Autres";
            document.querySelector('.title_j').innerHTML = "HTML";
            document.querySelector('.title_o').innerHTML = "CSS";
            //DESCRI
            document.querySelector('.descri_c').innerHTML = "Avant d'apprendre ces languages de web developpement j'avais déjà utilisé des languages comme Python que je n'est que très rarement utiliser. Au lycée j'ai aussi apris le language Arduino, je l'ai plus souvent utilisé que Python mais je ne l'utilise quand même pas chez moi quand je m'amuse à programmer. Ces vrai languages de programmation m'intéresse beaucoup même si il m'arrive rarement de les utiliser.";
            document.querySelector('.descri_j').innerHTML = "Le language HTML est le premier language de programmation (même si il n'est pas reconnu comme tel) que j'ai appris dans le but de m'amuser avec. Je ne considère pas maitriser à 100% le HTML mais je le maitrise suffisament pour le web developpement vue que la majeur partie du web developpement est dû au CSS et JavaScript";
            document.querySelector('.descri_o').innerHTML = "Le language CSS est lui le deuxième language de programmation (même si lui aussi n'est pas reconnu comme tel) que j'ai appris, je l'ai appris dans le but de complété le HTML que je connaissais déjà à ce moment là. Le language CSS reste simple même si très très utile.";
            document.querySelector('.descri_h').innerHTML = "Le JavaScript est donc lui le premier language de programmation que j'ai appris qui est reconnu comme un language de programmation. Il m'a été asser dur à apprendre, et même encore aujourd'hui je ne pense connaître que peu des fonctions que propose JavaScript.";
            c = 3;
            return; 
        }
        if (c == 3){
            //Circles
            document.querySelector('.circle_h').style.background = "linear-gradient( to right, rgba(238, 70, 4, 0.85), rgba(4, 160, 64, 0.85))";
            document.querySelector('.circle_c').style.background = "linear-gradient( to right, rgba(238, 70, 4, 0.85), rgba(4, 160, 64, 0.85))";
            document.querySelector('.circle_j').style.background = "linear-gradient( to right, rgba(238, 70, 4, 0.85), rgba(4, 160, 64, 0.85))";
            document.querySelector('.circle_o').style.background = "linear-gradient( to right, rgba(238, 70, 4, 0.85), rgba(4, 160, 64, 0.85))";
            //Logo
            document.querySelector('.logo_2').style.width = "9rem";
            document.querySelector('.logo_3').style.width = "12.5rem";
            document.querySelector('.logo_3').src = "code-solid.svg";
            document.querySelector('.logo_4').src = "html5-brands.svg";
            document.querySelector('.logo_1').src = "css3-alt-brands.svg";
            document.querySelector('.logo_2').src = "js-square-brands.svg";
            //Title
            document.querySelector('.title_h').innerHTML = "CSS";
            document.querySelector('.title_c').innerHTML = "JS";
            document.querySelector('.title_j').innerHTML = "Autres";
            document.querySelector('.title_o').innerHTML = "HTML";
            //DESCRI
            document.querySelector('.descri_j').innerHTML = "Avant d'apprendre ces languages de web developpement j'avais déjà utilisé des languages comme Python que je n'est que très rarement utiliser. Au lycée j'ai aussi apris le language Arduino, je l'ai plus souvent utilisé que Python mais je ne l'utilise quand même pas chez moi quand je m'amuse à programmer. Ces vrai languages de programmation m'intéresse beaucoup même si il m'arrive rarement de les utiliser.";
            document.querySelector('.descri_o').innerHTML = "Le language HTML est le premier language de programmation (même si il n'est pas reconnu comme tel) que j'ai appris dans le but de m'amuser avec. Je ne considère pas maitriser à 100% le HTML mais je le maitrise suffisament pour le web developpement vue que la majeur partie du web developpement est dû au CSS et JavaScript";
            document.querySelector('.descri_h').innerHTML = "Le language CSS est lui le deuxième language de programmation (même si lui aussi n'est pas reconnu comme tel) que j'ai appris, je l'ai appris dans le but de complété le HTML que je connaissais déjà à ce moment là. Le language CSS reste simple même si très très utile.";
            document.querySelector('.descri_c').innerHTML = "Le JavaScript est donc lui le premier language de programmation que j'ai appris qui est reconnu comme un language de programmation. Il m'a été asser dur à apprendre, et même encore aujourd'hui je ne pense connaître que peu des fonctions que propose JavaScript.";
            c = 4;
            return; 
        }
        if (c == 4){
            //Circles
            document.querySelector('.circle_h').style.background = "linear-gradient( to right, rgba(9, 150, 231, 0.85), rgba(126, 7, 126, 0.85))";
            document.querySelector('.circle_c').style.background = "linear-gradient( to right, rgba(9, 150, 231, 0.85), rgba(126, 7, 126, 0.85))";
            document.querySelector('.circle_j').style.background = "linear-gradient( to right, rgba(9, 150, 231, 0.85), rgba(126, 7, 126, 0.85))";
            document.querySelector('.circle_o').style.background = "linear-gradient( to right, rgba(9, 150, 231, 0.85), rgba(126, 7, 126, 0.85))";
            //Logo
            document.querySelector('.logo_3').style.width = "9rem";
            document.querySelector('.logo_4').style.width = "12.5rem";
            document.querySelector('.logo_4').src = "code-solid.svg";
            document.querySelector('.logo_1').src = "html5-brands.svg";
            document.querySelector('.logo_2').src = "css3-alt-brands.svg";
            document.querySelector('.logo_3').src = "js-square-brands.svg";
            //Title
            document.querySelector('.title_h').innerHTML = "HTML";
            document.querySelector('.title_c').innerHTML = "CSS";
            document.querySelector('.title_j').innerHTML = "JS";
            document.querySelector('.title_o').innerHTML = "Autres";
            //DESCRI
            document.querySelector('.descri_o').innerHTML = "Avant d'apprendre ces languages de web developpement j'avais déjà utilisé des languages comme Python que je n'est que très rarement utiliser. Au lycée j'ai aussi apris le language Arduino, je l'ai plus souvent utilisé que Python mais je ne l'utilise quand même pas chez moi quand je m'amuse à programmer. Ces vrai languages de programmation m'intéresse beaucoup même si il m'arrive rarement de les utiliser.";
            document.querySelector('.descri_h').innerHTML = "Le language HTML est le premier language de programmation (même si il n'est pas reconnu comme tel) que j'ai appris dans le but de m'amuser avec. Je ne considère pas maitriser à 100% le HTML mais je le maitrise suffisament pour le web developpement vue que la majeur partie du web developpement est dû au CSS et JavaScript";
            document.querySelector('.descri_c').innerHTML = "Le language CSS est lui le deuxième language de programmation (même si lui aussi n'est pas reconnu comme tel) que j'ai appris, je l'ai appris dans le but de complété le HTML que je connaissais déjà à ce moment là. Le language CSS reste simple même si très très utile.";
            document.querySelector('.descri_j').innerHTML = "Le JavaScript est donc lui le premier language de programmation que j'ai appris qui est reconnu comme un language de programmation. Il m'a été asser dur à apprendre, et même encore aujourd'hui je ne pense connaître que peu des fonctions que propose JavaScript.";
            c = 1;
            return; 
        } 
    }
}
var enigme_reussie = 0;
var jeu_ouvert = 0;

function game(){
    document.getElementsByClassName("game")[0].style.display ="flex";
    jeu_ouvert = 1;
}


function fermer(){
    document.getElementsByClassName("game")[0].style.display ="none";
    jeu_ouvert = 0;
}

function fermer2(){
    if(mouseout==1){
        document.getElementsByClassName("game")[0].style.display ="none";
        jeu_ouvert = 0;
    }
}

function enigme(){
    if ( enigme_reussie == 0){
        document.getElementsByClassName("choix-jeu")[0].style.display ="none";
        document.getElementById("enigme-1").style.display ="block";
    }
    if ( enigme_reussie == 1){
        document.getElementsByClassName("choix-jeu")[0].style.display ="none";
        document.getElementById("enigme-2").style.display ="flex";
    }
    if ( enigme_reussie == 2){
        document.getElementsByClassName("choix-jeu")[0].style.display ="none";
        document.getElementById("enigme-3").style.display ="flex";
        enigme_3 = 1;
    }
}

function fin(){
    enigme_reussie = 0;
    document.getElementsByClassName('b1')[0].innerHTML = '0';
    document.getElementsByClassName('b2')[0].innerHTML = '0';
    document.getElementsByClassName('b3')[0].innerHTML = '0';
    document.getElementsByClassName('b9')[0].innerHTML = '0';
    document.getElementsByClassName('b10')[0].innerHTML = '0';
    document.getElementsByClassName('b11')[0].innerHTML = '0';
    b1 = 0;b2 = 0;b3 = 0;b9 = 0;b10 = 0;b11 = 0;
    valeur_c1 = 0;
    valeur_c2 = 0;
    valeur_c3 = 0;
    document.getElementsByClassName('code-1')[0].innerHTML = valeur_c1;
    document.getElementsByClassName('code-2')[0].innerHTML = valeur_c2;
    document.getElementsByClassName('code-3')[0].innerHTML = valeur_c3;
    document.getElementsByClassName("reponse_3")[0].value = "";
    document.getElementsByClassName("choix-jeu")[0].style.display ="flex";
    document.getElementById("bravo").style.display ="none";
}

function jeu(){
    document.getElementsByClassName("choix-jeu")[0].style.display ="none";
    document.getElementById("jeu").style.display ="flex";
    ingame = 0;
}

//Enigme - 1

function back1(){
    document.getElementsByClassName("choix-jeu")[0].style.display ="flex";
    document.getElementById("enigme-1").style.display ="none";
}

var b1 = 0;
var b2 = 0;
var b3 = 0;
var b4 = 0;
var b5 = 0;
var b6 = 0;
var b7 = 0;
var b8 = 0;
var b9 = 0;
var b10 = 0;
var b11 = 0;
var i1 = 0;


function B1(){
    if(b1==0){
        document.getElementsByClassName('b1')[0].innerHTML = '1';
        b1 = 1;
    } else{
        document.getElementsByClassName('b1')[0].innerHTML = '0';
        b1 = 0;
    }
    verif();
}
function B2(){
    if(b2==0){
        document.getElementsByClassName('b2')[0].innerHTML = '1';
        b2 = 1;
    } else{
        document.getElementsByClassName('b2')[0].innerHTML = '0';
        b2 = 0;
    }
    verif();
}
function B3(){
    if(b3==0){
        document.getElementsByClassName('b3')[0].innerHTML = '1';
        b3 = 1;
    } else{
        document.getElementsByClassName('b3')[0].innerHTML = '0';
        b3 = 0;
    }
    verif();
}
function B4(){
    if(b4==0){
        document.getElementsByClassName('b4')[0].innerHTML = '1';
        b4 = 1;
    } else{
        document.getElementsByClassName('b4')[0].innerHTML = '0';
        b4 = 0;
    }
    verif();
}
function B5(){
    if(b5==0){
        document.getElementsByClassName('b5')[0].innerHTML = '1';
        b5 = 1;
    } else{
        document.getElementsByClassName('b5')[0].innerHTML = '0';
        b5 = 0;
    }
    verif();
}
function B6(){
    if(b6==0){
        document.getElementsByClassName('b6')[0].innerHTML = '1';
        b6 = 1;
    } else{
        document.getElementsByClassName('b6')[0].innerHTML = '0';
        b6 = 0;
    }
    verif();
}
function B7(){
    if(b7==0){
        document.getElementsByClassName('b7')[0].innerHTML = '1';
        b7 = 1;
    } else{
        document.getElementsByClassName('b7')[0].innerHTML = '0';
        b7 = 0;
    }
    verif();
}
function B8(){
    if(b8==0){
        document.getElementsByClassName('b8')[0].innerHTML = '1';
        b8 = 1;
    } else{
        document.getElementsByClassName('b8')[0].innerHTML = '0';
        b8 = 0;
    }
    verif();
}
function B9(){
    if(b9==0){
        document.getElementsByClassName('b9')[0].innerHTML = '1';
        b9 = 1;
    } else{
        document.getElementsByClassName('b9')[0].innerHTML = '0';
        b9 = 0;
    }
    verif();
}
function B10(){
    if(b10==0){
        document.getElementsByClassName('b10')[0].innerHTML = '1';
        b10 = 1;
    } else{
        document.getElementsByClassName('b10')[0].innerHTML = '0';
        b10 = 0;
    }
    verif();
}
function B11(){
    if(b11==0){
        document.getElementsByClassName('b11')[0].innerHTML = '1';
        b11 = 1;
    } else{
        document.getElementsByClassName('b11')[0].innerHTML = '0';
        b11 = 0;
    }
    verif();
}
function verif(){
    if(b1==1 && b2==1 && b3==1 && b11==1 && b10==1 && b9==1){
        document.getElementById("enigme-1").style.display="none";
        document.getElementById('enigme-2').style.display="flex";
        enigme_reussie = 1;
        document.getElementsByClassName('numero-etape')[0].innerHTML = "1";
    }
}

function indice1(){
    if(i1==0){
        document.getElementsByClassName('aide-1')[0].innerHTML = "Fin révolution française (cliquez une seconde fois pour la réponse)";
        i1 = 1;
        return;
    }
    if(i1==1){
        document.getElementsByClassName('aide-1')[0].innerHTML = "Date fin révolution française : 1799 et en binaire = 11100000111";
        i1 = 0;
        return;
    }
}


function back2(){
    document.getElementsByClassName("choix-jeu")[0].style.display ="flex";
    document.getElementById("enigme-2").style.display ="none";
}


var valeur_c1 = 0;
var valeur_c2 = 0;
var valeur_c3 = 0;

function plus_c1(){
    if ( valeur_c1 != 9){
        valeur_c1 = valeur_c1 + 1;
    } else{
        valeur_c1 = 0;
    }
    document.getElementsByClassName('code-1')[0].innerHTML = valeur_c1;
    verif2();
}
function plus_c2(){
    if ( valeur_c2 != 9){
        valeur_c2 = valeur_c2 + 1;
    } else{
        valeur_c2 = 0;
    }
    document.getElementsByClassName('code-2')[0].innerHTML = valeur_c2;
    verif2();
}
function plus_c3(){
    if ( valeur_c3 != 9){
        valeur_c3 = valeur_c3 + 1;
    } else{
        valeur_c3 = 0;
    }
    document.getElementsByClassName('code-3')[0].innerHTML = valeur_c3;
    verif2();
}
function moin_c1(){
    if ( valeur_c1 != 0){
        valeur_c1 = valeur_c1 - 1;
    } else{
        valeur_c1 = 9;
    }
    document.getElementsByClassName('code-1')[0].innerHTML = valeur_c1;
    verif2();
}
function moin_c2(){
    if ( valeur_c2 != 0){
        valeur_c2 = valeur_c2 - 1;
    } else{
        valeur_c2 = 9;
    }
    document.getElementsByClassName('code-2')[0].innerHTML = valeur_c2;
    verif2();
}
function moin_c3(){
    if ( valeur_c3 != 0){
        valeur_c3 = valeur_c3 - 1;
    } else{
        valeur_c3 = 9;
    }
    document.getElementsByClassName('code-3')[0].innerHTML = valeur_c3;
    verif2();
}

var enigme_3 = 0;

function verif2(){
    if(valeur_c1 == 0 && valeur_c2 == 2 && valeur_c3 == 7){
        document.getElementById('enigme-2').style.display="none";
        document.getElementById('enigme-3').style.display="flex";
        enigme_reussie = 2;
        enigme_3 = 1;
        document.getElementsByClassName('numero-etape')[0].innerHTML = "2";
    }
}

function back4(){
    document.getElementsByClassName("choix-jeu")[0].style.display ="flex";
    document.getElementById("enigme-3").style.display ="none";
}

var answer;

document.addEventListener('keydown', function(event){
    if(event.keyCode == 13 && enigme_3 == 1){
        answer = document.getElementsByClassName("reponse_3")[0].value;
        if (answer.toUpperCase() == 'KING'){
            document.getElementsByClassName("reponse_3")[0].style.borderColor = "green";
            document.getElementsByClassName("reponse_3")[0].style.outlineColor = "green";
            setTimeout(function(){
                document.getElementsByClassName("reponse_3")[0].style.borderColor = "black";
                document.getElementsByClassName("reponse_3")[0].style.outlineColor = "black";
                document.getElementById("enigme-3").style.display ="none";
                document.getElementById("bravo").style.display ="flex";
                document.getElementsByClassName('numero-etape')[0].innerHTML = "3";
            },700);
        } else{
            setTimeout(function(){
                document.getElementsByClassName("reponse_3")[0].style.borderColor = "black";
                document.getElementsByClassName("reponse_3")[0].style.outlineColor = "black";
            },700);
            document.getElementsByClassName("reponse_3")[0].style.borderColor = "red";
            document.getElementsByClassName("reponse_3")[0].style.outlineColor = "red";
        }
    }
})

//-----------------------------------------------------JEU-----------------------------------------------------//

var milieu_temps;
var last;
var delay = 4.2;
var delay2 = 620;
var delay3 = 1200;
var over = 0;
var ingame = 1;
var affiche_perdu = 0;


function back3(){
    document.getElementsByClassName("choix-jeu")[0].style.display ="flex";
    document.getElementById("jeu").style.display ="none";
}

document.addEventListener('keydown', function(event){
    if((event.keyCode == 90)) { //Start
        if(ingame == 0){
            over = 0;
            action();
            ingame = 1;
            scoring();
        }
        affiche_perdu = 0;
    }
    if((event.keyCode == 81)) { //Gauche
        gauche();
    }
    if((event.keyCode == 68)) { //Droite
        droite();
    }
})

function facil(){
    delay = 5.5;
    delay2 = 810;
    delay3 = 1600;
    document.getElementsByClassName('facile')[0].style.background = 'rgba(231, 231, 231, 0.77)';
    document.getElementsByClassName('moyen')[0].style.background = 'white';
    document.getElementsByClassName('dificile')[0].style.background = 'white';
}
function moyen(){
    delay = 4.2;
    delay2 = 620;
    delay3 = 1200;
    document.getElementsByClassName('moyen')[0].style.background = 'rgba(231, 231, 231, 0.77)';
    document.getElementsByClassName('facile')[0].style.background = 'white';
    document.getElementsByClassName('dificile')[0].style.background = 'white';
}
function dificile(){
    delay = 3.4;
    delay2 = 510;
    delay3 = 1000;
    document.getElementsByClassName('dificile')[0].style.background = 'rgba(231, 231, 231, 0.77)';
    document.getElementsByClassName('moyen')[0].style.background = 'white';
    document.getElementsByClassName('facile')[0].style.background = 'white';
}

function ligne_g(){
    document.getElementsByClassName('block-1')[0].style.transition = "all "+ delay + "s";
    document.getElementsByClassName('block-1')[0].style.transform = "translateY(1900px)";
    setTimeout(function(){
        document.getElementsByClassName('block-1')[0].style.transition = "none";
        document.getElementsByClassName('block-1')[0].style.transform = "translateY(0px)";
    }, delay3);
}

function ligne_m(){
    document.getElementsByClassName('block-2')[0].style.transition = "all "+ delay + "s";
    document.getElementsByClassName('block-2')[0].style.transform = "translateY(1900px)";
    setTimeout(function(){
        document.getElementsByClassName('block-2')[0].style.transition = "none";
        document.getElementsByClassName('block-2')[0].style.transform = "translateY(0px)";
    }, delay3);
}

function ligne_d(){
    document.getElementsByClassName('block-3')[0].style.transition = "all "+ delay + "s";
    document.getElementsByClassName('block-3')[0].style.transform = "translateY(1900px)";
    setTimeout(function(){
        document.getElementsByClassName('block-3')[0].style.transition = "none";
        document.getElementsByClassName('block-3')[0].style.transform = "translateY(0px)";
    }, delay3);
}

function ligne_g2(){
    document.getElementsByClassName('block-1-2')[0].style.transition = "all "+ delay + "s";
    document.getElementsByClassName('block-1-2')[0].style.transform = "translateY(1900px)";
    setTimeout(function(){
        document.getElementsByClassName('block-1-2')[0].style.transition = "none";
        document.getElementsByClassName('block-1-2')[0].style.transform = "translateY(0px)";
    }, delay3);
}

function ligne_m2(){
    document.getElementsByClassName('block-2-2')[0].style.transition = "all "+ delay + "s";
    document.getElementsByClassName('block-2-2')[0].style.transform = "translateY(1900px)";
    setTimeout(function(){
        document.getElementsByClassName('block-2-2')[0].style.transition = "none";
        document.getElementsByClassName('block-2-2')[0].style.transform = "translateY(0px)";
    }, delay3);
}

function ligne_d2(){
    document.getElementsByClassName('block-3-2')[0].style.transition = "all "+ delay + "s";
    document.getElementsByClassName('block-3-2')[0].style.transform = "translateY(1900px)";
    setTimeout(function(){
        document.getElementsByClassName('block-3-2')[0].style.transition = "none";
        document.getElementsByClassName('block-3-2')[0].style.transform = "translateY(0px)";
    }, delay3);
}

var choix; //nombre blocks
var choix2; //le blocks
var choix3; //le blocks
var choix1_2; //nombre blocks
var choix2_2; //le blocks
var choix3_2; //le blocks

function action(){
if(over == 0){
    premiere_ligne();
    game_over_or_not();
    console.log('nombre -> ' + choix);
}
}

function premiere_ligne(){
    if(over == 0){
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
          }
        choix = getRandomInt(5)+1;
        choix2 = getRandomInt(3)+1;
        choix3 = getRandomInt(2)+1;
        if(choix == 3 || choix == 4 || choix == 1){
            choix = 1;
        } else{
            choix = 2;
        }
        if (choix == 2){
            if(choix2 == 1){
                ligne_g();
                if(choix3 == 1){
                    ligne_m();
                }
                if(choix3 == 2){
                    ligne_d();
                }
            }
            if(choix2 == 2){
                ligne_m();
                if(choix3 == 2){
                    ligne_d();
                }
                if(choix3 == 1){
                    ligne_g();
                }
            }
            if(choix2 == 3){
                ligne_d();
                if(choix3 == 2){
                    ligne_g();
                }
                if(choix3 == 1){
                    ligne_m();
                }
            }
        }
        setTimeout(function(){
            deuxieme_ligne();
        },delay2);
    }
}

function deuxieme_ligne(){
    if(over == 0){
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
          }
        choix1_2 = getRandomInt(5)+1;
        choix2_2 = getRandomInt(3)+1;
        choix3_2 = getRandomInt(2)+1;
        if(choix1_2 == 3 || choix1_2 == 4 || choix1_2 == 1){
            choix1_2 = 1;
        } else{
            choix1_2 = 2;
        }
        if (choix1_2 == 1){
            if(choix2_2 == 1){
                ligne_g2();
            }
            if(choix2_2 == 2){
                ligne_m2();
            }
            if(choix2_2 == 3){
                ligne_d2();
            }
        }
        if (choix1_2 == 2){
            if(choix2_2 == 1){
                ligne_g2();
                if(choix3_2 == 1){
                    ligne_m2();
                }
                if(choix3_2 == 2){
                    ligne_d2();
                }
            }
            if(choix2_2 == 2){
                ligne_m2();
                if(choix3_2 == 2){
                    ligne_d2();
                }
                if(choix3_2 == 1){
                    ligne_g2();
                }
            }
            if(choix2_2 == 3){
                ligne_d2();
                if(choix3_2 == 2){
                    ligne_g2();
                }
                if(choix3_2 == 1){
                    ligne_m2();
                }
            }
        }
        setTimeout(function(){
            action();
        },delay2);
    }
}


var best_score = 0;
var score_x = 0;

function scoring(){
    setTimeout(function(){
        score();
    },800);
}

function score(){
    setTimeout(function(){
        score_x = score_x + 1;
    }, 10);
    if (delay>1.3){
        delay = delay - 0.033;
    }
    document.getElementsByClassName('text_score')[0].innerHTML = score_x;
    if(ingame == 1){
        scoring();
    }
}

var position = 2;

function gauche(){
    if(position == 1){
        return;
    }
    if(position == 2){
        document.getElementsByClassName('player')[0].style.left = "18.6%";
        position = 1;
        return;
    }
    if(position == 3){
        document.getElementsByClassName('player')[0].style.left = "50%";
        position = 2;
        return;
    }
    game_over_or_not();
}

function droite(){
    if(position == 1){
        document.getElementsByClassName('player')[0].style.left = "50%";
        position = 2;
        return;
    }
    if(position == 2){
        document.getElementsByClassName('player')[0].style.left = "81.4%";
        position = 3;
        return;
    }
    if(position == 3){
        return;
    }
    game_over_or_not();
}

function game_over_or_not(){
    let X_1 = document.querySelector('.block-1');
    let rect_1 = X_1.getBoundingClientRect();
    //console.log("le 1 :" + rect_1.top, rect_1.right, rect_1.bottom, rect_1.left);
    let X_2 = document.querySelector('.block-2');
    let rect_2 = X_2.getBoundingClientRect();
    //console.log("le 2 :" + rect_2.top, rect_2.right, rect_2.bottom, rect_2.left);
    let X_3 = document.querySelector('.block-3');
    let rect_3= X_3.getBoundingClientRect();
    //console.log("le 2 :" + rect_2.top, rect_2.right, rect_2.bottom, rect_2.left);
    let X_4 = document.querySelector('.block-1-2');
    let rect_4= X_4.getBoundingClientRect();
    //console.log("le 2 :" + rect_2.top, rect_2.right, rect_2.bottom, rect_2.left);
    let X_5 = document.querySelector('.block-2-2');
    let rect_5= X_5.getBoundingClientRect();
    //console.log("le 2 :" + rect_2.top, rect_2.right, rect_2.bottom, rect_2.left);
    let X_6 = document.querySelector('.block-3-2');
    let rect_6= X_6.getBoundingClientRect();
    //console.log("le 3 :" + rect_3.top, rect_3.right, rect_3.bottom, rect_3.left);
    let Player = document.querySelector('.player');
    let player_= Player.getBoundingClientRect();
    //console.log("le joueur :" +  player_.top,  player_.right,  player_.bottom,  player_.left);
    if((player_.top > rect_1.top && player_.top < rect_1.bottom) || (player_.bottom > rect_1.top && player_.bottom < rect_1.bottom)){
        if(player_.left > rect_1.left && player_.left < rect_1.right){
            game_over();
        }
    }
    if((player_.top > rect_2.top && player_.top < rect_2.bottom) || (player_.bottom > rect_2.top && player_.bottom < rect_2.bottom)){
        if(player_.left > rect_2.left && player_.left < rect_2.right){
            game_over();
        }
    }
    if((player_.top > rect_3.top && player_.top < rect_3.bottom) || (player_.bottom > rect_3.top && player_.bottom < rect_3.bottom)){
        if(player_.left > rect_3.left && player_.left < rect_3.right){
            game_over();
        }
    }
    if((player_.top > rect_4.top && player_.top < rect_4.bottom) || (player_.bottom > rect_4.top && player_.bottom < rect_4.bottom)){
        if(player_.left > rect_4.left && player_.left < rect_4.right){
            game_over();
        }
    }
    if((player_.top > rect_5.top && player_.top < rect_5.bottom) || (player_.bottom > rect_5.top && player_.bottom < rect_5.bottom)){
        if(player_.left > rect_5.left && player_.left < rect_5.right){
            game_over();
        }
    }
    if((player_.top > rect_6.top && player_.top < rect_6.bottom) || (player_.bottom > rect_6.top && player_.bottom < rect_6.bottom)){
        if(player_.left > rect_6.left && player_.left < rect_6.right){
            game_over();
        }
    }
    setTimeout(function(){
        game_over_or_not();
    }, 50);
}

function game_over(){
    if(score_x > best_score){
        best_score = score_x - 1;
        document.getElementsByClassName('best-score-affiche')[0].innerHTML = best_score;
        document.getElementsByClassName('text_best-score')[0].innerHTML = best_score;
    }
    ingame = 0;
    score_x = 0;
    document.getElementsByClassName('text_score')[0].innerHTML = score_x;
    over = 1;
    if (affiche_perdu == 0){
        document.getElementsByClassName('perdu')[0].style.opacity = "0.8";
        setTimeout(() => {
            document.getElementsByClassName('perdu')[0].style.opacity = "0";
        }, 500);
    affiche_perdu = 1;
    }
}