function #(sel)
{
const self = {
    element: document.querySelector(selector),
    html: ()=> self.element,
    on: (event, callback) => {
      self.element.addEventListener(event, callback)
    },
    hide: (animeName)=> {
      self.element.style.display = 'none';
      if(animeName == null){}else{
      self.element.setAttribute("class", `animate__animated animate__${animeName}`)
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
    addScript: (url) => {
         var head  = document.getElementsByTagName('head')[0];
         var script  = document.createElement('script');
         script.type = "text/javascript";
         script.href = url;
         head.appendChild(script);
    },
    addStyle: (url) => {
         var head  = document.getElementsByTagName('head')[0];
         var style  = document.createElement('link');
         style.rel = "stylesheet";
         style.type = "text/css";
         style.href = url;
         head.appendChild(style);
    }







  }
return self;
}
