# Christmas Themed ADT and jQuery

>This will be a pair programming activity.  On a scale of 1 to 5, how confident do you feel about jQuery and ADTs?
Find a partner within one number of you, and pick who will drive first.

You have been tasked with writing the first parts of the highly anticipated "Green Balls, Red Background 2" browser game.

The game is not coming out until Christmas, so we just need to get the basic game dynamics down for now.

Get as far as you can through the steps below, but make sure you test thoroughly before moving on to the next step.

## The Steps

1. Put a `div` with a red background on your page.

>**Hint:** You may want to use `position: absolute` to get the div to look the way you want it to.

2. Give that `div` an ID of `playingField`.

3. Add jQuery to your project.

4. Once your `document` is `ready`, `append` two green balls to the `playingField`.

>**Hint:** Again, you probably want to use `position: absolute` to get these balls to look the way you want them to.

5. Every second, these balls should move.  To start, just move ball number one `10 px` to the right and ball number two `10 px` down.

>**Hint:** You will probably want to use the `setInterval()` method.

6. Now, we need to clean up the code.  If you haven't already, move some of the code from #5 into two functions called
`moveDown()` and `moveRight()`.

7. Create an ADT for `Ball`.  Put all of the properties (`left` and `top` position and id/number, for instance) into a `Ball` constructor function.

8. Two balls is not enough!  Let's make 10 of them by calling the constructor function with `new` 10 times, and then appending them to the page.

9. Move the methods `moveDown()` and `moveRight()` into the prototype of Ball.  Make sure these methods can move any ball, by using the specific id/number of the ball.

10. Create a new method called `moveBall()` inside the `Ball` prototype that randomly moves down 50% of the time and moves
right 50% of the time.  Move your `setInterval` into this method, so you don't need it inside `moveDown()` or `moveRight()`.

>**Hint:** Be careful with your use of `this` in this `setInterval`.  An easy way to make sure you're using `this` to mean "the current ball" is to set `this` to a variable called `self`.

11. Don your favorite holiday cap and sing Alvin and the Chipmunks carols!
