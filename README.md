# Word Hunt Solver
This repo is a ReactJS web app to solve [24 game](https://en.wikipedia.org/wiki/24_Game). The front-end is a simplified version of [mtomko87's WordHuntSolver repo](https://github.com/mtomko87/wordhuntsolver) and solution enumeration is powered by [auntyellow's repo](https://github.com/auntyellow/24).

# To run locally
    npm install
    npm start # ctrl+c to stop the process
    npm stop # to kill node.exe if you closed the window

# To deploy to gh-pages locally
There is already a gh-pages action but can do manually:

    npm deploy
    npm run deploy

# Other notes
I also considered this solver
https://github.com/LouYu2015/24_game_solver
- supports complex operators
- doesn't filter out "duplicate" solutions, e.g.
    24 = 12+6+2+4
    24 = 12+2+4+6
