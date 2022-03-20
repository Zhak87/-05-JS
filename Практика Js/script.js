// function fun1() {
// 		var chbox;
// 	chbox = document.getElementById('one'); 

// if (chbox.checked) {
// 	alert('Выбран');
// }
// else
// {
// 	alert('Не выбран');
// }
// }

function fun1(){
	var radio=document.getElementsByName('r1');
	for (var i = 0 ; i < radio.length ; i++ ) {
		if (radio[i].checked) {
			alert(' выбран ' +i+ ' элемент ');
		}
	}
}	