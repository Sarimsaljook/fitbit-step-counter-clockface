import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import { today } from "user-activity";
import { me as appbit } from "appbit";

function zeroPad(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

const mySteps = document.getElementById("mySteps");

// Update the clock every minute
clock.granularity = "minutes";

// Get a handle on the <text> element
const myLabel = document.getElementById("myLabel");

// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  let today = evt.date;
  let hours = today.getHours();
  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
  } else {
    // 24h format
    hours = zeroPad(hours);
  }
  let mins = zeroPad(today.getMinutes());
  myLabel.text = `${hours}:${mins}`;
}

if (appbit.permissions.granted("access_activity")) {
    console.log(`${today.adjusted.steps} Steps`);
   mySteps.text=`${today.adjusted.steps}`;
 }