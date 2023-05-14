let textarea = document.getElementById('textInput')
let tempTextarea = document.getElementById('temporalTextArea');

function onInput(){
    tempTextarea.value = textarea.value
}

function vanish() {
    if (textarea.value != '') {
        tempTextarea.style.background = '#ffffff';
    }
};

function triggerCopy() {
    // Get the text field
    var copyText = tempTextarea;

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
}

let elementoCreado = false;
function createCopyButton() {
    if (!elementoCreado) {
        const createButton = document.createElement("button")
        createButton.id = "copyButton"
        createButton.innerText = "Copiar"
        createButton.style.backgroundColor= "#D8DFE8";
        createButton.style.color= "#0A3871";
        createButton.style.border= "1px solid #0A3871";
        createButton.style.width= "80%";
        createButton.style.height= "10vh";
        createButton.style.fontSize= "16px";
        createButton.style.borderRadius= "24px";
        createButton.style.cursor= "pointer";
        createButton.style.position= "relative";
        createButton.style.margin= "0 auto";
    
            
        output.appendChild(createButton)
        elementoCreado = true;
    
        //copy trigger
        copyButton = document.getElementById("copyButton")
        copyButton.addEventListener("click", triggerCopy);
        //hover trigger
        copyButton.addEventListener('mouseover', () => {
            copyButton.style.fontSize= "large";
        });
        copyButton.addEventListener('mouseout', () => {
            copyButton.style.fontSize= "medium";
        });
    }
}

function encrypt() {
    let letterSubstitutions = {
        e: "enter", 
        i: "imes",
        a: "ai",
        o: "ober",
        u: "ufat",
    }
    let nuevoTexto = textarea.value.replace(/[aeiou]/gi, function(match) {
        return letterSubstitutions[match];
    });
    
    vanish();
    tempTextarea.value = nuevoTexto;
    createCopyButton()
}

const button1 = document.getElementById('encriptar');
button1.addEventListener("click", encrypt);

function deEncrypt() {
    let regex = /enter|imes|ai|ober|ufat/gi; // en lugar de esto tenía /\w+/gi
    let wordSubstitutions = {
        "enter": 'e', 
        "imes": 'i',
        "ai": 'a',
        "ober": 'o',
        "ufat": 'u',
    }
    
    let nuevasLetras = textarea.value.replace(regex, function(match) {
        return wordSubstitutions[match] || match;
    });

    vanish();
    tempTextarea.value = nuevasLetras;
    createCopyButton()
}

const button2 = document.getElementById('desencriptar');
button2.addEventListener("click", deEncrypt);



