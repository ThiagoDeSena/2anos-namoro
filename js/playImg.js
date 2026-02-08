
var btn = document.getElementById("heartTxt");
btn.style.opacity = 0;
var btnVal = 0;
var mainInterval; // Criamos uma variável global para o intervalo principal

var btn = document.getElementById("heartTxt");
btn.style.opacity = 0;
var btnVal = 0;
var mainInterval; // Criamos uma variável global para o intervalo principal

// function showImage(){
//     if(imageIndex >= len){
//         // 1. Mata o intervalo para o vídeo não resetar a cada 2.5s
//         clearInterval(mainInterval); 
        
//         // 2. Esconde a galeria
//         document.getElementById("imgTxt").style.display = "none";
        
//         // 3. Mostra o container do vídeo e dá play
//         var videoContainer = document.getElementById("videoContainer");
//         var video = document.getElementById("myVideo");
        
//         videoContainer.style.display = "block";
//         video.src = "video/video.mp4";
//         video.play();
        
//         return; 
//     }

//     myImage.setAttribute("src", imageArray[imageIndex]);
//     myTxt.innerHTML = txtArray[imageIndex];
//     imageIndex++;
// }

function showImage(){
    if(imageIndex >= len){
        clearInterval(mainInterval); 
        
        document.getElementById("imgTxt").style.display = "none";
        
        var videoContainer = document.getElementById("videoContainer");
        var video = document.getElementById("myVideo");
        
        videoContainer.style.display = "block";
        video.src = "video/video.mp4";
        video.play();

        // --- NOVIDADE: Detectar o fim do vídeo ---
        video.onended = function() {
            // 1. Esconde o vídeo e o contador de tempo
            videoContainer.style.display = "none";
            document.getElementById("content").style.display = "none"; // Esconde o timer
            
            // 2. Mostra o pedido
            var proposal = document.getElementById("marriageProposal");
            proposal.style.display = "block";
            
            // 3. (Opcional) Se quiser que as estrelas/corações de fundo fiquem mais intensos
            if(typeof starsInit === 'function') starsInit(); 
        };
        
        return; 
    }
    myImage.setAttribute("src", imageArray[imageIndex]);
    myTxt.innerHTML = txtArray[imageIndex];
    imageIndex++;
}

function play(){

    var audio = document.querySelector("audio");
    audio.play(); // Isso força a música a começar no clique do coração
    
    if(t == 0){
        myImage.setAttribute("src", "");
        myTxt.innerHTML = "";
        imageIndex = 0;
        clearInterval(showImageInterval);
    }
    flag = 1 - flag;
    document.getElementById("typeDiv").style.opacity = flag;
    document.getElementById("imgTxt").style.opacity = 1 - flag;
    
    if(t == 0){
        // Guardamos o intervalo na variável mainInterval
        mainInterval = setInterval(showImage, 2500); 
    }
    t++;
}

function preshowImage(){
	document.getElementById("imgTxt").style.opacity = 0;
	myImage.setAttribute("src", imageArray[imageIndex]);
	myTxt.innerHTML = txtArray[imageIndex];
	imageIndex++;
	if(imageIndex >= len){
		imageIndex = 0;
	}
}

function buttonFadeIn(){
	if(btnVal < 1){
		btnVal += 0.025;
		btn.style.opacity = btnVal;
	}
	else{
		clearInterval(buttonInterval);
		if(ok == 3){
			ok += 1;
		}
	}
}



function event(){

	showImageInterval = setInterval(preshowImage, 100);

	imgInterval = setInterval(function (){
		if(ok == 3){
			setTimeout(function(){buttonInterval = setInterval(buttonFadeIn, 50);}, 1500);
			clearInterval(imgInterval);
		}
	}, 50);
}

var showImageInterval;
var imgInterval;
var buttonInterval;

event();
