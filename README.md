

 you need to install the dependencies for the server code.

 Set up the Express server:
npm install

 Lint the code using Eslint:
npm run lint


 Format the code using Prettier:
npm run format


 Build and Test the app using Jasmine:
npm run test


 Now that everything is set up, you can test the app by starting the server using nodemon:
npm run start

##### Usage:
To use the Image Processor API, send a request to the endpoint with the following query parameters:

**f** : The filename of the image file to process as stored under assets

**x** : The file extension of the image file to process (JPG, PNG, etc.) as stored under assets

**w** : The intended width of the image file to be returned

**h** : The intended height of the image file to be returned

 Example  
http://localhost:3000/image?f=encenadaport&x=jpeg&w=100&h=100



 front-end page can be viewed - http://localhost:3000/ - it display image thumbnails with varyidiffrent ng sizes.

