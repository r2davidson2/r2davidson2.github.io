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

      const ageInput = $(".age-input").val();
         // console.log(ageInput);
      const genderInput = $(".gender-input").val();
         // console.log(genderInput);

      for (i = 0; i < 3; i++) {
         // Pull profile data from API
         $.ajax({
           url: `https://randomuser.me/api/?gender=${genderInput}`,
           dataType: 'json',
         }).then(
            (data) => {
               const $firstName = $('<div>').text(data.results[0].name.first);
               const $lastName = $('<div>').text(data.results[0].name.last);
               const $photo = $('<img>').addClass('profile-photo').attr('src', data.results[0].picture.large);
               const $card = $('<div>').addClass('identity-card');

               const $cardData = $('<div>').append($photo).append($firstName).append($lastName);

               $card.append($cardData);

               $('.carousel-cards').append($card);

               console.log($photo);
               console.log(data.results[0].gender);
         },
            (error) => {
               console.log(error);
            }
         );

      };
   });

   //////////////////////
   // Carousel Variables
   //////////////////////
   let currentCarouselCard = 0;

   let $currentCard = $('.carousel-cards').children().eq(currentCarouselCard);

   let numberOfCards = $('.carousel-cards').children().length -1;
   //////////////////////
   // NEXT BUTTON
   //////////////////////
   const $nextButton = $('next');

   $next.on('click', () => {

   })

});
