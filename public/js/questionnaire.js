document.getElementById('questionnaireForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const outdoorOrIndoor = prompt("Do you prefer outdoor activities (e.g., hiking) or indoor activities (e.g., movies)?");
    const adventureLevel = prompt("How adventurous are you feeling today? (Options: Not at all, Somewhat, Very)");
    const nightlifeType = nightlifePreference === "Yes" ? prompt("What type of nightlife activities do you enjoy? (e.g., clubbing, live music)") : null;
    const cuisinePreference = prompt("What type of cuisine do you enjoy the most? (Options: Italian, Mexican, Asian, American, Other)");
    const activityDuration = prompt("How long would you like the date activity to last? (Options: Short and sweet, Half-day, Full-day)");
    const romanticOrCasual = prompt("Are you in the mood for a romantic date or a more casual and laid-back one?");
    const budget = prompt("What's your preferred budget range for this date? (Options: Low, Moderate, High)");
    const interestsHobbies = prompt("What are some of your interests or hobbies? (e.g., art, music, sports)");

    const userResponses = {
        outdoor_or_indoor: outdoorOrIndoor,
        adventure_level: adventureLevel,
        nightlife_type: nightlifeType,
        cuisine_preference: cuisinePreference,
        activity_duration: activityDuration,
        romantic_or_casual: romanticOrCasual,
        budget: budget,
        interests_hobbies: interestsHobbies,
    };

    
    // Send the userResponses object to your Node.js backend using an HTTP request (e.g., AJAX or fetch)


});
