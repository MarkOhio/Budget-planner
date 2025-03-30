 // typeWriter effect
  const textElement = document.getElementById("text");
  const cursor = document.querySelector(".cursor");
  // where to change the text
  const text = "Ready to take control of your finances? Click here";
  let index = 0;

  function typeWriter() {
      if (index < text.length) {
          textElement.textContent += text.charAt(index);
          index++;
          setTimeout(typeWriter, 100);// change number to alter typing speed 
      }
  }

  typeWriter();
