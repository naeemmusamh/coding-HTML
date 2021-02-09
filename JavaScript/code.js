function myFunction() {
    confirm("visit the link https://wasfijaradat.github.io/1stwebpage/");
    console.log("Naeem Musameh");
}

console.log("true or false")
console.log("3+2")


var level = prompt("you are photographer")
if (level === 'yes') {
    document.write("go for the link below wasfi")
} else if (level === 'no') {
    document.write("so you are a farmer lets me tell you about carrot")
} else("what you are doing here get out")

var input = prompt("do you like to take photo(P) or eat carrot(E)")
while (input !== "P" && input !== "E") {
    input = prompt("please inter coorect answear")
}

var image = '';
var inputuser = prompt("who match do you take photo or eat carrot every day")
for (var i = 0; i < inputuser; i++) {
    if (input == 'P') {
        image = image + '<image src="https://www.jcpportraits.com/sites/jcpportraits.com/files/portrait/2001/P030_1218_005_E.jpg">'
        console.log(image)
    } else if (input == 'E') {
        image = image + '<image src="https://thumbs.dreamstime.com/b/one-carrot-white-background-fresh-root-52108298.jpg">'
    }
    document.write(image)
}