/*
 * TP 1 Section Exercise - hit a Bug
 * Handles hitting bugs.
 */

let count=[];

"use strict";
function qq() {

  window.addEventListener("load", init);}
  let j=1;
  qq();

  /**
   * Sets up event listeners for the start button and the bugs.
   */
  function init() {
    let bugs = qsa("#bug-container img");
    for(let i = 0; i < bugs.length; i++) {
      bugs[i].addEventListener("click", hitBug);
    
  

  /**
   * TODO
   * whacks the clicked bug and increments the score. The bug cannot be whacked again afterwards.
   */

   
   
   
  

 
  


  function hitBug() {
    // your code goes here
    let c=false;
   
    for(let x=0 ; x < count.length ; x++){
      if(count[x]===i){
        c=true;
      }
    }
   
    if(c){
      document.getElementById("test").innerHTML=`Dublicate on ,${i}`;
    }
    else{
      count.push(i);
      bugs[i].src="bug-dead.png";
      document.getElementById("score").innerHTML=j;
      j+=1;
      if(j==25){
        document.getElementById("game").innerHTML= "you are hit all bugs" ;
      }
    }
    console.log(count)

    
    
    
      
    }  
  }
      
    
    

    
  

  

/* --- TP1 HELPER FUNCTIONS --- */

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} name - element ID.
   * @returns {object} - DOM object associated with id.
   */
  function id(name) {
    return document.getElementById(name);
  }

  /**
   * Returns first element matching selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} - DOM object associated selector.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
   * Returns an array of elements matching the given query.
   * @param {string} query - CSS query selector.
   * @returns {array} - Array of DOM objects matching the given query.
   */
  function qsa(query) {
    return document.querySelectorAll(query);
  }

  }
