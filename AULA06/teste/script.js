
function Resposta(){
    let res = document.querySelector('input').value;

    switch (res) {
        case "A":
           // console.log("Errado");
           // alert("Errado");
            document.querySelector('#resposta').innerHTML="Errado";
            break;
            case "a":
           // console.log("Errado");
           // alert("Errado");
            document.querySelector('#resposta').innerHTML="Errado";
            break;
        case "B":
           // alert("Correto");
          // console.log("Correto");
            document.querySelector('#resposta').innerHTML="Correto";
            break;
            case "b":
           // console.log("Errado");
           // alert("Errado");
           document.querySelector('#resposta').innerHTML="Correto";
            break;
        case "C":
           // alert("Errado");
           // console.log("Errado");
            document.querySelector('#resposta').innerHTML="Errado";
            break;
            case "c":
           // console.log("Errado");
           // alert("Errado");
           document.querySelector('#resposta').innerHTML="Correto";
            break;
        default:
           // alert("Valor não aceito");
            //console.log("Valor não aceito");
            document.querySelector('#resposta').innerHTML="Valor não aceito";
            break;
    }


}
function Resposta2(){
    let res2 = document.querySelector('#rest').value;

    switch (res2) {
        case "A":
           // console.log("Errado");
           // alert("Errado");
            document.querySelector('#resposta2').innerHTML="Correto";
            break;
            case "a":
           // console.log("Errado");
           // alert("Errado");
            document.querySelector('#resposta2').innerHTML="Correto";
            break;
        case "B":
           // alert("Correto");
          // console.log("Correto");
            document.querySelector('#resposta2').innerHTML="Errado";
            break;
            case "b":
           // console.log("Errado");
           // alert("Errado");
           document.querySelector('#resposta2').innerHTML="Errado";
            break;
        case "C":
           // alert("Errado");
           // console.log("Errado");
            document.querySelector('#resposta2').innerHTML="Errado";
            break;
            case "c":
           // console.log("Errado");
           // alert("Errado");
           document.querySelector('#resposta2').innerHTML="Errado";
            break;
        default:
           // alert("Valor não aceito");
            //console.log("Valor não aceito");
            document.querySelector('#resposta2').innerHTML="Valor não aceito";
            break;
    }


}
