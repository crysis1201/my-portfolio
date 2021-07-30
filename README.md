This website is my portfolio created using React Js when i started using react i didn't change much from this website from back then so the components might be clustered and un organized
I used tailwindcss for css and Framer-motion for animations, i hate bootstrap in my opinion tailwind in more customizable, I didnt worked on animation libararies other than framer-motion its comfortable so i just stuck with it
I used send-grid for the contact me page its good i didnt need more customization so i didnt consider other api or library
And I just for backup i have firestrore to save cotact data
For the data i could have used firebase or just redux or just a object but i always use that so i tried having a json-server but i have problem running two apps on single node server, so i created another app for the json, i know there are lot of easy ways and alternatives, i just want to try it thats it and i started building this after watching netninja course, so yeah i sticked with json-server
If you have any doubts in this app contact me, i know this app is so clustered when i look at this app after a long gap to update it, its so annoying what is going on here So feel free to contact me if this app confuses you

Build command

    "client": "cd client && npm start",
    "build": "cd client && npm run build",
    "dev": "concurrently --kill-others-on-fail \"npm run start\" \"npm run client\"",
    "start": "nodemon server.js",
    "heroku-postbuild": "npm install && cd client && npm install && npm install --only=dev --no-shrinkwrap && npm run build"
