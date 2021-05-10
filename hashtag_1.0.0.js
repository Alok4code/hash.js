function #(sel)
{
const self=
     {
       elm: document.querySelector(sel),
       html: self.elm,
       on(event, callback) = {
                 self.elm.addEventListener(event, callback)
               }
     }
return self;
}
