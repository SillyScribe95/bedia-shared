export const imageDcito = {
  brandonSand:
    //
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Brandon_Sanderson_-_Lucca_Comics_%26_Games_2016.jpg/549px-Brandon_Sanderson_-_Lucca_Comics_%26_Games_2016.jpg",
  trudeau:
    //
    "https://drive.google.com/uc?id=1y7QLtaTepJ3VUahW9-hTZU5mKwo2HY3i",
  // "https://upload.wikimedia.org/wikipedia/commons/9/98/Prime_Minister_Trudeau_-_2020_%28cropped%29.jpg",
  donaldtrump:
    "https://upload.wikimedia.org/wikipedia/commons/5/53/Donald_Trump_official_portrait_%28cropped%29.jpg",

  sadguru:
    //
    // "https://images.sadhguru.org/sites/default/files/inline-images/isha-home-mystic_new.jpg",
    "https://drive.google.com/uc?id=1txK5OyPx3H0rTZl5kwDGHo735l_Ku5Ph",

  barackobama:
    //
    "https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg",
  sillyscribe:
    //
    "https://i.ibb.co/StNDSgp/61208873-2224691057608944-8209156586971594752-n.jpg",
  michelleobama:
    "https://upload.wikimedia.org/wikipedia/commons/8/81/Michelle_Obama_at_the_DNC_July_2016_%28cropped%29.jpg",
};
const trumpSpo = {
  imageAttr: imageDcito["donaldtrump"],
  slugURL: "cb990ddf44",
  name: "Donald Trump",
  numberMeta: "50 episodes, 4 speakers",
};
const trudeaSpo = {
  imageAttr: imageDcito["trudeau"],
  slugURL: "1f55575b6b",
  name: "Justin Trudeau",
};
const baracko = {
  imageAttr: imageDcito["barackobama"],
  slugURL: "0d682c3f40",
  name: "Barack Obama",
};
const michelow = {
  imageAttr: imageDcito["michelleobama"],
  slugURL: "053a3f9269",
  name: "Michelle Obama",
};
const sadhue = {
  imageAttr: imageDcito["sadguru"],
  slugURL: "49a362f73f",
  name: "Sadhguru",
};
export const andrewSp = {
  imageAttr: imageDcito["sillyscribe"],
  slugURL: "sillyscribe",
  name: "Andrew Maguire (sillyScribe)",
};

// 1speaker
export const allVdeo = "allVideos";
const speakerDict = {
  trump: trumpSpo,
  trudeau: trudeaSpo,
  barack: baracko,
  michelle: michelow,
  sadhguru: sadhue,
};

export const listSpeakExams = [
  speakerDict["trump"],
  speakerDict["trudeau"],
  speakerDict["barack"],
  speakerDict["michelle"],
  speakerDict["trump"],
  speakerDict["trump"],
  speakerDict["trump"],
  speakerDict["trump"],
  speakerDict["trump"],
];
