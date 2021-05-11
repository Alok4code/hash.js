hash [hashtag](https://netopa.github.io/hashtag)
<br>
<h2>size: 1/6<sup>th</sup> of jQuery !</h2>(when completed)
<br>
hash how to use
<br>
hash Just use it like jQuery :

``` javascript
hash('hashid').hide(animationName);
hash('.class').show(animationName);
hash('by tag').animate(animation name, duration, delay);
```
Note: you must first enable animation by
<br>

``` javascript
hash().enableAnime();
```
Which enables it for all element on the page<br>
Then enable it for an element
``` javascript
hash('.body').animate('jackInTheBox', "1s", "1s");//animation name, duration ,delay
```
<br>
<br>We use animate.css engine for animating elements so the list could be a whole lot familiar...
<br>
list of animation inclues : <br>

```
hashAttention seekers:

bounce
flash
pulse
rubberBand
shakeX
shakeY
headShake
swing
tada
wobble
jello
heartBeat

hashBack entrances:

backInDown
backInLeft
backInRight
backInUp
Back exits
backOutDown
backOutLeft
backOutRight
backOutUp

hash Back exits:

backOutDown
backOutLeft
backOutRight
backOutUp
Bouncing entrances
bounceIn
bounceInDown
bounceInLeft
bounceInRight
bounceInUp

hash Bouncing exits:

bounceOut
bounceOutDown
bounceOutLeft
bounceOutRight
bounceOutUp

hash Fading entrances:

fadeIn
fadeInDown
fadeInDownBig
fadeInLeft
fadeInLeftBig
fadeInRight
fadeInRightBig
fadeInUp
fadeInUpBig
fadeInTopLeft
fadeInTopRight
fadeInBottomLeft
fadeInBottomRight

hashFading exit:

fadeOut
fadeOutDown
fadeOutDownBig
fadeOutLeft
fadeOutLeftBig
fadeOutRight
fadeOutRightBig
fadeOutUp
fadeOutUpBig
fadeOutTopLeft
fadeOutTopRight
fadeOutBottomRight
fadeOutBottomLeft

hash Flippers:

flip
flipInX
flipInY
flipOutX
flipOutY

hash Lightspeed:

lightSpeedInRight
lightSpeedInLeft
lightSpeedOutRight
lightSpeedOutLeft

hash Rotating entrances:

rotateIn
rotateInDownLeft
rotateInDownRight
rotateInUpLeft
rotateInUpRight

hash Rotating exits:

rotateOut
rotateOutDownLeft
rotateOutDownRight
rotateOutUpLeft
rotateOutUpRight
hash Specials:

hinge
jackInTheBox
rollIn
rollOut

hash Zooming entrances:

zoomIn
zoomInDown
zoomInLeft
zoomInRight
zoomInUp

hashZooming exits:

zoomOut
zoomOutDown
zoomOutLeft
zoomOutRight
zoomOutUp

hash Sliding entrances:

slideInDown
slideInLeft
slideInRight
slideInUp

hash Sliding exits:

slideOutDown
slideOutLeft
slideOutRight
slideOutUp

```

Adding an event listener:<br>
``` javascript
hash('.body').on('click', function(){
   alert('clicked');
})
```
Append text:<br>
``` javascript
hash("body").append("someText")
```
Prepend text: <br>
``` javascript
hash("body").prepend("someText")
```
Set or get attributes:<br>
``` javascript
hash("body").attr("id") // returns body
hash("body").attr("id", "body") // sets I'd to body
```
Change the style of an element:<br>
``` javascript
hash("body").css(property, value)
Example:
hash("body").css("background", "black") //changes the css to background: black;
```
Ajax: change the content of an element with remote file content:<br>
``` javascript
hash("body").ajax("https://url-to-file.com/TXT.txt", "get") //the second one is the method
```

Set a cookie 🍪:<br>
``` javascript
setCookie("username", "hashtag", "session", "/"); //key, value, expires, path
```
Get a cookie by name:<br>
``` javascript
getCookie("username"); //returns "hashtag"
```
Add an element:<br>
``` javascript
addElm("hash('place to append')", "element name", "id of elm")
// You can use the set attribute function to add attributes or to change text into the element
```
Configure local storage:<br>
``` javascript
storage(action, key, value)

// action list:
//     "clear" clears the local storage
//     "get".  Gets the iten with specified key
//     "set"   set the key with the respective value
//     "remove" remove the item with the specified key
```
Toogle hide and show:<br>
``` javascript
hash(".element").toogle();
```
