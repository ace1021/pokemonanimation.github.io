class PokedexAnimation {
  constructor() {
    this.timeLeft = 3;
    this.timer = null;
    $('.playButton').addClass('animateText');
    $('.mainPokedex').addClass('hidden');
    $('.mapList').on('click', this.dropDownList);
    $('.battleField').on('click', ".locationChoice", this.clickOnMapLocation);
    $('.playButton').on('click', this.openPokedex);
  }

  openPokedex = () => {
    const backgroundMusic = new Audio("./pokemonbattle.mp3");
    backgroundMusic.play();
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

  dropDownList = () => {
    $('ul').toggleClass('battleField');
  }


  clickOnMapLocation = (event) => {
    $('.playButton').addClass('animateText');
    $('.listOfMapLocations').addClass('hidden');
    $('.playButton').css('opacity', '100%')
    const locationClick = $(event.currentTarget);
    const city = locationClick.attr('id');
    this.selectMap(city);
    this.fiveSecCountdown();
    this.closePokedex();
    this.timer = setInterval(this.fiveSecCountdown, 1000);
  }


  fiveSecCountdown = () => {
    const playButton = $('.playButton')
    if (this.timeLeft == -1) {
      clearTimeout(this.timer)
    } else {
      $('.playButton').text(this.timeLeft);
      this.timeLeft--;
    }
    if (playButton.text() === '0') {
      playButton.text('GET READY');
    }
  }

  selectMap = (city) => {
    switch (city) {
      case 'LA':
        var location1 = new Maps(34.044227, -118.267254, 'staplesCenter', 15);
        location1.render();
        break;
      case 'NYC':
        var location2 = new Maps(40.7306, -73.9867, 'rockefellerCenter', 15);
        location2.render();
        break;
      case 'tokyo':
        var location3 = new Maps(35.6828, 139.759, 'tokyoCentral', 15);
        location3.render();
        break;
      case 'SF':
        var location4 = new Maps(37.820090, -122.477654, 'goldenGateBridge', 13);
        location4.render();
        break;
      case 'antarctica':
        var location5 = new Maps(-76.282679, 22.190994, 'antarctica', 2);
        location5.render();
        break;
      case 'southAfrica':
        var location6 = new Maps(-26.2051, 28.0497, 'johannesburg', 15);
        location6.render();
        break;
      case 'southAmerica':
        var location7 = new Maps(-25.689901, -54.441011, 'iguazuFalls', 13);
        location7.render();
        break;
      case 'southKorea':
        var location8 = new Maps(37.5667, 126.9783, 'seoul', 15);
        location8.render();
        break;
      case 'london':
        var location9 = new Maps(51.5073, -0.1277, 'bigBen', 15);
        location9.render();
        break;
      case 'irvine':
        var location10 = new Maps(33.635196, -117.740545, 'learningFuze', 15);
        location10.render();
        break;
    }
  }
}
