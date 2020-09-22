const list = ["one", "two", "three", "four", "five"]

const info = ["<div class=\"flexbox-infoTop\">",
     "<div class = \"flexbox-infoNarrow\"><img src=\"assets/img/exmilitary.jpg\" alt=\"Death grips album art exmilitary\"></div>", 
        ]


let listbox = [ 
    {"name"  : "box1",
    "picture" : "exmilitary.jpg",
    "picture_alt" : "Death grips album art exmilitary",
    "main" : "Experimental music is a general label for any music that pushes existing boundaries and genre definitions. Experimental compositional practice is defined broadly by exploratory sensibilities radically opposed to, and questioning of, institutionalized compositional, performing, and aesthetic conventions in music. Elements of experimental music include indeterminate music, in which the composer introduces the elements of chance or unpredictability with regard to either the composition or its \performance. Artists may also approach a hybrid of disparate styles or incorporate unorthodox and unique elements."
    }
]




// create class builder.
class Builder {
    //    create constructor, accept an element selector, i.e #container.
    constructor(targetContainerSelector) {
      //  search element by given selector and store it as a property.
      this.targetContainer = document.querySelector(targetContainerSelector);
    }
  
      //  method to append to innerHtml of target container.
    appendUsingInnerHtml(divAsHtml) {
      this.targetContainer.innerHTML += divAsHtml;
    }
  
    //    method to append to target container using DOM elements.
    appendUsingDom(divAsDom) {
      this.targetContainer.appendChild(divAsDom);
    }
  }
  
  //  constant to hold element selector.
  const myTargetContainer = '#container';
  //  constant to set the class if required.
  const myDivClass = 'my-class';
  
  //  constant to hold the instantiated Builder object.
  const builder = new Builder(myTargetContainer);
  
  //  loop 3 times.
  for (let i=0; i<3; i++) {
    // call method to append to target container using innerHtml.
      builder.appendUsingInnerHtml(`<div class="${myDivClass}}">innerhtml div text</div>`);
  
  
    // OR.. build using DOM objects.
  
    //    create the div element.
    const div = document.createElement('div');
  
    //    create text element, add some text to it and append it to created div.
    div.appendChild(document.createTextNode('dom div text'));
  
    //    call method to append div DOM object to target container.
    builder.appendUsingDom(div);
  }