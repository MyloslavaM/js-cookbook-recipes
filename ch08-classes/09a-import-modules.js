//************* COMPENDIUM ********************* */
/*
You want to import created modules from 09-modules file
*/

import { Units, LengthConverter } from "./ch08-classes/09-modules.js";

function doSampleConversion() {
  const lengthInMiles = 495;
  const lengthInElephants = LengthConverter.Convert(
    lengthInMiles,
    Units.Feet,
    Units.Yards,
  );
  alert(lengthInElephants);
}

export { doSampleConversion };
