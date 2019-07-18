$(() => {


   // Pull profile data from API
   $.ajax({
     url: 'https://randomuser.me/api/?inc=?gender=female,?results=3',
     dataType: 'json',
     // success: function(data) {
     //   console.log(data);
     // }
   }).then(
      (data) => {
         console.log(data);
   },
      (error) => {
         console.log(error);
      }
   );

});
