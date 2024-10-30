// chapter 80: Browser control - controlling the window's size and location


//1 OPENING POPUP WITH A NAME 


// Without name 
// var monkeyWindow = window.open();

// fill url 
// var monkeyWindow = window.open("test.html");

// Provide url and name both 
// var monkeyWindow = window.open("test.html","Name from script");



// 2. CONTROLLING THE WINDOW SIZE   
// var monkeyWindow = window.open("test.html","win","height=100,width=100");


// 3. POSITONING THE WINDOW ON THE SCREEN 
// window.open("test.html","","width=200,height=200,left=300,top=400");


// 4. COMBINIG SIZE AND POSITION PARAMETER IN A VARIABLE 
// var windowSpece = "height=200,width=200,top=300,left=300";
// window.open("test.html","",windowSpece);


// 5. Setting Empty URL and Name Parameters 
// window.open("","","height=200,width=200,top=300,left=300");

