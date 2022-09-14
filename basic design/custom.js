let colorChange = document.getElementById('child1');

let index = 0;

const colors = ['#9b59b6', '#95a5a6', '#e67e22', '#1abc9c', '#0097e6', '#4cd137', '#192a56', '#ff5252', 'black'];

colorChange.addEventListener('click', function myFunction() {
document.getElementById("div1").style.backgroundColor = colors[index];

  index = index >= colors.length - 1 ? 0 : index + 1;
});