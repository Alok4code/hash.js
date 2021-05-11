// (C) NETOPA 2021
// APACHE LICENCE 2.0

// HASHTAG_1.0.1.JS (UNCOMPRESSED VERSION)
// SIZE : 5KB APROX
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
        console.log('no animation specified');
      } else {
        self.element.setAttribute('class', `animate__animated animate__${animeName} animate__duration-1s`);
        self.element.style.display = 'none';
      }
    },
    attr: function(name, value) {
      if (value == null) {
        return self.element.getAttribute(name);
      } else {
        self.element.setAttribute(name, value);
      }
    },
    show: function(animeName) {
      self.element.style.display = 'block';
      if (animeName == null) {
        console.log('none specified');
      } else {
        self.element.setAttribute('class', `animate__animated animate__${animeName}`);
      }
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
            self.element.innerHTML =
                this.responseText;
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
           const head = document.getElementsByTagName('head')[0];
           const script = document.createElement('script');
           script.type = 'text/javascript';
           script.href = url;
           head.appendChild(script);
     },
     addStyle: function(url){
           const head = document.getElementsByTagName('head')[0];
           const style = document.createElement('link');
           style.rel = 'stylesheet';
           style.type = 'text/css';
           style.href = url;
           head.appendChild(style);
     },
     setCookie: function(key, value, expires, path){
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
     addElm: function(elm, id){
             element1 = document.createElement(elm);
             element.id = id;
             self.element.appendChild(element1);
     },
     






  };
  return self;
}
