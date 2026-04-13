// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  applyFilter(increaseGreenByBlue);
  applyFilterNoBackground(reddify);
  applyFilter(decreaseBlue);
  applyFilterNoBackground(reddify);

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
function applyFilter(filterFunction) {
  for (var i = 0; i < image.length; i++) {
    for (var j = 0; j < image[i].length; j++) {
      pixel = image[i][j];
      pixelArray = rgbStringToArray(pixel);
      //TODOO COLOR MOD
      filterFunction(pixelArray);
      //pixelArray[RED] = 200;

      updatedPixel = rgbArrayToString(pixelArray);
      image[i][j] = updatedPixel;
    }
  }
}

// TODO 9 Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) {
  var backgroundColor = image[0][0];
  for (var k = 0; k < image.length; k++) {
    for (var l = 0; l < image[i].length; l++) {
      if (image[k][l] !== backgroundColor) {
        pixelArr = rgbStringToArray(pixel);
        filterFunction(pixelArr);
        updatedPixelArr = rgbArrayToString(pixelArr);

        image[k][l] = updatedPixelArr;
      }
    }
  }
}
// TODO 6: Create the keepInBounds function
function keepInBounds(numm) {
  if (numb < 0) {
    return 0;
  } else if (numb > 255) {
    return 255;
  } else {
    return numb;
  }
}

// TODO 4: Create reddify filter function

function reddify(array) {
  array[RED] = 200;
}

// TODO 7 & 8: Create more filter functions
function decreaseBlue(arrayy) {
  arrayy[BLUE] -= 50;
  arrayy[BLUE] = keepInBounds(arrayy[BLUE]);
}
function increaseGreenByBlue(arrayyy) {
  arrayyy[GREEN] += arrayyy[BLUE];
  arrayyy[GREEN] = keepInBounds(arrayyy[GREEN]);
}
// CHALLENGE code goes below here
