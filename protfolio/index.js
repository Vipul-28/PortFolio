
    const text = document.getElementById("dynamictext");
    console.log(text);
    const phrases = ["Vipul", "Dongre", "Vipul Dongre"];
    let arrayindex = 0;
    let letter = 0;
    function prints(phrase) {
        if (letter == phrase.length) {
            clear();
        }
        else if (letter < phrase.length) {
            text.textContent += phrase.charAt(letter);
            letter += 1;
            setTimeout(function () {
                prints(phrase);
            }, 300)

        }

    }
    function clear() {
        if (letter == -1) {
            arrayindex = (arrayindex + 1) % phrases.length;
            letter = 0;
            prints(phrases[arrayindex]);
        }
        else if (letter > -1) {
            let update = "";
            for (let i = 0; i < letter; i++) {
                update += phrases[arrayindex].charAt(i);
            }
            console.log(update);
            text.textContent = update;
            letter -= 1;
            setTimeout(clear, 200);
        }
        //     else if(letter==0)
        //     {
        //          arrayindex+=1;
        //     }
    }

    prints(phrases[arrayindex]);

    // document.getElementById("firstname").addEventListener("input", function (event) {
    //     const valid = event.target;
    //     valid.setCustomValidity("ENTER CORRECT GMAIL ADDRESS");
    //     valid.reportValidity();

    // });
   window.addEventListener("scroll",function()
   {
    // console.log(this.window.scrollY);
     let intros=this.document.querySelector(".intro");
    //  console.log(intros.offsetTop);

     if (this.window.scrollY >= (intros.offsetHeight + intros.offsetTop))
     {
        this.document.querySelector(".oldmenu").style.position="sticky";
     }
     else
     {
        this.document.querySelector(".oldmenu").style.position="revert";

     }
        
     }
   )