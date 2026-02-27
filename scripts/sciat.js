define([
  "pipAPI",
  "https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/stiat/qualtrics/qstiat6.js"
], function(APIConstructor, stiatExtension){

  var API = new APIConstructor();

  return stiatExtension({

    // ====== SINGLE TARGET CATEGORY (your marketplace objects) ======
    category : {
      name  : "FitnessOption",
      title : {
        media : { word : "Fitness-oriented option" },
        css   : { "font-size" : "2em" },
        height: 7
      },
      media : [
        { word : "protein bar" },
        { word : "pre-workout" },
        { word : "fat burner" },
        { word : "performance supplement" },
        { word : "creatine" },
        { word : "whey protein" },
        { word : "zero sugar energy drink" },
        { word : "cutting pills" },
        { word : "steroids" },
        { word : "weight-loss injection" }
      ],
      css : { "font-size" : "3em" }
    },

    // ====== ATTRIBUTES ======
    attribute1 : { // typically mapped as "Unhealthy" in one key pairing
      name  : "Unhealthy",
      title : {
        media : { word : "Unhealthy" },
        css   : { "font-size" : "2em" },
        height: 7
      },
      media : [
        { word : "harmful" },
        { word : "risky" },
        { word : "damaging" },
        { word : "toxic" },
        { word : "unhealthful" },
        { word : "bad-for-you" }
      ],
      css : { "font-size" : "3em" }
    },

    attribute2 : { // typically mapped as "Healthy" in the other key pairing
      name  : "Healthy",
      title : {
        media : { word : "Healthy" },
        css   : { "font-size" : "2em" },
        height: 7
      },
      media : [
        { word : "wholesome" },
        { word : "beneficial" },
        { word : "nourishing" },
        { word : "healthful" },
        { word : "safe" },
        { word : "good-for-you" }
      ],
      css : { "font-size" : "3em" }
    }

    // Note: qstiat6.js has defaults for block/trial structure.
    // If you want me to hard-set block lengths, error feedback, or counterbalancing,
    // paste your current sciat.js and I'll modify it precisely to that extension's options.

  });
});
