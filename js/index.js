//alert("ok")
let video = document.querySelector('.video')
let couleur = document.querySelector('.couleur-juice')
let btn = document.getElementById('play-pause')
let mute = document.getElementById('mute')
let volumeS = document.getElementById('volume')
let cbar = document.querySelector('.couleur-bar')


    function TPlayPause() {

        if(video.paused){
            btn.className="pause";
            video.play();
        }
        else {
            btn.className = "play";
            video.pause();
        }


    }

    btn.onclick = function(){
        TPlayPause()
    }

    // barre kakhi
        // toutes les secondes a chaque fois la video va changer

    video.addEventListener('timeupdate', function(){

        let couleurPos = video.currentTime / video.duration;

        couleur.style.width = couleurPos * 100 + '%';

        if (video.ended) {
            btn.className = "play"
        }

    })

// mute de la video

    mute.addEventListener('click',function () {

        if (video.muted) {
            video.muted = false // on va mettre le son
            mute.innerHTML = "Mute"
        }else {
            video.muted = true
            mute.innerHTML = "Unmute"
        }
    })

// changer le volume

    volumeS.addEventListener('change',function () {
           video.volume = volumeS.value / 100
    })


// elle permet de cliquer et avancer la barre de la video
    let rect = cbar.getBoundingClientRect();
    console.log(rect);

    let largeur = rect.width;

    cbar.addEventListener('click', function(e){


        // la valeur de notre click sur x par rapport a notre element

        let x = e.clientX - rect.left;

        let PourcentageLargeur = ((x*100)/largeur);

        let currenTimeV = (PourcentageLargeur * 61 ) / 100;

        // position en secondes
        video.currentTime = currenTimeV;
        // barre orange qui va la ou on clique
        cbar.style.width = PourcentageLargeur + '%';

    })


