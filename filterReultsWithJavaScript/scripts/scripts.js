// We comment out this line but we are saving the URL inside a variable to make it more readable
// const URL = "https://my-little-cors-proxy.herokuapp.com/https://anapioficeandfire.com/api/characters/?page=1&pageSize=50";

// Create an empty array

// Create function that accepts a default value set to 0

    // We return back the url with the interpolated page value. It also uses the coors proxy


// Keep in mind this function will only run if we don't have anything in local storage meaing we didnt call the fecth
// Whene we call the fetch this function will run 50 times as we determined when we wrote our for loop below
// Create a function that accepts json data from our promise chain

    // We can see the data and loop through but we can use the spread operater which actually may have a constant time complexity
    // rather than linear like a traditional for each loop
    // theActualData.forEach(function (oneCharacter) {
    //     allCharactersArray.push(oneCharacter);
    // });
    // Each time through the loop when we call our function we will take what is in the old array and add new values to the arry
    // and save them in a variable
    

    // We call storeCharacters function and pass it the the array of objects
    // This function converts our data into JSON so we can save it to localStorage
 

    // If the length of the data is 0 we run our main function we will run our main function again
    // We are going to check if a invalid page number got passed for our stop point and if it did we will run main again
    // This time only accumulating the oages that were valid inside of our allCharactersArray
    


// We take the stoarge key that we will use for local storage and save it in a variable


// Create a function that accepts an array of object

    // Convert the array to a JSON string
    

    // We log the length of the characters we loaded in
    // We set that string in localStorage using the storage key as our key and jsonCharacters as our value
    


    // If there is something to get from local storage we take the key and save it in a variable
    

    // We save the parsed array and convert into a valid javaScript object
    
    // If arrayOfCharacters doesn't return an empty object then it will be truthy
    
        // If its truthy we will console.log the length of how many characters we loaded into the array
        

        // Otherwise if it is empty we will say there is nothing in local storage
        


    // We will return a valid array from the function if everything went ok otherwise we will return an empty array
    

// Create a function that accepts a page number

    // Do a fetch request that calls the URL function and accepts the pageNumber as an arguemnt
    // Our URL for page function returns the url of the api we are going to fetch from
   
    // If everything was successful we will convert our data to json
      

    // Then we will call a function that 
      


// We create a function that accepts an object

    // We create a data attribute and save it to a variable
    
    // We set the text content to equal an empty string
    

    // We create three divs on the fly
    


    // We set the text content for that div to be their name, when they were born, and when they died when you click on their name
    


    // We append that info onto the screen inside the div

// We create a function that accepts the url

    // We return or find the character in the allCharactersArray
    
        // We return that value that equals the url value
        


// We create a function that accepts indiviual objects that were originally an array of objects

    // We save the name from the object to a variable
    
    // If the length of the name is empty quotes or 0 then we return out of the function. We don't want to do anything
    

    // We create a new a tag element and save it in avariable
   
    // We make the text content of that a tag the characters name
   

    // When you need to pass an argument to the event handler function you must wrap it in an anonymous function.
    // We add an event listenter for when someone clicks an achor element or a tag
   
        // When someone has clicked an anchor element we will run the characterObject function
       


    // We create a list item and save it to a variable
    
    // We append the list item to a tag element


    // We create a data attribute and save it to listArea
  
    // We append listItem to the listArea
   


// We create a function that accepts a paramter with a default value set to the value of allCharactersArray which is defined globally as 
// an empty array

    // We create a data attribute and call it data-listing and save it to a listArea variable
    
    // We set the text of list area to an empty string so we can add to the string

    // We use our default parameter to loop through all the charcters and we pass it a function to do work or alter each element in the array
    

// Create a function that accepts two objects. We will visit two things at a time inside of our custom sort function

    // We target each internal object inside our our array and extract the first letter of each name
    

    // We compare the first letter of both names we are currently looking at and if letter1 is less than letter2
   
        // We will return -1
       

        // Otherwise if letter two is less than letter1 than we return 1
       

    // If both letters of the each name are the same we return 0
   


// We create a function that accepts a literal letter


    // As long as the length of the letter is not greater than 1
    
        // We will filter through our array with all the accumulated values and filter values down to letters that starts with the character we are looking at
        
            // Return names that start with the letter we pass it and upperCase the letter
            

        // Log the letter we are pulling up
       
        // We pass our list of characters function our filtered results 
        

        // Otherwise if they click showAll then we show them all the resuls
       


// We create a function to add an event listener to each letter on the oage

    // We create a query selector wiuth a data attribute and save it to a variable
    
    // We loop through all the letters or a tags
    
        // We add an event listener to each letter
        
            // When the unser clicks on a letter we will call our filter function and pass it the letter's text content
            

            

function loadCharacters() {
   // We save the return value of calling our loadCharacters function and save it in a variable
    // We will either have an empty array or a parsed array with valid elements inside of it
    let charactersInLocalStorage = loadCharacters();
    // And again if the vaue is truthy meaning there are elements inside the array then we will...
    
        // Assign to a variable everything from the loadCharacters function (being elements in an array) and sort them manually
        // using a custom sort function to sort our array. 
        

        // We call our drawListOfCharacters function
      
        // We call our attachClickToLetters function
       

        // If this is the first time we have called this info then we will not have anything saved in local storage and we need to do a brand new fetch request
        

        // We run a loop that runs 50 times
   
            // We delay the length it takes for each oage to come through by an additional 500 milliseconds
           
            // We have to wrap retrievePageOfCharacters
            // in an anonymous function
            // so we can pass it an argument.
            // We use set timeout to delay the tasks we wish to run and pass it a function and the delay value
            
        
            // If it did not take any arguments
            // we would not need to wrap it.
}

function main() {
    let charactersInLocalStorage = loadCharacters();

}