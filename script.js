alert("NÃO É UM JOGO DA MEMÓRIA")

var cards  = document.getElementsByClassName('card');

//criando lista pra receber os cards
var cards_list = [];

// adicionando os cards na lista
for(card in cards){
	if(cards[card].className == "card"){
		cards_list.push(cards[card]);
	}else{
		break;
	}
}

// criado lista de imagens
let list_imgs = ["https://i.pinimg.com/564x/19/fd/ed/19fdedacb63e7237204d14c4e15d44ef.jpg","https://i.pinimg.com/564x/4e/34/4e/4e344e06023ff89c54e5f28f014cd6dd.jpg","https://i.pinimg.com/564x/9d/53/34/9d53344bb01edf167bd74c1bdddd8e5a.jpg","https://i.pinimg.com/564x/1f/39/7b/1f397b03fec619b11badc5910af6eb57.jpg","https://i.pinimg.com/564x/d5/55/c6/d555c6ea317471ae298a8c33e18411c3.jpg","https://i.pinimg.com/564x/94/6d/cc/946dcc97515b3acc3800130f457bfb3b.jpg","https://i.pinimg.com/564x/8c/0c/e9/8c0ce9a2edc0eee3c50d86f47769a8c9.jpg","https://i.pinimg.com/564x/c3/ab/17/c3ab173167d0779fa0a1d031c2731e7a.jpg","https://i.pinimg.com/564x/41/ab/11/41ab11c9d6db14d9a7a10232e7e960cd.jpg","https://i.pinimg.com/564x/01/cb/93/01cb93670fc2a11d340925578111f507.jpg","https://64.media.tumblr.com/daa1c3179d2c9dafffb023ad2fe662b5/8c0d58e324b0188c-b2/s640x960/4caaee47da40526c6e2e77cb41f45f02366f7a57.jpg","https://i.pinimg.com/474x/b1/15/24/b11524f4561cbabc0a01011f2b83f041.jpg","https://i.pinimg.com/564x/8a/ab/f9/8aabf9f6548d42b70a8346070edd2316.jpg","https://i.pinimg.com/736x/2a/87/10/2a8710f00bbb47b9b4cf99c8e8d9a760.jpg","https://i.pinimg.com/originals/38/43/96/38439689e7402921e0cec423592e62e2.png","https://i.pinimg.com/736x/f1/c0/d6/f1c0d6eaecbb92fb9c092974fe0b06b3.jpg","https://i.pinimg.com/736x/1b/8d/d5/1b8dd5a525649c6a51481c7ed3bc9c42.jpg","https://i.pinimg.com/736x/cf/d4/72/cfd47254bba723e08d4f7edf94dbd05f.jpg","https://animemotivation.com/wp-content/uploads/2019/06/nami-one-piece-anime-girl.jpg","https://preview.redd.it/8l8a77ee88471.jpg?auto=webp&s=c637deb2e22ff6aeb2468d85d6577fd2b2907a2c","https://64.media.tumblr.com/d138d4b248068059bcc8c5a899b0fa51/7a788e0301676e9e-31/s1280x1920/a94deda6d55c268fb21cc0a76caf9ce039258955.jpg","https://i.pinimg.com/736x/e7/ee/13/e7ee132e160742d3fe6425102f32a68c.jpg","https://i.pinimg.com/474x/52/d3/d2/52d3d28eaa67d7d3b1c64f71651926f5.jpg","https://i.pinimg.com/736x/1d/55/55/1d555519903eee19a3c632b7f7ecad34.jpg","https://i.pinimg.com/originals/bb/77/f5/bb77f52a92c6e687263cf1b309e150e9.jpg","https://i.pinimg.com/originals/93/14/4a/93144a888da91ee1b14612647ca03ad9.jpg","https://pbs.twimg.com/media/EiXKRcYWoAcTOLI.jpg","https://i.pinimg.com/originals/a9/8b/51/a98b51edf9c3eda76a3457f42dd12003.jpg","https://i.pinimg.com/originals/57/b9/d1/57b9d12c647eb8116a079e81934519ac.jpg","https://i.pinimg.com/originals/f3/38/b9/f338b9cc9195094fccab9afa628a3706.jpg","https://i.pinimg.com/originals/84/d0/ea/84d0ead54f5c8f38ee0794f79b720c3a.jpg"]

// criando função pra gerar numero (pra criar a img no html)
function GN(){
	return Math.floor(Math.random() * list_imgs.length);
}

// adicionando funções aos cards
cards_list.forEach((card)=>{

	// Evento de click
	card.addEventListener("click",()=>{
		if(card.style.backgroundSize == "cover"){
			card.style.background = "black";
			while(card.firstChild){
			 card.removeChild(card.firstChild);
			}
			let img = document.createElement("img");
			img.setAttribute("src",`${list_imgs[GN()]}`);
			card.appendChild(img)
		}else{
			card.style.backgroundImage = "linear-gradient(to top,rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('https://i.pinimg.com/564x/56/9e/42/569e42fa47ab9593721011ecc39f2f94.jpg')";
			card.style.backgroundSize = "cover";
			while(card.firstChild){
			 card.removeChild(card.firstChild);
			}
			card.innerHTML = `<i class="icon fas fa-anchor"></i>`
		}
	})
	// Evento de mouse sobre o card
	card.addEventListener("mouseover",()=>{
		card.style.transform = "rotate(5deg)";
	})
	// Evento de mouse fora do card
	card.addEventListener("mouseout",()=>{
		card.style.transform = "rotate(0deg)";
	})
})