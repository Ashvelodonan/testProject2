let addNewTableBtn = document.getElementById("addNewTable_button");
let removeNewTableBtn = document.getElementById("removeNewTable_button");
let rematchTableContainer = document.getElementById("rematch_table");
let rematchRoundIndicator = document.getElementById("rematchRoundIndicator");

var rematchRound = -1;
var rowNumberValue_Rematch = 0;
var rowNumberValue_RematchArr = [];
let judgeScoresRematch = []; //testingBut can be used for storing scores
let calculateButtonRematch_element = []; 
let checkBoxInputRematch_element = [];
let resetBtnRematch_element = [];
let recordBtnRematch_element = [];
let rowNumberInputRematch_element = [];
let competitorNameInputRematch_element = [];
let jScoresElement_element = [];
let timeStampRematch_element = [];
let violationsInputRematch_element = [];
let scoreRankInputRematch_element = [];

let finalScorePerCol_judgesSum_rematch = [];
let judgeScoreShifted_rematch = [];
let judgeScorePopped_rematch = [];
let uniqueSortedValues_rematch = [...new Set(finalScorePerCol_judgesSum_rematch)].sort((a, b) => a - b);
let rankMap_rematch = {};
let sortedJudgesScoreCol_rematch = [];
let duplicates_rematch = [];
let detectedDuplicateJudgeScores_rematch = new Set();

function addRematchTable() { //addRematchTable
    rowNumberValue_Rematch = 0;
    rematchRound++;
    rematchRoundIndicator.textContent = rematchRound+1;
    console.log(rematchRound);

    var calculateButtonRematch = document.createElement("button");
    calculateButtonRematch.id = "calculateRematch_"+(rematchRound+1);
    calculateButtonRematch.textContent = "calculate table "+(rematchRound+1);
    
    var createTable = document.createElement("table");
    createTable.id = "rematch_table_"+(rematchRound+1);
    createTable.className = "rematchTableDesign";

    var createBody = document.createElement("tbody");
    var createHeader = document.createElement("thead");
    createHeader.className = "table_header";

    // Create table header
    var headerRow1 = document.createElement("tr");
    var actionHCell = document.createElement("th");
    actionHCell.rowSpan = 2;
    actionHCell.colSpan = 3;
    actionHCell.textContent = "action".toUpperCase();

    var playerNumberHCell = document.createElement("th");
    playerNumberHCell.className = "default_number";
    playerNumberHCell.rowSpan = 2;
    playerNumberHCell.textContent = "#";

    var competitorNameHCell = document.createElement("th");
    competitorNameHCell.className = "competitor";
    competitorNameHCell.rowSpan = 2;
    competitorNameHCell.textContent = "competitor".toUpperCase();

    var scoresHCell = document.createElement("th");
    scoresHCell.colSpan = 5;
    scoresHCell.textContent = "scores".toUpperCase();

    var timeStampHCell = document.createElement("th");
    timeStampHCell.className = "timestamp";
    timeStampHCell.rowSpan = 2;
    timeStampHCell.textContent = "time stamp".toUpperCase();

    var violationsHCell = document.createElement("th");
    violationsHCell.colSpan = 3;
    violationsHCell.textContent = "violations".toUpperCase();

    var finalScoreHCell = document.createElement("th");
    finalScoreHCell.className = "finalscore";
    finalScoreHCell.rowSpan = 2;
    finalScoreHCell.textContent = "final score".toUpperCase();

    var rankHCell = document.createElement("th");
    rankHCell.className = "rank";
    rankHCell.rowSpan = 2;
    rankHCell.textContent = "rank".toUpperCase();

    headerRow1.appendChild(actionHCell);
    headerRow1.appendChild(playerNumberHCell);
    headerRow1.appendChild(competitorNameHCell);
    headerRow1.appendChild(scoresHCell);
    headerRow1.appendChild(timeStampHCell);
    headerRow1.appendChild(violationsHCell);
    headerRow1.appendChild(finalScoreHCell);
    headerRow1.appendChild(rankHCell);

    createHeader.appendChild(headerRow1);    

    var headerRow2 = document.createElement("tr");
    var judgeOneHCell = document.createElement("th");
    judgeOneHCell.textContent = "j1".toUpperCase();

    var judgeTwoHCell = document.createElement("th");
    judgeTwoHCell.textContent = "j2".toUpperCase();
    
    var judgeThreeHCell = document.createElement("th");
    judgeThreeHCell.textContent = "j3".toUpperCase();

    var judgeFourCell = document.createElement("th");
    judgeFourCell.textContent = "j4".toUpperCase();

    var judgeFiveHCell = document.createElement("th");
    judgeFiveHCell.textContent = "j5".toUpperCase();

    var timeViolationHCell = document.createElement("th");
    timeViolationHCell.textContent = "tv".toUpperCase();

    var lineViolationHCell = document.createElement("th");
    lineViolationHCell.textContent = "lv".toUpperCase();

    var disarmViolationHCell = document.createElement("th");
    disarmViolationHCell.textContent = "dav".toUpperCase();

    headerRow2.appendChild(judgeOneHCell);
    headerRow2.appendChild(judgeTwoHCell);
    headerRow2.appendChild(judgeThreeHCell);
    headerRow2.appendChild(judgeFourCell);
    headerRow2.appendChild(judgeFiveHCell);
    headerRow2.appendChild(timeViolationHCell);
    headerRow2.appendChild(lineViolationHCell);
    headerRow2.appendChild(disarmViolationHCell);

    createHeader.appendChild(headerRow2);
    //END Header


    //Create body content
    const totalLength = checkBox_element[0].length
    +resetPlayer_button_element[0].length
    +stopWatch_button_element[0].length
    +rowNumber_element[0].length
    +competitor_name_element[0].length
    +judgesScoresPerCol_element[0].length
    +timeRecord_element[0].length
    +timeViolation_element[0].length
    +lineViolation_element[0].length
    +disarmViolation_element[0].length
    +finalScorePerCol_element[0].length
    +rank_element[0].length;    
    console.log(totalLength);
    
    if (rematchRound == 0) {        
        for (let i = 0; i < rowNumberValue; i++) {
            let checkBox = checkBox_element[i][0];
            // let selectedRow = checkBox.closest("tr");
            // let newRow = createBody.insertRow();        
            if (checkBox.checked == true) {
                let dataRow = document.createElement("tr");
                for (let td = 0; td < totalLength; td++) {
                    let dataCell = document.createElement("td");
                    if (td == 0) {
                        let checkBoxInputRematchLabel = document.createElement("label");
                        checkBoxInputRematchLabel.className = "checkbox_label"

                        var checkBoxInputRematch = document.createElement("input");
                        checkBoxInputRematch.setAttribute("type", "checkbox");
                        checkBoxInputRematch.setAttribute("class", "checkbox_input");
                        checkBoxInputRematch.id = "toSelect_"+ (rematchRound+1) +"_"+ (rowNumberValue_Rematch+1);

                        let checkBoxInputRematchSpan = document.createElement("span");
                        checkBoxInputRematchSpan.setAttribute("class", "checkbox_span");

                        checkBoxInputRematchLabel.appendChild(checkBoxInputRematch);
                        checkBoxInputRematchLabel.appendChild(checkBoxInputRematchSpan);
                        dataCell.appendChild(checkBoxInputRematchLabel);
                    }
                    if (td == 1) {
                        var resetBtnRematch = document.createElement("button");
                        resetBtnRematch.className = "stopWatch_button_reset";
                        resetBtnRematch.type = "button";
                        resetBtnRematch.id = "resetPlayerButtonRematch_"+ (rematchRound+1) +"_"+ (rowNumberValue_Rematch+1);
                        resetBtnRematch.textContent = "reset".toUpperCase();
                        dataCell.appendChild(resetBtnRematch);
                    }
                    if (td == 2) {
                        var recordBtnRematch = document.createElement("button");
                        recordBtnRematch.className = "stopWatch_button_record";
                        recordBtnRematch.type = "button";
                        recordBtnRematch.id = "recordButtonRematch_"+ (rematchRound+1) +"_"+ (rowNumberValue_Rematch+1);
                        recordBtnRematch.textContent = "record".toUpperCase();
                        dataCell.appendChild(recordBtnRematch);
                    }
                    if (td == 3) {
                        var rowNumberInputRematch = document.createElement("input");
                        rowNumberInputRematch.className = "default_number";
                        rowNumberInputRematch.type = "number";
                        rowNumberInputRematch.id = "row_number_rematch_"+ (rematchRound+1) +"_"+ (rowNumberValue_Rematch+1);
                        rowNumberInputRematch.readOnly = true;
                        rowNumberInputRematch.value = rowNumber_element[i][0].value;
                        dataCell.appendChild(rowNumberInputRematch);
                    }
                    if (td == 4) {
                        var competitorNameInputRematch = document.createElement("input");
                        competitorNameInputRematch.className = "competitor";
                        competitorNameInputRematch.type = "text";
                        competitorNameInputRematch.id = "competitor_name_rematch_"+ (rematchRound+1) +"_"+ (rowNumberValue_Rematch+1);
                        competitorNameInputRematch.readOnly = true;
                        competitorNameInputRematch.value = competitor_name_element[i][0].value;
                        dataCell.appendChild(competitorNameInputRematch);
                    }
                    for (let js = 0; js < judgesScoresPerCol_element[i].length; js++) {                        
                        if (td > 4 && td < 10) {
                            let jScoresElement = document.createElement("input");
                            if (td == js+5) {
                                jScoresElement.className = "judge_scores";
                                jScoresElement.type = "number";
                                if (td == 5) {
                                    jScoresElement.id = "judgeScore_First_"+ (rematchRound+1) +"_"+ (rowNumberValue_Rematch+1);
                                }
                                if (td == 6) {
                                    jScoresElement.id = "judgeScore_Second_"+ (rematchRound+1) +"_"+ (rowNumberValue_Rematch+1);
                                }
                                if (td == 7) {
                                    jScoresElement.id = "judgeScore_Third_"+ (rematchRound+1) +"_"+ (rowNumberValue_Rematch+1);
                                }
                                if (td == 8) {
                                    jScoresElement.id = "judgeScore_Fourth_"+ (rematchRound+1) +"_"+ (rowNumberValue_Rematch+1);
                                }
                                if (td == 9) {
                                    jScoresElement.id = "judgeScore_Fifth_"+ (rematchRound+1) +"_"+ (rowNumberValue_Rematch+1);
                                }
                                jScoresElement.min = "0";
                                jScoresElement.max = "10";
                                dataCell.appendChild(jScoresElement);

                                if (!jScoresElement_element[rematchRound]) {
                                    jScoresElement_element[rematchRound] = [];
                                }
                                if (!jScoresElement_element[rematchRound][rowNumberValue_Rematch]) {
                                    jScoresElement_element[rematchRound][rowNumberValue_Rematch] = [];
                                }
                                jScoresElement_element[rematchRound][rowNumberValue_Rematch].push(jScoresElement);
                            }
                        }
                    }
                    if (td == 10) {
                        var timeStampRematch = document.createElement("input");
                        timeStampRematch.className = "timestamp";
                        timeStampRematch.type = "text";
                        timeStampRematch.id = "timeStampRematch_"+ (rematchRound+1) +"_"+ (rowNumberValue_Rematch+1);
                        timeStampRematch.readOnly = true;
                        dataCell.appendChild(timeStampRematch);
                    }
                    for (let v = 0; v < 3; v++) {
                        if (td > 10 && td < 14) {
                            let violationsInputRematch = document.createElement("input");
                            if (td == v+11) {
                                violationsInputRematch.className = "violations";
                                violationsInputRematch.type = "number";
                                if (td == 11) {
                                    violationsInputRematch.id = "timeViolation_"+ (rematchRound+1) +"_"+ (rowNumberValue_Rematch+1);
                                    violationsInputRematch.readOnly = true;
                                }
                                if (td == 12) {
                                    violationsInputRematch.id = "lineViolation_"+ (rematchRound+1) +"_"+ (rowNumberValue_Rematch+1);
                                }
                                if (td == 13) {
                                    violationsInputRematch.id = "disarmViolation_"+ (rematchRound+1) +"_"+ (rowNumberValue_Rematch+1);
                                }                                
                                dataCell.appendChild(violationsInputRematch);

                                if (!violationsInputRematch_element[rematchRound]) {
                                    violationsInputRematch_element[rematchRound] = [];
                                }
                                if (!violationsInputRematch_element[rematchRound][rowNumberValue_Rematch]) {
                                    violationsInputRematch_element[rematchRound][rowNumberValue_Rematch] = [];
                                }
                                violationsInputRematch_element[rematchRound][rowNumberValue_Rematch].push(violationsInputRematch);
                            }
                        }
                    }
                    for (let sr = 0; sr < 2; sr++) {
                        if (td > 13 && td < 16) {
                            let scoreRankInputRematch = document.createElement("input");
                            if (td == sr+14) {
                                scoreRankInputRematch.type = "number";
                                if (td == 14) {
                                    scoreRankInputRematch.className = "finalscore";
                                    scoreRankInputRematch.id = "finalScore_"+ (rematchRound+1) +"_"+ (rowNumberValue_Rematch+1);
                                }
                                if (td == 15) {
                                    scoreRankInputRematch.className = "rank";
                                    scoreRankInputRematch.id = "rank_"+ (rematchRound+1) +"_"+ (rowNumberValue_Rematch+1);
                                }
                                scoreRankInputRematch.readOnly = true;
                                dataCell.appendChild(scoreRankInputRematch);

                                if (!scoreRankInputRematch_element[rematchRound]) {
                                    scoreRankInputRematch_element[rematchRound] = [];
                                }
                                if (!scoreRankInputRematch_element[rematchRound][rowNumberValue_Rematch]) {
                                    scoreRankInputRematch_element[rematchRound][rowNumberValue_Rematch] = [];
                                }
                                scoreRankInputRematch_element[rematchRound][rowNumberValue_Rematch].push(scoreRankInputRematch);
                            }                            
                        }
                    }
                    dataRow.appendChild(dataCell);
                    createBody.appendChild(dataRow);

                }

                // for (let jScores = 0; jScores < judgesScoresPerCol_element[i].length; jScores++) {
                //     if (!judgeScoresRematch[rematchRound]) {
                //         judgeScoresRematch[rematchRound] = [];
                //     }
                //     if (!judgeScoresRematch[rematchRound][rowNumberValue_Rematch]) {
                //         judgeScoresRematch[rematchRound][rowNumberValue_Rematch] = [];
                //     }                    

                //     let jScoresPerCol = judgesScoresPerCol_element[i][jScores].value;                    
                //     judgeScoresRematch[rematchRound][rowNumberValue_Rematch].push(jScoresPerCol);

                //     if (jScores == judgesScoresPerCol_element[i].length-1) {                        
                //         console.log(judgeScoresRematch);
                //         console.log(rematchRound);
                //         console.log(rowNumberValue_Rematch);
                //     }
                // }

                rowNumberValue_Rematch++;
                // saveElementRematch in Array
                if (!calculateButtonRematch_element[rematchRound]) {
                    calculateButtonRematch_element[rematchRound] = [];
                }
                calculateButtonRematch_element[rematchRound] = [calculateButtonRematch];

                if (!checkBoxInputRematch_element[rematchRound]) {
                    checkBoxInputRematch_element[rematchRound] = [];
                }
                if (!checkBoxInputRematch_element[rematchRound][rowNumberValue_Rematch-1]) {
                    checkBoxInputRematch_element[rematchRound][rowNumberValue_Rematch-1] = [];
                }
                checkBoxInputRematch_element[rematchRound][rowNumberValue_Rematch-1] = [checkBoxInputRematch];

                if (!resetBtnRematch_element[rematchRound]) {
                    resetBtnRematch_element[rematchRound] = [];
                }
                if (!resetBtnRematch_element[rematchRound][rowNumberValue_Rematch-1]) {
                    resetBtnRematch_element[rematchRound][rowNumberValue_Rematch-1] = [];
                }
                resetBtnRematch_element[rematchRound][rowNumberValue_Rematch-1] = [resetBtnRematch];

                if (!recordBtnRematch_element[rematchRound]) {
                    recordBtnRematch_element[rematchRound] = [];
                }
                if (!recordBtnRematch_element[rematchRound][rowNumberValue_Rematch-1]) {
                    recordBtnRematch_element[rematchRound][rowNumberValue_Rematch-1] = [];
                }
                recordBtnRematch_element[rematchRound][rowNumberValue_Rematch-1] = [recordBtnRematch];

                if (!rowNumberInputRematch_element[rematchRound]) {
                    rowNumberInputRematch_element[rematchRound] = [];
                }
                if (!rowNumberInputRematch_element[rematchRound][rowNumberValue_Rematch-1]) {
                    rowNumberInputRematch_element[rematchRound][rowNumberValue_Rematch-1] = [];
                }
                rowNumberInputRematch_element[rematchRound][rowNumberValue_Rematch-1] = [rowNumberInputRematch];

                if (!competitorNameInputRematch_element[rematchRound]) {
                    competitorNameInputRematch_element[rematchRound] = [];
                }
                if (!competitorNameInputRematch_element[rematchRound][rowNumberValue_Rematch-1]) {
                    competitorNameInputRematch_element[rematchRound][rowNumberValue_Rematch-1] = [];
                }
                competitorNameInputRematch_element[rematchRound][rowNumberValue_Rematch-1] = [competitorNameInputRematch];                

                if (!timeStampRematch_element[rematchRound]) {
                    timeStampRematch_element[rematchRound] = [];
                }
                if (!timeStampRematch_element[rematchRound][rowNumberValue_Rematch-1]) {
                    timeStampRematch_element[rematchRound][rowNumberValue_Rematch-1] = [];
                }
                timeStampRematch_element[rematchRound][rowNumberValue_Rematch-1] = [timeStampRematch];                
                // END saveElementRematch

                // initialize targetElement
                let targetElement_calculateButtonRematch = calculateButtonRematch_element[rematchRound][0];
                let targetElement_checkBoxInputRematch = checkBoxInputRematch_element[rematchRound][rowNumberValue_Rematch-1][0];
                let targetElement_resetPlayerButtonRematch = resetBtnRematch_element[rematchRound][rowNumberValue_Rematch-1][0];
                let targetElement_recordButtonRematch = recordBtnRematch_element[rematchRound][rowNumberValue_Rematch-1][0];
                let targetElement_rowNumberInputRematch = rowNumberInputRematch_element[rematchRound][rowNumberValue_Rematch-1][0];
                let targetElement_competitorNameInputRematch = competitorNameInputRematch_element[rematchRound][rowNumberValue_Rematch-1][0];
                let targetElement_judgeScore_First_Rematch = jScoresElement_element[rematchRound][rowNumberValue_Rematch-1][0];
                let targetElement_judgeScore_Second_Rematch = jScoresElement_element[rematchRound][rowNumberValue_Rematch-1][1];
                let targetElement_judgeScore_Third_Rematch = jScoresElement_element[rematchRound][rowNumberValue_Rematch-1][2];
                let targetElement_judgeScore_Fourth_Rematch = jScoresElement_element[rematchRound][rowNumberValue_Rematch-1][3];
                let targetElement_judgeScore_Fifth_Rematch = jScoresElement_element[rematchRound][rowNumberValue_Rematch-1][4];
                let targetElement_timeStampRematch = timeStampRematch_element[rematchRound][rowNumberValue_Rematch-1][0];
                let targetElement_timeViolationRematch = violationsInputRematch_element[rematchRound][rowNumberValue_Rematch-1][0];
                let targetElement_lineViolationRematch = violationsInputRematch_element[rematchRound][rowNumberValue_Rematch-1][1];
                let targetElement_disarmViolationRematch = violationsInputRematch_element[rematchRound][rowNumberValue_Rematch-1][2];
                let targetElement_finalScoreRematch = scoreRankInputRematch_element[rematchRound][rowNumberValue_Rematch-1][0];
                let targetElement_rankRematch = scoreRankInputRematch_element[rematchRound][rowNumberValue_Rematch-1][1];
                //END targetElement

                // randomScores Rematch
                let min = 1;
                let max = 10;    
                targetElement_judgeScore_First_Rematch.setAttribute("value", (Math.random() * max).toFixed(1));
                targetElement_judgeScore_Second_Rematch.setAttribute("value", (Math.random() * max).toFixed(1));
                targetElement_judgeScore_Third_Rematch.setAttribute("value", (Math.random() * max).toFixed(1));
                targetElement_judgeScore_Fourth_Rematch.setAttribute("value", (Math.random() * max).toFixed(1));
                targetElement_judgeScore_Fifth_Rematch.setAttribute("value", (Math.random() * max).toFixed(1));

                if (targetElement_judgeScore_First_Rematch.value == 10.0) {
                    targetElement_judgeScore_First_Rematch.value = 10
                }
            
                if (targetElement_judgeScore_Second_Rematch.value == 10.0) {
                    targetElement_judgeScore_Second_Rematch.value = 10
                }
            
                if (targetElement_judgeScore_Third_Rematch.value == 10.0) {
                    targetElement_judgeScore_Third_Rematch.value = 10
                }
            
                if (targetElement_judgeScore_Fourth_Rematch.value == 10.0) {
                    targetElement_judgeScore_Fourth_Rematch.value = 10
                }
            
                if (targetElement_judgeScore_Fifth_Rematch.value == 10.0) {
                    targetElement_judgeScore_Fifth_Rematch.value = 10
                }
                // END randomScores

                // AddEvent Listeners
                targetElement_calculateButtonRematch.addEventListener("click", () => {
                    if (!finalScorePerCol_judgesSum_rematch[rematchRound]) {
                        finalScorePerCol_judgesSum_rematch[rematchRound] = [];
                    }
                    if (!finalScorePerCol_judgesSum_rematch[rematchRound][rowNumberValue_Rematch-1]) {
                        finalScorePerCol_judgesSum_rematch[rematchRound][rowNumberValue_Rematch-1] = [];
                    }
                    // finalScorePerCol_judgesSum_rematch = [];
                    if (!judgeScoreShifted_rematch[rematchRound]) {
                        judgeScoreShifted_rematch[rematchRound] = [];
                    }
                    if (!judgeScoreShifted_rematch[rematchRound][rowNumberValue_Rematch-1]) {
                        judgeScoreShifted_rematch[rematchRound][rowNumberValue_Rematch-1] = [];
                    }
                    // judgeScoreShifted_rematch = [];
                    if (!judgeScorePopped_rematch[rematchRound]) {
                        judgeScorePopped_rematch[rematchRound] = [];
                    }
                    if (!judgeScorePopped_rematch[rematchRound][rowNumberValue_Rematch-1]) {
                        judgeScorePopped_rematch[rematchRound][rowNumberValue_Rematch-1] = [];
                    }
                    // judgeScorePopped_rematch = [];

                    let totalSum_rematch = 0;
                    for (let i = 0; i < rowNumberValue_Rematch; i++) {
                        console.log(rematchRound);
                        console.log(rowNumberValue_Rematch);
                        let targetElement_finalScoreRematch = scoreRankInputRematch_element[rematchRound][i][0];
                        if (!sortedJudgesScoreCol_rematch[rematchRound]) {
                            sortedJudgesScoreCol_rematch[rematchRound] = [];
                        }
                        if (!sortedJudgesScoreCol_rematch[rematchRound][i]) { // i is rowNumberValue_Rematch
                            sortedJudgesScoreCol_rematch[rematchRound][i] = [];
                        }
                        // sortedJudgesScoreCol_rematch = [];
                        sortedJudgesScoreCol_rematch[rematchRound][i] = [];
                        totalSum_rematch = 0;
                        for (let j = 0; j < jScoresElement_element[rematchRound][i].length; j++) {

                            let judgeScoreCol_rematch = parseFloat(jScoresElement_element[rematchRound][i][j].value);
                            judgeScoreCol_rematch.toFixed(1);
                            sortedJudgesScoreCol_rematch[rematchRound][i].push(judgeScoreCol_rematch);
                            
                            jScoresElement_element[rematchRound][i][j].classList.replace("judge_scores_removed", "judge_scores");

                            if (j == jScoresElement_element[rematchRound][i].length-1) {
                                console.log(sortedJudgesScoreCol_rematch[rematchRound][i]);

                                sortedJudgesScoreCol_rematch[rematchRound][i].sort(function(a, b) {
                                    return a - b;
                                });

                                console.log(sortedJudgesScoreCol_rematch[rematchRound][i]);

                                if (!judgeScoreShifted_rematch[rematchRound]) {
                                    judgeScoreShifted_rematch[rematchRound] = [];
                                }
                                if (!judgeScoreShifted_rematch[rematchRound][i]) { // i is rowNumberValue_Rematch
                                    judgeScoreShifted_rematch[rematchRound][i] = [];
                                }
                                //judgeScoreShifted_rematch = [];
                                judgeScoreShifted_rematch[rematchRound][i] = sortedJudgesScoreCol_rematch[rematchRound][i].shift();

                                if (!judgeScorePopped_rematch[rematchRound]) {
                                    judgeScorePopped_rematch[rematchRound] = [];
                                }
                                if (!judgeScorePopped_rematch[rematchRound][i]) { // i is rowNumberValue_Rematch
                                    judgeScorePopped_rematch[rematchRound][i] = [];
                                }
                                //judgeScorePopped_rematch = [];
                                judgeScorePopped_rematch[rematchRound][i] = sortedJudgesScoreCol_rematch[rematchRound][i].pop();

                                detectedDuplicateJudgeScores_rematch = new Set();
                                let minValue_rematch = Math.min(...jScoresElement_element[rematchRound][i].map(el => el.value));
                                let maxValue_rematch = Math.max(...jScoresElement_element[rematchRound][i].map(el => el.value));
                                let minHighlighted_rematch = false;
                                let maxHighlighted_rematch = false;

                                
                            }
                        }
                    }
                });

                targetElement_resetPlayerButtonRematch.addEventListener("click", () => {
                    let defaultScore = 0;
                    targetElement_judgeScore_First_Rematch.value = defaultScore;
                    targetElement_judgeScore_Second_Rematch.value = defaultScore;
                    targetElement_judgeScore_Third_Rematch.value = defaultScore;
                    targetElement_judgeScore_Fourth_Rematch.value = defaultScore;
                    targetElement_judgeScore_Fifth_Rematch.value = defaultScore;
                    targetElement_timeStampRematch.value = "";
                    targetElement_timeViolationRematch.value = "";
                    targetElement_lineViolationRematch.value = "";
                    targetElement_disarmViolationRematch.value = "";
                    targetElement_finalScoreRematch.value = "";
                    targetElement_rankRematch.value = "";
                    targetElement_judgeScore_First_Rematch.classList.replace("judge_scores_removed", "judge_scores");
                    targetElement_judgeScore_Second_Rematch.classList.replace("judge_scores_removed", "judge_scores");
                    targetElement_judgeScore_Third_Rematch.classList.replace("judge_scores_removed", "judge_scores");
                    targetElement_judgeScore_Fourth_Rematch.classList.replace("judge_scores_removed", "judge_scores");
                    targetElement_judgeScore_Fifth_Rematch.classList.replace("judge_scores_removed", "judge_scores");
                    targetElement_finalScoreRematch.classList.replace("finalscore_selected", "finalscore");
                    targetElement_rankRematch.classList.replace("rank_gold", "rank");
                    targetElement_rankRematch.classList.replace("rank_silver", "rank");
                    targetElement_rankRematch.classList.replace("rank_bronze", "rank");
                    
                    console.log("clickResetPlayerRematch");
                });

                targetElement_recordButtonRematch.addEventListener("click", () => {
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
                    
                    targetElement_timeStampRematch.value = `${min}:${s}:${ms}`;
                    console.log(`${rowNumberValue_Rematch+1}
                        ${targetElement_timeStampRematch.value}`);
            
                    if (ts <= 59 || ts >= 121) {
                        targetElement_timeViolationRematch.value = 0.5;
                    } else {
                        targetElement_timeViolationRematch.value = 0;
                    }
                });

                 //Checking strict input
                let normalNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

                for (let j = 0; j < jScoresElement_element[rematchRound][rowNumberValue_Rematch-1].length; j++) {
                    let targetElementJudgeLoopRematch = jScoresElement_element[rematchRound][rowNumberValue_Rematch-1][j];        

                    targetElementJudgeLoopRematch.addEventListener("change", () => {
                        if (targetElementJudgeLoopRematch.value == "") {
                            targetElementJudgeLoopRematch.value = 0;
                        }
                
                        if (targetElementJudgeLoopRematch.value == 0) {
                            targetElementJudgeLoopRematch.value = parseFloat(targetElementJudgeLoopRematch.value).toFixed(1);
                        }
                
                        if (targetElementJudgeLoopRematch.value > 0 && targetElementJudgeLoopRematch.value != 10) {
                            targetElementJudgeLoopRematch.value = parseFloat(targetElementJudgeLoopRematch.value).toFixed(1);
                        }
                    });

                    targetElementJudgeLoopRematch.addEventListener("input", () => {
                        if (targetElementJudgeLoopRematch.value == "") {
                            targetElementJudgeLoopRematch.value = "";
                        }
                        if (targetElementJudgeLoopRematch.value.length == 4
                            || targetElementJudgeLoopRematch.value < 0) {            
                
                                targetElementJudgeLoopRematch.value = "";
                        }
                        if (targetElementJudgeLoopRematch.value == 10.0 
                            || targetElementJudgeLoopRematch.value > 10) {
                
                                targetElementJudgeLoopRematch.value = 10;
                        }
                        for (checkNormalNumbers = 0; checkNormalNumbers < normalNumbers.length; checkNormalNumbers++) {                
                            if (targetElementJudgeLoopRematch.value == "0"+normalNumbers[checkNormalNumbers]) {                    
                                targetElementJudgeLoopRematch.value = "";
                            }
                        }
                    });
                } // END strict input

                //END AddEventListeners
            }            
            checkBox.checked = false;
            console.log(rematchRound);
            console.log(rowNumberValue_Rematch);           
        }            
    }
    //END body content

    //Create full table
    createTable.appendChild(createHeader);
    createTable.appendChild(createBody);
    //END full table

    rematchTableContainer.insertBefore(createTable, rematchTableContainer.firstChild);
    rematchTableContainer.insertBefore(calculateButtonRematch, rematchTableContainer.firstChild);
    rowNumberValue_RematchArr.push(rowNumberValue_Rematch);

} //END addRematchTable

function createHeaderCell(text, colspan = 1) {
    const th = document.createElement("th");
    th.innerText = text;
    if (colspan > 1) th.colSpan = colspan;
    return th;
}

addNewTableBtn.addEventListener("click", () => {
    for (let i = 0; i < rowNumberValue; i++) {
        let checkBox = checkBox_element[i][0];
        if (checkBox.checked == true) {            
            addRematchTable();
            break;
        }
    }
});

removeNewTableBtn.addEventListener("click", () => {
    console.log(rematchRound);
    if (rematchRound > -1) {
        let removeTableRematch = document.getElementById("rematch_table_"+(rematchRound+1));
        let calculateRematch = document.getElementById("calculateRematch_"+(rematchRound+1));
        removeTableRematch.remove();
        calculateRematch.remove();
        // removeTableRematch.deleteRow(-1);
        // removeTableRematch.deleteRow(-1);
        rematchRound--;
        console.log(rematchRound);
        rematchRoundIndicator.textContent = rematchRound+1;        
    }
    if (rematchRound == -1) {
        rematchRoundIndicator.textContent = "";
    }
})