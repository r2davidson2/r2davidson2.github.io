const nationalityTranslation = (data) => {
   if (data.results[0].nat === 'AU') {
      return 'Nationality: Australian';
   } else if (data.results[0].nat === 'BR') {
      return 'Nationality: Brazilian';
   } else if (data.results[0].nat === 'CA') {
      return 'Nationality: Canadian';
   } else if (data.results[0].nat === 'CH') {
      return 'Nationality: Swiss';
   } else if (data.results[0].nat === 'DE') {
      return 'Nationality: German';
   } else if (data.results[0].nat === 'DK') {
      return 'Nationality: Danish';
   } else if (data.results[0].nat === 'ES') {
      return 'Nationality: Spanish';
   } else if (data.results[0].nat === 'FI') {
      return 'Nationality: Finnish';
   } else if (data.results[0].nat === 'FR') {
      return 'Nationality: French';
   } else if (data.results[0].nat === 'GB') {
      return 'Nationality: British';
   } else if (data.results[0].nat === 'IE') {
      return 'Nationality: Irish';
   } else if (data.results[0].nat === 'IR') {
      return 'Nationality: Iranian';
   } else if (data.results[0].nat === 'NO') {
      return 'Nationality: Norwegian';
   } else if (data.results[0].nat === 'NL') {
      return 'Nationality: Dutch';
   } else if (data.results[0].nat === 'NZ') {
      return 'Nationality: Kiwi';
   } else if (data.results[0].nat === 'TR') {
      return 'Nationality: Turkish';
   } else if (data.results[0].nat === 'US') {
      return 'Nationality: American';
   }
};

const randomSelector = (array) => {
   Math.floor(Math.random() * array.length);
};
//Array used to generate 'Specialises In' on Profiles
const specialiseInSmuggling = ['Animals (Except Dingos)', 'Dingos', 'Food & Agriculture', 'Fine Art', 'Antiques & Rare Relics', 'Fine Wine/Moonshine', 'Diamonds', 'Gems & Precious Metals', 'Heavy Metals & Compounds', 'Secret Information', 'Electronics'];
//Array of Languages used to generate 'Fluent In' on Profiles
const languagesFluentIn = ['english', 'spanish', 'french', 'german', 'portuguese', 'italian', 'mandarin', 'hindi', 'arabic', 'russian', 'turkish', 'polish', 'danish', 'swedish', 'irish gaelic', 'norwegian', 'dutch', 'persian', 'finnish'];
//Array used to randomly select the number of languages spoken on Profiles
const randomNumberOfLanguages = [2, 3, 4, 5];





$(() => {

   //////////////////////////////
   // Submit Generate Selection
   //////////////////////////////

   $('button').on('click', (event) => {
      event.preventDefault();
      //Current Image Element
      let $currentCard;

      $('.carousel-cards').empty();
      //Create Carousel Buttons Variable
      const $carouselButtons = $('.carousel-button');
      //Create Nation Input Variable
      const nationInput = $(".select").children('option:selected').val();
         // console.log(nationInput);
      //Generate Profiles to Choose From
      for (let i = 0; i < 3; i++) {
         // Pull profile data from API
         $.ajax({
           url: `https://randomuser.me/api/?nat=${nationInput}`,
           dataType: 'json',
         }).then(
            (data) => {
               //Create Profile First Name Variable
               const $firstName = $('<p>').text(data.results[0].name.first);
               //Create Profile Last Name Variable
               const $lastName = $('<p>').text(data.results[0].name.last);
               //Create Profile Full Name Variable
               const $fullName = $('<p>').text(`Alias: ${data.results[0].name.first} ${data.results[0].name.last}`);
               //Create Profile Photo Variable
               const $photo = $('<img>').addClass('profile-photo').attr('src', data.results[0].picture.large);
               //Create Profile Nationality Variable
               const $nationality = $('<p>').text(nationalityTranslation(data));
                  // console.log($nationality);
               ////////////////////////////////////
               //Create Profile Smuggling Specialty
               ////////////////////////////////////
               const generateSmugglingSpecialties = () => {
                  let listOfSpecialties = '';

                  for (let i = 1; i <= 3; i++) {
                     let specialty = specialiseInSmuggling[Math.floor(Math.random() * 11)];

                     if (i === 1) {
                        if (listOfSpecialties.includes(specialty) === false) {
                           listOfSpecialties += specialty;
                           console.log(listOfSpecialties);
                        }
                     } else {
                        if (listOfSpecialties.includes(specialty) === false) {
                           listOfSpecialties += ', ' + specialty;
                           console.log(listOfSpecialties);
                        }
                     }
                  }
                  return listOfSpecialties;
                  console.log(listOfSpecialties);
               };
               //Create Variable of Smuggling Specialties
               const $specialisesInSmuggling = $('<p>').text('Specialises in: ' + generateSmugglingSpecialties());
               ////////////////////////////////////
               //Create Profile Languages Fluent In
               ////////////////////////////////////
               //Generate Native Language
               const nativeLanguage = () => {
                  if (data.results[0].nat === 'AU') {
                     return 'english';
                  } else if (data.results[0].nat === 'BR') {
                     return 'portuguese';
                  } else if (data.results[0].nat === 'CA') {
                     return 'english';
                  } else if (data.results[0].nat === 'CH') {
                     return 'french';
                  } else if (data.results[0].nat === 'DE') {
                     return 'german';
                  } else if (data.results[0].nat === 'DK') {
                     return 'danish';
                  } else if (data.results[0].nat === 'ES') {
                     return 'spanish';
                  } else if (data.results[0].nat === 'FI') {
                     return 'finnish';
                  } else if (data.results[0].nat === 'FR') {
                     return 'french';
                  } else if (data.results[0].nat === 'GB') {
                     return 'english';
                  } else if (data.results[0].nat === 'IE') {
                     return 'irish gaelic';
                  } else if (data.results[0].nat === 'IR') {
                     return 'persian';
                  } else if (data.results[0].nat === 'NO') {
                     return 'norwegian';
                  } else if (data.results[0].nat === 'NL') {
                     return 'dutch';
                  } else if (data.results[0].nat === 'NZ') {
                     return 'english';
                  } else if (data.results[0].nat === 'TR') {
                     return 'turkish';
               } else if (data.results[0].nat === 'US') {
                     return 'english';
                  }
               };
               //Generate Additional Languages
               const $generateLanguages = () => {
                  let fluentIn = nativeLanguage();
                  let randomizer = Math.floor(Math.random() * 4);

                  for (let i = 0; i < randomNumberOfLanguages[randomizer]; i++) {
                     let language = languagesFluentIn[Math.floor(Math.random() * 17)];
                     if (fluentIn.includes(language) === false) {
                        fluentIn += ', ' + language;
                     }
                  }
                  return fluentIn;
               };
               //Create Variable of All Languages Spoken
               const $languagesSpoken = $('<p>').text('Fluent in: ' + $generateLanguages());
               //Create Profile Card as a div and add a class
               const $card = $('<div>').addClass('identity-card');
               //Append Profile Data to the Profile Card used in the Carousel
               const $cardData = $('<div>').append($photo).append($fullName).append($nationality).append($specialisesInSmuggling).append($languagesSpoken);

               $card.append($cardData);

            if (i === 0) {
               $card.addClass('show');
               $carouselButtons.removeClass('hide').addClass('show');
               $currentCard = $card;
            } else {
               $card.addClass('hide');
            };

               $('.carousel-cards').append($card);

               //////////////////////
               // SELECT SMUGGLR BUTTON
               //////////////////////
               const $hireSmuggler = $('.choose-smugglr');
               const hireSmugglerWebsiteRedirect = () => {
                  if (data.results[0].nat === 'AU') {
                     return 'https://www.abf.gov.au/importing-exporting-and-manufacturing/prohibited-goods/list-of-items';
                  } else if (data.results[0].nat === 'BR') {
                     return 'http://www.pmerj.rj.gov.br/';
                  } else if (data.results[0].nat === 'CA') {
                     return 'https://www.cbsa-asfc.gc.ca/travel-voyage/rpg-mrp-eng.html';
                  } else if (data.results[0].nat === 'CH') {
                     return 'https://www.ezv.admin.ch/ezv/en/home/information-individuals/travel-and-purchases--allowances-and-duty-free-limit/importation-into-switzerland/restrictions.html';
                  } else if (data.results[0].nat === 'DE') {
                     return 'https://www.zoll.de/EN/Private-individuals/Travel/Entering-Germany/Restrictions/restrictions_node.html;jsessionid=607DFF0524B81227FFAF8BEAB861C784.live4651';
                  } else if (data.results[0].nat === 'DK') {
                     return 'https://politi.dk/koebenhavns-politi';
                  } else if (data.results[0].nat === 'ES') {
                     return 'https://www.policia.es/';
                  } else if (data.results[0].nat === 'FI') {
                     return 'https://tulli.fi/en/private-persons/travelling/restrictions';
                  } else if (data.results[0].nat === 'FR') {
                     return 'http://ee.france.fr/en/information/customs-rules';
                  } else if (data.results[0].nat === 'GB') {
                     return 'https://www.gov.uk/duty-free-goods/banned-and-restricted-goods';
                  } else if (data.results[0].nat === 'IE') {
                     return 'https://www.revenue.ie/en/customs-traders-and-agents/prohibitions-and-restrictions/index.aspx';
                  } else if (data.results[0].nat === 'IR') {
                     return 'http://www.irica.gov.ir/general_content/77254/77254.htm';
                  } else if (data.results[0].nat === 'NO') {
                     return 'https://www.toll.no/en/goods/';
                  } else if (data.results[0].nat === 'NL') {
                     return 'https://www.belastingdienst.nl/wps/wcm/connect/bldcontenten/belastingdienst/individuals/abroad_and_customs/restricted_prohibited_import_export/';
                  } else if (data.results[0].nat === 'NZ') {
                     return 'https://www.customs.govt.nz/business/import/prohibited-and-restricted-imports/prohibitions-and-restrictions/';
                  } else if (data.results[0].nat === 'TR') {
                     return 'https://www.trade.gov.tr/';
                  } else if (data.results[0].nat === 'US') {
                     return 'https://www.cbp.gov/travel/us-citizens/know-before-you-go/prohibited-and-restricted-items';
                  }
               };
               $hireSmuggler.attr('href', hireSmugglerWebsiteRedirect());
         },
            (error) => {
               console.log(error);
            }
         );

      };

      //////////////////////
      // Carousel Variables
      //////////////////////
      //Count Variable to Track Current Image Index
      let currentCarouselCard = 0;
      //Total Number of Cards
      let numberOfCards = 2;
      //////////////////////
      // NEXT BUTTON
      //////////////////////
      const $nextButton = $('.next');

      $nextButton.on('click', () => {
         $currentCard.removeClass('show').addClass('hide');

         if (currentCarouselCard < numberOfCards) {
            currentCarouselCard++;
         } else {
            currentCarouselCard = 0;
         };

         $currentCard = $('.carousel-cards').children().eq(currentCarouselCard);
         $currentCard.removeClass('hide').addClass('show');
            // console.log($currentCard);
            // console.log(currentCarouselCard);
      });
      //////////////////////
      // PREVIOUS BUTTON
      //////////////////////
      const $previousButton = $('.previous');

      $previousButton.on('click', () => {
         $currentCard.removeClass('show').addClass('hide');

         if (currentCarouselCard > 0) {
            currentCarouselCard--;
         } else {
            currentCarouselCard = numberOfCards;
         };

         $currentCard = $('.carousel-cards').children().eq(currentCarouselCard);
         $currentCard.removeClass('hide').addClass('show');
      })

   });

});
