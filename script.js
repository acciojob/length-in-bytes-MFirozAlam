const byteSize = (str) => {
  let bytes = new TextEncoder().encode(str).length;
  alert(bytes);  
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
