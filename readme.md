# Test Fotonower

This project is a tool to use the webcam of the user and to take several pictures with it.
To use this tool, execute the file server.py to run the server and visit the url localhost:8080.

## Features

With this simple html page we can :
- See the content of the webcam
- Take a picture and display it below
- Rotate the camera to use environment and user mode
- Delete a picture from the list
- Display a picture in real size

## How does it work ?

When the html page is loaded, the startWebcam function is called and display the webcam content.
When we click on the camera button, it takes a picture and add it to a the div "pictures" with all the pictures.
Each element is a div with the canvas which contains the picture and 2 buttons to delete and display in real size.
When we rotate the camera, it restart the webcam with different parameters.
When we delete a picture, it just removes it from the list.
And when we display a picture in real size, it changes the class of the canvas.
It also changes the picture and the onclick argument of the button, so when we click again, it returns to it normal size.
