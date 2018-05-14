let scenario = {
  suspect: 'Pawel',
  weapon: 'Syntax error',
  room: 'Java Room'
};

let veredict = null;

scenario.suspect = 'Sandy';

function plotTwist() {
  let scenario = {
    suspect: 'Keith',
    weapon: 'Slow Database',
    room: 'Sinatra Room'
  };

  if (scenario.suspect === 'Sandy') {

    const changeScenario = function (scenario) {
      let scenario = newScenario;
    }

    changeScenario(scenario);
  }
  const declareCrime = function() {
    declareRealCrime();
  }
  
  declareCrime();
}

function declareRealCrime() {
  veredict = scenario;
}

plotTwist();
console.log("Veredict is:", veredict);
