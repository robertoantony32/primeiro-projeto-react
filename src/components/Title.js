import React, { useEffect, useRef } from "react";

function splitTextIntoSpans(element) {

    if (!element) return;


    element.classList.add("split-text");
    let text = element.innerText;
    let splitText = text
      .split(" ")
      .map(function (word) {
        let char = word
          .split("")
          .map((char) => {
            return `<span class="split-char">${char}</span>`;
          })
          .join("");

        return `<div class="split-word">${char}&nbsp</div>`;
      })
      .join("");

    element.innerHTML = splitText;
}


const Title = () => {
    const titleRef = useRef(null);

    useEffect(() => {
        splitTextIntoSpans(titleRef.current);
    }, []);

    return  <div ref={titleRef} className="title">Localizar CEP</div>
};


export default Title;