/*----------
variables
------------*/

var number_of_pairs_matched =0;
var game_state = 'no card chosen';
var card_numbers_array =[
  1, 2, 3, 4, 5, 6, 7, 8,
  1, 2, 3, 4, 5, 6, 7, 8
];
var firstCrd = '';
/*--------
actions or functions (method)
----------*/
/* 1.when page loads ------------*/
//declaring function
function when_page_loads () {
  console.log('page loaded');
  shuffel_and_deal_cards();//function call
}

//calling the function
when_page_loads();


/*2. shuffel and deal cards----*/
//decraring
function shuffel_and_deal_cards() {
   console.log('shuffel and deal');


//randomize arrey
console.log(card_numbers_array);
card_numbers_array = randomize (card_numbers_array);
console.log(card_numbers_array);



//replace images in document
$(card_numbers_array).each(function(index){
var newImage = 'img/' + card_numbers_array[index] + '.png';
$('.deck img:eq('+index+')').attr('data-reveal', newImage);
});

//reset match count to zero
number_of_pairs_matched = 0;
$('.deck img') .attr('src', 'img/cover.png');
update_user_feedback('Pick Two');

}

//3. update user feedback
function update_user_feedback(message) {
  $('.feedback').html(message);

}


//4.clicking on a card
function click_on_card() {
  console.log(game_state);
//if first card is choosen, app waits for second card
  if (game_state == 'no card chosen')
  {
    game_state = 'one card chosen';
    firstCard = $(this);
    console.log(firstCard);

    $(this).off('click');//temporarly disabled click events

    firstCard.attr('src', firstCard.attr('data-reveal'));
  }

  //if second card choosen, app checks to see if they are a match
  else if (game_state == 'one card chosen')
  {
    game_state = 'two cards chosen';
    console.log('do the stuff if 2 cards are chosen');


    var card1_reveal = firstCard.attr('data-reveal');
    var card2_reveal = $(this).attr('data-reveal');

    $(this).attr('src', $(this).attr('data-reveal'));


    $(this).off('click');//temporarly disabled click events

  //compare reveal to see if they match or number_of_pairs_matched
    //if No match,
    if (card1_reveal != card2_reveal)
    {
      //hide both cards
      var secondCard = $(this); //grabs second card
      setTimeout(function(){
         firstCard.attr('src', 'img/cover.png');
         secondCard.attr('src', 'img/cover.png');
         game_state = 'no card chosen'

        firstCard.click(click_on_card);
        secondCard.click(click_on_card);

       }, 1000);

      //update user feedback to read "sorry no match"
      update_user_feedback("Dang It! Try Again.");
    }
    else   //if match
    {

        //leave chosen displayed
        //update user feedback to read "ypu found the match"
        update_user_feedback("WhoHoo!!!");

        //chack if you won the game
        check_if_they_won();

      }

  }
}

$('.deck img').click(click_on_card);


/*5.  check if user won game------*/

function check_if_they_won() {
  //incraments
  number_of_pairs_matched = number_of_pairs_matched + 1;

  if (number_of_pairs_matched  ==8)
  {
    update_user_feedback("WhoHoo, Winner!");
  }
  else
  {
    firstCard = '';
    game_state = 'no card chosen';
  }
}

/*6. reset button----*/
function reset_game() {
  shuffel_and_deal_cards();
}
$('.reset').click(reset_game);
