const list = ["one", "two", "three", "four", "five"]

const info = ["<div class=\"flexbox-infoTop\">",
     "<div class = \"flexbox-infoNarrow\"><img src=\"assets/img/exmilitary.jpg\" alt=\"Death grips album art exmilitary\"></div>", 
        ]


let listbox = [ 
    {"name"  : "box1",
    "picture" : "exmilitary.jpg",
    "picture_alt" : "Death grips album art exmilitary",
    "main" : "Landing Pages designed with your conversion goals in mind",
    "smalldetail" : "560,000 Sales , reviews",
    "second-detail" : "something else",
    "bottom_info" : "Highlights:",
    "link_url" : "info.html",
    "link_text" : "More Information"
    },
    {"name"  : "box2",
    "picture" : "Post_Bjork.jpg",
    "picture_alt" : "Bjork 1995 experimental album Post cover",
    "main" : "Experimental music is a general label for any music that pushes existing boundaries and genre definitions. Experimental compositional practice is defined broadly by exploratory sensibilities radically opposed to, and questioning of, institutionalized compositional, performing, and aesthetic conventions in music. Elements of experimental music include indeterminate music, in which the composer introduces the elements of chance or unpredictability with regard to either the composition or its \performance. Artists may also approach a hybrid of disparate styles or incorporate unorthodox and unique elements.",
    "smalldetail" : "Sales figures , reviews",
    "bottom_info" : "Highlights:",
    "link_url" : "info.html",
    "link_text" : "More Information"
    }
    ,
    {"name"  : "box3",
    "picture" : "QuelleChris_Guns.jpg",
    "picture_alt" : "Quelle Chris's album cover of Guns",
    "main" : "Underground hip hop is an umbrella term for hip hop music outside the general commercial canon. It is typically associated with independent artists, signed to independent labels or no label at all. Underground hip hop is often characterized by socially conscious, positive, or anti-commercial lyrics. However, there is no unifying or universal theme – AllMusic suggests that it \"has no sonic signifiers\". \"The Underground\" also refers to the community of musicians, fans and others that support non-commercial, or independent music. Music scenes with strong ties to underground hip hop include alternative hip hop and conscious hip hop. Many artists who are considered \"underground\" today were not always so, and may have previously broken the Billboard charts.",
    "smalldetail" : "Sales figures , reviews",
    "bottom_info" : "Highlights:",
    "link_url" : "info.html",
    "link_text" : "More Information"
    },
    {"name"  : "box4",
    "picture" : "slowthai_NothingGreatAboutBritain.jpg",
    "picture_alt" : "Slowthai's album cover for Nothing Great about Britain",
    "main" : "British hip hop, also known as UK rap, is a genre of music, and a culture that covers a variety of styles of hip hop music made in the United Kingdom. It is generally classified as one of a number of styles of urban music. British hip hop can also be referred to as Brit-hop, a term coined and popularised mainly by British Vogue magazine and the BBC. British hip hop was originally influenced by the dub/toasting introduced to the United Kingdom by Jamaican migrants in the 1950s–70s, who eventually developed uniquely influenced rapping (or speed-toasting) in order to match the rhythm of the ever-increasing pace and aggression of Jamaican-influenced dub in the UK. Toasting and soundsystem culture was also influential in genres outside of hip hop that still included rapping – such as grime, jungle, and UK garage.",
    "smalldetail" : "Sales figures , reviews",
    "bottom_info" : "Highlights:",
    "link_url" : "info.html",
    "link_text" : "More Information"
    }
]

let bodyLoop = document.querySelectorAll(".body-repeat");
console.log(bodyLoop[0])

listbox.forEach((item,i) =>{
    let outertop = bodyLoop[i].querySelector(".flexbox-infoTop");
    let img_container = outertop.querySelector(".flexbox-infoNarrow");
    let img = img_container.querySelector("img");

    img.src = "img/"+item.picture;
    img.alt = item.picture_alt;

    let main_container = outertop.querySelector(".flexbox-infoWide");
    let detail_small = main_container.querySelector(".flexbox-smallDetail")
    let main_text = main_container.querySelector(".flexbox-textExplain");

    main_text.textContent = item.main;
    detail_small.textContent = item.smalldetail;

    let outerbottom = bodyLoop[i].querySelector(".flexbox-infoBottom");
    let Highlights = outerbottom.querySelector(".flexbox-smallDetail");

    Highlights.textContent = item.bottom_info;

    let lowerbox = outerbottom.querySelector(".flexbox-infoNarrow");
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