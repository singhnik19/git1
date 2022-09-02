// var n=2;
// function square(num){
	// var ans = num*num;
	// return ans;
// 
// }
// var square2=square(n);
// var square4=square(4);

function sayhello() {
	//console.log("hello");
	var n= document.getElementById("name").value;
	var message = "<h2>Hello " + n + "!</h2";
	//document.getElementById('content').textContent = message;
	document.getElementById('content').innerHTML = message;
}
	