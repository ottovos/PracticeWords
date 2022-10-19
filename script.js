'use strict';
//TO DO:  CHANGE CSS STYLE AND ADD FEATURE TO EASILY UPLOAD WORD LISTS AND ADD CHANGE LANGUAGE

//HTML-elements declarations
const word1 = document.getElementById('word1');
const word2 = document.getElementById('word2');

const btnStart = document.querySelector('.start');
const btnCheck = document.querySelector('.check');
const btnGotit = document.querySelector('.gotit');
const btnPract = document.querySelector('.practice');
const btnHome = document.querySelector('.home');
const btnSwitch = document.querySelector('.switch');

const totalWords = document.getElementById('totalWords');
const practWords = document.getElementById('practiceWords');

let language1 = document.getElementById('language1');
let language2 = document.getElementById('language2');

const upLoad = document.getElementById('upload');

//ARRAYS
let arrLanguage1 = [
  'de straat',
  'het plein',
  'het huisnummer',
  'het telefoonnummer',
  'Dultsland',
  'opbellen',
  'de verjaardag',
  'Wanner ben je jarig?',
  'Hoe oud bent u?',
  'de leeftijd',
  'het jaar',
  'de maand',
  'jong - oud',
  'de jongere',
  'de volwassene',
  'mannelijk',
  'vrouwelijk',
  'de man',
  'de vrouW',
  'het kind',
  'de jongen',
  'het meisje',
  'getrouwd',
  'net getrouwd',
  'We zijn nu vijf jaar getrouwd',
  'We zijn gisteren getrouwd',
  'de famille, het gezin',
  'de dochter',
  'Goedenavond',
  'Hallo',
  'Hoi Peter',
  'Tot ziens',
  'Tot ziens (telefoon)',
  'Dag',
  'Doe de groeten aan..',
  'Hoe gaat het met je/u?',
  'Bedankt, goed',
  'Graag gedaan!',
  'alstublleft - dank u wel',
  'Pas op!',
  'stop!',
  'Heeft u zin om...?',
  'Mag ik je uitnodigen.',
  'Ja graag!',
  'Nee dank u',
  'Hartelijk dank',
  'Ik heb een Idee.',
  'Ik doe een voorstel',
  'Ik zou ...',
  'mar natuurlijk',
  'natuurlijk',
  'helemaal niet',
  'nee, liever niet',
  'dat is aardig, maar...',
  'nee, absoluut niet',
  'het spijt me, maar',
  'Sorry!',
  'Dat geeft niks,',
  'de zoon',
  'de oom',
  'de tante',
  'de vader',
  'de moeder',
  'Heb je nog broers of zussen?',
  'de baby',
  'de broer',
  'de zus',
  'de (groot)ouders',
  'een familielid',
  'een kennis',
  'Ze is familie van..',
  'Dat geeft niks.',
  'Is het mogelljk dat ... ?',
  'Kan Ik...?',
  'Kan dat?',
  'Ik heb nog één verzoek',
  'Mag Ik aan je voorstellen? Dit is ..naam',
  'Aangenaam!',
  'Gefeliciteerd!',
  'Hartelljk gefeliciteerd met je verjaardag.',
  'Beterschap',
  'Goede reis!',
  'Veel plezier!',
  'Gecondoleerd',
  'Dat klopt!',
  'Precies!',
  'juist',
  'verkeerd',
  'ogenblikje a.u.b.',
  'Mag ik u iets vragen?',
  'spellen',
  'Hoe schrijf je dat?',
  'Hoe spreek je dat uit?',
  'Hoe zeg je dat in het Duits?',
  'Hoe heet dat ding?',
  'begrijpen',
  'Heb ik u nu goed begrepen?',
  'ahal',
  'Wat betekent...?',
  'Kunt u mij zeggen, hoe..',
  'vertalen',
  'de vertaling',
  'in het Engels',
  'Dat wilde ik uitleggen.',
  'bijvoorbeeld',
  'enzovoorts',
  'overigens',
  'dus',
  'dat was het',
  'het woord',
  'de zin',
  'het woordenboek',
  'een taal leren',
  'een vreemde taal leren / begrifpen, verstaan',
  'begrijpen, verstaan',
  'spreken',
  'lezen',
  'schrijven',
  'mijn witspraak',
  'vloeiend',
  'veel fouten',
  'Hoe bedoelt u dat?',
  'Ik bedoel',
  'met andere woorden',
  'nou ja,',
  'Dat denk ik ook.',
];
let arrLanguage2 = [
  'die Straße',
  'der Platz',
  'die Hausnummer',
  'die Telefonnummer',
  'Deutschland',
  'anrufen',
  'der Geburtstag',
  'Wann hast du Geburtstag?',
  'We alt sind Sie?',
  'das Alter',
  'das Jahr (die Jahre)',
  'der Monat (die Monate)',
  'Jung - alt',
  'de Jugendliche',
  'der Erwachsene',
  'männlich',
  'weiblich',
  'der Mann (die Männer)',
  'die Frau (die Frauen)',
  'das Kind (die Kinder)',
  'der Junge (die Jungen)',
  'das Mädchen (die Mädchen)',
  'verheiratet',
  'ledig, nicht verheiratet',
  'Wir sind jetzt fünf Jahre verheiratet',
  'Wir haben gester geheiratet',
  'die Famille',
  'die Tochter (die Töchter)',
  'Guten Abend',
  'Hallo',
  'Grüß dich Peter',
  '(Auf) Wiedersehen',
  'Auf Wiederhören',
  'de telefoon:',
  'Viele Grüße an ...',
  "Wie geht's dir / Ihnen?",
  'danke, gut',
  'Bittel',
  'bitte - danke',
  'Vorsicht!',
  'halt!',
  'Haben Sie Lust ...',
  'Darf ich dich einladen?',
  'Ja, gerne!',
  'Nein danke,',
  'Vielen Dank!',
  'Ich habe eine Idee.',
  'Ich mache einen Vorschlag.',
  'Ich würde ....',
  'bitte',
  'klar / aber natürlichl',
  'überhaupt nicht',
  'nein, lieber nicht',
  'das ist nett, aber ...',
  'nein, auf keinen Fall',
  'es tut mir Leid, aber ...',
  'Entschuldigung!',
  'Das macht nichts.',
  'der Sohn (die Söhne)',
  'der Onkel (die Onkel)',
  'die Tante (die Tanten)',
  'der Vater',
  'die Mutter',
  'Hast du noch Geschwister?',
  'das Baby',
  'der Bruder (die Brüder)',
  'die Schwester (die Schwestern)',
  'die (Groß)eltern',
  'ein Verwandter / eine Verwandte',
  'ein Bekannter / eine Bekannte',
  'Sie ist verwandt mit ...',
  'Das macht nichts.',
  'Ist es möglich, dass ...',
  'Kann ich ... ?',
  'Geht das?',
  'Ich habe noch eine Bitte',
  'Darf Ich vorstellen? Das ist',
  'Angenehm',
  'Glückwunsch',
  'Herzlichen Glückwunsch zum Geburtstag,',
  'Gute Besserung',
  'Gute Reise',
  'Viel Spaß!',
  'Mein Beileid',
  'Das stimmt!',
  'Genau',
  'richtig',
  'falsch',
  'Moment bitte...',
  'Dart ich Sie etwas fragen?',
  'buchstabieren',
  'Wie schreibt man das?',
  'Wie spricht man das aus?',
  'Wie sagt man das auf Deutsch?',
  'Wie helßt das Ding?',
  'verstehen (er verstand-hat verstanden)',
  'Habe Ich Sie jetzt richtig verstanden?',
  'ach so',
  'Was heißt..?',
  'Können Sie mir sagen, wie',
  'übersetzen',
  'die Übersetzung',
  'auf Englisch',
  'Das wolite ich erklären.',
  'zum Beispiel',
  'und so weiter',
  'übrigens',
  'also',
  "das war's",
  'das Wort (die Wörter)',
  'der Satz (die Satze)',
  'das Wörterbuch',
  'eine Sprache lernen',
  'eine Fremdsprache lernen',
  'verstehen',
  'sprechen',
  'lesen',
  'schreiben',
  'meine Aussprache',
  'Mießend',
  'viele Fehler',
  'We meinen Sie das?',
  'Ich meine ...',
  'mit anderen Worten',
  'aIso',
  'Das glaube Ich auch',
];
// let tempArrLang1 = arrLanguage1;
// let tempArrLang2 = arrLanguage2;

//initialization  phase
const init = function () {
  word1.classList.add('hidden');
  word2.classList.add('hidden');
  btnCheck.classList.add('hidden');
  btnGotit.classList.add('hidden');
  btnPract.classList.add('hidden');
  btnHome.classList.add('hidden');
  btnSwitch.classList.remove('hidden');
  btnGotit.disabled = true;
  btnPract.disabled = true;
  //score
  const arrLenghtLang1 = arrLanguage1.length;
  totalWords.textContent = arrLenghtLang1;
  practWords.textContent = 0;
};

init();
//switch language array1<->array2
const changeLang = function () {
  console.log('switch button');
  //switching dutch<->english labels
  let tempLang;
  tempLang = language1.textContent;
  language1.textContent = language2.textContent;
  language2.textContent = tempLang;
  [arrLanguage1, arrLanguage2] = [arrLanguage2, arrLanguage1];
  console.log(arrLanguage1);
};

btnSwitch.addEventListener('click', changeLang);

//start button function
const start = function () {
  console.log('function start');
  word1.classList.remove('hidden');
  word2.classList.remove('hidden');
  word2.textContent = '?';
  btnCheck.classList.remove('hidden');
  btnSwitch.classList.add('hidden');
  word1.textContent = arrLanguage1[0];
};
btnStart.addEventListener('click', start);

//check button function
const check = function () {
  console.log('check button');
  btnGotit.classList.remove('hidden');
  btnPract.classList.remove('hidden');
  btnStart.classList.add('hidden');
  btnGotit.disabled = false;
  btnPract.disabled = false;
  word2.textContent = arrLanguage2[0]; //show the first element of the array since the gotit function will shift element
};
btnCheck.addEventListener('click', check);

//Gotit and Practice functions
//GotIt fucnction
const gotit = function () {
  if (word2.textContent != '?') {
    console.log('gotit button');
    arrLanguage1.shift(word1);
    arrLanguage2.shift(word2);
    const leftToPract = arrLanguage1.length;
    practWords.textContent = leftToPract;
    console.log(arrLanguage1, arrLanguage2, leftToPract);
    nextword();
  } else {
    btnGotit.disabled = true;
    btnPract.disabled = true;
  }
};
btnGotit.addEventListener('click', gotit);

//Practice function
const practice = function () {
  if (word2.textContent != '?') {
    console.log('practice botton works');
    arrLanguage1.push(arrLanguage1.shift());
    arrLanguage2.push(arrLanguage2.shift());
    console.log(arrLanguage1, arrLanguage2);
    nextword();
  } else {
    btnPract.disabled = true;
    btnGotit.dispatchEvent = true;
  }
};
btnPract.addEventListener('click', practice);

//continue to the end of the array of words
const nextword = function () {
  if (arrLanguage1.length > 0) {
    btnStart.classList.add('hidden');
    word1.textContent = arrLanguage1[0];
    word2.textContent = '?';
    btnGotit.disabled = false;
    btnPract.disabled = false;
  } else {
    setTimeout(function () {
      alert(
        'Great result!! See you final scores You have reached the end of the  list with words. Click home to start again'
      );
    }, 1);
    btnCheck.classList.add('hidden');
    btnGotit.classList.add('hidden');
    btnPract.classList.add('hidden');
    btnHome.classList.remove('hidden');
  }
};

//home
btnHome.addEventListener('click', function () {
  location.reload();
});

//upload and parse excel
// upLoad.addEventListener('change', function () {
//   console.log('upload works');
// });

//scores parameter is the htmltag gott/practice and current
// function countClicks(wordcontext) {
//   let countCurrent = Number(wordcontext.textContent);
//   countCurrent = countCurrent + 1;
//   return (wordcontext.textContent = countCurrent);
// }
