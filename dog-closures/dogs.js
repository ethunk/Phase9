function dogTalk() {
  let commonDogName = 'Fido';
  let unCommonDogName = 'Susan';

  let stateDogNameOpinion = () => {
    return `I believe ${commonDogName} is an excellent dog name. The name ${unCommonDogName} is a bad dog name.`;
  };

  let stateDogNameFact = () => {
    return `I have never met a dog named ${unCommonDogName}; while several dogs are named ${commonDogName}`;
  };

  let callDogs = () => {
    return `Hey, come here ${commonDogName} and ${unCommonDogName}`;
  };

  return {
    stateDogNameFact,
    stateDogNameOpinion,
    callDogs
  };
}

dog = dogTalk();

dog.stateDogNameFact();
dog.stateDogNameOpinion();
dog.callDogs();
