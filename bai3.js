let text = document.getElementById("lmao")
function numberOneTriangle(){
    let line = ""
    for(let i = 1; i <= 5; i++){
        for(let j = 1; j<= i;j++){
            line += "1"
        }
        line += "\n"
    }
    return line
}
text.innerText = numberOneTriangle();