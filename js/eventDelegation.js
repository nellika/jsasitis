// equivalent js: $( window ).on( "load", function() { ... })
// window.load waits until every resource is loaded e.g. img src, document.load waits only until the DOM is loeded
$(function() {
    console.log(this); // = document
    console.log( "ready!" );

    const navJS = this.querySelector('nav');
    const navJQ = $('nav');

    function clickedOnit(event){
      console.log(this);// = nav, currentTarget
      event.preventDefault(); // prevents default behaviour :)
      console.log(event.target);
      console.log(event.currentTarget);

    }

    //Event delegation thanks to event propagation (aka bubbling)
    navJS.addEventListener('click', clickedOnit);  //target is a, currentTarget is nav
    //navJQ.on('click', clickedOnit); //target is a, currentTarget is nav
    //navJQ.on('click', 'a', clickedOnit); //target and currentTarget equals

    //stop event bubbling
    const divJs = document.querySelectorAll('div');
    function logClassName(event) {
      event.stopPropagation();
      console.log(this.classList.value);
    }
    divJs.forEach(div => div.addEventListener('click', logClassName));
});
