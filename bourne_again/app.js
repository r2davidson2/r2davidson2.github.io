


$(() => {

   const $generateCard = () => {
      //Create variable for first name
      const $firstName = $('<div>').text(data.results[0].name.first);
      //Create variable for last name
      const $lastName = $('<div>').text(data.results[0].name.last);
      //Create variable for profile picture
      const $photo = $('<img>').addClass('profile-photo').attr('src', data.results[0].picture.large);
      //Create Identity Profile Card
      const $card = $('<div>').addClass('identity-card');
      //Compile Identity Data together
      const $cardData = $('<div>').append($photo).append($firstName).append($lastName);
      //Add Identity Data to Profile Card
      $card.append($cardData).append($photo);

      $('.carousel-cards').append($card);
   }
   //////////////////////////////
   // Submit Generate Identities
   //////////////////////////////
   $('form').on('submit', (event) => {
      event.preventDefault();
      //Current Image Element
      let $currentCard;

      const nationInput = $(".select").children('option:selected').val();
         console.log(nationInput);

      for (let i = 0; i < 3; i++) {
         // Pull profile data from API
         $.ajax({
           url: `https://randomuser.me/api/?nat=${nationInput}`,
           dataType: 'json',
         }).then(
            (data) => {
               // console.log(data);
               const $firstName = $('<div>').text(data.results[0].name.first);
               const $lastName = $('<div>').text(data.results[0].name.last);
               const $photo = $('<img>').addClass('profile-photo').attr('src', data.results[0].picture.large);
               const $nation = data.results[0].nat;
                  console.log($nation);

               const $card = $('<div>').addClass('identity-card');

               const $cardData = $('<div>').append($photo).append($firstName).append($lastName);

               $card.append($cardData);

            if (i === 0) {
               $card.addClass('show');
               $currentCard = $card;
            } else {
               $card.addClass('hide');
            };

               $('.carousel-cards').append($card);
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
