var studio_locale = {lc:{"ar":function(n){
  if (n === 0) {
    return 'zero';
  }
  if (n == 1) {
    return 'one';
  }
  if (n == 2) {
    return 'two';
  }
  if ((n % 100) >= 3 && (n % 100) <= 10 && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 100) >= 11 && (n % 100) <= 99 && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"en":function(n){return n===1?"one":"other"},"bg":function(n){return n===1?"one":"other"},"bn":function(n){return n===1?"one":"other"},"ca":function(n){return n===1?"one":"other"},"cs":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n == 2 || n == 3 || n == 4) {
    return 'few';
  }
  return 'other';
},"da":function(n){return n===1?"one":"other"},"de":function(n){return n===1?"one":"other"},"el":function(n){return n===1?"one":"other"},"es":function(n){return n===1?"one":"other"},"et":function(n){return n===1?"one":"other"},"eu":function(n){return n===1?"one":"other"},"fa":function(n){return "other"},"fi":function(n){return n===1?"one":"other"},"fil":function(n){return n===0||n==1?"one":"other"},"fr":function(n){return Math.floor(n)===0||Math.floor(n)==1?"one":"other"},"ga":function(n){return n==1?"one":(n==2?"two":"other")},"gl":function(n){return n===1?"one":"other"},"he":function(n){return n===1?"one":"other"},"hi":function(n){return n===0||n==1?"one":"other"},"hr":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"hu":function(n){return "other"},"id":function(n){return "other"},"is":function(n){
    return ((n%10) === 1 && (n%100) !== 11) ? 'one' : 'other';
  },"it":function(n){return n===1?"one":"other"},"ja":function(n){return "other"},"ko":function(n){return "other"},"lt":function(n){
  if ((n % 10) == 1 && ((n % 100) < 11 || (n % 100) > 19)) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 9 &&
      ((n % 100) < 11 || (n % 100) > 19) && n == Math.floor(n)) {
    return 'few';
  }
  return 'other';
},"lv":function(n){
  if (n === 0) {
    return 'zero';
  }
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  return 'other';
},"mk":function(n){return (n%10)==1&&n!=11?"one":"other"},"mr":function(n){return n===1?"one":"other"},"ms":function(n){return "other"},"mt":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n === 0 || ((n % 100) >= 2 && (n % 100) <= 4 && n == Math.floor(n))) {
    return 'few';
  }
  if ((n % 100) >= 11 && (n % 100) <= 19 && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"nl":function(n){return n===1?"one":"other"},"no":function(n){return n===1?"one":"other"},"pl":function(n){
  if (n == 1) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || n != 1 && (n % 10) == 1 ||
      ((n % 10) >= 5 && (n % 10) <= 9 || (n % 100) >= 12 && (n % 100) <= 14) &&
      n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"pt":function(n){return n===1?"one":"other"},"ro":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n === 0 || n != 1 && (n % 100) >= 1 &&
      (n % 100) <= 19 && n == Math.floor(n)) {
    return 'few';
  }
  return 'other';
},"ru":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"sk":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n == 2 || n == 3 || n == 4) {
    return 'few';
  }
  return 'other';
},"sl":function(n){
  if ((n % 100) == 1) {
    return 'one';
  }
  if ((n % 100) == 2) {
    return 'two';
  }
  if ((n % 100) == 3 || (n % 100) == 4) {
    return 'few';
  }
  return 'other';
},"sq":function(n){return n===1?"one":"other"},"sr":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"sv":function(n){return n===1?"one":"other"},"ta":function(n){return n===1?"one":"other"},"th":function(n){return "other"},"tr":function(n){return n===1?"one":"other"},"uk":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"ur":function(n){return n===1?"one":"other"},"vi":function(n){return "other"},"zh":function(n){return "other"}},
c:function(d,k){if(!d)throw new Error("MessageFormat: Data required for '"+k+"'.")},
n:function(d,k,o){if(isNaN(d[k]))throw new Error("MessageFormat: '"+k+"' isn't a number.");return d[k]-(o||0)},
v:function(d,k){studio_locale.c(d,k);return d[k]},
p:function(d,k,o,l,p){studio_locale.c(d,k);return d[k] in p?p[d[k]]:(k=studio_locale.lc[l](d[k]-o),k in p?p[k]:p.other)},
s:function(d,k,p){studio_locale.c(d,k);return d[k] in p?p[d[k]]:p.other}};
(window.blockly = window.blockly || {}).studio_locale = {
"actor":function(d){return "!!-actor-!!"},
"addCharacter":function(d){return "!!-add a-!!"},
"addCharacterTooltip":function(d){return "!!-Add a character to the scene.-!!"},
"addPoints10":function(d){return "!!-add 10 points-!!"},
"addPoints50":function(d){return "!!-add 50 points-!!"},
"addPoints100":function(d){return "!!-add 100 points-!!"},
"addPoints400":function(d){return "!!-add 400 points-!!"},
"addPoints1000":function(d){return "!!-add 1000 points-!!"},
"addPointsTooltip":function(d){return "!!-Add points to the score.-!!"},
"alienInvasion":function(d){return "!!-Alien Invasion!-!!"},
"backgroundBlack":function(d){return "!!-black-!!"},
"backgroundCave":function(d){return "!!-cave-!!"},
"backgroundCloudy":function(d){return "!!-cloudy-!!"},
"backgroundHardcourt":function(d){return "!!-hardcourt-!!"},
"backgroundNight":function(d){return "!!-night-!!"},
"backgroundUnderwater":function(d){return "!!-underwater-!!"},
"backgroundCity":function(d){return "!!-city-!!"},
"backgroundDesert":function(d){return "!!-desert-!!"},
"backgroundRainbow":function(d){return "!!-rainbow-!!"},
"backgroundSoccer":function(d){return "!!-soccer-!!"},
"backgroundSpace":function(d){return "!!-space-!!"},
"backgroundTennis":function(d){return "!!-tennis-!!"},
"backgroundWinter":function(d){return "!!-winter-!!"},
"calloutPlaceCommandsHere":function(d){return "!!-Place commands here-!!"},
"calloutPlaceCommandsAtTop":function(d){return "!!-Place commands to set up your game at the top-!!"},
"calloutTypeCommandsHere":function(d){return "!!-Type your commands here-!!"},
"calloutCharactersMove":function(d){return "!!-These new commands let you control how the characters move-!!"},
"calloutPutCommandsHereRunStart":function(d){return "!!-Put commands here to have them run when the program starts-!!"},
"calloutClickCategory":function(d){return "!!-Click a category header to see commands in each category-!!"},
"calloutClickEvents":function(d){return "!!-Click on the events header to see event function blocks.-!!"},
"calloutTryOutNewCommands":function(d){return "!!-Try out all the new commands you’ve unlocked-!!"},
"calloutUseArrowButtons":function(d){return "!!-Hold down these buttons or the arrow keys on your keyboard to trigger the move events-!!"},
"calloutUseArrowButtonsAutoSteer":function(d){return "!!-You can still use these buttons or the arrow keys on your keyboard to move-!!"},
"calloutMoveRightRunButton":function(d){return "!!-Add a second moveRight command to your code and then click here to run it-!!"},
"calloutShowCodeToggle":function(d){return "!!-Click here to switch between block and text mode-!!"},
"calloutShowPlaceGoUpHere":function(d){return "!!-Place goUp command here to move up-!!"},
"calloutShowPlaySound":function(d){return "!!-It's your game, so you choose the sounds now. Try the dropdown to pick a different sound-!!"},
"calloutInstructions":function(d){return "!!-Don't know what to do? Click the instructions to see them again-!!"},
"calloutPlaceTwo":function(d){return "!!-Can you make two Mouse Droids appear when you get one Mouse Droid?-!!"},
"calloutPlaceTwoWhenBird":function(d){return "!!-Can you make two Mouse Droids appear when you get a Mynock?-!!"},
"calloutSetMapAndSpeed":function(d){return "!!-Set the map and your speed-!!"},
"calloutFinishButton":function(d){return "!!-Click here when you are ready to share your game-!!"},
"catActions":function(d){return "!!-Actions-!!"},
"catControl":function(d){return "!!-Loops-!!"},
"catEvents":function(d){return "!!-Events-!!"},
"catLogic":function(d){return "!!-Logic-!!"},
"catMath":function(d){return "!!-Math-!!"},
"catProcedures":function(d){return "!!-Functions-!!"},
"catText":function(d){return "!!-Text-!!"},
"catVariables":function(d){return "!!-Variables-!!"},
"changeScoreTooltip":function(d){return "!!-Add or remove a point to the score.-!!"},
"changeScoreTooltipK1":function(d){return "!!-Add a point to the score.-!!"},
"tapOrClickToPlay":function(d){return "!!-Tap or click to play-!!"},
"tapOrClickToReset":function(d){return "!!-Tap or click to reset-!!"},
"continue":function(d){return "!!-Continue-!!"},
"decrementPlayerScore":function(d){return "!!-remove point-!!"},
"defaultSayText":function(d){return "!!-type here-!!"},
"dropletBlock_addCharacter_description":function(d){return "!!-Add a character to the scene.-!!"},
"dropletBlock_addCharacter_param0":function(d){return "!!-type-!!"},
"dropletBlock_addCharacter_param0_description":function(d){return "!!-The type of the character to be added ('random', 'Stormtrooper', 'RebelPilot', 'PufferPig', 'Mynock', 'MouseDroid', 'Tauntaun', or 'Probot').-!!"},
"dropletBlock_addPoints_description":function(d){return "!!-Add points to the score.-!!"},
"dropletBlock_addPoints_param0":function(d){return "!!-score-!!"},
"dropletBlock_addPoints_param0_description":function(d){return "!!-The value to add to the score.-!!"},
"dropletBlock_changeScore_description":function(d){return "!!-Add points to the score.-!!"},
"dropletBlock_changeScore_param0":function(d){return "!!-score-!!"},
"dropletBlock_changeScore_param0_description":function(d){return "!!-The value to add to the score (negative values will reduce the score).-!!"},
"dropletBlock_goRight_description":function(d){return "!!-Moves the droid to the right.-!!"},
"dropletBlock_goUp_description":function(d){return "!!-Moves the droid up.-!!"},
"dropletBlock_goDown_description":function(d){return "!!-Moves the droid down.-!!"},
"dropletBlock_goLeft_description":function(d){return "!!-Moves the droid to the left.-!!"},
"dropletBlock_moveRight_description":function(d){return "!!-Moves the droid to the right.-!!"},
"dropletBlock_moveUp_description":function(d){return "!!-Moves the droid up.-!!"},
"dropletBlock_moveDown_description":function(d){return "!!-Moves the droid down.-!!"},
"dropletBlock_moveLeft_description":function(d){return "!!-Moves the droid to the left.-!!"},
"dropletBlock_moveSlow_description":function(d){return "!!-Changes a set of characters to move slowly.-!!"},
"dropletBlock_moveSlow_param0":function(d){return "!!-type-!!"},
"dropletBlock_moveSlow_param0_description":function(d){return "!!-The type of characters to be changed ('random', 'Stormtrooper', 'RebelPilot', 'PufferPig', 'Mynock', 'MouseDroid', 'Tauntaun', or 'Probot').-!!"},
"dropletBlock_moveNormal_description":function(d){return "!!-Changes a set of characters to move at a normal speed.-!!"},
"dropletBlock_moveNormal_param0":function(d){return "!!-type-!!"},
"dropletBlock_moveNormal_param0_description":function(d){return "!!-The type of characters to be changed ('random', 'Stormtrooper', 'RebelPilot', 'PufferPig', 'Mynock', 'MouseDroid', 'Tauntaun', or 'Probot').-!!"},
"dropletBlock_moveFast_description":function(d){return "!!-Changes a set of characters to move quickly.-!!"},
"dropletBlock_moveFast_param0":function(d){return "!!-type-!!"},
"dropletBlock_moveFast_param0_description":function(d){return "!!-The type of characters to be changed ('random', 'Stormtrooper', 'RebelPilot', 'PufferPig', 'Mynock', 'MouseDroid', 'Tauntaun', or 'Probot').-!!"},
"dropletBlock_playSound_description":function(d){return "!!-Play the chosen sound.-!!"},
"dropletBlock_playSound_param0":function(d){return "!!-sound-!!"},
"dropletBlock_playSound_param0_description":function(d){return "!!-The name of the sound to play.-!!"},
"dropletBlock_removePoints_description":function(d){return "!!-Remove points from the score.-!!"},
"dropletBlock_removePoints_param0":function(d){return "!!-score-!!"},
"dropletBlock_removePoints_param0_description":function(d){return "!!-The value to remove from the score.-!!"},
"dropletBlock_setBackground_description":function(d){return "!!-Sets the background theme.-!!"},
"dropletBlock_setBackground_param0":function(d){return "!!-theme-!!"},
"dropletBlock_setBackground_param0_description":function(d){return "!!-The name of the background theme ('random', 'endor', 'hoth', or 'starship').-!!"},
"dropletBlock_setDroid_description":function(d){return "!!-Changes the active droid.-!!"},
"dropletBlock_setDroid_param0":function(d){return "!!-image-!!"},
"dropletBlock_setDroid_param0_description":function(d){return "!!-The name of the droid image ('random', 'R2-D2', or 'C-3PO').-!!"},
"dropletBlock_setDroidSpeed_description":function(d){return "!!-Sets the droid speed.-!!"},
"dropletBlock_setDroidSpeed_param0":function(d){return "!!-speed-!!"},
"dropletBlock_setDroidSpeed_param0_description":function(d){return "!!-The speed value ('random', 'slow', 'normal', or 'fast').-!!"},
"dropletBlock_setSpriteEmotion_description":function(d){return "!!-Sets the actor mood.-!!"},
"dropletBlock_setSpritePosition_description":function(d){return "!!-Instantly moves an actor to the specified location.-!!"},
"dropletBlock_setSpriteSpeed_description":function(d){return "!!-Sets the speed of an actor.-!!"},
"dropletBlock_setSprite_description":function(d){return "!!-Sets the actor image.-!!"},
"dropletBlock_setSprite_param0":function(d){return "!!-index-!!"},
"dropletBlock_setSprite_param0_description":function(d){return "!!-The index (starting at 0) indicating which actor should change.-!!"},
"dropletBlock_setSprite_param1":function(d){return "!!-image-!!"},
"dropletBlock_setSprite_param1_description":function(d){return "!!-The name of the actor image.-!!"},
"dropletBlock_setToChase_description":function(d){return "!!-Changes a set of characters to chase the droid.-!!"},
"dropletBlock_setToChase_param0":function(d){return "!!-type-!!"},
"dropletBlock_setToChase_param0_description":function(d){return "!!-The type of characters to be changed ('random', 'Stormtrooper', 'RebelPilot', 'PufferPig', 'Mynock', 'MouseDroid', 'Tauntaun', or 'Probot').-!!"},
"dropletBlock_setToFlee_description":function(d){return "!!-Changes a set of characters to flee from the droid.-!!"},
"dropletBlock_setToFlee_param0":function(d){return "!!-type-!!"},
"dropletBlock_setToFlee_param0_description":function(d){return "!!-The type of characters to be changed ('random', 'Stormtrooper', 'RebelPilot', 'PufferPig', 'Mynock', 'MouseDroid', 'Tauntaun', or 'Probot').-!!"},
"dropletBlock_setToRoam_description":function(d){return "!!-Changes a set of characters to roam freely.-!!"},
"dropletBlock_setToRoam_param0":function(d){return "!!-type-!!"},
"dropletBlock_setToRoam_param0_description":function(d){return "!!-The type of characters to be changed ('random', 'Stormtrooper', 'RebelPilot', 'PufferPig', 'Mynock', 'MouseDroid', 'Tauntaun', or 'Probot').-!!"},
"dropletBlock_setToStop_description":function(d){return "!!-Changes a set of characters to stop moving.-!!"},
"dropletBlock_setToStop_param0":function(d){return "!!-type-!!"},
"dropletBlock_setToStop_param0_description":function(d){return "!!-The type of characters to be changed ('random', 'Stormtrooper', 'RebelPilot', 'PufferPig', 'Mynock', 'MouseDroid', 'Tauntaun', or 'Probot').-!!"},
"dropletBlock_setMap_description":function(d){return "!!-Changes the map in the scene.-!!"},
"dropletBlock_setMap_param0":function(d){return "!!-name-!!"},
"dropletBlock_setMap_param0_description":function(d){return "!!-The name of the map ('random', 'blank', 'circle', 'circle2', 'horizontal', 'grid', or 'blobs').-!!"},
"dropletBlock_throw_description":function(d){return "!!-Throws a projectile from the specified actor.-!!"},
"dropletBlock_vanish_description":function(d){return "!!-Vanishes the actor.-!!"},
"dropletBlock_endGame_description":function(d){return "!!-End the game.-!!"},
"dropletBlock_endGame_param0":function(d){return "!!-type-!!"},
"dropletBlock_endGame_param0_description":function(d){return "!!-Whether the game was won or lost ('win', 'lose').-!!"},
"dropletBlock_whenDown_description":function(d){return "!!-This function executes when the down button is pressed.-!!"},
"dropletBlock_whenGetCharacter_description":function(d){return "!!-This function executes when the droid gets any character.-!!"},
"dropletBlock_whenGetStormtrooper_description":function(d){return "!!-This function executes when the droid gets Stormtrooper characters.-!!"},
"dropletBlock_whenGetRebelPilot_description":function(d){return "!!-This function executes when the droid gets Rebel Pilot characters.-!!"},
"dropletBlock_whenGetPufferPig_description":function(d){return "!!-This function executes when the droid gets Puffer Pig characters.-!!"},
"dropletBlock_whenGetMynock_description":function(d){return "!!-This function executes when the droid gets Mynock characters.-!!"},
"dropletBlock_whenGetMouseDroid_description":function(d){return "!!-This function executes when the droid gets Mouse Droid characters.-!!"},
"dropletBlock_whenGetTauntaun_description":function(d){return "!!-This function executes when the droid gets Tauntaun characters.-!!"},
"dropletBlock_whenGetProbot_description":function(d){return "!!-This function executes when the droid gets Probot characters.-!!"},
"dropletBlock_whenLeft_description":function(d){return "!!-This function executes when the left button is pressed.-!!"},
"dropletBlock_whenRight_description":function(d){return "!!-This function executes when the right button is pressed.-!!"},
"dropletBlock_whenTouchCharacter_description":function(d){return "!!-This function executes when the droid touches any character.-!!"},
"dropletBlock_whenTouchObstacle_description":function(d){return "!!-This function executes when the droid touches any obstacle.-!!"},
"dropletBlock_whenTouchStormtrooper_description":function(d){return "!!-This function executes when the droid touches Stormtrooper characters.-!!"},
"dropletBlock_whenTouchRebelPilot_description":function(d){return "!!-This function executes when the droid touches Rebel Pilot characters.-!!"},
"dropletBlock_whenTouchPufferPig_description":function(d){return "!!-This function executes when the droid touches Puffer Pig characters.-!!"},
"dropletBlock_whenTouchMynock_description":function(d){return "!!-This function executes when the droid touches Mynock characters.-!!"},
"dropletBlock_whenTouchMouseDroid_description":function(d){return "!!-This function executes when the droid touches Mouse Droid characters.-!!"},
"dropletBlock_whenTouchTauntaun_description":function(d){return "!!-This function executes when the droid touches Tauntaun characters.-!!"},
"dropletBlock_whenTouchProbot_description":function(d){return "!!-This function executes when the droid touches Probot characters.-!!"},
"dropletBlock_whenUp_description":function(d){return "!!-This function executes when the up button is pressed.-!!"},
"emotion":function(d){return "!!-mood-!!"},
"endGameWin":function(d){return "!!-end game as a win-!!"},
"endGameLose":function(d){return "!!-end game as a loss-!!"},
"endGameTooltip":function(d){return "!!-End the game as either a win or a loss.-!!"},
"finalLevel":function(d){return "!!-Congratulations! You have solved the final puzzle.-!!"},
"for":function(d){return "!!-for-!!"},
"hello":function(d){return "!!-hello-!!"},
"helloWorld":function(d){return "!!-Hello World!-!!"},
"hoc2015_lastLevel_continueText":function(d){return "!!-Done-!!"},
"hoc2015_reinfFeedbackMsg":function(d){return "!!-You can press the \""+studio_locale.v(d,"backButton")+"\" button to go back to playing your game.-!!"},
"hoc2015_shareGame":function(d){return "!!-Share your game:-!!"},
"iceAge":function(d){return "!!-Ice Age!-!!"},
"incrementPlayerScore":function(d){return "!!-score point-!!"},
"itemIAProjectile1":function(d){return "!!-hearts-!!"},
"itemIAProjectile2":function(d){return "!!-boulder-!!"},
"itemIAProjectile3":function(d){return "!!-ice cube-!!"},
"itemIAProjectile4":function(d){return "!!-snowflake-!!"},
"itemIAProjectile5":function(d){return "!!-ice crystal-!!"},
"itemBlueFireball":function(d){return "!!-blue fireball-!!"},
"itemPurpleFireball":function(d){return "!!-purple fireball-!!"},
"itemRedFireball":function(d){return "!!-red fireball-!!"},
"itemYellowHearts":function(d){return "!!-yellow hearts-!!"},
"itemPurpleHearts":function(d){return "!!-purple hearts-!!"},
"itemRedHearts":function(d){return "!!-red hearts-!!"},
"itemRandom":function(d){return "!!-random-!!"},
"itemAnna":function(d){return "!!-hook-!!"},
"itemElsa":function(d){return "!!-sparkle-!!"},
"itemHiro":function(d){return "!!-microbots-!!"},
"itemBaymax":function(d){return "!!-rocket-!!"},
"itemRapunzel":function(d){return "!!-saucepan-!!"},
"itemCherry":function(d){return "!!-cherry-!!"},
"itemIce":function(d){return "!!-ice-!!"},
"itemDuck":function(d){return "!!-duck-!!"},
"itemStormtrooper":function(d){return "!!-Stormtrooper-!!"},
"itemRebelPilot":function(d){return "!!-Rebel Pilot-!!"},
"itemPufferPig":function(d){return "!!-Puffer Pig-!!"},
"itemMynock":function(d){return "!!-Mynock-!!"},
"itemMouseDroid":function(d){return "!!-Mouse Droid-!!"},
"itemTauntaun":function(d){return "!!-Tauntaun-!!"},
"itemProbot":function(d){return "!!-Probot-!!"},
"loseMessage":function(d){return "!!-You lose!-!!"},
"makeProjectileDisappear":function(d){return "!!-disappear-!!"},
"makeProjectileBounce":function(d){return "!!-bounce-!!"},
"makeProjectileBlueFireball":function(d){return "!!-make blue fireball-!!"},
"makeProjectilePurpleFireball":function(d){return "!!-make purple fireball-!!"},
"makeProjectileRedFireball":function(d){return "!!-make red fireball-!!"},
"makeProjectileYellowHearts":function(d){return "!!-make yellow hearts-!!"},
"makeProjectilePurpleHearts":function(d){return "!!-make purple hearts-!!"},
"makeProjectileRedHearts":function(d){return "!!-make red hearts-!!"},
"makeProjectileTooltip":function(d){return "!!-Make the projectile that just collided disappear or bounce.-!!"},
"makeYourOwn":function(d){return "!!-Make Your Own Play Lab App-!!"},
"moveDirectionDown":function(d){return "!!-down-!!"},
"moveDirectionLeft":function(d){return "!!-left-!!"},
"moveDirectionRight":function(d){return "!!-right-!!"},
"moveDirectionUp":function(d){return "!!-up-!!"},
"moveDirectionRandom":function(d){return "!!-random-!!"},
"moveDistance25":function(d){return "!!-25 pixels-!!"},
"moveDistance50":function(d){return "!!-50 pixels-!!"},
"moveDistance100":function(d){return "!!-100 pixels-!!"},
"moveDistance200":function(d){return "!!-200 pixels-!!"},
"moveDistance400":function(d){return "!!-400 pixels-!!"},
"moveDistancePixels":function(d){return "!!-pixels-!!"},
"moveDistanceRandom":function(d){return "!!-random pixels-!!"},
"moveDistanceTooltip":function(d){return "!!-Move an actor a specific distance in the specified direction.-!!"},
"moveSprite":function(d){return "!!-move-!!"},
"moveSpriteN":function(d){return "!!-move actor "+studio_locale.v(d,"spriteIndex")+"-!!"},
"toXY":function(d){return "!!-to x,y-!!"},
"moveDown":function(d){return "!!-move down-!!"},
"moveDownTooltip":function(d){return "!!-Move an actor down.-!!"},
"moveLeft":function(d){return "!!-move left-!!"},
"moveLeftTooltip":function(d){return "!!-Move an actor to the left.-!!"},
"moveRight":function(d){return "!!-move right-!!"},
"moveRightTooltip":function(d){return "!!-Move an actor to the right.-!!"},
"moveUp":function(d){return "!!-move up-!!"},
"moveUpTooltip":function(d){return "!!-Move an actor up.-!!"},
"moveTooltip":function(d){return "!!-Move an actor.-!!"},
"nextLevel":function(d){return "!!-Congratulations! You have completed this puzzle.-!!"},
"no":function(d){return "!!-No-!!"},
"numBlocksNeeded":function(d){return "!!-This puzzle can be solved with %1 blocks.-!!"},
"onEventTooltip":function(d){return "!!-Execute code in response to the specified event.-!!"},
"ouchExclamation":function(d){return "!!-Ouch!-!!"},
"playSoundCrunch":function(d){return "!!-play crunch sound-!!"},
"playSoundGoal1":function(d){return "!!-play goal 1 sound-!!"},
"playSoundGoal2":function(d){return "!!-play goal 2 sound-!!"},
"playSoundHit":function(d){return "!!-play hit sound-!!"},
"playSoundLosePoint":function(d){return "!!-play lose point sound-!!"},
"playSoundLosePoint2":function(d){return "!!-play lose point 2 sound-!!"},
"playSoundRetro":function(d){return "!!-play retro sound-!!"},
"playSoundRubber":function(d){return "!!-play rubber sound-!!"},
"playSoundSlap":function(d){return "!!-play slap sound-!!"},
"playSoundTooltip":function(d){return "!!-Play the chosen sound.-!!"},
"playSoundWinPoint":function(d){return "!!-play win point sound-!!"},
"playSoundWinPoint2":function(d){return "!!-play win point 2 sound-!!"},
"playSoundWood":function(d){return "!!-play wood sound-!!"},
"positionOutTopLeft":function(d){return "!!-to the above top left position-!!"},
"positionOutTopRight":function(d){return "!!-to the above top right position-!!"},
"positionTopOutLeft":function(d){return "!!-to the top outside left position-!!"},
"positionTopLeft":function(d){return "!!-to the top left position-!!"},
"positionTopCenter":function(d){return "!!-to the top center position-!!"},
"positionTopRight":function(d){return "!!-to the top right position-!!"},
"positionTopOutRight":function(d){return "!!-to the top outside right position-!!"},
"positionMiddleLeft":function(d){return "!!-to the middle left position-!!"},
"positionMiddleCenter":function(d){return "!!-to the middle center position-!!"},
"positionMiddleRight":function(d){return "!!-to the middle right position-!!"},
"positionBottomOutLeft":function(d){return "!!-to the bottom outside left position-!!"},
"positionBottomLeft":function(d){return "!!-to the bottom left position-!!"},
"positionBottomCenter":function(d){return "!!-to the bottom center position-!!"},
"positionBottomRight":function(d){return "!!-to the bottom right position-!!"},
"positionBottomOutRight":function(d){return "!!-to the bottom outside right position-!!"},
"positionOutBottomLeft":function(d){return "!!-to the below bottom left position-!!"},
"positionOutBottomRight":function(d){return "!!-to the below bottom right position-!!"},
"positionRandom":function(d){return "!!-to the random position-!!"},
"projectileIAProjectile1":function(d){return "!!-hearts-!!"},
"projectileIAProjectile2":function(d){return "!!-boulder-!!"},
"projectileIAProjectile3":function(d){return "!!-ice cube-!!"},
"projectileIAProjectile4":function(d){return "!!-snowflake-!!"},
"projectileIAProjectile5":function(d){return "!!-ice crystal-!!"},
"projectileBlueFireball":function(d){return "!!-blue fireball-!!"},
"projectilePurpleFireball":function(d){return "!!-purple fireball-!!"},
"projectileRedFireball":function(d){return "!!-red fireball-!!"},
"projectileYellowHearts":function(d){return "!!-yellow hearts-!!"},
"projectilePurpleHearts":function(d){return "!!-purple hearts-!!"},
"projectileRedHearts":function(d){return "!!-red hearts-!!"},
"projectileRandom":function(d){return "!!-random-!!"},
"projectileAnna":function(d){return "!!-hook-!!"},
"projectileElsa":function(d){return "!!-sparkle-!!"},
"projectileHiro":function(d){return "!!-microbots-!!"},
"projectileBaymax":function(d){return "!!-rocket-!!"},
"projectileRapunzel":function(d){return "!!-saucepan-!!"},
"projectileCherry":function(d){return "!!-cherry-!!"},
"projectileIce":function(d){return "!!-ice-!!"},
"projectileDuck":function(d){return "!!-duck-!!"},
"reinfFeedbackMsg":function(d){return "!!-You can press the \""+studio_locale.v(d,"backButton")+"\" button to go back to playing your story.-!!"},
"removePoints10":function(d){return "!!-remove 10 points-!!"},
"removePoints50":function(d){return "!!-remove 50 points-!!"},
"removePoints100":function(d){return "!!-remove 100 points-!!"},
"removePoints400":function(d){return "!!-remove 400 points-!!"},
"removePoints1000":function(d){return "!!-remove 1000 points-!!"},
"removePointsTooltip":function(d){return "!!-Remove points from the score.-!!"},
"repeatForever":function(d){return "!!-repeat forever-!!"},
"repeatDo":function(d){return "!!-do-!!"},
"repeatForeverTooltip":function(d){return "!!-Execute the actions in this block repeatedly while the story is running.-!!"},
"saySprite":function(d){return "!!-say-!!"},
"saySpriteN":function(d){return "!!-actor "+studio_locale.v(d,"spriteIndex")+" say-!!"},
"saySpriteTooltip":function(d){return "!!-Pop up a speech bubble with the associated text from the specified actor.-!!"},
"saySpriteChoices_0":function(d){return "!!-Hi there.-!!"},
"saySpriteChoices_1":function(d){return "!!-Hi everyone.-!!"},
"saySpriteChoices_2":function(d){return "!!-How are you doing?-!!"},
"saySpriteChoices_3":function(d){return "!!-Good morning-!!"},
"saySpriteChoices_4":function(d){return "!!-Good afternoon-!!"},
"saySpriteChoices_5":function(d){return "!!-Good night-!!"},
"saySpriteChoices_6":function(d){return "!!-Good evening-!!"},
"saySpriteChoices_7":function(d){return "!!-What’s new?-!!"},
"saySpriteChoices_8":function(d){return "!!-What?-!!"},
"saySpriteChoices_9":function(d){return "!!-Where?-!!"},
"saySpriteChoices_10":function(d){return "!!-When?-!!"},
"saySpriteChoices_11":function(d){return "!!-Good.-!!"},
"saySpriteChoices_12":function(d){return "!!-Great!-!!"},
"saySpriteChoices_13":function(d){return "!!-All right.-!!"},
"saySpriteChoices_14":function(d){return "!!-Not bad.-!!"},
"saySpriteChoices_15":function(d){return "!!-Good luck.-!!"},
"saySpriteChoices_16":function(d){return "!!-Yes-!!"},
"saySpriteChoices_17":function(d){return "!!-No-!!"},
"saySpriteChoices_18":function(d){return "!!-Okay-!!"},
"saySpriteChoices_19":function(d){return "!!-Nice throw!-!!"},
"saySpriteChoices_20":function(d){return "!!-Have a nice day.-!!"},
"saySpriteChoices_21":function(d){return "!!-Bye.-!!"},
"saySpriteChoices_22":function(d){return "!!-I’ll be right back.-!!"},
"saySpriteChoices_23":function(d){return "!!-See you tomorrow!-!!"},
"saySpriteChoices_24":function(d){return "!!-See you later!-!!"},
"saySpriteChoices_25":function(d){return "!!-Take care!-!!"},
"saySpriteChoices_26":function(d){return "!!-Enjoy!-!!"},
"saySpriteChoices_27":function(d){return "!!-I have to go.-!!"},
"saySpriteChoices_28":function(d){return "!!-Want to be friends?-!!"},
"saySpriteChoices_29":function(d){return "!!-Great job!-!!"},
"saySpriteChoices_30":function(d){return "!!-Woo hoo!-!!"},
"saySpriteChoices_31":function(d){return "!!-Yay!-!!"},
"saySpriteChoices_32":function(d){return "!!-Nice to meet you.-!!"},
"saySpriteChoices_33":function(d){return "!!-All right!-!!"},
"saySpriteChoices_34":function(d){return "!!-Thank you-!!"},
"saySpriteChoices_35":function(d){return "!!-No, thank you-!!"},
"saySpriteChoices_36":function(d){return "!!-Aaaaaah!-!!"},
"saySpriteChoices_37":function(d){return "!!-Never mind-!!"},
"saySpriteChoices_38":function(d){return "!!-Today-!!"},
"saySpriteChoices_39":function(d){return "!!-Tomorrow-!!"},
"saySpriteChoices_40":function(d){return "!!-Yesterday-!!"},
"saySpriteChoices_41":function(d){return "!!-I found you!-!!"},
"saySpriteChoices_42":function(d){return "!!-You found me!-!!"},
"saySpriteChoices_43":function(d){return "!!-10, 9, 8, 7, 6, 5, 4, 3, 2, 1!-!!"},
"saySpriteChoices_44":function(d){return "!!-You are great!-!!"},
"saySpriteChoices_45":function(d){return "!!-You are funny!-!!"},
"saySpriteChoices_46":function(d){return "!!-You are silly! -!!"},
"saySpriteChoices_47":function(d){return "!!-You are a good friend!-!!"},
"saySpriteChoices_48":function(d){return "!!-Watch out!-!!"},
"saySpriteChoices_49":function(d){return "!!-Duck!-!!"},
"saySpriteChoices_50":function(d){return "!!-Gotcha!-!!"},
"saySpriteChoices_51":function(d){return "!!-Ow!-!!"},
"saySpriteChoices_52":function(d){return "!!-Sorry!-!!"},
"saySpriteChoices_53":function(d){return "!!-Careful!-!!"},
"saySpriteChoices_54":function(d){return "!!-Whoa!-!!"},
"saySpriteChoices_55":function(d){return "!!-Oops!-!!"},
"saySpriteChoices_56":function(d){return "!!-You almost got me!-!!"},
"saySpriteChoices_57":function(d){return "!!-Nice try!-!!"},
"saySpriteChoices_58":function(d){return "!!-You can’t catch me!-!!"},
"scoreText":function(d){return "!!-Score: "+studio_locale.v(d,"playerScore")+"-!!"},
"setActivityRandom":function(d){return "!!-set activity to random for-!!"},
"setActivityRoam":function(d){return "!!-set activity to roam for-!!"},
"setActivityChase":function(d){return "!!-set activity to chase for-!!"},
"setActivityFlee":function(d){return "!!-set activity to flee for-!!"},
"setActivityNone":function(d){return "!!-set activity to none for-!!"},
"setActivityTooltip":function(d){return "!!-Sets the activity for a set of characters-!!"},
"setBackground":function(d){return "!!-set background-!!"},
"setBackgroundRandom":function(d){return "!!-set random background-!!"},
"setBackgroundBlack":function(d){return "!!-set black background-!!"},
"setBackgroundCave":function(d){return "!!-set cave background-!!"},
"setBackgroundCloudy":function(d){return "!!-set cloudy background-!!"},
"setBackgroundHardcourt":function(d){return "!!-set hardcourt background-!!"},
"setBackgroundNight":function(d){return "!!-set night background-!!"},
"setBackgroundUnderwater":function(d){return "!!-set underwater background-!!"},
"setBackgroundCity":function(d){return "!!-set city background-!!"},
"setBackgroundDesert":function(d){return "!!-set desert background-!!"},
"setBackgroundRainbow":function(d){return "!!-set rainbow background-!!"},
"setBackgroundSoccer":function(d){return "!!-set soccer background-!!"},
"setBackgroundSpace":function(d){return "!!-set space background-!!"},
"setBackgroundTennis":function(d){return "!!-set tennis background-!!"},
"setBackgroundWinter":function(d){return "!!-set winter background-!!"},
"setBackgroundLeafy":function(d){return "!!-set leafy background-!!"},
"setBackgroundGrassy":function(d){return "!!-set grassy background-!!"},
"setBackgroundFlower":function(d){return "!!-set flower background-!!"},
"setBackgroundTile":function(d){return "!!-set tile background-!!"},
"setBackgroundIcy":function(d){return "!!-set icy background-!!"},
"setBackgroundSnowy":function(d){return "!!-set snowy background-!!"},
"setBackgroundEndor":function(d){return "!!-set Endor background-!!"},
"setBackgroundHoth":function(d){return "!!-set Hoth background-!!"},
"setBackgroundStarship":function(d){return "!!-set Starship background-!!"},
"setBackgroundTooltip":function(d){return "!!-Sets the background image-!!"},
"setDroidSpeedRandom":function(d){return "!!-set droid to a random speed-!!"},
"setDroidSpeedSlow":function(d){return "!!-set droid to a slow speed-!!"},
"setDroidSpeedNormal":function(d){return "!!-set droid to a normal speed-!!"},
"setDroidSpeedFast":function(d){return "!!-set droid to a fast speed-!!"},
"setDroidSpeedTooltip":function(d){return "!!-Sets the speed of the droid-!!"},
"setEnemySpeed":function(d){return "!!-set enemy speed-!!"},
"setItemSpeedSet":function(d){return "!!-set type-!!"},
"setItemSpeedTooltip":function(d){return "!!-Sets the speed for a set of characters-!!"},
"setPlayerSpeed":function(d){return "!!-set player speed-!!"},
"setScoreText":function(d){return "!!-set score-!!"},
"setScoreTextTooltip":function(d){return "!!-Sets the text to be displayed in the score area.-!!"},
"setSpriteManny":function(d){return "!!-to a Manny image-!!"},
"setSpriteSid":function(d){return "!!-to a Sid image-!!"},
"setSpriteGranny":function(d){return "!!-to a Granny image-!!"},
"setSpriteDiego":function(d){return "!!-to a Diego image-!!"},
"setSpriteScrat":function(d){return "!!-to a Scrat image-!!"},
"setSpriteEmotionAngry":function(d){return "!!-to an angry mood-!!"},
"setSpriteEmotionHappy":function(d){return "!!-to a happy mood-!!"},
"setSpriteEmotionNormal":function(d){return "!!-to a normal mood-!!"},
"setSpriteEmotionRandom":function(d){return "!!-to a random mood-!!"},
"setSpriteEmotionSad":function(d){return "!!-to a sad mood-!!"},
"setSpriteEmotionTooltip":function(d){return "!!-Sets the actor mood-!!"},
"setSpriteAlien":function(d){return "!!-to an alien image-!!"},
"setSpriteBat":function(d){return "!!-to a bat image-!!"},
"setSpriteBird":function(d){return "!!-to a bird image-!!"},
"setSpriteCat":function(d){return "!!-to a cat image-!!"},
"setSpriteCaveBoy":function(d){return "!!-to a cave boy image-!!"},
"setSpriteCaveGirl":function(d){return "!!-to a cave girl (Jasmine) image-!!"},
"setSpriteDinosaur":function(d){return "!!-to a dinosaur image-!!"},
"setSpriteDog":function(d){return "!!-to a dog image-!!"},
"setSpriteDragon":function(d){return "!!-to a dragon image-!!"},
"setSpriteGhost":function(d){return "!!-to a ghost image-!!"},
"setSpriteHidden":function(d){return "!!-to a hidden image-!!"},
"setSpriteHideK1":function(d){return "!!-hide-!!"},
"setSpriteAnna":function(d){return "!!-to an Anna image-!!"},
"setSpriteElsa":function(d){return "!!-to an Elsa image-!!"},
"setSpriteHiro":function(d){return "!!-to a Hiro image-!!"},
"setSpriteBaymax":function(d){return "!!-to a Baymax image-!!"},
"setSpriteRapunzel":function(d){return "!!-to a Rapunzel image-!!"},
"setSpriteKnight":function(d){return "!!-to a knight image-!!"},
"setSpriteMonster":function(d){return "!!-to a monster image-!!"},
"setSpriteNinja":function(d){return "!!-to a masked ninja image-!!"},
"setSpriteOctopus":function(d){return "!!-to an octopus image-!!"},
"setSpritePenguin":function(d){return "!!-to a penguin (Waddles) image-!!"},
"setSpritePirate":function(d){return "!!-to a pirate image-!!"},
"setSpritePrincess":function(d){return "!!-to a princess image-!!"},
"setSpriteRandom":function(d){return "!!-to a random image-!!"},
"setSpriteRobot":function(d){return "!!-to a robot (Spiff) image-!!"},
"setSpriteShowK1":function(d){return "!!-show-!!"},
"setSpriteSpacebot":function(d){return "!!-to a spacebot image-!!"},
"setSpriteSoccerGirl":function(d){return "!!-to a soccer girl image-!!"},
"setSpriteSoccerBoy":function(d){return "!!-to a soccer boy image-!!"},
"setSpriteSquirrel":function(d){return "!!-to a squirrel image-!!"},
"setSpriteTennisGirl":function(d){return "!!-to a tennis girl image-!!"},
"setSpriteTennisBoy":function(d){return "!!-to a tennis boy image-!!"},
"setSpriteUnicorn":function(d){return "!!-to a unicorn image-!!"},
"setSpriteWitch":function(d){return "!!-to a witch image-!!"},
"setSpriteWizard":function(d){return "!!-to a wizard image-!!"},
"setSpritePositionTooltip":function(d){return "!!-Instantly moves an actor to the specified location.-!!"},
"setSpriteK1Tooltip":function(d){return "!!-Shows or hides the specified actor.-!!"},
"setSpriteTooltip":function(d){return "!!-Sets the actor image-!!"},
"setSpriteSizeRandom":function(d){return "!!-to a random size-!!"},
"setSpriteSizeVerySmall":function(d){return "!!-to a very small size-!!"},
"setSpriteSizeSmall":function(d){return "!!-to a small size-!!"},
"setSpriteSizeNormal":function(d){return "!!-to a normal size-!!"},
"setSpriteSizeLarge":function(d){return "!!-to a large size-!!"},
"setSpriteSizeVeryLarge":function(d){return "!!-to a very large size-!!"},
"setSpriteSizeTooltip":function(d){return "!!-Sets the size of an actor-!!"},
"setSpriteSpeedRandom":function(d){return "!!-to a random speed-!!"},
"setSpriteSpeedVerySlow":function(d){return "!!-to a very slow speed-!!"},
"setSpriteSpeedSlow":function(d){return "!!-to a slow speed-!!"},
"setSpriteSpeedNormal":function(d){return "!!-to a normal speed-!!"},
"setSpriteSpeedFast":function(d){return "!!-to a fast speed-!!"},
"setSpriteSpeedVeryFast":function(d){return "!!-to a very fast speed-!!"},
"setSpriteSpeedTooltip":function(d){return "!!-Sets the speed of an actor-!!"},
"setSpriteZombie":function(d){return "!!-to a zombie image-!!"},
"setSpriteBB8":function(d){return "!!-to BB-8-!!"},
"setSpriteR2D2":function(d){return "!!-to R2-D2-!!"},
"setSpriteC3PO":function(d){return "!!-to C-3PO-!!"},
"setMap":function(d){return "!!-set map-!!"},
"setMapRandom":function(d){return "!!-set random map-!!"},
"setMapBlank":function(d){return "!!-set blank map-!!"},
"setMapCircle":function(d){return "!!-set circle map-!!"},
"setMapCircle2":function(d){return "!!-set circle2 map-!!"},
"setMapHorizontal":function(d){return "!!-set horizontal map-!!"},
"setMapGrid":function(d){return "!!-set grid map-!!"},
"setMapBlobs":function(d){return "!!-set blobs map-!!"},
"setMapTooltip":function(d){return "!!-Changes the map in the scene-!!"},
"shareStudioTwitter":function(d){return "!!-Check out the story I made. I wrote it myself with @codeorg-!!"},
"shareGame":function(d){return "!!-Share your story:-!!"},
"showCoordinates":function(d){return "!!-show coordinates-!!"},
"showCoordinatesTooltip":function(d){return "!!-show the protagonist's coordinates on the screen-!!"},
"showTitleScreen":function(d){return "!!-show title screen-!!"},
"showTitleScreenTitle":function(d){return "!!-title-!!"},
"showTitleScreenText":function(d){return "!!-text-!!"},
"showTSDefTitle":function(d){return "!!-type title here-!!"},
"showTSDefText":function(d){return "!!-type text here-!!"},
"showTitleScreenTooltip":function(d){return "!!-Show a title screen with the associated title and text.-!!"},
"size":function(d){return "!!-size-!!"},
"setSprite":function(d){return "!!-set-!!"},
"setSpriteN":function(d){return "!!-set actor "+studio_locale.v(d,"spriteIndex")+"-!!"},
"soundCrunch":function(d){return "!!-crunch-!!"},
"soundGoal1":function(d){return "!!-goal 1-!!"},
"soundGoal2":function(d){return "!!-goal 2-!!"},
"soundHit":function(d){return "!!-hit-!!"},
"soundLosePoint":function(d){return "!!-lose point-!!"},
"soundLosePoint2":function(d){return "!!-lose point 2-!!"},
"soundRetro":function(d){return "!!-retro-!!"},
"soundRubber":function(d){return "!!-rubber-!!"},
"soundSlap":function(d){return "!!-slap-!!"},
"soundWinPoint":function(d){return "!!-win point-!!"},
"soundWinPoint2":function(d){return "!!-win point 2-!!"},
"soundWood":function(d){return "!!-wood-!!"},
"speed":function(d){return "!!-speed-!!"},
"startSetValue":function(d){return "!!-start (function)-!!"},
"startSetVars":function(d){return "!!-game_vars (title, subtitle, background, target, danger, player)-!!"},
"startSetFuncs":function(d){return "!!-game_funcs (update-target, update-danger, update-player, collide?, on-screen?)-!!"},
"stopSprite":function(d){return "!!-stop-!!"},
"stopSpriteN":function(d){return "!!-stop actor "+studio_locale.v(d,"spriteIndex")+"-!!"},
"stopTooltip":function(d){return "!!-Stops an actor's movement.-!!"},
"throwSprite":function(d){return "!!-throw-!!"},
"throwSpriteN":function(d){return "!!-actor "+studio_locale.v(d,"spriteIndex")+" throw-!!"},
"throwTooltip":function(d){return "!!-Throws a projectile from the specified actor.-!!"},
"vanish":function(d){return "!!-vanish-!!"},
"vanishActorN":function(d){return "!!-vanish actor "+studio_locale.v(d,"spriteIndex")+"-!!"},
"vanishTooltip":function(d){return "!!-Vanishes the actor.-!!"},
"waitFor":function(d){return "!!-wait for-!!"},
"waitSeconds":function(d){return "!!-seconds-!!"},
"waitForClick":function(d){return "!!-wait for click-!!"},
"waitForRandom":function(d){return "!!-wait for random-!!"},
"waitForHalfSecond":function(d){return "!!-wait for a half second-!!"},
"waitFor1Second":function(d){return "!!-wait for 1 second-!!"},
"waitFor2Seconds":function(d){return "!!-wait for 2 seconds-!!"},
"waitFor5Seconds":function(d){return "!!-wait for 5 seconds-!!"},
"waitFor10Seconds":function(d){return "!!-wait for 10 seconds-!!"},
"waitParamsTooltip":function(d){return "!!-Waits for a specified number of seconds or use zero to wait until a click occurs.-!!"},
"waitTooltip":function(d){return "!!-Waits for a specified amount of time or until a click occurs.-!!"},
"whenArrowDown":function(d){return "!!-down arrow-!!"},
"whenArrowLeft":function(d){return "!!-left arrow-!!"},
"whenArrowRight":function(d){return "!!-right arrow-!!"},
"whenArrowUp":function(d){return "!!-up arrow-!!"},
"whenArrowTooltip":function(d){return "!!-Execute the actions below when the specified arrow key is pressed.-!!"},
"whenDown":function(d){return "!!-when down arrow-!!"},
"whenDownTooltip":function(d){return "!!-Execute the actions below when the down arrow key is pressed.-!!"},
"whenGameStarts":function(d){return "!!-when story starts-!!"},
"whenGameStartsTooltip":function(d){return "!!-Execute the actions below when the story starts.-!!"},
"whenGetCharacterPufferPig":function(d){return "!!-when get Puffer Pig-!!"},
"whenGetCharacterStormtrooper":function(d){return "!!-when get Stormtrooper-!!"},
"whenGetCharacterTauntaun":function(d){return "!!-when get Tauntaun-!!"},
"whenGetCharacterMynock":function(d){return "!!-when get Mynock-!!"},
"whenGetCharacterProbot":function(d){return "!!-when get Probot-!!"},
"whenGetCharacterMouseDroid":function(d){return "!!-when get Mouse Droid-!!"},
"whenGetCharacterRebelPilot":function(d){return "!!-when get Rebel Pilot-!!"},
"whenGetCharacterTooltip":function(d){return "!!-Execute the actions below when an actor gets the specified type of character.-!!"},
"whenLeft":function(d){return "!!-when left arrow-!!"},
"whenLeftTooltip":function(d){return "!!-Execute the actions below when the left arrow key is pressed.-!!"},
"whenRight":function(d){return "!!-when right arrow-!!"},
"whenRightTooltip":function(d){return "!!-Execute the actions below when the right arrow key is pressed.-!!"},
"whenSpriteClicked":function(d){return "!!-when actor clicked-!!"},
"whenSpriteClickedN":function(d){return "!!-when actor "+studio_locale.v(d,"spriteIndex")+" clicked-!!"},
"whenSpriteClickedTooltip":function(d){return "!!-Execute the actions below when an actor is clicked.-!!"},
"whenSpriteCollidedN":function(d){return "!!-when actor "+studio_locale.v(d,"spriteIndex")+"-!!"},
"whenSpriteCollidedTooltip":function(d){return "!!-Execute the actions below when an actor touches another actor.-!!"},
"whenSpriteCollidedWith":function(d){return "!!-touches-!!"},
"whenSpriteCollidedWithAnyActor":function(d){return "!!-touches any actor-!!"},
"whenSpriteCollidedWithAnyEdge":function(d){return "!!-touches any edge-!!"},
"whenSpriteCollidedWithAnyProjectile":function(d){return "!!-touches any projectile-!!"},
"whenSpriteCollidedWithAnything":function(d){return "!!-touches anything-!!"},
"whenSpriteCollidedWithN":function(d){return "!!-touches actor "+studio_locale.v(d,"spriteIndex")+"-!!"},
"whenSpriteCollidedWithBlueFireball":function(d){return "!!-touches blue fireball-!!"},
"whenSpriteCollidedWithPurpleFireball":function(d){return "!!-touches purple fireball-!!"},
"whenSpriteCollidedWithRedFireball":function(d){return "!!-touches red fireball-!!"},
"whenSpriteCollidedWithYellowHearts":function(d){return "!!-touches yellow hearts-!!"},
"whenSpriteCollidedWithPurpleHearts":function(d){return "!!-touches purple hearts-!!"},
"whenSpriteCollidedWithRedHearts":function(d){return "!!-touches red hearts-!!"},
"whenSpriteCollidedWithBottomEdge":function(d){return "!!-touches bottom edge-!!"},
"whenSpriteCollidedWithLeftEdge":function(d){return "!!-touches left edge-!!"},
"whenSpriteCollidedWithRightEdge":function(d){return "!!-touches right edge-!!"},
"whenSpriteCollidedWithTopEdge":function(d){return "!!-touches top edge-!!"},
"whenTouchCharacter":function(d){return "!!-when character touched-!!"},
"whenTouchCharacterTooltip":function(d){return "!!-Execute the actions below when the actor touches a character.-!!"},
"whenTouchObstacle":function(d){return "!!-when obstacle touched-!!"},
"whenTouchObstacleTooltip":function(d){return "!!-Execute the actions below when the actor touches an obstacle.-!!"},
"whenTouchGoal":function(d){return "!!-when goal touched-!!"},
"whenTouchGoalTooltip":function(d){return "!!-Execute the actions below when the actor touches a goal.-!!"},
"whenUp":function(d){return "!!-when up arrow-!!"},
"whenUpTooltip":function(d){return "!!-Execute the actions below when the up arrow key is pressed.-!!"},
"winMessage":function(d){return "!!-You win!-!!"},
"yes":function(d){return "!!-Yes-!!"},
"failedHasSetSprite":function(d){return "!!-Next time, set a droid.-!!"},
"failedHassetDroidSpeed":function(d){return "!!-Next time, set a droid speed.-!!"},
"failedHasSetBackground":function(d){return "!!-Next time, set the background.-!!"},
"failedHasSetMap":function(d){return "!!-Next time, set the map.-!!"},
"failedTouchAllItems":function(d){return "!!-Next time, get all the items.-!!"},
"failedScoreMinimum":function(d){return "!!-Next time, reach the minimum score.-!!"},
"failedRemovedItemCount":function(d){return "!!-Next time, get the right number of items.-!!"},
"failedSetActivity":function(d){return "!!-Next time, set the correct character activity.-!!"},
"failedHasWonGame":function(d){return "!!-Next time, win the game.-!!"},
"failedHasLostGame":function(d){return "!!-Next time, lose the game-!!"},
"failedAddItem":function(d){return "!!-Next time, add a character.-!!"},
"failedAvoidHazard":function(d){return "!!-\"Uh oh, a Bandit got you!  Try again.\"-!!"},
"failedHasAllGoals":function(d){return "!!-\"Try again, BB-8.  You can get it.\"-!!"},
"successHasAllGoals":function(d){return "!!-\"You did it, BB-8!\"-!!"},
"successCharacter1":function(d){return "!!-\"Well done, R2-D2!\"-!!"},
"successGenericCharacter":function(d){return "!!-\"Congratulations.  You did it!\"-!!"},
"failedTwoItemsTimeout":function(d){return "!!-You need to get the Rebel Pilots before time runs out. To move, put the goUp and goDown commands inside the whenUp and whenDown functions. Then, press and hold the arrow keys on your keyboard (or screen) to move quickly.-!!"},
"failedFourItemsTimeout":function(d){return "!!-To pass this level, you'll need to put goLeft, goRight, goUp and goDown into the right functions. If your code looks correct, but you can't get there fast enough, try pressing and holding the arrow keys on your keyboard (or screen).-!!"},
"failedScoreTimeout":function(d){return "!!-Try to reach all the Rebel Pilots before time runs out. To move faster, press and hold the arrow keys on your keyboard (or screen).-!!"},
"failedScoreScore":function(d){return "!!-You got the Rebel Pilots, but you still don't have enough points to pass the level. Use the addPoints command to add 100 points when you get a Rebel Pilot.-!!"},
"failedScoreGoals":function(d){return "!!-You used the addPoints command, but not in the right place. Can you put it inside the whenGetRebelPilot function so R2-D2 can't get points until he gets a Rebel Pilot?-!!"},
"failedWinLoseTimeout":function(d){return "!!-Try to reach all the Rebel Pilots before time runs out. To move faster, press and hold the arrow keys on your keyboard (or screen).-!!"},
"failedWinLoseScore":function(d){return "!!-You got the Rebel Pilots, but you still don't have enough points to pass the level. Use the addPoints command to add 100 points when you get a Rebel Pilot. Use removePoints to subtract 100 when you touch a Stormtrooper. Avoid the Stormtroopers!-!!"},
"failedWinLoseGoals":function(d){return "!!-You used the addPoints command, but not in the right place. Can you make it so that the command is only called when you get the Rebel Pilot? Also, remove points when you touch the Stormtrooper.-!!"},
"failedAddCharactersTimeout":function(d){return "!!-Use three addCharacter commands at the top of your program to add Puffer Pigs when you hit run. Now go get them.-!!"},
"failedChainCharactersTimeout":function(d){return "!!-You need to get 20 Mouse Droids. They move fast. Try pressing and holding the keys on your keyboard (or screen) to chase them.-!!"},
"failedChainCharactersScore":function(d){return "!!-You got the Mouse Droids, but you don't have enough points to move to the next level. Make sure you add 100 points to your score every time you get a Mouse Droid.-!!"},
"failedChainCharactersItems":function(d){return "!!-You used the addPoints command, but not in the right place.  Can you make it so that the command is only called when you get the Mouse Droids?-!!"},
"failedChainCharacters2Timeout":function(d){return "!!-You need to get eight Mouse Droids. Can you make two (or more) of them appear every time you get a Tauntaun?-!!"},
"failedChangeSettingTimeout":function(d){return "!!-Get three Rebel Pilots to move on.-!!"},
"failedChangeSettingSettings":function(d){return "!!-Make the level your own. To pass this level, you need to change the map and set your speed.-!!"}};