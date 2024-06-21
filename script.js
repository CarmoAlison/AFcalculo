function calcular(){
var Bimestre1 = Number(document.getElementById('Bim1').value);    
var Bimestre2 = Number(document.getElementById('Bim2').value);    
var Bimestre3 = Number(document.getElementById('Bim3').value);    
var Bimestre4 = Number(document.getElementById('Bim4').value);

var calculoBimestre1 = Number(Bimestre1) * 2;
var calculoBimestre2 = Number(Bimestre2) * 2;
var calculoBimestre3 = Number(Bimestre3) * 3;
var calculoBimestre4 = Number(Bimestre4) * 3;

var calcFinal = (Number(calculoBimestre1) + Number(calculoBimestre2) + Number(calculoBimestre3) + Number(calculoBimestre4))/ 10;

var rec = 60 - Number(calcFinal)  ;

if(calcFinal >= 60){
    document.getElementById("resultadoTexto").innerHTML = 'Você passou, parabéns😁!';
}else{
    document.getElementById("resultadoTexto").innerHTML = 'Infelizmente você não passou, faltou ' + Number(rec) + ' pontos 😔';
}




document.getElementById("resultadoMedia").innerHTML = calcFinal.toFixed(1);
console.log(calcFinal);

}
function calcularSEM(){
var Bimestre1SEM = Number(document.getElementById('Bim1SEM').value);    
var Bimestre2SEM = Number(document.getElementById('Bim2SEM').value);    

var calcFinalSEM = (Number(Bimestre1SEM)+ Number(Bimestre2SEM))/2;

var recSEM = 60 - Number(calcFinalSEM);

if(calcFinalSEM >= 60){
    document.getElementById("resultadoTextoSEM").innerHTML = 'Você passou, parabéns😁!';
}else{
    document.getElementById("resultadoTextoSEM").innerHTML = 'Infelizmente você não passou, faltou ' + Number(recSEM) + ' pontos 😔';
}




document.getElementById("resultadoMediaSEM").innerHTML = calcFinalSEM.toFixed(1);
console.log(calcFinal);

}


const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('start')
        }else{
            entry.target.classList.remove('start')
        }
    })
});

const elements = document.querySelectorAll('.hidden');
elements.forEach((element) => myObserver.observe(element));

const myObserver2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('startpri')
        }else{
            entry.target.classList.remove('startpri')
        }
    })
});

const elements2 = document.querySelectorAll('.hiddenpri');
elements2.forEach((element) => myObserver2.observe(element));

const myObserver3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('startseg')
        }else{
            entry.target.classList.remove('startseg')
        }
    })
});

const elements3 = document.querySelectorAll('.hiddenseg');
elements2.forEach((element) => myObserver3.observe(element));


const myObserver4 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('starttec')
        }else{
            entry.target.classList.remove('starttec')
        }
    })
});

const elements4 = document.querySelectorAll('.hidde');
elements2.forEach((element) => myObserver4.observe(element));





  bootbox.alert("Olá, seja bem vindo ao AFcalc! cálcule suas notas com o melhor site!");



let login = document.getElementById('login');
let senha = document.getElementById('senha');
let form = document.querySelector("form");
let textform = document.getElementById('textform');
let textEmail = document.getElementById('textEmail');


form.addEventListener('submit', (e) => {
  if (login.value == '' && senha.value == '') {
    textform.textContent = 'Você precisa preencher todos o campo';
  } else if (validatorEmail(login.value) === true) {
    console.log(login.value);
    console.log(senha.value);
    textEmail.textContent = "";
    location.href = "principal.html";

    // Enviar notificação por email
    sendNotificationEmail(login.value);
  } else {
    console.log("Requisição não atendida!");
  }
  e.preventDefault();
});

login.addEventListener("Keyup", ()=>{
  if(validatorEmail(login.value)!== true){
    textEmail.textContent = "O formato do email deve ser Ex: abc@escolar.ifrn.edu.br"
  }else{
    textEmail.textContent = '';
  }
})

function validatorEmail(login){
  let emailPattern = /^[a-zA-Z0-9._%+-]+@escolar\.ifrn\.edu\.br$/;
  return emailPattern.test(login);
}

// Função para enviar notificação por email
function sendNotificationEmail(email) {
  var templateParams = {
    to_name: 'Seu nome',
    from_name: 'Sistema de Login',
    message: `Um novo usuário acessou a página de login com o email ${email}.`
  };

  emailjs.send('service_id', 'template_id', templateParams)
  .then(function(response) {
      console.log('Email enviado com sucesso!');
    }, function(error) {
      console.log('Erro ao enviar email:', error);
    });
}
