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
        self.element.style[prop] = val
    },
    enableAnime: () => {
         var head  = document.getElementsByTagName('head')[0];
         var link  = document.createElement('link');
         link.rel  = 'stylesheet';
         link.type = 'text/css';
         link.href = 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.1/animate.min.css';
         link.media = 'all';
         head.appendChild(link);
    }
    animate: (name, del, dur) => {
         self.element.setAttribute("class", `animate__animated animate__${name}`)
    },
    







  }
return self;
}
