let printBtn = document.getElementById("print_button");

function printPDF() {
   // Sample dynamic variables
   let logoHeader = document.getElementById("balsigLogoContainer").innerHTML;
   let currentDateStatic = document.getElementById("currentDate").innerHTML;
   let anyoTitle = document.getElementById("anyoTitleApp").innerHTML;
   
   // Clone the content of the table to avoid affecting the original
   let printTable = document.getElementById("main_table").cloneNode(true);
   let printTable2 = document.getElementById("rematch_table").cloneNode(true);
   // let divCatInput = document.getElementById("divCatInput").cloneNode(true);
   
   // Get all input elements within the cloned table
   let inputs = printTable.querySelectorAll("input");
   let inputs2 = printTable2.querySelectorAll("input");
   // let divCatInputs = divCatInput.querySelectorAll("input");
   // console.log(divCatInput);
   
   // Loop through the inputs and replace them with their current values
   inputs.forEach(input => {
       let valueSpan = document.createElement("span");
       valueSpan.innerText = input.value; // Use the value of the input
       input.parentNode.replaceChild(valueSpan, input);
   });

   inputs2.forEach(input => {
       let valueSpan = document.createElement("span");
       valueSpan.innerText = input.value; // Use the value of the input
       input.parentNode.replaceChild(valueSpan, input);
   });

   // divCatInputs.forEach(input => {
   //     let valueSpan = document.createElement("span");
   //     valueSpan.innerText = input.value; // Use the value of the input
   //     input.parentNode.replaceChild(valueSpan, input);
   // });

   // Set up the print window
   var disp_setting = "toolbar=yes,location=no,";
   disp_setting += "directories=yes,menubar=yes,";
   disp_setting += "scrollbars=yes,width=screen.availWidth, height=screen.availHeight, left=100, top=25";
   
   var docprint = window.open("", "_blank", disp_setting);
   
   if (!docprint) {
       alert("Please allow popups for this website");
       return;
   }

   let finalRematchRound = rematchRound;
   console.log(finalRematchRound);
   let finalRowNumberValueRematch = rowNumberValue_Rematch;
   console.log(finalRowNumberValueRematch);

   let viewFinalBtn = viewTableBtn;

   // Write the HTML content with dynamic variables to the new window
   docprint.document.open();
   docprint.document.write(`
       <!DOCTYPE html>
       <html lang="en">
       <head>
           <meta charset="UTF-8">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <link rel="stylesheet" href="main.css">
           <style>
               @media print {
                   body {
                       margin: 20mm; /* Set margins for the print */
                       font-size: 12pt; /* Adjust font size if necessary */
                   }                       
               }
               .balsigLogo { width: 140px; height: 125px; }
               .calculateBtn { display: none; }
               .table_header {
                  text-transform: uppercase;
                  color: black;
                  text-align: center;
                  position: sticky;
                  top: 0px;
                  background-color: pink;
               }
               #head_buttons {
                  position: unset;
               }
           </style>           
       </head>
       <body onload="window.print();"><center>
           ${logoHeader} <!-- Insert the logo header -->
           <p> ${anyoTitle} (${currentDateStatic}) </p>
           ${printTable2.outerHTML}
           ${printTable.outerHTML} <!-- Insert the modified print table -->
       </center>
       <script>
            console.log("rematchRound", ${finalRematchRound});
            console.log(${finalRowNumberValueRematch});
            if (${finalRematchRound} == -1) {
               let mainTableId = document.querySelector("#main_table tbody");
               var rowNumberValue = mainTableId.querySelectorAll("tr").length;
               console.log(rowNumberValue);
               for (let i = 0; i < rowNumberValue; i++) {
                  // Select the first <th> in the <thead>
                  let thToHide = document.querySelector("#main_table thead th:first-child");
                  thToHide.style.display = "none";

                  let rows = document.querySelectorAll("#main_table tbody tr");
                  // Get the first three <td> elements in that row
                  rows.forEach(function(row) {       
                     let cellsToHide = row.querySelectorAll("td:nth-child(-n+3)");             
                     cellsToHide.forEach(function(cell) {
                        cell.style.display = "none";
                     });
                  });
                  break;
               }
            }
            if (${finalRematchRound} >= 0) {
               for (let i = 0; i < ${finalRowNumberValueRematch}; i++) {                       
                  let removeTableRematch = document.getElementById("rematch_table_"+(${finalRematchRound+1}));                 

                  let thToHideActionRematch = removeTableRematch.querySelector("thead th:first-child");
                  let thToHideAction2Rematch = removeTableRematch.querySelector("thead tr:nth-child(2)");
                  let thToHideCalcRematch = thToHideAction2Rematch.querySelector("th");
                  thToHideCalcRematch.style.display = "none";
                  thToHideActionRematch.style.display = "none";

                  let rows = removeTableRematch.querySelectorAll("tbody tr");
                  // Get the first three <td> elements in that row
                  rows.forEach(function(row) {       
                     let cellsToHide = row.querySelectorAll("td:nth-child(-n+3)");             
                     cellsToHide.forEach(function(cell) {
                           cell.style.display = "none";
                     });
                  });
               }
            }
         </script>
       </body>
       </html>
   `);
   docprint.document.close();
}

printBtn.addEventListener("click", () => {
   if (viewTable == 0) {                
      viewTable_button.click();
   }
   printPDF();   
   if (viewTable == 1) {
      viewTable_button.click();
   }
});

function showTime() {
   // Getting current time and date
   const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
   const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
   let time = new Date();
   let date = time.getDate();
   let month = time.getMonth();
   let year = time.getFullYear();
   let day = time.getDay();
   let hour = time.getHours();
   let min = time.getMinutes();
   let sec = time.getSeconds();
   am_pm = " AM";

   // Setting time for 12 Hrs format
   if (hour >= 12) {
       if (hour > 12) hour -= 12;
       am_pm = " PM";
   } else if (hour == 0) {
       hr = 12;
       am_pm = " AM";
   }

   // hour = hour < 10 ? "0" + hour : hour;
   hour = hour;
   min = min < 10 ? "0" + min : min;
   sec = sec < 10 ? "0" + sec : sec;

   let currentTime =
       hour +
       ":" +
       min +
       ":" +
       sec +
       am_pm;

   let currentDay = weekday[day];
   let currentMonth = monthNames[month];
   // Displaying the time
   document.getElementById(
       "currentDate"
   ).innerHTML = `${`Local time:`} ${currentTime} - ${currentDay} - ${currentMonth} ${date}, ${year}`;
}
showTime();
setInterval(showTime, 1000);