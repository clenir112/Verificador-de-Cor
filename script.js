function verificador() {
    let cor = document.getElementById("cor").value;
    switch(cor) {
        case "azul":
            document.body.style.background = "blue";
            break;
            case "vermelho":
                document.body.style.background = "red";
                break;
                case "amarelo":
                    document.body.style.background = "yellow";
                    break;
                    case "verde":
                        document.body.style.background = "green";
                        break;
                        case "preto":
                        document.body.style.background = "black";
                        break;
                    default:
                        alert('Cor inválida! Digite uma cor válida!'); 
    }
}