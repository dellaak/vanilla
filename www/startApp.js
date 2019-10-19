new Index().createDom()





let win = window.location.href

window.onpopstate = function(event) {
    if(!win.includes('person')){
        location.reload(true);
    }
 
  };