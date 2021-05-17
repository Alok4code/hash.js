// (C) NETOPA 2021
// APACHE LICENCE 2.0

// HASHTAG_1.0.1.JS (UNCOMPRESSED VERSION)
// SIZE : 6KB APROX
// CONTRIBUTORS:
//       RAGHAV9OFFICIAL


// -------------------------------------------
// -------------------------------------------

function hash(sel) {
  const self = {
    element: document.querySelector(sel),
    html: function() {
      self.element;
    },
    on: function(event, callback) {
      self.element.addEventListener(event, callback);
    },
    hide: function(animeName) {
      if (animeName == null) {
        animeName = "bounceOut";
      }
        self.element.setAttribute('class', `animate__animated animate__${animeName} animate__duration-2s`);
        self.element.style.display = 'none';
    },
    attr: function(name, value) {
      if (value == null) {
        return self.element.getAttribute(name);
      } else {
        self.element.setAttribute(name, value);
      }
    },
    show: function(animeName) {
      if (animeName == null) {
        animeName = "bounceIn";
      }
        self.element.setAttribute('class', `animate__animated animate__${animeName}`);
        self.element.style.display = 'block';
    },
    append: function(text) {
      self.element.innerHTML = self.element.innerHTML + text;
    },
    prepend: function(text) {
      self.element.innerHTML = text + self.element.innerHTML;
    },
    css: function(prop, val) {
      self.element.style[prop] = val;
    },
    enableAnime: function() {
      const head = document.getElementsByTagName('head')[0];
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.1/animate.min.css';
      link.media = 'all';
      head.appendChild(link);
    },
    animate: function(name, del, dur) {
      self.element.classList.add('animate__animated', 'animate__'+name);
      self.element.style.setProperty('--animate-duration', dur);
      self.element.style.setProperty('--animate-delay', del);
    },
    ajax: function(url, method) {
      if (method == null) {
        console.log('Ajax request cannot be performed while method is null.');
      } else {
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            return this.responseText;
          }
        };
        xhttp.open(method, url, true);
        xhttp.send();
      }
    },
    remove: function() {
      self.element.remove();
    },
    toogle: function() {
          self.element.style.display == 'block' ? self.element.style.display = 'none' : self.element.style.display = 'block';
    },
    storage: function(action, key, value){
            if (action == 'clear') {
                    localStorage.clear();
            } else if (action == 'set') {
                    localStorage.setItem(key, value);
            } else if (action == 'get') {
                    value = localStorage.getItem(key);
                    return value;
            } else if (action == 'remove') {
                    localStorage.remove(key);
            } else {
                    console.log('no action defined');
            }
     },
     addScript: function(url){
            const script = document.createElement('script');
            script.src = url;
            document.head.append(script);
     },
     addStyle: function(url){
           const style = document.createElement('link');
           style.rel = 'stylesheet';
           style.src = url;
           document.head.append(style);
     },
     setCookie: function(key, val, expires, path){
           if (expires == null) {
                expires = 'session';
           }
           document.cookie = `${key}=${val}; expires=${expires}; path=${path}`;
     },
     getCookie: function(cname){
       const name = cname + '=';
       const decodedCookie = decodeURIComponent(document.cookie);
       const ca = decodedCookie.split(';');
       for (let i = 0; i <ca.length; i++) {
         let c = ca[i];
         while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return '';
     },
     addElm: function(id){
             element1 = document.createElement(elm);
             element1.id = id;
             self.element.appendChild(element1);
     },
     text: function(text){
             if(text == null){return self.element.innerHTML;}else{
             self.element.innerHTML = text;
         }
     },
     isOnline: function(){
         if(navigator.online){
             return true;
         }else{
             return false;
         }
     },
     fadeIn: function(time){
            var opacity = 0;
            var intervalID = setInterval(function() {
  
                if (opacity > 1) {
                    opacity = opacity + 0.01
                    self.element.style.opacity = opacity;
                } else {
                    clearInterval(intervalID);
                }
            }, time);
        
     },
     fadeOut: function(time){
         var fadeTarget = self.element;
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, time);
     },
     textToImg: function(text){
        var canvas = self.element;
        var ctx = canvas.getContext("2d");
        ctx.font = "30px Arial";
        ctx.fillText(text, 10, 50);

     },
     vibrate: function(val){
         navigator.vibrate(val);
     },
     read: function(message) {
         var speech = new SpeechSynthesisUtterance();
         speech.text = message;
         speech.volume = 1;
         speech.rate = 1;
         speech.pitch = 1;
         window.speechSynthesis.speak(speech);
    }





  };
  return self;
}
