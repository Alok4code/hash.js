# [hashtag](https://netopa.github.io/hashtag)
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

