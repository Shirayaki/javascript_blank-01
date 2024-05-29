// JavaScript
//console.log('Hello world!');
//console.log("console.log")

// body の背景色を変える
function MyFunction01() {
    const obj = document.body;
    obj.style.backgroundColor = 'lightgray';
  }
  
  function MyFunction01() {
    const obj = document.body;
    obj.style.fontWeight = 'bold';
  }
  
  // ID要素 の背景色を変える
function MyFunction02() {
    const obj = document.getElementById('id01');
    obj.style.backgroundColor = 'orange';
  }
  
  // CLASS要素 の背景色を変える
function MyFunction03() {
    const lines = document.getElementsByClassName('class01');
    for( let i=0; i<lines.length; i++){
      lines[i].style.backgroundColor = '#66cdaa';
      lines[i].style.color = 'white';
    }
  }

  // HTML要素 の背景色を変える
function MyFunction04() {
    const obj = document.getElementsByTagName('p');
    for( let i=0; i<obj.length; i++ ) {
      obj[i].style.backgroundColor = '#008080';
      obj[i].style.color = 'white';
    }
  }
  