(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
var planetsArray = planetsString.split('|');
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var newPlanetString = planetsArray.join('<br>');
    console.log(newPlanetString);

    var planetH = newPlanetString.split('<br>');
    console.log(planetH);


    var unorderedPlanetString = planetsArray.join('<li>');
    console.log(unorderedPlanetString);
    var newArray = unorderedPlanetString.split('');
    newArray.unshift("<ul><li>");
    newArray.push("</li></ul>");
    console.log(newArray);
    console.log(newArray.join(''));

    function Palindrome (name){
        if(typeof name === 'string'){
            console.log(name.toLowerCase().split('').reverse().join(''));
        }
    }
Palindrome('MARK');

})();
