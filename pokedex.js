class PokedexAnimation {
  constructor() {
    $('.playButton').addClass('animateText');
    $('.mainPokedex').addClass('hidden');
    $('.playButton').on('click', this.openPokedex);
  }

  openPokedex() {
    $('.playButton').css('opacity', '10%');
    $('.playButton').removeClass('animateText');
    $('.closedPokedex').removeClass('hidden');
    $('.topPokedex').removeClass('hidden');
    $('.bottomPokedex').removeClass('hidden');
    $('.spinningPokeball').removeClass('hidden').addClass('spinPokeball');

    setTimeout(function () {
      $('.spinningPokeball').addClass('hidden');
    }, 2000);
    setTimeout(function () {
      $('.closedPokedex').addClass('hidden')
      $('.topPokedex').addClass('openPokedexUp');
      $('.bottomPokedex').addClass('openPokedexDown');
    }, 2100);
    setTimeout(function () {
      $('.centerInnerPokedex').removeClass('hidden');
    }, 1000)
    setTimeout(function () {
      $('.topInnerPokedex').removeClass('hidden');
      $('.bottomInnerPokedex').removeClass('hidden');
    }, 2500);
    setTimeout(function () {
      $('.mainPokedex').removeClass('hidden');
    }, 3000);
  }

  closePokedex = () => {
    setTimeout(function () {
      $('.topPokedex').addClass('closePokedexDown');
      $('.bottomPokedex').addClass('closePokedexUp');
    }, 3000)
    setTimeout(function () {
      $('.topInnerPokedex').addClass('hidden');
      $('.bottomInnerPokedex').addClass('hidden');
    }, 3300)
    setTimeout(function () {
      $('.displayMap').addClass('hidden');
    }, 3800)
    setTimeout(function () {
      $('.centerInnerPokedex').addClass('hidden');
    }, 4000)
  }

}
