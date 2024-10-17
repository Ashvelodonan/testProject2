// let PEKAF_title = "balsig";
// document.getElementById("app_title").textContent = PEKAF_title.toUpperCase();
// document.getElementById("app_title").style.textAlign = "center";
document.getElementById("customTitleInput").value = `${"115th Baguio Day"} ${`National Invitational Arnis Tournament`}`;
let anyoTitleApp = document.getElementById("anyoTitleApp");
anyoTitleApp.textContent = "anyo".toUpperCase();

var rowNumberValue = 0;
let checkBox_element = [];
let resetPlayer_button_element = [];
let stopWatch_button_element = [];
let rowNumber_element = [];
let competitor_name_element = [];
let judgesScoresPerCol_element = [];
let finalScorePerCol_element = [];
let timeRecord_element = [];
let timeViolation_element = [];
let lineViolation_element = [];
let disarmViolation_element = [];
let rank_element = [];
let totalNumberRows = document.getElementById("totalNumber_Rows");
let addRowFieldButton = document.getElementById("addRow_button");
let removeRowFieldButton = document.getElementById("removeRow_button");
let calculateButton = document.getElementById("calculate_button");
let generateRowsButton = document.getElementById("generateNumRows");
let desiredNumRowsInput = document.getElementById("desiredNumberOfRows");
let customTitleInput = document.getElementById("customTitleInput");
document.getElementById("desiredNumberOfRows").value = 10;

//functions
//
var myTable = document.getElementById("dataTableBody");
var currentIndex = myTable.rows.length;

function addRowField() {    
    var currentRow = myTable.insertRow(-1);
    rowNumberValue += 1;
    currentRow.id = "tr_"+rowNumberValue;
    totalNumberRows.textContent = rowNumberValue;
//cells.create
    var toSelectCheckInputLabel = document.createElement("label");
    toSelectCheckInputLabel.className = "checkbox_label"

    var toSelectCheckInput = document.createElement("input");
    toSelectCheckInput.setAttribute("type", "checkbox");
    toSelectCheckInput.setAttribute("class", "checkbox_input");
    toSelectCheckInput.setAttribute("id", "toSelect_"+ rowNumberValue);

    var toSelectCheckInputSpan = document.createElement("span");
    toSelectCheckInputSpan.setAttribute("class", "checkbox_span");
    
    var resetPlayerButton = document.createElement("button");    
    resetPlayerButton.setAttribute("class", "stopWatch_button_reset");
    // resetPlayerButton.setAttribute("class", "hideElement");
    resetPlayerButton.setAttribute("id", "resetPlayerButton_" + rowNumberValue);
    resetPlayerButton.textContent = "reset".toUpperCase();

    var stopWatchButton = document.createElement("button");
    stopWatchButton.setAttribute("class", "stopWatch_button_record");
    // stopWatchButton.setAttribute("class", "hideElement");
    stopWatchButton.setAttribute("id", "stopWatchButton_" + rowNumberValue);
    stopWatchButton.textContent = "record".toUpperCase();

    var rowNumber = document.createElement("input");
    rowNumber.value = rowNumberValue;
    rowNumber.setAttribute("class", "default_number");
    rowNumber.setAttribute("type", "number");
    rowNumber.setAttribute("id", "row_number_" + rowNumberValue);
    rowNumber.setAttribute("readonly", true);
    // rowNumber.style.textAlign = "center";
    // rowNumber.style.width = rowNumber.value.length + "ch"; 

    var competitor_name = document.createElement("input");
    competitor_name.setAttribute("class", "competitor");
    competitor_name.setAttribute("type", "text"); 
    competitor_name.setAttribute("id", "competitor_name_" + rowNumberValue);
    // competitor_name.style.width = competitor_name.value.length + "ch";

    var judgeScore_First = document.createElement("input");
    judgeScore_First.setAttribute("class", "judge_scores");
    judgeScore_First.setAttribute("type", "number");
    judgeScore_First.setAttribute("id", "judgeScore_First_" + rowNumberValue);
    judgeScore_First.setAttribute("min", "0");
    judgeScore_First.setAttribute("max", "10");
    // judgeScore_First.setAttribute("value", "10");

    var judgeScore_Second = document.createElement("input");
    judgeScore_Second.setAttribute("class", "judge_scores");
    judgeScore_Second.setAttribute("type", "number");
    judgeScore_Second.setAttribute("id", "judgeScore_Second_" + rowNumberValue);
    judgeScore_Second.setAttribute("min", "0");
    judgeScore_Second.setAttribute("max", "10");

    var judgeScore_Third = document.createElement("input");
    judgeScore_Third.setAttribute("class", "judge_scores");
    judgeScore_Third.setAttribute("type", "number");
    judgeScore_Third.setAttribute("id", "judgeScore_Third_" + rowNumberValue);
    judgeScore_Third.setAttribute("min", "0");
    judgeScore_Third.setAttribute("max", "10");

    var judgeScore_Fourth = document.createElement("input");
    judgeScore_Fourth.setAttribute("class", "judge_scores");
    judgeScore_Fourth.setAttribute("type", "number");
    judgeScore_Fourth.setAttribute("id", "judgeScore_Fourth_" + rowNumberValue);
    judgeScore_Fourth.setAttribute("min", "0");
    judgeScore_Fourth.setAttribute("max", "10");

    var judgeScore_Fifth = document.createElement("input");
    judgeScore_Fifth.setAttribute("class", "judge_scores");
    judgeScore_Fifth.setAttribute("type", "number");
    judgeScore_Fifth.setAttribute("id", "judgeScore_Fifth_" + rowNumberValue);
    judgeScore_Fifth.setAttribute("min", "0");
    judgeScore_Fifth.setAttribute("max", "10");

    var timeStamp = document.createElement("input");
    timeStamp.setAttribute("class", "timestamp");
    timeStamp.setAttribute("type", "text");
    timeStamp.setAttribute("id", "timeStamp_" + rowNumberValue);    
    timeStamp.setAttribute("readonly", true);

    var timeViolation = document.createElement("input");
    timeViolation.setAttribute("class", "violations");
    timeViolation.setAttribute("type", "number");
    timeViolation.setAttribute("id", "timeViolation_" + rowNumberValue);
    timeViolation.setAttribute("readonly", true);

    var lineViolation = document.createElement("input");
    lineViolation.setAttribute("class", "violations");
    lineViolation.setAttribute("type", "number");
    lineViolation.setAttribute("id", "lineViolation_" + rowNumberValue);

    var disarmViolation = document.createElement("input");
    disarmViolation.setAttribute("class", "violations");
    disarmViolation.setAttribute("type", "number");
    disarmViolation.setAttribute("id", "disarmViolation_" + rowNumberValue);

    // var netScore = document.createElement("input");
    // netScore.setAttribute("class", "netscore");
    // netScore.setAttribute("type", "number");
    // netScore.setAttribute("id", "netScore_" + rowNumberValue);
    // netScore.setAttribute("readonly", true);

    var finalScore = document.createElement("input");    
    finalScore.setAttribute("class", "finalscore");
    finalScore.setAttribute("type", "number");
    finalScore.setAttribute("id", "finalScore_" + rowNumberValue);
    finalScore.setAttribute("readonly", true);

    var rank = document.createElement("input");
    rank.setAttribute("class", "rank");
    rank.setAttribute("type", "number");
    rank.setAttribute("id", "rank_" + rowNumberValue);
    rank.setAttribute("readonly", true);

//cells.append

    var toSelectButtonCell = currentRow.insertCell(-1);
    toSelectButtonCell.appendChild(toSelectCheckInputLabel);
    toSelectCheckInputLabel.appendChild(toSelectCheckInput);
    toSelectCheckInputLabel.appendChild(toSelectCheckInputSpan);

    var resetPlayerButtonCell = currentRow.insertCell(-1);
    resetPlayerButtonCell.appendChild(resetPlayerButton);

    var stopWatchButtonCell = currentRow.insertCell(-1);
    stopWatchButtonCell.appendChild(stopWatchButton);

    var rowNumberCell = currentRow.insertCell(-1);
    rowNumberCell.appendChild(rowNumber);

    var competitorNameCell = currentRow.insertCell(-1);
    competitorNameCell.appendChild(competitor_name);

    var judgeScoreCell_First = currentRow.insertCell(-1);
    judgeScoreCell_First.appendChild(judgeScore_First);
    
    var judgeScoreCell_Second = currentRow.insertCell(-1);
    judgeScoreCell_Second.appendChild(judgeScore_Second);
    
    var judgeScoreCell_Third = currentRow.insertCell(-1);
    judgeScoreCell_Third.appendChild(judgeScore_Third);
    
    var judgeScoreCell_Fourth = currentRow.insertCell(-1);
    judgeScoreCell_Fourth.appendChild(judgeScore_Fourth);
    
    var judgeScoreCell_Fifth = currentRow.insertCell(-1);
    judgeScoreCell_Fifth.appendChild(judgeScore_Fifth);

    var timeStampCell = currentRow.insertCell(-1);
    timeStampCell.appendChild(timeStamp);

    var timeViolationCell = currentRow.insertCell(-1);
    timeViolationCell.appendChild(timeViolation);

    var lineViolationCell = currentRow.insertCell(-1);
    lineViolationCell.appendChild(lineViolation);

    var disarmViolationCell = currentRow.insertCell(-1);
    disarmViolationCell.appendChild(disarmViolation);

    // var netScoreCell = currentRow.insertCell(-1);
    // netScoreCell.appendChild(netScore);

    var finalScoreCell = currentRow.insertCell(-1);
    finalScoreCell.appendChild(finalScore);

    var rankCell = currentRow.insertCell(-1);
    rankCell.appendChild(rank);

    console.log(`rowNumberValue: ${rowNumberValue}`);
    
    competitor_name.value = "Player "+rowNumberValue;
    
    let min = 1;
    let max = 10;    
    // judgeScore_Second.setAttribute("value", Math.floor(Math.random() * max) + min);
    
    judgeScore_First.setAttribute("value", (Math.random() * max).toFixed(1));
    judgeScore_Second.setAttribute("value", (Math.random() * max).toFixed(1));
    judgeScore_Third.setAttribute("value", (Math.random() * max).toFixed(1));
    judgeScore_Fourth.setAttribute("value", (Math.random() * max).toFixed(1));
    judgeScore_Fifth.setAttribute("value", (Math.random() * max).toFixed(1));

    if (judgeScore_First.value == 10.0) {
        judgeScore_First.value = 10
    }

    if (judgeScore_Second.value == 10.0) {
        judgeScore_Second.value = 10
    }

    if (judgeScore_Third.value == 10.0) {
        judgeScore_Third.value = 10
    }

    if (judgeScore_Fourth.value == 10.0) {
        judgeScore_Fourth.value = 10
    }

    if (judgeScore_Fifth.value == 10.0) {
        judgeScore_Fifth.value = 10
    }

    // saveElement in Array
    checkBox_element[rowNumberValue-1] = [toSelectCheckInput];
    resetPlayer_button_element[rowNumberValue-1] = [resetPlayerButton];
    stopWatch_button_element[rowNumberValue-1] = [stopWatchButton];
    rowNumber_element[rowNumberValue-1] = [rowNumber];
    competitor_name_element[rowNumberValue-1] = [competitor_name];
    judgesScoresPerCol_element[rowNumberValue-1] = [judgeScore_First, judgeScore_Second,
        judgeScore_Third, judgeScore_Fourth, judgeScore_Fifth];    
    timeRecord_element[rowNumberValue-1] = [timeStamp];
    timeViolation_element[rowNumberValue-1] = [timeViolation];
    lineViolation_element[rowNumberValue-1] = [lineViolation];
    disarmViolation_element[rowNumberValue-1] = [disarmViolation];
    finalScorePerCol_element[rowNumberValue-1] = [finalScore];
    rank_element[rowNumberValue-1] = [rank];
    // END saveElement

    console.log(judgesScoresPerCol_element);
    console.log(judgesScoresPerCol_element[rowNumberValue-1]);
    
    let targetElement_resetPlayerButton = document.getElementById("resetPlayerButton_"+ (rowNumberValue));
    let targetElement_finalScore = document.getElementById("finalScore_"+ (rowNumberValue));
    let targetElement_lineViolation = document.getElementById("lineViolation_"+ (rowNumberValue));
    let targetElement_disarmViolation = document.getElementById("disarmViolation_"+ (rowNumberValue));
    let targetElement_rank = document.getElementById("rank_"+ (rowNumberValue));

    let targetElement_judgeScore_First = document.getElementById("judgeScore_First_"+ (rowNumberValue));
    let targetElement_judgeScore_Second = document.getElementById("judgeScore_Second_"+ (rowNumberValue));
    let targetElement_judgeScore_Third = document.getElementById("judgeScore_Third_"+ (rowNumberValue));
    let targetElement_judgeScore_Fourth = document.getElementById("judgeScore_Fourth_"+ (rowNumberValue));
    let targetElement_judgeScore_Fifth = document.getElementById("judgeScore_Fifth_"+ (rowNumberValue));

    let targetElement_stopWatchButton = document.getElementById("stopWatchButton_"+ (rowNumberValue));
    let targetElement_timeRecord = document.getElementById("timeStamp_"+ (rowNumberValue));
    let targetElement_timeViolation = document.getElementById("timeViolation_"+ (rowNumberValue));
    let targetElement_competitorName = document.getElementById("competitor_name_"+ (rowNumberValue));

    targetElement_competitorName.addEventListener("keypress", () => {
        updateChWidths();
        targetElement_competitorName.addEventListener("change", () => {
            updateChWidths();
        });
    });

    targetElement_resetPlayerButton.addEventListener("click", () => {
        let defaultScore = 0;
        targetElement_judgeScore_First.value = defaultScore;
        targetElement_judgeScore_Second.value = defaultScore;
        targetElement_judgeScore_Third.value = defaultScore;
        targetElement_judgeScore_Fourth.value = defaultScore;
        targetElement_judgeScore_Fifth.value = defaultScore;
        targetElement_timeRecord.value = "";
        targetElement_timeViolation.value = "";
        targetElement_lineViolation.value = "";
        targetElement_disarmViolation.value = "";
        targetElement_finalScore.value = "";
        targetElement_rank.value = "";
        targetElement_judgeScore_First.classList.replace("judge_scores_removed", "judge_scores");
        targetElement_judgeScore_Second.classList.replace("judge_scores_removed", "judge_scores");
        targetElement_judgeScore_Third.classList.replace("judge_scores_removed", "judge_scores");
        targetElement_judgeScore_Fourth.classList.replace("judge_scores_removed", "judge_scores");
        targetElement_judgeScore_Fifth.classList.replace("judge_scores_removed", "judge_scores");
        targetElement_finalScore.classList.replace("finalscore_selected", "finalscore");
        targetElement_rank.classList.replace("rank_gold", "rank");
        targetElement_rank.classList.replace("rank_silver", "rank");
        targetElement_rank.classList.replace("rank_bronze", "rank");
        
        console.log("clickResetPlayer");
    });
    
    targetElement_stopWatchButton.addEventListener("click", () => {
        let s = second;
        let min = minute;
        let ms = millisecond;
        let ts = totalSeconds;

        if (minute <= 9) {
            min = "0"+min;
        }
        if (second <= 9) {
            s = "0"+s;
        }
        if (millisecond <= 9) {
            ms = "0"+ms;
        }
        
        targetElement_timeRecord.value = `${min}:${s}:${ms}`;
        console.log(`${rowNumberValue}
            ${targetElement_timeRecord.value}`);

        if (ts <= 59 || ts >= 121) {
            targetElement_timeViolation.value = 0.5;
        } else {
            targetElement_timeViolation.value = 0;
        }
    });   

    //Checking strict input
    let normalNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let j = 0; j < judgesScoresPerCol_element[rowNumberValue-1].length; j++) {
        let targetElementJudgeLoop = judgesScoresPerCol_element[rowNumberValue-1][j];

        targetElementJudgeLoop.addEventListener("change", () => {
            if (targetElementJudgeLoop.value == "") {
                targetElementJudgeLoop.value = 0;
            }
    
            if (targetElementJudgeLoop.value == 0) {
                targetElementJudgeLoop.value = parseFloat(targetElementJudgeLoop.value).toFixed(1);
            }
    
            if (targetElementJudgeLoop.value > 0 && targetElementJudgeLoop.value != 10) {
                targetElementJudgeLoop.value = parseFloat(targetElementJudgeLoop.value).toFixed(1);
            }
        });

        targetElementJudgeLoop.addEventListener("input", () => {
            if (targetElementJudgeLoop.value == "") {
                targetElementJudgeLoop.value = "";
            }
            if (targetElementJudgeLoop.value.length == 4
                || targetElementJudgeLoop.value < 0) {            
    
                    targetElementJudgeLoop.value = "";
            }
            if (targetElementJudgeLoop.value == 10.0 
                || targetElementJudgeLoop.value > 10) {
    
                    targetElementJudgeLoop.value = 10;
            }
            for (checkNormalNumbers = 0; checkNormalNumbers < normalNumbers.length; checkNormalNumbers++) {                
                if (targetElementJudgeLoop.value == "0"+normalNumbers[checkNormalNumbers]) {                    
                    targetElementJudgeLoop.value = "";
                }
            }
        });
    }
    //ENDAddEventListener
};
addRowField();

function updateChWidths() {
    let maxChLength = 0;
    let selectCompNameElement = competitor_name_element;

    for (let i = 0; i < rowNumberValue; i++) {
        let selectCompNameElementPerI = competitor_name_element[i][0];

        selectCompNameElement.forEach(() => {
            maxChLength = Math.max(maxChLength, selectCompNameElementPerI.value.length);
        });

        selectCompNameElement.forEach(() => {
            selectCompNameElementPerI.style.width = `${maxChLength-1}ch`;
        });        
    }
};

function removeRowField() {
    if (rowNumberValue >= 1) {
        myTable.deleteRow(-1);
        judgesScoresPerCol_element.pop();
        timeRecord_element.pop();
        timeViolation_element.pop();
        lineViolation_element.pop();
        disarmViolation_element.pop();
        finalScorePerCol_element.pop();
        finalScorePerCol_judgesSum.pop();
        judgeScoreShifted.pop();
        judgeScorePopped.pop();
    }

    if (rowNumberValue == 1) {        
        console.clear();
    }

    if (rowNumberValue == 0 || rowNumberValue == -1) {
        rowNumberValue = 0;
    } else {
        rowNumberValue -= 1;
        totalNumberRows.textContent = rowNumberValue;
    }

    if (rowNumberValue < 1) {
        addRowField();
    }
};
//functions
//END

//addEventListeners 
//
let finalScorePerCol_judgesSum = []; //1D-array
let judgeScoreShifted = []; //1D-array
let judgeScorePopped = []; //1D-array
let uniqueSortedValues = [...new Set(finalScorePerCol_judgesSum)].sort((a, b) => a - b);
let rankMap = {};
let sortedJudgesScoreCol = [];
let duplicates = {};
let detectedDuplicateJudgeScores = new Set();

calculateButton.addEventListener("click", () => { //calculate
    finalScorePerCol_judgesSum = [];
    judgeScoreShifted = [];
    judgeScorePopped = [];
    let totalSum = 0;
    for (let i = 0; i < rowNumberValue; i++) {        
        let targetElement_finalScore = document.getElementById("finalScore_"+ (i + 1));
        sortedJudgesScoreCol = [];
        totalSum = 0;
        for (let j = 0; j < judgesScoresPerCol_element[i].length; j++) {
            
            let judgeScoreCol = parseFloat(judgesScoresPerCol_element[i][j].value);
            judgeScoreCol.toFixed(1);
            sortedJudgesScoreCol.push(judgeScoreCol);

            judgesScoresPerCol_element[i][j].classList.replace("judge_scores_removed", "judge_scores");
            
            if (j == judgesScoresPerCol_element[i].length-1) {
                console.log(sortedJudgesScoreCol);

                sortedJudgesScoreCol.sort(function(a, b) {
                    return a - b;
                });

                console.log(sortedJudgesScoreCol);
                judgeScoreShifted[i] = sortedJudgesScoreCol.shift();
                judgeScorePopped[i] = sortedJudgesScoreCol.pop();

                detectedDuplicateJudgeScores = new Set();
                let minValue = Math.min(...judgesScoresPerCol_element[i].map(el => el.value));
                let maxValue = Math.max(...judgesScoresPerCol_element[i].map(el => el.value));
                let minHighlighted = false;
                let maxHighlighted = false;

                for (let removedScores = 0; removedScores < judgesScoresPerCol_element[i].length; removedScores++) {
                    let targetElement_judgeScorePerCol_element = judgesScoresPerCol_element[i][removedScores];
                    minValue = parseFloat(minValue).toFixed(1);
                    maxValue = parseFloat(maxValue).toFixed(1);

                    if (targetElement_judgeScorePerCol_element.value == judgeScoreShifted[i]) {
                        console.log(targetElement_judgeScorePerCol_element.value);
                        console.log(detectedDuplicateJudgeScores);
                        if (!detectedDuplicateJudgeScores.has(targetElement_judgeScorePerCol_element.value)) {
                            targetElement_judgeScorePerCol_element.classList.replace("judge_scores", "judge_scores_removed");
                            detectedDuplicateJudgeScores.add(targetElement_judgeScorePerCol_element.value);
                        }

                        if (targetElement_judgeScorePerCol_element.value == minValue && !minHighlighted) {
                            console.log(minValue);
                            targetElement_judgeScorePerCol_element.classList.replace("judge_scores", "judge_scores_removed");
                            minHighlighted = true;
                            console.log(minHighlighted);
                        }
                        if (targetElement_judgeScorePerCol_element.value == maxValue && !maxHighlighted) {
                            console.log(maxValue);
                            targetElement_judgeScorePerCol_element.classList.replace("judge_scores", "judge_scores_removed");
                            maxHighlighted = true;
                            console.log(maxHighlighted);
                        }
                    }
                    if (targetElement_judgeScorePerCol_element.value == judgeScorePopped[i]) {
                        if (!detectedDuplicateJudgeScores.has(targetElement_judgeScorePerCol_element.value)) {
                            targetElement_judgeScorePerCol_element.classList.replace("judge_scores", "judge_scores_removed");
                            detectedDuplicateJudgeScores.add(targetElement_judgeScorePerCol_element.value);
                        }

                        if (targetElement_judgeScorePerCol_element.value == minValue && !minHighlighted) {
                            console.log("min", minValue);
                            targetElement_judgeScorePerCol_element.classList.replace("judge_scores", "judge_scores_removed");
                            minHighlighted = true;
                        }    
                        if (targetElement_judgeScorePerCol_element.value == maxValue && !maxHighlighted) {
                            console.log("max", maxValue);
                            targetElement_judgeScorePerCol_element.classList.replace("judge_scores", "judge_scores_removed");
                            maxHighlighted = true;
                        }
                    }       
                }

                console.log("low:", judgeScoreShifted);
                console.log("high:", judgeScorePopped);
                console.log("sorted:", sortedJudgesScoreCol);

                var rawScoreSum = 0;
                for (let l = 0; l < sortedJudgesScoreCol.length; l++) {
                    rawScoreSum += sortedJudgesScoreCol[l];
                }
                rawScoreSum = parseFloat(rawScoreSum.toFixed(1));
                console.log("rawScore:", rawScoreSum);
            }            
        }

        totalSum = rawScoreSum - 
        timeViolation_element[i][0].value - 
        lineViolation_element[i][0].value - 
        disarmViolation_element[i][0].value;

        targetElement_finalScore.value = totalSum.toFixed(1);
        finalScorePerCol_judgesSum.push(totalSum.toFixed(1));
    }

    duplicates = {};
    // First, find duplicates
    for (let i = 0; i < rowNumberValue; i++) {
        const currentValue = finalScorePerCol_judgesSum[i];
        // If the value is already a key, increment the count; otherwise, initialize it
        if (duplicates[currentValue]) {
            duplicates[currentValue].count += 1;
            duplicates[currentValue].indices.push(i); // Store the index of the duplicate
        } else {
            duplicates[currentValue] = { count: 1, indices: [i] };
        }
    }

    // Now apply a condition to all duplicates
    for (const key in duplicates) {
        if (duplicates[key].count > 1) {
            // If there are duplicates, apply your condition
            for (const index of duplicates[key].indices) {
                let rawScoreSum = 0;
                let targetElement_finalScore = document.getElementById("finalScore_"+ (index + 1));
                console.log(`Condition applied to player ${index+1} with value: ${key}`);

                for (let j = 0; j < judgesScoresPerCol_element[index].length; j++) {
                    let targetElement_judgeScorePerCol_element = judgesScoresPerCol_element[index][j];
                    let judgeScoreCol = parseFloat(judgesScoresPerCol_element[index][j].value);
                    targetElement_judgeScorePerCol_element.classList.replace("judge_scores_removed", "judge_scores");
                    judgeScoreCol.toFixed(1);
                    console.log(`${rawScoreSum}+${judgeScoreCol}`);
                    rawScoreSum += judgeScoreCol;
                    console.log(`= ${rawScoreSum}`);
                }
                //compute total sum = final score
                totalSum = rawScoreSum - 
                timeViolation_element[index][0].value - 
                lineViolation_element[index][0].value - 
                disarmViolation_element[index][0].value;
                
                targetElement_finalScore.value = totalSum.toFixed(1);
                finalScorePerCol_judgesSum[index] = targetElement_finalScore.value;
                console.log(finalScorePerCol_judgesSum[index]);
            }
        }
    }

    //forloop for rank 
    uniqueSortedValues = [...new Set(finalScorePerCol_judgesSum)].sort((a, b) => b - a);
    rankMap = {};
    let currentRank = 1;
    console.log(uniqueSortedValues);

    for (let i = 0; i < uniqueSortedValues.length; i++) {
        if (i > 0 && uniqueSortedValues[i] === uniqueSortedValues[i - 1]) {
            rankMap[uniqueSortedValues[i]] = currentRank;
        } else {
            rankMap[uniqueSortedValues[i]] = currentRank;
            currentRank++;
        }
    }
    
    //ranking to look for ties
    for (let i = 0; i < finalScorePerCol_judgesSum.length; i++) {
        let targetElement_rank = document.getElementById("rank_"+ (i+1));
        let targetElement_finalScore = document.getElementById("finalScore_"+( i+1));
        targetElement_finalScore.classList.replace("finalscore_selected", "finalscore");
        targetElement_rank.classList.replace("rank_gold", "rank");
        targetElement_rank.classList.replace("rank_silver", "rank");
        targetElement_rank.classList.replace("rank_bronze", "rank");

        if (finalScorePerCol_element[i][0].value == finalScorePerCol_judgesSum[i]) {            
            targetElement_rank.value = rankMap[finalScorePerCol_judgesSum[i]];
        }
        if (targetElement_rank.value == 1) {
            targetElement_rank.classList.replace("rank", "rank_gold");
            targetElement_finalScore.classList.replace("finalscore", "finalscore_selected");
        }
        if (targetElement_rank.value == 2) {
            targetElement_rank.classList.replace("rank", "rank_silver");
            targetElement_finalScore.classList.replace("finalscore", "finalscore_selected");
        }
        if (targetElement_rank.value == 3) {
            targetElement_rank.classList.replace("rank", "rank_bronze");
            targetElement_finalScore.classList.replace("finalscore", "finalscore_selected");
        }
    }    
    console.log(`${rowNumberValue-1}) ${finalScorePerCol_judgesSum}`);
});

customTitleInput.addEventListener("keypress", () => {
    let maxChLength = customTitleInput.value.length;
    maxChLength = Math.max(maxChLength, customTitleInput.value.length);
    customTitleInput.style.width = `${maxChLength}ch`;

    customTitleInput.addEventListener("change", () => {
        maxChLength = Math.max(maxChLength, customTitleInput.value.length);
        customTitleInput.style.width = `${maxChLength}ch`;
    });
});

customTitleInput.addEventListener("click", () => {
    let maxChLength = customTitleInput.value.length;
    maxChLength = Math.max(maxChLength, customTitleInput.value.length);
    customTitleInput.style.width = `${maxChLength}ch`;

    customTitleInput.addEventListener("change", () => {
        maxChLength = Math.max(maxChLength, customTitleInput.value.length);
        customTitleInput.style.width = `${maxChLength}ch`;
    });
});
customTitleInput.click();

generateRowsButton.addEventListener("click", () => {
    if (desiredNumRowsInput.value == "") {
        alert("Please enter number of rows!");
    } else {
        console.clear();
        let currentRowNumberValue = rowNumberValue;
        desiredNumRowsValue = desiredNumRowsInput.value;
        if (rowNumberValue >= 1) {
            for (i = 0; i < currentRowNumberValue; i++) {
                removeRowField();
                console.clear();
            }
        }

        for (i = 0; i < desiredNumRowsValue - 1; i++) {
            addRowField();
        }
        desiredNumRowsInput.value = "";
    }    
});
generateRowsButton.click();

addRowFieldButton.addEventListener("click", () => {
    addRowField();
});

removeRowFieldButton.addEventListener("click", () => {
    removeRowField();
});
//addEventListeners
//END

//https://stackoverflow.com/questions/19199942/add-table-row-with-javascript-onclick