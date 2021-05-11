# [hashtag](https://netopa.github.io/hashtag)
<br>
<h2>size: 1/6<sup>th</sup> of jQuery !</h2>(when completed)
<br>
# how to use
<br>
# Just use it like jQuery :

``` javascript
#('#id').hide(animationName);
#('.class').show(animationName);
#('by tag').animate(animation name, duration, delay);
```
Note: you must first enable animation by
<br>

``` javascript
#().enableAnime();
```
Which enables it for all element on the page<br>
Then enable it for an element
``` javascript
#('.body').animate('jackInTheBox', "1s", "1s");//animation name, duration ,delay
```
<br>
<br>We use animate.css engine for animating elements so the list could be a whole lot familiar...
<br>
list of animation inclues : <br>

```
#Attention seekers:

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

#Back entrances:

backInDown
backInLeft
backInRight
backInUp
Back exits
backOutDown
backOutLeft
backOutRight
backOutUp

# Back exits:

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

# Bouncing exits:

bounceOut
bounceOutDown
bounceOutLeft
bounceOutRight
bounceOutUp

# Fading entrances:

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

#Fading exit:

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

# Flippers:

flip
flipInX
flipInY
flipOutX
flipOutY

# Lightspeed:

lightSpeedInRight
lightSpeedInLeft
lightSpeedOutRight
lightSpeedOutLeft

# Rotating entrances:

rotateIn
rotateInDownLeft
rotateInDownRight
rotateInUpLeft
rotateInUpRight

# Rotating exits:

rotateOut
rotateOutDownLeft
rotateOutDownRight
rotateOutUpLeft
rotateOutUpRight
# Specials:

hinge
jackInTheBox
rollIn
rollOut

# Zooming entrances:

zoomIn
zoomInDown
zoomInLeft
zoomInRight
zoomInUp

#Zooming exits:

zoomOut
zoomOutDown
zoomOutLeft
zoomOutRight
zoomOutUp

# Sliding entrances:

slideInDown
slideInLeft
slideInRight
slideInUp

# Sliding exits:

slideOutDown
slideOutLeft
slideOutRight
slideOutUp

```

Adding an event listener:<br>
``` javascript
#('.body').on('click', function(){
   alert('clicked');
})
```
Append text:<br>
``` javascript
#("body").append("someText")
```
Prepend text: <br>
``` javascript
#("body").prepend("someText")
```
Set or get attributes:<br>
``` javascript
#("body").attr("id") // returns body
#("body").attr("id", "body") // sets I'd to body
```
Change the style of an element:<br>
``` javascript
#("body").css(property, value)
Example:
#("body").css("background", "black") //changes the css to background: black;
```
Ajax: change the content of an element with remote file content:<br>
``` javascript
#("body").ajax("https://url-to-file.com/TXT.txt", "get") //the second one is the method
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
addElm("#('place to append')", "element name", "id of elm")
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
$(".element").toogle();
```
