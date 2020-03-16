
//====================| Find More Elements |=================================
var mainButtonContainer = document.getElementsByClassName('main-button-cover')[0];
var learnMore = document.getElementsByClassName('learnMoreArea')[0];
var HeroAreaFooter = document.getElementsByClassName('footer')[0];
var mainFooter = document.getElementsByClassName('main-footer')[0];
var underHeroArea = document.getElementsByClassName('under-hero-area')[0];
var contributorAreaCover = document.getElementsByClassName('contributorArea')[0];
var overviewContent = document.getElementById('popUp-content');
var contentContainers = document.getElementsByClassName('contentContainers');
var card = document.getElementsByClassName('card')[0];
var cardfront = document.getElementsByClassName('card__front')[0];
var cardScene = document.getElementsByClassName('scene')[0];

//====================| Button interval and click event |==========================
var hmm = 0;
var buttonInterval = setInterval(forButton, 500);
function forButton() {
    hmm += 0.5;

     if(hmm >= 9.5) {
       
        clearInterval(buttonInterval);
        mainButton.innerHTML = '<code>Overview</code>';
        mainButtonContainer.style.width = '85px';
    
        mainButton.style.justifyContent = 'center';
        mainButton.style.padding = '10px 15px';
        var toggleButton = 1;

        mainButton.onclick = function() { 
           card.classList.toggle('flipcard-on-button-click');

            switch(toggleButton) {
                case 1:
                    learnMore.style.display = 'none';
                    HeroAreaFooter.style.display = 'none';
                    document.body.style.background = 'white'; 
                    
                    mainButton.innerHTML = '<code> Home </code>';
                    mainButtonContainer.style.width = '30px';
                    mainButtonContainer.style.marginRight = '50px';
                    mainButton.style.padding = '10px 20px';

                    underHeroArea.style.background = 'white';
                    contentContainers[0].style.display = 'block';
                    contentContainers[1].style.display = 'block';
                    contentContainers[2].style.display = 'block';
                    mainFooter.style.display = 'flex';

                    cardfront.style.filter = 'blur(3px)';
                    cardfront.style.webkitFilter = 'blur(3px)';

                    cardfront.style.transition = 'all 1s 0.05s';
                    cardfront.style.webkitTransition = 'all 1s 0.05s';

                    cardScene.style.marginLeft = '30px';
                    cardScene.style.transition = 'margin-left 1s 0.05s';
                    cardScene.style.webkitTransition = 'margin-left 1s 0.05s';
                   
                    if (overviewContent.className === 'hideBeforeButtonClick') {
                        overviewContent.className = 'showOnbuttonclick';
                    }

                    break;

                default:
                    learnMore.style.display = 'flex';
                    HeroAreaFooter.style.display = 'flex';
                    document.body.style.background = '#158';

                    mainButton.innerHTML = '<code>Overview</code>';
                    mainButton.style.padding = '10px 15px';
                    mainButtonContainer.style.width = '85px';
                    mainButtonContainer.style.marginRight = '40px';
                    
                    contentContainers[0].style.display = 'none';
                    contentContainers[1].style.display = 'none';
                    contentContainers[2].style.display = 'none';
                    mainFooter.style.display = 'none';

                    cardfront.style.filter = 'none';
                    cardfront.style.webkitFilter = 'none';

                    cardScene.style.marginLeft = '0';
                   
                    
                    if (overviewContent.className === 'showOnbuttonclick') {
                        overviewContent.className = 'hideBeforeButtonClick';
                    }

            }



            if (toggleButton == 1) {

                 /*=============================================
                Getting media query not easy with only switch 
                statement.
                ===============================================*/

                var deviceSizes = [
                    window.matchMedia( "(min-width: 768px)" ),
                    window.matchMedia( "(min-width: 790px)" )
                ]

                function respondToQuery() {
                    if (deviceSizes[0].matches) {
                        mainContentSide.style.gridTemplateRows = '420px 1fr';
                    }

                    if (deviceSizes[1].matches) {
                        mainContentSide.style.gridTemplateRows = '420px 1fr';
                    }

                    if (!deviceSizes[0].matches && !deviceSizes[1].matches) {
                        mainContentSide.style.gridTemplateRows = '370px 1fr';
                    }
                }

                for (var i=0; i<deviceSizes.length; i++) {
                    respondToQuery(deviceSizes[i]);
                    deviceSizes[i].addListener(respondToQuery);    
                }

            }

            if (toggleButton == 2) {
                toggleButton = 1;
                toggleButton--;

                /*=============================================
                Getting media query not easy with only switch 
                statement.
                ===============================================*/
                var deviceSizes = [
                    window.matchMedia( "(min-width: 768px)" ),
                    window.matchMedia( "(min-width: 790px)" )
                ]

                function respondToQuery() {
                    if (deviceSizes[0].matches) {
                        mainContentSide.style.gridTemplateRows = '1fr 0fr';
                        learnMore.style.marginTop = '4px';
                    }

                    if (deviceSizes[1].matches) {
                        mainContentSide.style.gridTemplateRows = '1fr 0fr';
                        learnMore.style.marginTop = '130px';
                    }

                    if (!deviceSizes[0].matches && !deviceSizes[1].matches) {
                        mainContentSide.style.gridTemplateRows = '1fr 0fr';
                        learnMore.style.marginTop = '4px';
                    }
                }

                for (var i=0; i<deviceSizes.length; i++) {
                    respondToQuery(deviceSizes[i]);
                    deviceSizes[i].addListener(respondToQuery);
                }
            }
        
           toggleButton++;
        }
    }
}
   

