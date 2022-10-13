'use strict';
//TO DO:  CHANGE CSS STYLE AND ADD FEATURE TO EASILY UPLOAD WORD LISTS AND ADD CHANGE LANGUAGE

//HTML constants
const word1 = document.getElementById('word1');
const word2 = document.getElementById('word2');
const btnStart = document.querySelector('.start');
const btnCheck = document.querySelector('.check');
const btnGotit = document.querySelector('.gotit');
const btnPract = document.querySelector('.practice');
const btnHome = document.querySelector('.home');
const totalWords1 = document.getElementById('totalWords1');
const totalWords2 = document.getElementById('totalWords2');
const totalWords3 = document.getElementById('totalWords3');
const currentWord = document.getElementById('currentWords');
const gotItWord = document.getElementById('goItWords');
const practWords = document.getElementById('practiceWords');

//ARRAYS
const arrLanguage1 = ['kerstboom', 'snelweg', 'pannenkoek', 'auto'];
const arrLanguage2 = ['christmas tree', 'highway', 'pancake', 'car'];

//initialization  phase
const init = function () {
  word1.classList.add('hidden');
  word2.classList.add('hidden');
  btnCheck.disabled = true;
  btnGotit.disabled = true;
  btnPract.disabled = true;
  btnHome.classList.add('hidden');

  //score
  const arrLenghtLang1 = arrLanguage1.length;
  totalWords1.textContent = arrLenghtLang1;
  totalWords2.textContent = arrLenghtLang1;
  totalWords3.textContent = arrLenghtLang1;
  currentWord.textContent = 0;
  gotItWord.textContent = 0;
  practWords.textContent = 0;
};

init();

//start button function
const start = function () {
  console.log('function start does work');
  word1.classList.remove('hidden');
  word2.classList.remove('hidden');
  word2.textContent = '?';
  btnCheck.disabled = false;
  word1.textContent = arrLanguage1[0];
};
btnStart.addEventListener('click', start);

//check button function
const check = function () {
  console.log('check button works');
  btnGotit.disabled = false;
  btnPract.disabled = false;
  word2.textContent = arrLanguage2[0];
};
btnCheck.addEventListener('click', check);

//Gotit and Practice functions
//GotIt
const gotit = function () {
  console.log('gotit button works ');
  arrLanguage1.shift(word1);
  arrLanguage2.shift(word2);
  console.log(arrLanguage1, arrLanguage2);
  countClicks(currentWord);
  countClicks(gotItWord);
  nextword();
};
btnGotit.addEventListener('click', gotit);

//Practice
const practice = function () {
  console.log('practice botton works');
  arrLanguage1.push(arrLanguage1.shift());
  arrLanguage2.push(arrLanguage2.shift());
  console.log(arrLanguage1, arrLanguage2);
  countClicks(currentWord);
  countClicks(practWords);
  nextword();
};
btnPract.addEventListener('click', practice);

//continue to the end of the array of words
const nextword = function () {
  if (arrLanguage1.length > 0) {
    btnStart.classList.add('hidden');
    word1.textContent = arrLanguage1[0];
    word2.textContent = '?';
    btnGotit.disabled = true;
    btnPract.disabled = true;
  } else {
    alert(
      'Great result!! See you final scores You have reached the end of the  list with words. Click home to start again'
    );
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

//scores parameter is the htmltag gott/practice and current
function countClicks(wordcontext) {
  let countCurrent = Number(wordcontext.textContent);
  countCurrent = countCurrent + 1;
  return (wordcontext.textContent = countCurrent);
}
