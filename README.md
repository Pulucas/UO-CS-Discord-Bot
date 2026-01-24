# UO CS Discord Bot Source Code
If you wanted to look at the code that makes the bot function, you've come to the right place!

### .env
Rename `.env_example` to `.env`. This is a common file used to store your environment vairables. These can be accessed anywhere, as they are part of your environment.

### .gitignore
This file is used by git. It lets you tell git to stop tracking certain files or folders.
<br>

For example, I told git to ignore my `.env` file, because that has my discord bot's token, and that's something I don't want other people to have. This is why you don't see a .env file in this git repository.

### index.js
This is where all the code for my discord bot goes. For information on what the code is doing, I will be putting comments in this file instead of in the README (instead of what you're reading right now).
<br>

Sometimes when you have a lot of functions, they get seperated into their own file, to not make the main file bloated. A nice coding tip is to have the main file set up everything, and all the functions of the program are put in seperate files.
<br>

Why is it called `index.js`? idk, that's just a standard, like how python uses `main.py` as the name of the main file in a project.

### package.json / package-lock.json
This only matters if you are uploading your code as a package for other people to use. It is automatically created when you install packages. It is not needed for your code to run.
<br>

Since i'm using other people's code, like `discord.js`, I need to download their code, and that gets stored in the `node_modules` folder.
<br>

`package.json` tells you what packages (other people's code) are installed, as well as some other stuff like scripts and the name of the package. This is used by others to learn more about the package.

`package-lock.json` is a file that lists the specific version of all packages and their dependencies used in a project. This is important because it ensures that anyone who wants to run the project can download the same version of each package that was originally used for the project. This prevents compatibility issues for when a package has been so heavily updated that it no longer works with the project. For example, if a project was built around discord.js v12, downloading the newer discord.js v14 (which has been heavily updated) would make the program unable to run. The `package-lock.json` file would make sure you download the v12 package to ensure compatibility.

### README.md
This is the the file you are reading right now! It is a Markdown file and used to make quick notes or writeups and even websites. It's nice because it isn't just plaintext, but you also have styling, and you can add links and images. I like to think of Markdown as a simpler form of HTML.

### How to run the bot yourself
- [Create your discord bot](https://discord.com/developers/applications/) and get the token.
- Rename `.env_example` to `.env` and put the token in `.env` where it says \<your-bot-token>
  - (should look like `token=DJq8hdHo;D5...`)
- Add your discord bot to your discord servers
- Run the code using `npm run start`
  - Make sure you have NodeJS installed on your computer