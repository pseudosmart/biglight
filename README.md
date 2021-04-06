# Biglight technical task

### Running locally
`npm i`
`npm start`

This will start a node server on localhost:7000 serving up the src directory statically and then this will work with the instructions with the task.

I've broken this down into challenge directories and with anymore complexity I would break this down with a component directory to allow for more easy reusing/testing.

### Challenge 1
I've opted to clone the quantity selector and basket button, passing on the click from the new button back to the original. The quantity selector was trickier and I was sure if I was meant to just implement a simpler button from your video example, but I went with the full quantity selector and listened for changes to update the original on the page, I liked that approach as it handled the adding of the right quantity for me.

I borrow the code for the element in viewport detection but it seemed to work well for what I needed, with more time I'd like to add some animation for the banner showing/hiding rather than just toggling the visibility.

### Challenge 2
I actually started with this one as I thought the advert banner would have been less complex than the banner at the bottom from challenge 1. I quickly ran into the complexity with the caveat that the filters had to work and still display the advert. I did a lot of reading but couldn't come up with anything better than listening to url changes, I'd love to know if there is a better approach! So I've opted to listen to history and append  the advert again once the products have loaded, hence also the wait for element.


### Working with SASS
If the styling needs changing then the sass will need recompiling with 
`npm run build:sass`

alternatively, I have been using 
`npm run watch:sass`
to watch and compile the sass as I worked

---
This is my first time attempting anything quite like this technical challenge so I'm really looking forward to the feedback, and am very open to the fact that my approach has potentially not been the best! But I have throughly enjoyed having a play with this either way, it's definitely one of the best technical challenges I've attempted.

Thanks,
Sam