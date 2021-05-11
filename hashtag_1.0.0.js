function #(sel)
{
const self = {
    element: document.querySelector(selector),
    html: ()=> {
      self.element
    },
    on: (event, callback) => {
      self.element.addEventListener(event, callback)
    },
    hide: (animeName)=> {
      if(animeName == null){}else{
      self.element.setAttribute("class", `animate__animated animate__${animeName} animate__duration-1s`);
      self.element.style.display = 'none';
      }
    },
    attr: (name, value) => {
      if(value == null)
        return self.element.getAttribute(name)
      else
        self.element.setAttribute(name, value)
    },
    show: (animeName) => {
        self.element.style.display = "";
        if(animeName == null){}else{
        self.element.setAttribute("class", `animate__animated animate__${animeName}`)
       }
    },
    append: (text) => {
        self.element.innerHTML = self.element.innerHTML + text
    },
    prepend: (text) => {
        self.element.innerHTML = text + self.element.innerHTML
    },
    css: (prop, val) => {
        self.elemenr.style.setProperty(prop, val);
    },
    enableAnime: () => {
         var head  = document.getElementsByTagName('head')[0];
         var link  = document.createElement('link');
         link.rel  = 'stylesheet';
         link.type = 'text/css';
         link.href = 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.1/animate.min.css';
         link.media = 'all';
         head.appendChild(link);
    },
    animate: (name, del, dur) => {
         self.element.setAttribute("class", `animate__animated animate__${name}`);
         self.element.style.setProperty("--animate-duration", dur);
         self.element.style.setProperty("--animate-delay", del);

    },
    ajax: (url, method) => {
           if(method == null){console.log("Ajax request cannot be performed while method is null.")}else{
           var xhttp = new XMLHttpRequest();
           xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                self.element.innerHTML =
                this.responseText;
            }
           };
           xhttp.open(method, url, true);
           xhttp.send();
         }
    }






  }
return self;
}

//Other usefull functions

function addScript(url){
         var head  = document.getElementsByTagName('head')[0];
         var script  = document.createElement('script');
         script.type = "text/javascript";
         script.href = url;
         head.appendChild(script);
}
function addStyle(url){
         var head  = document.getElementsByTagName('head')[0];
         var style  = document.createElement('link');
         style.rel = "stylesheet";
         style.type = "text/css";
         style.href = url;
         head.appendChild(style);
}
function cookie(key, val, expires, path){
     if(expires == null){
           var expires = "session";
          }
          document.cookie = `${key}=${val}; expires=${expires}; path=${path}`;
}
function getCookie(cname){
           var name = cname + "=";
           var decodedCookie = decodeURIComponent(document.cookie);
           var ca = decodedCookie.split(';');
           for(var i = 0; i <ca.length; i++) {
              var c = ca[i];
              while (c.charAt(0) == ' ') {
              c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
             return c.substring(name.length, c.length);
          }
        }
          return "";
}
function addElm(element ,elm, id,) {
   var element = document.createElement(elm);
   element.id = id;
   document.body.appendChild(element);
}
function storage(action, key, value){
   if(action == "clear"){
    localStorage.clear();
 }else if(action == "set"){
    localStorage.setItem(key, value)
 }else if(action == "get"){
   var value = localStorage.getItem(key);
   return value;
 }else if(action == "remove"){
    localStorage.remove(key)
 }else{}
}
