(async () => {

    let bodyLoop = document.querySelectorAll(".body-repeat");

    let frameSvg = await fetch("img/frame.svg") ;
    let frame = await frameSvg.text();

    let listJson = await fetch("js/framebox-list.json");
    let listbox = await listJson.json();

    let colorsBot = await fetch("http://api.noopschallenge.com/hexbot?count=" + listbox.length + "&seed=#FF0000,#FFFF00,#CCCC00");
    let colors = await colorsBot.json();

    console.log(listbox.length);

    listbox.forEach((item,i) =>{
        let fill = colors.colors[i].value;

        let outertop = bodyLoop[i].querySelector(".frame-box-infoTop");
        let img_container = outertop.querySelector(".frame-box-infoNarrow");
        let img = img_container.querySelector("img");
    

        img.src = "img/"+item.picture;
        img.alt = item.picture_alt;
    
        let frameDiv = document.querySelector("#frame" + i);
        let linkDiv = document.querySelector("#linkbox" + i);
        let mainText = document.querySelector("#text-Colour" + i);

        linkDiv.style.borderColor = fill;
        linkDiv.style.color = fill;
        mainText.style.color = fill;
    
        frameDiv.innerHTML = frame;
        let svg = frameDiv.querySelector("svg");

        svg.removeAttribute("width");
        svg.removeAttribute("height");
        svg.style.width = "100%";
        frameDiv.querySelector("g").style.fill = fill;


        let main_container = outertop.querySelector(".frame-box-infoWide");
        let detail_small = main_container.querySelector(".frame-box-smallDetail");
        let main_text = main_container.querySelector(".frame-box-textExplain");
    
        main_text.textContent = item.main;
        detail_small.textContent = item.smalldetail;
    
        let outerbottom = bodyLoop[i].querySelector(".frame-box-infoBottom");
        let Highlights = outerbottom.querySelector(".frame-box-smallDetail");
    
        Highlights.textContent = item.bottom_info;
    
        let lowerbox = outerbottom.querySelector(".frame-box-infoNarrow");
        let linktext = lowerbox.querySelector(".linkylink");
    
        linktext.textContent = item.link_text;
    
    })

    let fadeBox = document.querySelectorAll("div.frame-box-infoTop");
    //infoTop
    

    document.addEventListener("scroll",e =>{
        fadeBox.forEach(item =>{
            /*if (item.getBoundingClientRect().y <  window.screen.height/2)
            {
                item.classList.add("frame-box-frame-show")
            }
            else if(item.getBoundingClientRect().y >  window.screen.height/2)
            {
                item.classList.remove("frame-box-frame-show")
            }*/
            let change = ( ( window.screen.height-item.getBoundingClientRect().y ) / window.screen.height )*2;

            item.style.opacity = change;

            let frames = item.querySelector("div.frame-box-frame")
            
            let rotation = change*15;
            if (rotation > 15)
            {
                rotation = 15;
            }
            frames.style.transform = "rotate("+rotation+"deg)";

            
            //console.log(change);
        })
    })
})();

function toggle_visibility(openClose, firstHide) {
    let e = document.querySelector(openClose);
    let c = document.querySelector(firstHide);
    if(e.style.display == 'block')
       e.style.display = 'none';
    else
       e.style.display = 'block';


    if(c.style.display == 'inline-block' && e.style.display == 'block')
       c.textContent = 'Hide our 9-step Process';
    else
       c.textContent = 'Show our 9-step Process';
 };