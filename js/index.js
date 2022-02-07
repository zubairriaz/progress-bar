const element = document.querySelector('#progress-button');
element.onclick = function(){
  const bars = document.getElementsByClassName('meter');
  for (let bar of bars){
    const span = bar.querySelector('span');
    span.style.width = '100%';
    span.className = 'align-centre'
    span.innerHTML = '100%';
  }
}