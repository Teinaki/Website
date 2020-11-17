(async () => {



    const list = ["one", "two", "three", "four", "five"]

    const info = ["<div class=\"frame-box-infoTop\">",
     "<div class = \"frame-box-infoNarrow\"><img src=\"assets/img/exmilitary.jpg\" alt=\"Death grips album art exmilitary\"></div>", 
        ]


    let bodyLoop = document.querySelectorAll(".body-repeat");

    let frameSvg = await fetch("img/frame.svg") ;
    let frame = await frameSvg.text();

    let listJson = await fetch("js/framebox-list.json");
    let listbox = await listJson.json();

    let colorsBot = await fetch("http://api.noopschallenge.com/hexbot?count=" + listbox.length);
    let colors = await colorsBot.json();

    //style.fill = colors.colors[i].value make this a function or something

    listbox.forEach((item,i) =>{
        let outertop = bodyLoop[i].querySelector(".frame-box-infoTop");
        let img_container = outertop.querySelector(".frame-box-infoNarrow");
        let img = img_container.querySelector("img");
    

        img.src = "img/"+item.picture;
        img.alt = item.picture_alt;
    
        let frameDiv = document.querySelector("#frame" + i);
        let linkDiv = document.querySelector("#linkbox" + i);
        let mainText = document.querySelector("#text-Colour" + i);

        linkDiv.style.borderColor = colors.colors[i].value;
        linkDiv.style.color = colors.colors[i].value;
        mainText.style.color = colors.colors[i].value;
    
        frameDiv.innerHTML = frame;
        let svg = frameDiv.querySelector("svg");

        svg.removeAttribute("width");
        svg.removeAttribute("height");
        svg.style.width = "100%";
        frameDiv.querySelector("g").style.fill = colors.colors[i].value;
        console.log(frame);


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
    
        console.log(img);
        console.log(item.picture);
        console.log(item.main);
        console.log(item.smalldetail);
        console.log(item.bottom_info);
        console.log(item.link_url);
        console.log(item.link_text);
    })
})();
