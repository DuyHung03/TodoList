var input = document.querySelector('.wrapper input')
var button = document.querySelector('.wrapper button')
var list = document.querySelector('.list')
var inputValue;
var deleteButton = document.querySelector('.delete-button')

input.onkeyup = (e) => {
   if (e.target.value.trim() !== '') {
      if (e.keyCode === 13) {
         show(e.target.value.trim())
         input.value = '';
      }
      button.onclick = () => {
         show(input.value.trim())
         input.value = '';
      }
   }
   else {
      button.onclick = () => {}
   }
}

var show = (input) => {
   var li = document.createElement('li');
   var i = document.createElement('i');

   i.classList.add('fa-solid', 'fa-circle-xmark', 'delete-button');

   li.innerHTML = `<p>${input}</p>`

   li.appendChild(i);

   list.appendChild(li);

   li.addEventListener('click', () => {
      li.classList.toggle('completed')
   })

   i.onclick = () => {
      list.removeChild(li);
   }
}

show('demo: TranDuyHung')
