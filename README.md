# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Assaf's Newsletter Sollution](.././newsletter-signup/public/screenshot.JPG)

### Links

- Solution URL: [The solution URL is here](https://github.com/AssafBenIshay/newsletter-signup/tree/master)
- Live Site URL: [The live site URL is here](https://nl-signup.netlify.app/)

## My process
- learnt alot how to properly sending react functions in props
### Built with

- Semantic HTML5 markup
- CSS Flex
- React lib for passing data
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

how to pass functions back and forth using React hooks thru the different pages components.
and how to better manipulate components using CSS
To see how you can add code snippets, see below:

```CSS
  .user-input>input {
        font-size: 16px;
        text-indent: 10px;
        padding: 16px;
        margin: 10px 0 20px 0;
        border-radius: 0.4rem;
        cursor: pointer;
        outline-width: 0.2px;
        border-width: 0.2px;
    }
    
    .input:invalid { //paints the text and background incase of an input mismatch of an 'email' type 
        border-color: #FF527B;
        color: #FF6A3A;
        background-color: #ff6b3a3a;
    }
    
    label:has(.input:invalid) { //change the color of the label containing this input (input element is inside the label element)
        color: #FF6A3A;
    }
    
    label:has(.input:valid) {
        color: transparent;     //the error message is transparent and appears only in case of error
    }
    
    .label {
        color: #000000;
    
    }
    ```
```React turnary conditioning
      {success ? <Congratz btnText={buttonText} email={vEmail} /> : <Main fun={regSuccess} ction={f2} btnText={buttonText}  />}
      // passing function with the turnary 
```
```js
function validateText(e) {
    //setemail(e.target.value)
    setValidity(e.nativeEvent.srcElement.validity.typeMismatch)
    pin pointing the error message of the input of type email element
  }  

```


### Continued development

continuing the quest for learning React

### Useful resources

- [King of CSS](https://www.youtube.com/@KevinPowell/search) - This helped me 
- [Scrimba](https://www.scrimba.com) - The most effective way to learn React


## Author

- Website - [Assaf Ben Ishay](https://github.com/AssafBenIshay)
- Frontend Mentor - [@AssafBenIshay](https://www.frontendmentor.io/profile/AssafBenIshay)


