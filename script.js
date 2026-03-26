const byteSize = (str) => {
  // write your code here
	let bytes = new TextEncoder().encode(str).length;
	console.log(bytes);
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
