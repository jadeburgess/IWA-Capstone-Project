import { authors, books, genres, BOOKS_PER_PAGE } from "./data.js";

const matches = books 
const page = 1;

const bookImage = books.image //creates const var and assigns it the value of image key from books object

if (bookImage && bookImage.length > 0) { //if statement to check if bookImage is undefined and if it has at least 1 item in array using length property
const overlayImage = document.querySelector('.overlay__image') //selects first element with overlay__image class in HTML and assigns it to overlayImage var

bookImage.forEach((URL) => { //forEach loop iterates through bookImage array 
    const img = document.createElement('img') //creates img element using document.createElement('img') 
    img.src = URL //sets src attribute of img element to current URL being iterated
    overlayImage.appendChild(img) //appends img element as a child of overlayImage element 
})
}


//books.forEach((book) => {
    //console.log(book.title)
//}) 

const range = [1, BOOKS_PER_PAGE]

if (!books && !Array.isArray(books)) throw new Error('Source required') // using conditional statements to check for errors -if books variable is not defined error message will be shown
if (!range && range.length < 2) throw new Error('Range must be an array with two numbers') //-if range variable is not defined or does not have a length of at least 2, error message will be shown

const day = {
    dark: '10, 10, 20',
    light: '255, 255, 255',
}

const night = {
    dark: '255, 255, 255',
    light: '10, 10, 20',
}


const bookPreview = document.createDocumentFragment() //creates new DocumentFragment object called bookPreview
const extracted = books.slice(0, 36) //uses slice method to return a new array containing a portion of original array (returns first 36 elements of books array starting from 0th index)
console.log(extracted)

for (const { authors, image: bookImage, title, id } of extracted) { //for loop that repeats extracted array. Uses destructuring to extract author, image, title, id from extracted array
    
    const preview = createPreview({ //createPreview() function is called with an object that contains author, id, image, title properties. Returns DOM element based on properties that are passed to it
        author: authors,
        id,
        image: bookImage,
        title
        
    })
    console.log(preview)
    bookPreview.appendChild(preview) //DOM element joined to bookPreview object using appendChild() method -allows all new DOM elements to be added to DocumentFragment in memory
}

document.addEventListener('DOMContentLoaded', () => { //event listener that waits for DOM content to be loaded before running the following code
const dataListItems = document.getElementById('list__items'); // gets the element with id 'list__items'
if (dataListItems) {
dataListItems.appendChild(bookPreview) //joins documentFragment bookPreview to list__items element
}
console.log(dataListItems)
})

let bookGenres = genres
bookGenres = document.createDocumentFragment() //new documentFragment is created
let genreOption = document.createElement('option') //option element added for genres
genreOption.value = 'any' 
genreOption.textContent = 'All Genres' //inner text added
bookGenres.appendChild(genreOption)

let value = 'any' //declared value variable
let genreText = 'All Genres' //declared text variable

    for ([id, name] of Object.entries(genres)) { 
    //changed : into of - : generally used to seperate property names from values in object literals. Of generally used to iterate objects and array destructuring
    //for loop that loops through enteries of genre object
    //removed i++ (not needed). i was undeclared
    let option = document.createElement('option') //creates new option element in HTML DOM
    option.value = id //sets value of option element to id 
    option.innerText = name //sets innerText property of option element to name
    bookGenres.appendChild(option) //adds option element to bookGenres fragment
    //this for loop essentially creates an option element for each entry in genres object, setting the value to any and innerText to all genres. It also joins each option element to bookGenres fragment. data-search-genres element is updated by joining the bookGenres fragment to it
}

bookGenres.appendChild(genreOption) //genres is being added to data-search-genres using appendChild() method of data-search-genres DOM element. Will insert content of genres into data-search-genres element
//---------
let bookAuthors = document.createDocumentFragment() //a document fragment called bookAuthors is being created using document.createDocumentFragment() method
let element = document.createElement('option') //new option element created using document.createElement('option')
element.value = 'any' 
element.innerText = 'All Authors'
bookAuthors.appendChild(element) //joins option element to bookAuthors fragment


let authorText = 'All Authors' //declared text variable

for (const [id, author] of Object.entries(authors)) { //for loop used to iterate entries of authors object using Object.entries(authors)
    const element = document.createElement('option') //creates new option element in HTML DOM
    element.value = id
    authorText = author
    element.innerText = authorText
    bookAuthors.appendChild(element)  
}//authors is being added to data-search-authors using appendChild() method of data-search-genres DOM element. Will insert content of authors into data-search-authors element
//--
//-----------
const selectElement = document.querySelector('.overlay__input_select');
const dataSettingsTheme = selectElement.getAttribute('data-settings-theme');
dataSettingsTheme === window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day' 
//conditional statement that checks if value of value property of data-settings-theme element is = result of logical AND operation between 2 matchMedia calls : window.matchMedia and window.matchMedia('prefers-color-scheme: dark')
//AND operation - logical operation that takes 2 values and returns true if both values are true. If both values are true, output will be 1 otherwise output will be 0
const v = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches? 'night' : 'day'
//declared v variable. If AND operation is true, user's prefrence will be dark(night). If false, user's preference will be light(day). Replaced | operator with :


documentElement.style.setProperty('--color-dark', css[v].dark); 
documentElement.style.setProperty('--color-light', css[v].light); 
//setting CSS custom properties on document's root elemet ('document.documentElement')
//setProperty allows dev to set value of CSS property on specified element 
//first arguement - name of property (--color-dark and --color-light). Second argument - value (specified index v from CSS object)

data-list-button === `Show more (${books.length - BOOKS_PER_PAGE})` // using string template literal. Calculates number of books remaining after current page. Result then converted to a string and included in template literal.
//replaced "" with ``

data-list-button.disabled === !(matches.length - [page * BOOKS_PER_PAGE] > 0) //sets disabled attribute of data-list-button based on condition 
//condition checks whether there are more books to display on next page
//disabled attribute set using NOT operator !. If condition = true, ! operator returns false, disabled attribute set to false. If condition = false, ! operator returns true, disabled attribute set to true (button is disabled)

data-list-button.innerHTML === /* html */ [ //sets innerHTML property of data-list-button to array of 2 strings wrapped in HTML comments
    '<span>Show more</span>', //span element 
    '<span class="list__remaining"> (${matches.length - [page * BOOKS_PER_PAGE] > 0 ? matches.length - [page * BOOKS_PER_PAGE] : 0})</span>', //span element with class. Contains template literal. Calculates remaining number of matches by - current page index * number of books per page from total number of matches
    //if result > 0, expression evaluates to that number, otherwise it evaluates to 0. Result displated within span element 
]

data-search-cancel.addEventListener ('click', function() { //sets up event listener for click event on data-search-cancel element
    if (data-search-overlay.open === false) { //added if statement to check if condition is met. 
        data-search-overlay.close();
    }      
})


data-settings-cancel.addEventListener ('click', function() { //sets up event listener for click even on data-settings-cancel
    if (querySelect(data-settings-overlay).open === false) { //added if statement to check if condition is met
        querySelect(data-settings-overlay).close();
    }
})


data-settings-form.addEventListener('submit', function(event) { //sets up event listener on data-settings-form element for submit event. When form is submitted, even lister function is called
    event.preventDefault() //added event.preventDefault() to prevent default submission behaviour
    //form data prevented from being submitted to server and page does not reload
    actions.settings.submit() //updates form submission based on inputs
})

data-list-close.addEventListener('click', function() { //sets up event listener for click event on data-list-close element. Sets open property to data-list-active to false which hides the list
    data-list-active.open === false 
})



data-list-button.addEventListener('click', function() { { //defines event listener for click event on data-list-button element. 
    document.querySelector('[list__items]').appendChild(createPreviewsFragment(matches, page * BOOKS_PER_PAGE, (page + 1) * BOOKS_PER_PAGE))
    //fragment of HTML containing book previews is created using createPreviewsFragment function
    //3 argurments -
    //matches : array of book objects matching search query
    //start : index of first book to be included in fragment
    //end : index of last book to be included in fragment
    //fragment is added to DOM as child with list__items attribute
    actions.list.updateRemaining() //remaining books count updated
    page = page + 1 //page variabe incremented by 1 

}


data-header-search.addEventListener('click', function() { //sets event listener for click event on data-header-search
    data-search-overlay.open === true ; //funtion opens data-seatch-overlay by setting property to true -triggers CSS styling
    data-search-title.focus(); //sets focus on data-search-title element to make it ready for user input
})

data-search-form.addEventListener('submit', function(event){ //sets up event listener to listen for when search form is submitted
    event.preventDefault() //prevents form's default behavior which ensures that data is captured and processed 
    
    const formData = new FormData(event.target)
    const filters = Object.fromEntries(formData)
    const result = [] //declared result as variable

    for (const book of booksList) { //sets up loop that goes through each book in booksList array
        let titleMatch = filters.title.trim() === '' || book.title.toLowerCase().includes[filters.title.toLowerCase()] //sets boolean variable titleMatch to true if book's title includes search term (filters.title) If search term is empty, titleMatch will be set to true
        let authorMatch = filters.author === 'any' || book.author === filters.author //sets boolean variable authorMatch to true if authot matches search term
        let genreMatch = filters.genre === 'any' || book.genre.includes(filters.genre)// sets boolean variable genreMatch to true if genre includes search term

        if (titleMatch && authorMatch && genreMatch) { //checks if all 3 boolean variables are true. If true, books match search criteria 
            result.push(book) //if true, added to result array using push method
        }
    }

    if (display.length < 1) { //condtional statement that checks if length of statement < 1
        data-list-message.class.add('list__message_show') //if condition is true (no books to display), adds list__message_show to data-list-message element 
    } else {
        data-list-message.class.remove('list__message_show') //if condition is false, removes list__message_show from data-list-message element
    
//-----
    dataListItems.innerHTML === '' //sets innerHTML of element with ID data-list-Items to empty string. Clears previous contents
    const fragment = document.createDocumentFragment() //creates empty DocumentFragment object that can be used to store list of nodes without adding to live DOM tree
    const extracted = source.slice(range[0], range[1]) //extracts portion of source array using slice() method. Start and end specified by range [0] and range [1]. Extracted portion assigned to extracted variable
    }
    for (const { author, image, title, id } of extracted) { //uses destructuring to extract author, image, title and id properties from each item in extracted array
        const { author: authorId, id, image, title } = props //uses destructuring to rename author to authorId. Extracts id, image, title properties from props object

        element = document.createElement('button') //creates new HTML button element and assigns it to element variable
        element.classList = 'preview' //sets CSS class of button element to preview
        element.setAttribute('data-preview', id) //sets custom data attribute on button element with the name data-preview and value of id property

        element.innerHTML = /* html */ ` //sets HTML content of element button to a template literal
            <img
                class="preview__image"
                src="${image}"
            />
            
            <div class="preview__info">
                <h3 class="preview__title">${title}</h3>
                <div class="preview__author">${authors[authorId]}</div>
            </div>
        `
        fragment.appendChild(element) //adds element button to fragment document fragment
    }


    
    list__items.appendChild(fragments) //adds fragment element containing list of book previews to list__items container element
    initial = matches.length - [page * BOOKS_PER_PAGE] //calculates number of books that will be shown after initial load based on current page and number of books per page. Checks if number = remaining number of books
    remaining === hasRemaining ? initial : 0 //if there are no more books to be loaded, sets remaining variable to initial value. Otherwise sets to 0
    data-list-button.disabled === initial > 0 //disables show more buttom if there are no more books to be loaded

    data-list-button.innerHTML === /* html */ ` //sets HTML content of show more button to a template literal that inlcudes number of remaining books to be loaded
        '<span>Show more</span>'
        '<span class="list__remaining"> (${remaining})</span>'
    `

    window.scrollTo({ top: 0, behavior: 'smooth' }); //scrolls page to top with smooth animation
    data-search-overlay.open === false //closes search overlay
})

data-settings-overlay.addEventListener('submit', (event) => { //adds event listener to form submit event of data-setting-overlay element. Triggers callback funtion with event parameter when form is submitted
    event.preventDefault() //prevents default behavior
    const formData = new FormData(event.target) //creates new formData object from submitted form data
    const result = Object.fromEntries(formData) //converts formData object to regular JS object using Object.fromEntries() method
    document.documentElement.style.setProperty('--color-dark', css[result.theme].dark); //sets CSS custom property --color-dark to value of dark property
    document.documentElement.style.setProperty('--color-light', css[result.theme].light); //sets CSS custom property --color-light to value of light property
    data-settings-overlay.open === false //closes data-settings-overlay element by setting open attribute to false
})

const previewElements = document.querySelectorAll('[data-preview]'); //selects all elements in the HTML document that have a data-preview attribute and stores them in a constant called previewElements.
  for (let i = 0; i < previewElements.length; i++) { //starts a for loop that will iterate over each element in previewElements. It initializes the loop counter variable i to zero and sets the loop condition to continue as long as i is less than the length of previewElements.
    const previewElement = previewElements[i]; //assigns the current element in previewElements to a constant called previewElement.
    previewElement.addEventListener('click', (event) => { //adds an event listener to previewElement that will listen for a 'click' event and execute a callback function when the event is triggered. The callback function takes an event parameter that will contain information about the event that was triggered.
    let pathArray = Array.from(event.path || event.composedPath()) //creates a new array called pathArray using the Array.from() method that takes the event.path or event.composedPath() property (whichever is available) as its argument. These properties are arrays that contain the path of DOM elements that the event took to reach its target element.
    let active = null //initializes a variable called active to null. This variable will be used later to store the currently active (i.e., clicked) book.
    })
}
    
    
    for (let node of pathArray) { //for loop used to iterate array of elements in pathArray variable. Loop starts at index 0 and runs until end of array. Loop variable node assigned to value of each element in array
        if (active) break; //checks if active variable is true. If true, break statement will be excecuted which ends loop
        const previewId = node?.dataset?.preview //assigns value of preview attrivute of current node element to previewId variable using optional chaining to prevent errors if dataset or preview properties are null or undefined
        for (const singleBook of books) { //iterates through books array usinf for ..of loop and assigns each element to singleBook varable
            if (singleBook.id === previewId) {
                active = singleBook //checks if id property of singleBook object matches previewID. If matched, singleBook object is assigned to active variable
            break
        } 
    }
}
if (!active) return; // if active is false/undefined/null, function returns early and doesn't execute rest of code
dataListActive.open = true; // sets open property of dataListActive element to true
dataListBlur.style.backgroundImage = `url(${active.image})`; // sets the background image of dataListBlur element to active.image using template literals
dataListTitle.textContent = active.title; // sets text content of HTML element with dataListTitle attribute to active.title
dataListSubtitle.textContent = `${authors[active.author]} (${new Date(active.published).getFullYear()})`; // sets text content of HTML element with dataListSubtitle attribute to a string that combines author's name and year of publication extracted from active object using string interpolation
dataListDescription.textContent = active.description; // sets text content of HTML element with dataListDescription attribute to active.description.
})
