# JHealthSolutions

## Link to website 

https://jhealthsolutions.de/

## Link to github

https://github.com/Jhealthsolutions/JHealthSolutions

## Project built with

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)

## Start project

```
npm i
npm run dev
```

## Dependencies 

```
emailjs-com
i18next
i18next-browser-languagedetector
i18next-http-backend
react
react-dom
react-i18next
react-router-dom
```
## Contributors
- [@Pingis2](https://github.com/Pingis2)
- [@oscarkannerstedt](https://github.com/oscarkannerstedt)

## Instructions for Jessica

if you want to see a preview of the website before publishing your changes, you need to download the latest version of

```
Node.js
```

then you open the terminal in Visual Studio Code and type the command (only need to this once for this project) 

```
npm install
```

and then to start the website locally, you open type this command in the terminal, and you should see a link to a localhost

```
npm run dev
```

### Editing text

To edit the text on each page, you will find all the texts in the 

```
├───node_modules
├───public
│   └───locales
│       ├───de      for german
│       └───en      for english
```

the names of the texts should hopefully be good enough to understand what they do and where they are located, if not, you can find them in the files of

```
├───node_modules
├───public
├───src
    └───pages
```

and look for {t(name-of-text-example.variable)}

When editing the text, you always need to have the text inside the quotation marks "here goes text" or you will get error and it won't work.

---
here is an example of what a text can look like in the JSON file
```
"home-page": {
    "headline": "Gemeinsam die Zukunft der Medizin gestalten!",
}
```
---

in this case, you see name of the page where the text is located,

```
"home-page"
```

this is the name of the variable that we use to seperates all the texts,
```
"headline"
``` 
and this is the actual text that will be displayed on the website
```
"Gemeinsam die Zukunft der Medizin gestalten!" 
```
---

When editing the text and you want to have a break in the text, you have to add &#8595; at the end of the text
```
<br></br>
```

for example, to get the text formated like this 
```
this is
a break
```

you do 
```
this is <br></br> a break
```

---

if you want text to be on a completely new row, for example like this

```
this text

is on a new row
```

you have to go in the tsx file of the page you want to edit, and then add a text tag like this

```
<p>{t(home-page.first-text)}</p>

<p>{t(home-page.second-text)}</p>
```

and then you add the new text in the JSON files in the public - locales folders, it for example will look like this.

```
"home-page": {
    "first-text": "This text",
    "second-text": "is on a new row"
}
```
PS, you have to add it in both the english and german JSON file for the language toggle to work, and of course change the actual text to german or english depending on the file.

---

### Small reminders

To publish (commit) your new edits, you click on the "Source Control" (far left of the screen), write a little message, for example: edited home page headline text, and then you click commit and then the button will change to "Sync changes" and you click that again for it to be added to Github and then be published on Vercel.

If you accidentally were to delete something and you don't know how to fix it, you can discard all the changes in that file by clicking on "source control" and then the down curved arrow, this will reset the file to it's original state before you made any changes.

![small image of "discard changes" button](image.png)

---

If you encounter any problems, feel free to send an email to Anton or Oscar.

Good luck!
