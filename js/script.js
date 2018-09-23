/*
    Random Quote Generator:
    Created by Tanner Townsend
    Date: 09/23/2019
    
    Objective: The random quote generator will generate a random quote from an array of quotes and display the information to the page.
*/

//The quotes contain (if applicable): Quote, Source, Citation, Year
//Quotes comes from: https://www.brainyquote.com/
var quotes = [
    {
        quote: 'Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.',
        source: 'Patrick McKenzie',
        citation: 'Twitter',
        year: '2016',
        tags: 'Technology'
    },
    {
        quote: "Technology is nothing. What's important is that you have a faith in people, that they're basically good and smart, and if you give them tools, they'll do wonderful things with them.",
        source: 'Steve Jobs',
        citation: '',
        year: '',
        tags: 'Technology'
    },
    {
        quote: 'I can\'t change the direction of the wind, but I can adjust my sails to always reach my destination.',
        source: 'Jimmy Dean',
        citation: '',
        year: '',
        tags: 'Inspirational'
    },
    {
        quote: 'No act of kindness, no matter how small, is ever wasted.',
        source: 'Aesop',
        citation: '',
        year: '',
        tags: 'Inspirational'
    },
    {
        quote: 'Perfection is not attainable, but if we chase perfection we can catch excellence.',
        source: 'Vince Lombardi',
        ciation: '',
        year: '',
        tags: 'Inspirational'
    },
    {
        quote: 'No matter what people tell you, words and ideas can change the world.',
        source: 'Robin Williams',
        citation: '',
        year: '',
        tags: 'Inspirational'
    }
];

/**
 The getRandomQuote method will take the quotes array as a paramters to use it towrards getting a random number. It will get a random number depending on the amount of quotes (objects) in the array. 
*/
function getRandomQuote(array) {
    var num = Math.floor(Math.random() * array.length);
    return num;
}

/**
    The printQuoteo method will call the getRandomQuote() method with the quotes array as the paramter. Then, it will check to see if each item in the selected quote (object) has a value and concatenate them together to print the quote to the page.
*/
function printQuote() {
    var num = getRandomQuote(quotes);
    var theQuote = '';
    
    //Check if a value in the object  is blank. If not, concat to the quote string
    if (quotes[num].quote === '')
        console.log('The quote is blank');
    else
        theQuote += '<p class="quote">' + quotes[num].quote + "</p>";

    if (quotes[num].source === '') 
        console.log('The source is blank');
    else
        theQuote += '<p class="source">' + quotes[num].source + "</p>";
    
    if (quotes[num].citation === '')
        console.log('The citation is blank');
    else 
        theQuote += '<p class="citation">' + quotes[num].citation + "</p>";
    
    if (quotes[num].year === '')
        console.log('The year is blank');
    else
        theQuote += '<p class="year">' + quotes[num].year + "</p>";
    
    if (quotes[num].tags === '')
        console.log('The tag is blank');
    else
        theQuote += '<p class="tags">' + quotes[num].tags + '</p>';

    
    document.getElementById('quote-box').innerHTML = theQuote;
}


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);