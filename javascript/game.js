// Regular expressions added
const rockRegex = /^rock$/i,
    paperRegex = /^paper$/i,
    exitRegex = /^exit$/i,
    scissorsRegex = /^scissors$/i;

player_game = (input) => {
    if (paperRegex.test(input)) {
        return paperGame
    } else if (rockRegex.test(input)) {
        return rockGame
    } else if (scissorsRegex.test(input)) {
        return scissorsGame
    } else if (exitRegex.test(input)){
        return 'exit'
    } else {
        return false
    };
},