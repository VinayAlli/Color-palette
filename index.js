function myFunction() {
    const randomColor1 = Math.floor(Math.random()*16777215).toString(16); //toString(16) converts into 0-f
    document.getElementById("box1").style.backgroundColor = "#"+randomColor1;
    b1.innerHTML="#"+randomColor1

    const randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("box2").style.backgroundColor = "#"+randomColor2;
    b2.innerHTML="#"+randomColor2

    const randomColor3 = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("box3").style.backgroundColor = "#"+randomColor3;
    b3.innerHTML="#"+randomColor3

    const randomColor4 = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("box4").style.backgroundColor = "#"+randomColor4;
    b4.innerHTML="#"+randomColor4

    const randomColor5 = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("box5").style.backgroundColor = "#"+randomColor5;
    b5.innerHTML="#"+randomColor5
}