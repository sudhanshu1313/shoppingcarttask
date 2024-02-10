// // Fetch data from the JSON file
fetch("https://sudhanshu1313.github.io/taskjson/Data.json")
  .then((response) => response.json())
  .then((AllData) => {
    console.log(AllData);

    let cartItems = []; // Initialize an array to store cart items

    // Map has call Alldata from the  url and generate HTML for each item
    let Data2 = AllData.map((value, index) => {
      return `



      <div>
        <div class="smallbox" onclick="showbig(${index})">
            <div class="smallleft">
              <ul>
                <li class="checked">
                  <div>
                    <h2>${value.name} <span class="badget">${
        value.discount
      }</span></h2>
                    <p>Standard Price</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="smallright">
              <h2>${value.prise1}</h2>
              <p>${value.prise2}</p>
            </div>
          </div>



          

          <div class="big">
          <div class="mostpop">most popular</div>
          <div class="pricesection">
       
            <div class="smallleft bigleft">
            <ul>
            <li class="checked">
              <div>
                <h2>${value.name} <span class="badget">${
        value.discount
      }</span></h2>
                <p>Standard Price</p>
              </div>
            </li>
          </ul>
            </div>
            
            <div class="smallright">
              <h2>${value.prise1}</h2>
              <p>${value.prise2}</p>
            </div>
          </div>
          <div class="colorsection">
            <div class="colorhead colorrow">
              <div></div>
              <div class="colname">Size</div>
              <div class="colname">Colour</div>
            </div>
            ${colorsection(index)}

         
    

          </div>
        </div>
          </div>


      `;
    }).join("");

    // Display the generated HTML in the "SmallBox" element
    document.getElementById("cards").innerHTML = Data2;
  })
  .catch((error) => console.error("Unable to fetch data:", error));

function colorsection(index) {
  let colorelements = "";
  for (i = 0; i <= index; i++) {
    colorelements += ` 
    <div class="colorsecno colorrow">
    <div class="">#${i + 1}</div>
    <div>
      <select class="MainOption">
        <option>&nbsp;S</option>
        <option>&nbsp;M</option>
        <option>&nbsp;L</option>
      </select>
    </div>
    <div>
      <select class="MainOption">
        <option>&nbsp;Red</option>
        <option>&nbsp;Blue</option>
      </select>
    </div>
  </div>`;
  }

  return colorelements;
}

let prevCard = -1;
function showbig(ind) {
  if (prevCard != -1) {
    document.getElementsByClassName("big")[prevCard].style.display = "none";
    document.getElementsByClassName("smallbox")[prevCard].style.display =
      "flex";
  }
  prevCard = ind;
  document.getElementsByClassName("big")[ind].style.display = "block";
  document.getElementsByClassName("smallbox")[ind].style.display = "none";
}
