let viewTableBtn = document.getElementById("viewTable_button");
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
let duplicates_rematch = {};
let detectedDuplicateJudgeScores_rematch = new Set();
// let currentRematchRound = 0;

function addRematchTable() { //addRematchTable
    rowNumberValue_Rematch = 0;
    rematchRound++;
    rematchRoundIndicator.textContent = rematchRound+1;
    console.log(rematchRound);

    var calculateButtonRematch = document.createElement("button");
    calculateButtonRematch.id = "calculateRematch_"+(rematchRound+1);
    calculateButtonRematch.textContent = "calculate rematch "+(rematchRound+1);
    
    var createTable = document.createElement("table");
    createTable.id = "rematch_table_"+(rematchRound+1);
    createTable.className = "rematchTableDesign";

    var createBody = document.createElement("tbody");
    var createHeader = document.createElement("thead");
    createHeader.className = "table_header_rematch";

    // Create table header
    var headerRow1 = document.createElement("tr");
    var actionHCell = document.createElement("th");
    // actionHCell.rowSpan = 2;
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
    scoresHCell.colSpan = 2;
    scoresHCell.textContent = "scores".toUpperCase();

    var countGHCell = document.createElement("th");
    countGHCell.textContent = "G:".toUpperCase();
    var countGHspan = document.createElement("span");
    countGHspan.id = "count_gold_rematch_"+(rematchRound+1);

    var countSHCell = document.createElement("th");
    countSHCell.textContent = "S:".toUpperCase();
    var countSHspan = document.createElement("span");
    countSHspan.id = "count_silver_rematch_"+(rematchRound+1);

    var countBHCell = document.createElement("th");
    countBHCell.textContent = "B:".toUpperCase();
    var countBHspan = document.createElement("span");
    countBHspan.id = "count_bronze_rematch_"+(rematchRound+1);

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

    countGHCell.appendChild(countGHspan);
    headerRow1.appendChild(countGHCell);

    countSHCell.appendChild(countSHspan);
    headerRow1.appendChild(countSHCell);

    countBHCell.appendChild(countBHspan);
    headerRow1.appendChild(countBHCell);

    headerRow1.appendChild(timeStampHCell);
    headerRow1.appendChild(violationsHCell);
    headerRow1.appendChild(finalScoreHCell);
    headerRow1.appendChild(rankHCell);

    createHeader.appendChild(headerRow1);    

    var headerRow2 = document.createElement("tr");
    var calculateButtonTh = document.createElement("th");
    calculateButtonTh.colSpan = 3;
    calculateButtonTh.appendChild(calculateButtonRematch);
    
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

    headerRow2.appendChild(calculateButtonTh);
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

    if (rematchRound > 0) {
        let currentRematch = rematchRound;
        console.log(currentRematch);
        let rowNumberValue_RematchArrCheck = rowNumberValue_RematchArr[currentRematch-1];
        console.log(rowNumberValue_RematchArrCheck);
        for (let i = 0; i < rowNumberValue_RematchArrCheck; i++) {
            let checkBoxRematch = checkBoxInputRematch_element[currentRematch-1][i][0];
            console.log(checkBoxRematch);

            if (checkBoxRematch.checked == true) {
                console.log("isChecked");
                const totalLengthRematch = checkBoxInputRematch_element[currentRematch-1][0].length
                +resetBtnRematch_element[currentRematch-1][0].length
                +recordBtnRematch_element[currentRematch-1][0].length
                +rowNumberInputRematch_element[currentRematch-1][0].length
                +competitorNameInputRematch_element[currentRematch-1][0].length
                +jScoresElement_element[currentRematch-1][0].length
                +timeStampRematch_element[currentRematch-1][0].length
                +violationsInputRematch_element[currentRematch-1][0].length
                +scoreRankInputRematch_element[currentRematch-1][0].length;    
                console.log(totalLengthRematch);

                let dataRow = document.createElement("tr");
                for (let td = 0; td < totalLengthRematch; td++) {
                    let dataCell = document.createElement("td");
                    if (td == 0) {
                        let checkBoxInputRematchLabel = document.createElement("label");
                        checkBoxInputRematchLabel.className = "checkbox_label"

                        var checkBoxInputRematch = document.createElement("input");
                        checkBoxInputRematch.setAttribute("type", "checkbox");
                        checkBoxInputRematch.setAttribute("class", "checkbox_input");
                        checkBoxInputRematch.id = "toSelect_"+ (currentRematch+1) +"_"+ (rowNumberValue_Rematch+1);

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
                        resetBtnRematch.id = "resetPlayerButtonRematch_"+ (currentRematch+1) +"_"+ (rowNumberValue_Rematch+1);
                        resetBtnRematch.textContent = "reset".toUpperCase();
                        dataCell.appendChild(resetBtnRematch);
                    }
                    if (td == 2) {
                        var recordBtnRematch = document.createElement("button");
                        recordBtnRematch.className = "stopWatch_button_record";
                        recordBtnRematch.type = "button";
                        recordBtnRematch.id = "recordButtonRematch_"+ (currentRematch+1) +"_"+ (rowNumberValue_Rematch+1);
                        recordBtnRematch.textContent = "record".toUpperCase();
                        dataCell.appendChild(recordBtnRematch);
                    }
                    if (td == 3) {
                        var rowNumberInputRematch = document.createElement("input");
                        rowNumberInputRematch.className = "default_number";
                        rowNumberInputRematch.type = "number";
                        rowNumberInputRematch.id = "row_number_rematch_"+ (currentRematch+1) +"_"+ (rowNumberValue_Rematch+1);
                        rowNumberInputRematch.readOnly = true;
                        rowNumberInputRematch.value = rowNumberInputRematch_element[currentRematch-1][i][0].value;
                        dataCell.appendChild(rowNumberInputRematch);
                    }
                    if (td == 4) {
                        var competitorNameInputRematch = document.createElement("input");
                        competitorNameInputRematch.className = "competitor";
                        competitorNameInputRematch.type = "text";
                        competitorNameInputRematch.id = "competitor_name_rematch_"+ (currentRematch+1) +"_"+ (rowNumberValue_Rematch+1);
                        competitorNameInputRematch.readOnly = true;
                        competitorNameInputRematch.value = competitorNameInputRematch_element[currentRematch-1][i][0].value;
                        dataCell.appendChild(competitorNameInputRematch);
                    }
                    for (let js = 0; js < judgesScoresPerCol_element[i].length; js++) {                        
                        if (td > 4 && td < 10) {
                            let jScoresElement = document.createElement("input");
                            if (td == js+5) {
                                jScoresElement.className = "judge_scores";
                                jScoresElement.type = "number";
                                if (td == 5) {
                                    jScoresElement.id = "judgeScore_First_"+ (currentRematch+1) +"_"+ (rowNumberValue_Rematch+1);
                                }
                                if (td == 6) {
                                    jScoresElement.id = "judgeScore_Second_"+ (currentRematch+1) +"_"+ (rowNumberValue_Rematch+1);
                                }
                                if (td == 7) {
                                    jScoresElement.id = "judgeScore_Third_"+ (currentRematch+1) +"_"+ (rowNumberValue_Rematch+1);
                                }
                                if (td == 8) {
                                    jScoresElement.id = "judgeScore_Fourth_"+ (currentRematch+1) +"_"+ (rowNumberValue_Rematch+1);
                                }
                                if (td == 9) {
                                    jScoresElement.id = "judgeScore_Fifth_"+ (currentRematch+1) +"_"+ (rowNumberValue_Rematch+1);
                                }
                                jScoresElement.min = "0";
                                jScoresElement.max = "10";
                                dataCell.appendChild(jScoresElement);

                                if (!jScoresElement_element[currentRematch]) {
                                    jScoresElement_element[currentRematch] = [];
                                }
                                if (!jScoresElement_element[currentRematch][rowNumberValue_Rematch]) {
                                    jScoresElement_element[currentRematch][rowNumberValue_Rematch] = [];
                                }
                                jScoresElement_element[currentRematch][rowNumberValue_Rematch].push(jScoresElement);
                            }
                        }
                    }
                    if (td == 10) {
                        var timeStampRematch = document.createElement("input");
                        timeStampRematch.className = "timestamp";
                        timeStampRematch.type = "text";
                        timeStampRematch.id = "timeStampRematch_"+ (currentRematch+1) +"_"+ (rowNumberValue_Rematch+1);
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
                                    violationsInputRematch.id = "timeViolation_"+ (currentRematch+1) +"_"+ (rowNumberValue_Rematch+1);
                                    violationsInputRematch.readOnly = true;
                                }
                                if (td == 12) {
                                    violationsInputRematch.id = "lineViolation_"+ (currentRematch+1) +"_"+ (rowNumberValue_Rematch+1);
                                }
                                if (td == 13) {
                                    violationsInputRematch.id = "disarmViolation_"+ (currentRematch+1) +"_"+ (rowNumberValue_Rematch+1);
                                }                                
                                dataCell.appendChild(violationsInputRematch);

                                if (!violationsInputRematch_element[currentRematch]) {
                                    violationsInputRematch_element[currentRematch] = [];
                                }
                                if (!violationsInputRematch_element[currentRematch][rowNumberValue_Rematch]) {
                                    violationsInputRematch_element[currentRematch][rowNumberValue_Rematch] = [];
                                }
                                violationsInputRematch_element[currentRematch][rowNumberValue_Rematch].push(violationsInputRematch);
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
                                    scoreRankInputRematch.id = "finalScore_"+ (currentRematch+1) +"_"+ (rowNumberValue_Rematch+1);
                                }
                                if (td == 15) {
                                    scoreRankInputRematch.className = "rank";
                                    scoreRankInputRematch.id = "rank_"+ (currentRematch+1) +"_"+ (rowNumberValue_Rematch+1);
                                }
                                scoreRankInputRematch.readOnly = true;
                                dataCell.appendChild(scoreRankInputRematch);

                                if (!scoreRankInputRematch_element[currentRematch]) {
                                    scoreRankInputRematch_element[currentRematch] = [];
                                }
                                if (!scoreRankInputRematch_element[currentRematch][rowNumberValue_Rematch]) {
                                    scoreRankInputRematch_element[currentRematch][rowNumberValue_Rematch] = [];
                                }
                                scoreRankInputRematch_element[currentRematch][rowNumberValue_Rematch].push(scoreRankInputRematch);
                            }                            
                        }
                    }
                    dataRow.appendChild(dataCell);
                    createBody.appendChild(dataRow);

                }

                rowNumberValue_Rematch++;
                // saveElementRematch in Array
                if (!calculateButtonRematch_element[currentRematch]) {
                    calculateButtonRematch_element[currentRematch] = [];
                }
                calculateButtonRematch_element[currentRematch] = [calculateButtonRematch];

                if (!checkBoxInputRematch_element[currentRematch]) {
                    checkBoxInputRematch_element[currentRematch] = [];
                }
                if (!checkBoxInputRematch_element[currentRematch][rowNumberValue_Rematch-1]) {
                    checkBoxInputRematch_element[currentRematch][rowNumberValue_Rematch-1] = [];
                }
                checkBoxInputRematch_element[currentRematch][rowNumberValue_Rematch-1] = [checkBoxInputRematch];

                if (!resetBtnRematch_element[currentRematch]) {
                    resetBtnRematch_element[currentRematch] = [];
                }
                if (!resetBtnRematch_element[currentRematch][rowNumberValue_Rematch-1]) {
                    resetBtnRematch_element[currentRematch][rowNumberValue_Rematch-1] = [];
                }
                resetBtnRematch_element[currentRematch][rowNumberValue_Rematch-1] = [resetBtnRematch];

                if (!recordBtnRematch_element[currentRematch]) {
                    recordBtnRematch_element[currentRematch] = [];
                }
                if (!recordBtnRematch_element[currentRematch][rowNumberValue_Rematch-1]) {
                    recordBtnRematch_element[currentRematch][rowNumberValue_Rematch-1] = [];
                }
                recordBtnRematch_element[currentRematch][rowNumberValue_Rematch-1] = [recordBtnRematch];

                if (!rowNumberInputRematch_element[currentRematch]) {
                    rowNumberInputRematch_element[currentRematch] = [];
                }
                if (!rowNumberInputRematch_element[currentRematch][rowNumberValue_Rematch-1]) {
                    rowNumberInputRematch_element[currentRematch][rowNumberValue_Rematch-1] = [];
                }
                rowNumberInputRematch_element[currentRematch][rowNumberValue_Rematch-1] = [rowNumberInputRematch];

                if (!competitorNameInputRematch_element[currentRematch]) {
                    competitorNameInputRematch_element[currentRematch] = [];
                }
                if (!competitorNameInputRematch_element[currentRematch][rowNumberValue_Rematch-1]) {
                    competitorNameInputRematch_element[currentRematch][rowNumberValue_Rematch-1] = [];
                }
                competitorNameInputRematch_element[currentRematch][rowNumberValue_Rematch-1] = [competitorNameInputRematch];                

                if (!timeStampRematch_element[currentRematch]) {
                    timeStampRematch_element[currentRematch] = [];
                }
                if (!timeStampRematch_element[currentRematch][rowNumberValue_Rematch-1]) {
                    timeStampRematch_element[currentRematch][rowNumberValue_Rematch-1] = [];
                }
                timeStampRematch_element[currentRematch][rowNumberValue_Rematch-1] = [timeStampRematch];                
                // END saveElementRematch

                // initialize targetElement
                console.log(currentRematch);
                let targetElement_calculateButtonRematch = calculateButtonRematch_element[currentRematch][0];
                let targetElement_checkBoxInputRematch = checkBoxInputRematch_element[currentRematch][rowNumberValue_Rematch-1][0];
                let targetElement_resetPlayerButtonRematch = resetBtnRematch_element[currentRematch][rowNumberValue_Rematch-1][0];
                let targetElement_recordButtonRematch = recordBtnRematch_element[currentRematch][rowNumberValue_Rematch-1][0];
                let targetElement_rowNumberInputRematch = rowNumberInputRematch_element[currentRematch][rowNumberValue_Rematch-1][0];
                let targetElement_competitorNameInputRematch = competitorNameInputRematch_element[currentRematch][rowNumberValue_Rematch-1][0];
                let targetElement_judgeScore_First_Rematch = jScoresElement_element[currentRematch][rowNumberValue_Rematch-1][0];
                let targetElement_judgeScore_Second_Rematch = jScoresElement_element[currentRematch][rowNumberValue_Rematch-1][1];
                let targetElement_judgeScore_Third_Rematch = jScoresElement_element[currentRematch][rowNumberValue_Rematch-1][2];
                let targetElement_judgeScore_Fourth_Rematch = jScoresElement_element[currentRematch][rowNumberValue_Rematch-1][3];
                let targetElement_judgeScore_Fifth_Rematch = jScoresElement_element[currentRematch][rowNumberValue_Rematch-1][4];
                let targetElement_timeStampRematch = timeStampRematch_element[currentRematch][rowNumberValue_Rematch-1][0];
                let targetElement_timeViolationRematch = violationsInputRematch_element[currentRematch][rowNumberValue_Rematch-1][0];
                let targetElement_lineViolationRematch = violationsInputRematch_element[currentRematch][rowNumberValue_Rematch-1][1];
                let targetElement_disarmViolationRematch = violationsInputRematch_element[currentRematch][rowNumberValue_Rematch-1][2];
                let targetElement_finalScoreRematch = scoreRankInputRematch_element[currentRematch][rowNumberValue_Rematch-1][0];
                let targetElement_rankRematch = scoreRankInputRematch_element[currentRematch][rowNumberValue_Rematch-1][1];
                //END targetElement

                // randomScores Rematch
                //testing
                // let min = 1;
                // let max = 10;    
                // targetElement_judgeScore_First_Rematch.setAttribute("value", (Math.random() * max).toFixed(1));
                // targetElement_judgeScore_Second_Rematch.setAttribute("value", (Math.random() * max).toFixed(1));
                // targetElement_judgeScore_Third_Rematch.setAttribute("value", (Math.random() * max).toFixed(1));
                // targetElement_judgeScore_Fourth_Rematch.setAttribute("value", (Math.random() * max).toFixed(1));
                // targetElement_judgeScore_Fifth_Rematch.setAttribute("value", (Math.random() * max).toFixed(1));

                // if (targetElement_judgeScore_First_Rematch.value == 10.0) {
                //     targetElement_judgeScore_First_Rematch.value = 10
                // }

                // if (targetElement_judgeScore_Second_Rematch.value == 10.0) {
                //     targetElement_judgeScore_Second_Rematch.value = 10
                // }

                // if (targetElement_judgeScore_Third_Rematch.value == 10.0) {
                //     targetElement_judgeScore_Third_Rematch.value = 10
                // }

                // if (targetElement_judgeScore_Fourth_Rematch.value == 10.0) {
                //     targetElement_judgeScore_Fourth_Rematch.value = 10
                // }

                // if (targetElement_judgeScore_Fifth_Rematch.value == 10.0) {
                //     targetElement_judgeScore_Fifth_Rematch.value = 10
                // }
                // END randomScores

                // AddEvent Listeners
                targetElement_competitorNameInputRematch.addEventListener("click", () => {
                    let maxChLength = 0;
                    let selectCompNameElement = competitorNameInputRematch_element[currentRematch];

                    for (let i = 0; i < rowNumberValue_Rematch; i++) {
                        let selectCompNameElementPerI = competitorNameInputRematch_element[currentRematch][i][0];

                        selectCompNameElement.forEach(() => {
                            maxChLength = Math.max(maxChLength, selectCompNameElementPerI.value.length);
                        });

                        selectCompNameElement.forEach(() => {
                            selectCompNameElementPerI.style.width = `${maxChLength-1}ch`;
                        });        
                    }
                });
                targetElement_competitorNameInputRematch.click();

                targetElement_calculateButtonRematch.addEventListener("click", () => {
                    console.log(targetElement_calculateButtonRematch);
                    let totalSum_rematch = 0;
                    for (let i = 0; i < rowNumberValue_Rematch; i++) {
                        if (!finalScorePerCol_judgesSum_rematch[currentRematch]) {
                            finalScorePerCol_judgesSum_rematch[currentRematch] = [];
                        }
                        finalScorePerCol_judgesSum_rematch[currentRematch] = [];
                        // if (!finalScorePerCol_judgesSum_rematch[rematchRound][i]) {
                        //     finalScorePerCol_judgesSum_rematch[rematchRound][i] = [];
                        // }
                        // finalScorePerCol_judgesSum_rematch = [];
                        // finalScorePerCol_judgesSum_rematch[rematchRound][i] = []
                        if (!judgeScoreShifted_rematch[currentRematch]) {
                            judgeScoreShifted_rematch[currentRematch] = [];
                        }
                        if (!judgeScoreShifted_rematch[currentRematch][i]) {
                            judgeScoreShifted_rematch[currentRematch][i] = [];
                        }
                        // judgeScoreShifted_rematch = [];
                        judgeScoreShifted_rematch[currentRematch][i] = [];
                        if (!judgeScorePopped_rematch[currentRematch]) {
                            judgeScorePopped_rematch[currentRematch] = [];
                        }
                        if (!judgeScorePopped_rematch[currentRematch][i]) {
                            judgeScorePopped_rematch[currentRematch][i] = [];
                        }
                        // judgeScorePopped_rematch = [];
                        judgeScorePopped_rematch[currentRematch][i] = [];

                        console.log(currentRematch);
                        console.log(rowNumberValue_Rematch);
                        let targetElement_finalScoreRematch = scoreRankInputRematch_element[currentRematch][i][0];
                        if (!sortedJudgesScoreCol_rematch[currentRematch]) {
                            sortedJudgesScoreCol_rematch[currentRematch] = [];
                        }
                        if (!sortedJudgesScoreCol_rematch[currentRematch][i]) { // i is rowNumberValue_Rematch
                            sortedJudgesScoreCol_rematch[currentRematch][i] = [];
                        }
                        // sortedJudgesScoreCol_rematch = [];
                        sortedJudgesScoreCol_rematch[currentRematch][i] = [];
                        totalSum_rematch = 0;
                        for (let j = 0; j < jScoresElement_element[currentRematch][i].length; j++) {

                            let judgeScoreCol_rematch = parseFloat(jScoresElement_element[currentRematch][i][j].value);
                            judgeScoreCol_rematch.toFixed(1);
                            sortedJudgesScoreCol_rematch[currentRematch][i].push(judgeScoreCol_rematch);
                            
                            jScoresElement_element[currentRematch][i][j].classList.replace("judge_scores_removed", "judge_scores");

                            if (j == jScoresElement_element[currentRematch][i].length-1) {
                                console.log(sortedJudgesScoreCol_rematch[currentRematch][i]);

                                sortedJudgesScoreCol_rematch[currentRematch][i].sort(function(a, b) {
                                    return a - b;
                                });

                                console.log(sortedJudgesScoreCol_rematch[currentRematch][i]);

                                if (!judgeScoreShifted_rematch[currentRematch]) {
                                    judgeScoreShifted_rematch[currentRematch] = [];
                                }
                                if (!judgeScoreShifted_rematch[currentRematch][i]) { // i is rowNumberValue_Rematch
                                    judgeScoreShifted_rematch[currentRematch][i] = [];
                                }
                                //judgeScoreShifted_rematch = [];
                                judgeScoreShifted_rematch[currentRematch][i] = sortedJudgesScoreCol_rematch[currentRematch][i].shift();

                                if (!judgeScorePopped_rematch[currentRematch]) {
                                    judgeScorePopped_rematch[currentRematch] = [];
                                }
                                if (!judgeScorePopped_rematch[currentRematch][i]) { // i is rowNumberValue_Rematch
                                    judgeScorePopped_rematch[currentRematch][i] = [];
                                }
                                //judgeScorePopped_rematch = [];
                                judgeScorePopped_rematch[currentRematch][i] = sortedJudgesScoreCol_rematch[currentRematch][i].pop();

                                detectedDuplicateJudgeScores_rematch = new Set();
                                let minValue_rematch = Math.min(...jScoresElement_element[currentRematch][i].map(el => el.value));
                                let maxValue_rematch = Math.max(...jScoresElement_element[currentRematch][i].map(el => el.value));
                                let minHighlighted_rematch = false;
                                let maxHighlighted_rematch = false;

                                for (let r = 0; r < jScoresElement_element[currentRematch][i].length; r++) {
                                    let targetElement_jScoresElement_element = jScoresElement_element[currentRematch][i][r];
                                    minValue_rematch = parseFloat(minValue_rematch).toFixed(1);
                                    maxValue_rematch = parseFloat(maxValue_rematch).toFixed(1);

                                    if (targetElement_jScoresElement_element.value == judgeScoreShifted_rematch[currentRematch][i]) {
                                        console.log(targetElement_jScoresElement_element.value);
                                        console.log(detectedDuplicateJudgeScores_rematch);
                                        if (!detectedDuplicateJudgeScores_rematch.has(targetElement_jScoresElement_element.value)) {
                                            targetElement_jScoresElement_element.classList.replace("judge_scores", "judge_scores_removed");
                                            detectedDuplicateJudgeScores_rematch.add(targetElement_jScoresElement_element.value);
                                        }

                                        if (targetElement_jScoresElement_element.value == minValue_rematch && !minHighlighted_rematch) {
                                            console.log(minValue_rematch);
                                            targetElement_jScoresElement_element.classList.replace("judge_scores", "judge_scores_removed");
                                            minHighlighted_rematch = true;
                                            console.log(minHighlighted_rematch);
                                        }
                                        if (targetElement_jScoresElement_element.value == maxValue_rematch && !maxHighlighted_rematch) {
                                            console.log(maxValue_rematch);
                                            targetElement_jScoresElement_element.classList.replace("judge_scores", "judge_scores_removed");
                                            maxHighlighted_rematch = true;
                                            console.log(maxHighlighted_rematch);
                                        }
                                    }
                                    if (targetElement_jScoresElement_element.value == judgeScorePopped_rematch[currentRematch][i]) {
                                        if (!detectedDuplicateJudgeScores_rematch.has(targetElement_jScoresElement_element.value)) {
                                            targetElement_jScoresElement_element.classList.replace("judge_scores", "judge_scores_removed");
                                            detectedDuplicateJudgeScores_rematch.add(targetElement_jScoresElement_element.value);
                                        }

                                        if (targetElement_jScoresElement_element.value == minValue_rematch && !minHighlighted_rematch) {
                                            console.log(minValue_rematch);
                                            targetElement_jScoresElement_element.classList.replace("judge_scores", "judge_scores_removed");
                                            minHighlighted_rematch = true;
                                            console.log(minHighlighted_rematch);
                                        }
                                        if (targetElement_jScoresElement_element.value == maxValue_rematch && !maxHighlighted_rematch) {
                                            console.log(maxValue_rematch);
                                            targetElement_jScoresElement_element.classList.replace("judge_scores", "judge_scores_removed");
                                            maxHighlighted_rematch = true;
                                            console.log(maxHighlighted_rematch);
                                        }
                                    }
                                }

                                console.log("low:", judgeScoreShifted_rematch[currentRematch][i]);
                                console.log("high:", judgeScorePopped_rematch[currentRematch][i]);
                                console.log("sorted:", sortedJudgesScoreCol_rematch[currentRematch][i]);

                                var rawScoreSum_rematch = 0;
                                for (let l = 0; l < sortedJudgesScoreCol_rematch[currentRematch][i].length; l++) {
                                    rawScoreSum_rematch += sortedJudgesScoreCol_rematch[currentRematch][i][l];
                                }
                                rawScoreSum_rematch = parseFloat(rawScoreSum_rematch.toFixed(1));
                                console.log("rawScoreRematch:", rawScoreSum_rematch);
                            }
                        }
                        totalSum_rematch = rawScoreSum_rematch -
                        violationsInputRematch_element[currentRematch][i][0].value -
                        violationsInputRematch_element[currentRematch][i][1].value -
                        violationsInputRematch_element[currentRematch][i][2].value;

                        targetElement_finalScoreRematch.value = totalSum_rematch.toFixed(1);
                        finalScorePerCol_judgesSum_rematch[currentRematch].push(totalSum_rematch.toFixed(1));
                    }

                    duplicates_rematch = {};
                    // First, find duplicates
                    for (let i = 0; i < rowNumberValue_RematchArr[currentRematch]; i++) {
                        const currentValueRematch = finalScorePerCol_judgesSum_rematch[currentRematch];
                        
                        if (duplicates_rematch[currentValueRematch]) {
                            duplicates_rematch[currentValueRematch].count += 1;
                            duplicates_rematch[currentValueRematch].indices.push(i); // Store the index of the duplicate
                        } else {
                            duplicates_rematch[currentValueRematch] = { count: 1, indices: [i] };
                        }
                    }

                    for (const key in duplicates_rematch) { //set currentRematch = Rematch if bug
                        if (duplicates_rematch[key].count > 1) {
                            // If there are duplicates, apply your condition
                            for (const index of duplicates_rematch[key].indices) {
                                let rawScoreSum_rematch = 0;
                                let targetElement_finalScoreRematch = document.getElementById("finalScore_"+ (currentRematch+1) +"_"+(index+1));
                                // console.log(`Condition applied to player ${index+1} with value: ${key}`);
                                let playerNumberRematch = rowNumberInputRematch_element[currentRematch][index][0].value;
                                console.log(`Condition applied to player ${playerNumberRematch} with value: ${key}`);
                
                                for (let j = 0; j < jScoresElement_element[currentRematch][index].length; j++) {
                                    let targetElement_jScoresElement = jScoresElement_element[currentRematch][index][j];
                                    let judgeScoreColRematch = parseFloat(jScoresElement_element[currentRematch][index][j].value);
                                    targetElement_jScoresElement.classList.replace("judge_scores_removed", "judge_scores");
                                    judgeScoreColRematch.toFixed(1);
                                    console.log(`${rawScoreSum_rematch}+${judgeScoreColRematch}`);
                                    rawScoreSum_rematch += judgeScoreColRematch;
                                    console.log(`= ${rawScoreSum_rematch}`);
                                }
                                //compute total sum = final score rematch
                                totalSum_rematch = rawScoreSum_rematch - 
                                violationsInputRematch_element[currentRematch][index][0].value - 
                                violationsInputRematch_element[currentRematch][index][1].value -
                                violationsInputRematch_element[currentRematch][index][2].value;
                                console.log(index);
                                
                                targetElement_finalScoreRematch.value = totalSum_rematch.toFixed(1);
                                finalScorePerCol_judgesSum_rematch[currentRematch][index] = targetElement_finalScoreRematch.value;
                                console.log(finalScorePerCol_judgesSum_rematch[currentRematch][index]);
                                // finalScorePerCol_judgesSum_rematch[rematchRound][index].push(totalSum_rematch.toFixed(1));
                            }
                        }
                    }

                    //rankloop
                    uniqueSortedValues_rematch = [...new Set(finalScorePerCol_judgesSum_rematch[currentRematch])].sort((a, b) => b - a);
                    rankMap_rematch = {};
                    let currentRank = 1;
                    console.log(uniqueSortedValues_rematch);

                    for (let i = 0; i < uniqueSortedValues_rematch.length; i++) {
                        if (i > 0 && uniqueSortedValues_rematch[i] === uniqueSortedValues_rematch[i-1]) {
                            rankMap_rematch[uniqueSortedValues_rematch[i]] = currentRank;
                        } else {
                            rankMap_rematch[uniqueSortedValues_rematch[i]] = currentRank;
                            currentRank++;
                        }
                    }

                    //ranking to look for ties
                    for (let i = 0; i < finalScorePerCol_judgesSum_rematch[currentRematch].length; i++) {
                        let targetElement_rank_rematch = document.getElementById("rank_"+ (currentRematch+1) +"_"+ (i+1));
                        console.log(targetElement_rank_rematch);
                        let targetElement_finalScore_rematch = document.getElementById("finalScore_"+ (currentRematch+1) +"_"+ (i+1));
                        console.log(targetElement_finalScore_rematch);
                        targetElement_finalScore_rematch.classList.replace("finalscore_selected", "finalscore");
                        targetElement_rank_rematch.classList.replace("rank_gold", "rank");
                        targetElement_rank_rematch.classList.replace("rank_silver", "rank");
                        targetElement_rank_rematch.classList.replace("rank_bronze", "rank");
                
                        if (scoreRankInputRematch_element[currentRematch][i][0].value == finalScorePerCol_judgesSum_rematch[currentRematch][i]) {            
                            targetElement_rank_rematch.value = rankMap_rematch[finalScorePerCol_judgesSum_rematch[currentRematch][i]];
                        }
                        if (targetElement_rank_rematch.value == 1) {
                            targetElement_rank_rematch.classList.replace("rank", "rank_gold");
                            targetElement_finalScore_rematch.classList.replace("finalscore", "finalscore_selected");
                        }
                        if (targetElement_rank_rematch.value == 2) {
                            targetElement_rank_rematch.classList.replace("rank", "rank_silver");
                            targetElement_finalScore_rematch.classList.replace("finalscore", "finalscore_selected");
                        }
                        if (targetElement_rank_rematch.value == 3) {
                            targetElement_rank_rematch.classList.replace("rank", "rank_bronze");
                            targetElement_finalScore_rematch.classList.replace("finalscore", "finalscore_selected");
                        }
                    }    
                    console.log(`${rowNumberValue_Rematch-1}) ${finalScorePerCol_judgesSum_rematch}`);
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

                for (let j = 0; j < jScoresElement_element[currentRematch][rowNumberValue_Rematch-1].length; j++) {
                    let targetElementJudgeLoopRematch = jScoresElement_element[currentRematch][rowNumberValue_Rematch-1][j];        

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
                        
                checkBoxRematch.checked = false;
                console.log(checkBoxRematch);
                console.log(currentRematch);
                console.log(rowNumberValue_Rematch);            
                
                //END body content

                //Create full table
                // createTable.appendChild(createHeader);
                // createTable.appendChild(createBody);
                //END full table

                // rematchTableContainer.insertBefore(createTable, rematchTableContainer.firstChild);
                // rematchTableContainer.insertBefore(calculateButtonRematch, rematchTableContainer.firstChild);
                // rowNumberValue_RematchArr.push(rowNumberValue_Rematch);
            }
        }
    }
    
    if (rematchRound == 0) {
        let currentRematch = rematchRound;
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
                        checkBoxInputRematch.id = "toSelect_"+ (currentRematch+1) +"_"+ (rowNumberValue_Rematch+1);

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
                        resetBtnRematch.id = "resetPlayerButtonRematch_"+ (currentRematch+1) +"_"+ (rowNumberValue_Rematch+1);
                        resetBtnRematch.textContent = "reset".toUpperCase();
                        dataCell.appendChild(resetBtnRematch);
                    }
                    if (td == 2) {
                        var recordBtnRematch = document.createElement("button");
                        recordBtnRematch.className = "stopWatch_button_record";
                        recordBtnRematch.type = "button";
                        recordBtnRematch.id = "recordButtonRematch_"+ (currentRematch+1) +"_"+ (rowNumberValue_Rematch+1);
                        recordBtnRematch.textContent = "record".toUpperCase();
                        dataCell.appendChild(recordBtnRematch);
                    }
                    if (td == 3) {
                        var rowNumberInputRematch = document.createElement("input");
                        rowNumberInputRematch.className = "default_number";
                        rowNumberInputRematch.type = "number";
                        rowNumberInputRematch.id = "row_number_rematch_"+ (currentRematch+1) +"_"+ (rowNumberValue_Rematch+1);
                        rowNumberInputRematch.readOnly = true;
                        rowNumberInputRematch.value = rowNumber_element[i][0].value;
                        dataCell.appendChild(rowNumberInputRematch);
                    }
                    if (td == 4) {
                        var competitorNameInputRematch = document.createElement("input");
                        competitorNameInputRematch.className = "competitor";
                        competitorNameInputRematch.type = "text";
                        competitorNameInputRematch.id = "competitor_name_rematch_"+ (currentRematch+1) +"_"+ (rowNumberValue_Rematch+1);
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
                                    jScoresElement.id = "judgeScore_First_"+ (currentRematch+1) +"_"+ (rowNumberValue_Rematch+1);
                                }
                                if (td == 6) {
                                    jScoresElement.id = "judgeScore_Second_"+ (currentRematch+1) +"_"+ (rowNumberValue_Rematch+1);
                                }
                                if (td == 7) {
                                    jScoresElement.id = "judgeScore_Third_"+ (currentRematch+1) +"_"+ (rowNumberValue_Rematch+1);
                                }
                                if (td == 8) {
                                    jScoresElement.id = "judgeScore_Fourth_"+ (currentRematch+1) +"_"+ (rowNumberValue_Rematch+1);
                                }
                                if (td == 9) {
                                    jScoresElement.id = "judgeScore_Fifth_"+ (currentRematch+1) +"_"+ (rowNumberValue_Rematch+1);
                                }
                                jScoresElement.min = "0";
                                jScoresElement.max = "10";
                                dataCell.appendChild(jScoresElement);

                                if (!jScoresElement_element[currentRematch]) {
                                    jScoresElement_element[currentRematch] = [];
                                }
                                if (!jScoresElement_element[currentRematch][rowNumberValue_Rematch]) {
                                    jScoresElement_element[currentRematch][rowNumberValue_Rematch] = [];
                                }
                                jScoresElement_element[currentRematch][rowNumberValue_Rematch].push(jScoresElement);
                            }
                        }
                    }
                    if (td == 10) {
                        var timeStampRematch = document.createElement("input");
                        timeStampRematch.className = "timestamp";
                        timeStampRematch.type = "text";
                        timeStampRematch.id = "timeStampRematch_"+ (currentRematch+1) +"_"+ (rowNumberValue_Rematch+1);
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
                                    violationsInputRematch.id = "timeViolation_"+ (currentRematch+1) +"_"+ (rowNumberValue_Rematch+1);
                                    violationsInputRematch.readOnly = true;
                                }
                                if (td == 12) {
                                    violationsInputRematch.id = "lineViolation_"+ (currentRematch+1) +"_"+ (rowNumberValue_Rematch+1);
                                }
                                if (td == 13) {
                                    violationsInputRematch.id = "disarmViolation_"+ (currentRematch+1) +"_"+ (rowNumberValue_Rematch+1);
                                }                                
                                dataCell.appendChild(violationsInputRematch);

                                if (!violationsInputRematch_element[currentRematch]) {
                                    violationsInputRematch_element[currentRematch] = [];
                                }
                                if (!violationsInputRematch_element[currentRematch][rowNumberValue_Rematch]) {
                                    violationsInputRematch_element[currentRematch][rowNumberValue_Rematch] = [];
                                }
                                violationsInputRematch_element[currentRematch][rowNumberValue_Rematch].push(violationsInputRematch);
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
                                    scoreRankInputRematch.id = "finalScore_"+ (currentRematch+1) +"_"+ (rowNumberValue_Rematch+1);
                                }
                                if (td == 15) {
                                    scoreRankInputRematch.className = "rank";
                                    scoreRankInputRematch.id = "rank_"+ (currentRematch+1) +"_"+ (rowNumberValue_Rematch+1);
                                }
                                scoreRankInputRematch.readOnly = true;
                                dataCell.appendChild(scoreRankInputRematch);

                                if (!scoreRankInputRematch_element[currentRematch]) {
                                    scoreRankInputRematch_element[currentRematch] = [];
                                }
                                if (!scoreRankInputRematch_element[currentRematch][rowNumberValue_Rematch]) {
                                    scoreRankInputRematch_element[currentRematch][rowNumberValue_Rematch] = [];
                                }
                                scoreRankInputRematch_element[currentRematch][rowNumberValue_Rematch].push(scoreRankInputRematch);
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
                if (!calculateButtonRematch_element[currentRematch]) {
                    calculateButtonRematch_element[currentRematch] = [];
                }
                calculateButtonRematch_element[currentRematch] = [calculateButtonRematch];

                if (!checkBoxInputRematch_element[currentRematch]) {
                    checkBoxInputRematch_element[currentRematch] = [];
                }
                if (!checkBoxInputRematch_element[currentRematch][rowNumberValue_Rematch-1]) {
                    checkBoxInputRematch_element[currentRematch][rowNumberValue_Rematch-1] = [];
                }
                checkBoxInputRematch_element[currentRematch][rowNumberValue_Rematch-1] = [checkBoxInputRematch];

                if (!resetBtnRematch_element[currentRematch]) {
                    resetBtnRematch_element[currentRematch] = [];
                }
                if (!resetBtnRematch_element[currentRematch][rowNumberValue_Rematch-1]) {
                    resetBtnRematch_element[currentRematch][rowNumberValue_Rematch-1] = [];
                }
                resetBtnRematch_element[currentRematch][rowNumberValue_Rematch-1] = [resetBtnRematch];

                if (!recordBtnRematch_element[currentRematch]) {
                    recordBtnRematch_element[currentRematch] = [];
                }
                if (!recordBtnRematch_element[currentRematch][rowNumberValue_Rematch-1]) {
                    recordBtnRematch_element[currentRematch][rowNumberValue_Rematch-1] = [];
                }
                recordBtnRematch_element[currentRematch][rowNumberValue_Rematch-1] = [recordBtnRematch];

                if (!rowNumberInputRematch_element[currentRematch]) {
                    rowNumberInputRematch_element[currentRematch] = [];
                }
                if (!rowNumberInputRematch_element[currentRematch][rowNumberValue_Rematch-1]) {
                    rowNumberInputRematch_element[currentRematch][rowNumberValue_Rematch-1] = [];
                }
                rowNumberInputRematch_element[currentRematch][rowNumberValue_Rematch-1] = [rowNumberInputRematch];

                if (!competitorNameInputRematch_element[currentRematch]) {
                    competitorNameInputRematch_element[currentRematch] = [];
                }
                if (!competitorNameInputRematch_element[currentRematch][rowNumberValue_Rematch-1]) {
                    competitorNameInputRematch_element[currentRematch][rowNumberValue_Rematch-1] = [];
                }
                competitorNameInputRematch_element[currentRematch][rowNumberValue_Rematch-1] = [competitorNameInputRematch];                

                if (!timeStampRematch_element[currentRematch]) {
                    timeStampRematch_element[currentRematch] = [];
                }
                if (!timeStampRematch_element[currentRematch][rowNumberValue_Rematch-1]) {
                    timeStampRematch_element[currentRematch][rowNumberValue_Rematch-1] = [];
                }
                timeStampRematch_element[currentRematch][rowNumberValue_Rematch-1] = [timeStampRematch];                
                // END saveElementRematch

                // initialize targetElement
                console.log(currentRematch);
                let targetElement_calculateButtonRematch = calculateButtonRematch_element[currentRematch][0];
                let targetElement_checkBoxInputRematch = checkBoxInputRematch_element[currentRematch][rowNumberValue_Rematch-1][0];
                let targetElement_resetPlayerButtonRematch = resetBtnRematch_element[currentRematch][rowNumberValue_Rematch-1][0];
                let targetElement_recordButtonRematch = recordBtnRematch_element[currentRematch][rowNumberValue_Rematch-1][0];
                let targetElement_rowNumberInputRematch = rowNumberInputRematch_element[currentRematch][rowNumberValue_Rematch-1][0];
                let targetElement_competitorNameInputRematch = competitorNameInputRematch_element[currentRematch][rowNumberValue_Rematch-1][0];
                let targetElement_judgeScore_First_Rematch = jScoresElement_element[currentRematch][rowNumberValue_Rematch-1][0];
                let targetElement_judgeScore_Second_Rematch = jScoresElement_element[currentRematch][rowNumberValue_Rematch-1][1];
                let targetElement_judgeScore_Third_Rematch = jScoresElement_element[currentRematch][rowNumberValue_Rematch-1][2];
                let targetElement_judgeScore_Fourth_Rematch = jScoresElement_element[currentRematch][rowNumberValue_Rematch-1][3];
                let targetElement_judgeScore_Fifth_Rematch = jScoresElement_element[currentRematch][rowNumberValue_Rematch-1][4];
                let targetElement_timeStampRematch = timeStampRematch_element[currentRematch][rowNumberValue_Rematch-1][0];
                let targetElement_timeViolationRematch = violationsInputRematch_element[currentRematch][rowNumberValue_Rematch-1][0];
                let targetElement_lineViolationRematch = violationsInputRematch_element[currentRematch][rowNumberValue_Rematch-1][1];
                let targetElement_disarmViolationRematch = violationsInputRematch_element[currentRematch][rowNumberValue_Rematch-1][2];
                let targetElement_finalScoreRematch = scoreRankInputRematch_element[currentRematch][rowNumberValue_Rematch-1][0];
                let targetElement_rankRematch = scoreRankInputRematch_element[currentRematch][rowNumberValue_Rematch-1][1];
                //END targetElement

                // randomScores Rematch
                // let min = 1;
                // let max = 10;    
                // targetElement_judgeScore_First_Rematch.setAttribute("value", (Math.random() * max).toFixed(1));
                // targetElement_judgeScore_Second_Rematch.setAttribute("value", (Math.random() * max).toFixed(1));
                // targetElement_judgeScore_Third_Rematch.setAttribute("value", (Math.random() * max).toFixed(1));
                // targetElement_judgeScore_Fourth_Rematch.setAttribute("value", (Math.random() * max).toFixed(1));
                // targetElement_judgeScore_Fifth_Rematch.setAttribute("value", (Math.random() * max).toFixed(1));

                // if (targetElement_judgeScore_First_Rematch.value == 10.0) {
                //     targetElement_judgeScore_First_Rematch.value = 10
                // }
            
                // if (targetElement_judgeScore_Second_Rematch.value == 10.0) {
                //     targetElement_judgeScore_Second_Rematch.value = 10
                // }
            
                // if (targetElement_judgeScore_Third_Rematch.value == 10.0) {
                //     targetElement_judgeScore_Third_Rematch.value = 10
                // }
            
                // if (targetElement_judgeScore_Fourth_Rematch.value == 10.0) {
                //     targetElement_judgeScore_Fourth_Rematch.value = 10
                // }
            
                // if (targetElement_judgeScore_Fifth_Rematch.value == 10.0) {
                //     targetElement_judgeScore_Fifth_Rematch.value = 10
                // }
                // END randomScores

                // AddEvent Listeners
                targetElement_competitorNameInputRematch.addEventListener("click", () => {
                    let maxChLength = 0;
                    let selectCompNameElement = competitorNameInputRematch_element[currentRematch];

                    for (let i = 0; i < rowNumberValue_Rematch; i++) {
                        let selectCompNameElementPerI = competitorNameInputRematch_element[currentRematch][i][0];

                        selectCompNameElement.forEach(() => {
                            maxChLength = Math.max(maxChLength, selectCompNameElementPerI.value.length);
                        });

                        selectCompNameElement.forEach(() => {
                            selectCompNameElementPerI.style.width = `${maxChLength-1}ch`;
                        });        
                    }
                });
                targetElement_competitorNameInputRematch.click();

                targetElement_calculateButtonRematch.addEventListener("click", () => {
                    let gold_rematch = 0;
                    let silver_rematch = 0;
                    let bronze_rematch = 0;
                    console.log(targetElement_calculateButtonRematch);
                    let totalSum_rematch = 0;
                    for (let i = 0; i < rowNumberValue_Rematch; i++) {
                        if (!finalScorePerCol_judgesSum_rematch[currentRematch]) {
                            finalScorePerCol_judgesSum_rematch[currentRematch] = [];
                        }
                        finalScorePerCol_judgesSum_rematch[currentRematch] = [];
                        // if (!finalScorePerCol_judgesSum_rematch[rematchRound][i]) {
                        //     finalScorePerCol_judgesSum_rematch[rematchRound][i] = [];
                        // }
                        // finalScorePerCol_judgesSum_rematch = [];
                        // finalScorePerCol_judgesSum_rematch[rematchRound][i] = []
                        if (!judgeScoreShifted_rematch[currentRematch]) {
                            judgeScoreShifted_rematch[currentRematch] = [];
                        }
                        if (!judgeScoreShifted_rematch[currentRematch][i]) {
                            judgeScoreShifted_rematch[currentRematch][i] = [];
                        }
                        // judgeScoreShifted_rematch = [];
                        judgeScoreShifted_rematch[currentRematch][i] = [];
                        if (!judgeScorePopped_rematch[currentRematch]) {
                            judgeScorePopped_rematch[currentRematch] = [];
                        }
                        if (!judgeScorePopped_rematch[currentRematch][i]) {
                            judgeScorePopped_rematch[currentRematch][i] = [];
                        }
                        // judgeScorePopped_rematch = [];
                        judgeScorePopped_rematch[currentRematch][i] = [];

                        console.log(currentRematch);
                        console.log(rowNumberValue_Rematch);
                        let targetElement_finalScoreRematch = scoreRankInputRematch_element[currentRematch][i][0];
                        if (!sortedJudgesScoreCol_rematch[currentRematch]) {
                            sortedJudgesScoreCol_rematch[currentRematch] = [];
                        }
                        if (!sortedJudgesScoreCol_rematch[currentRematch][i]) { // i is rowNumberValue_Rematch
                            sortedJudgesScoreCol_rematch[currentRematch][i] = [];
                        }
                        // sortedJudgesScoreCol_rematch = [];
                        sortedJudgesScoreCol_rematch[currentRematch][i] = [];
                        totalSum_rematch = 0;
                        for (let j = 0; j < jScoresElement_element[currentRematch][i].length; j++) {

                            let judgeScoreCol_rematch = parseFloat(jScoresElement_element[currentRematch][i][j].value);
                            judgeScoreCol_rematch.toFixed(1);
                            sortedJudgesScoreCol_rematch[currentRematch][i].push(judgeScoreCol_rematch);
                            
                            jScoresElement_element[currentRematch][i][j].classList.replace("judge_scores_removed", "judge_scores");

                            if (j == jScoresElement_element[currentRematch][i].length-1) {
                                console.log(sortedJudgesScoreCol_rematch[currentRematch][i]);

                                sortedJudgesScoreCol_rematch[currentRematch][i].sort(function(a, b) {
                                    return a - b;
                                });

                                console.log(sortedJudgesScoreCol_rematch[currentRematch][i]);

                                if (!judgeScoreShifted_rematch[currentRematch]) {
                                    judgeScoreShifted_rematch[currentRematch] = [];
                                }
                                if (!judgeScoreShifted_rematch[currentRematch][i]) { // i is rowNumberValue_Rematch
                                    judgeScoreShifted_rematch[currentRematch][i] = [];
                                }
                                //judgeScoreShifted_rematch = [];
                                judgeScoreShifted_rematch[currentRematch][i] = sortedJudgesScoreCol_rematch[currentRematch][i].shift();

                                if (!judgeScorePopped_rematch[currentRematch]) {
                                    judgeScorePopped_rematch[currentRematch] = [];
                                }
                                if (!judgeScorePopped_rematch[currentRematch][i]) { // i is rowNumberValue_Rematch
                                    judgeScorePopped_rematch[currentRematch][i] = [];
                                }
                                //judgeScorePopped_rematch = [];
                                judgeScorePopped_rematch[currentRematch][i] = sortedJudgesScoreCol_rematch[currentRematch][i].pop();

                                detectedDuplicateJudgeScores_rematch = new Set();
                                let minValue_rematch = Math.min(...jScoresElement_element[currentRematch][i].map(el => el.value));
                                let maxValue_rematch = Math.max(...jScoresElement_element[currentRematch][i].map(el => el.value));
                                let minHighlighted_rematch = false;
                                let maxHighlighted_rematch = false;

                                for (let r = 0; r < jScoresElement_element[currentRematch][i].length; r++) {
                                    let targetElement_jScoresElement_element = jScoresElement_element[currentRematch][i][r];
                                    minValue_rematch = parseFloat(minValue_rematch).toFixed(1);
                                    maxValue_rematch = parseFloat(maxValue_rematch).toFixed(1);

                                    if (targetElement_jScoresElement_element.value == judgeScoreShifted_rematch[currentRematch][i]) {
                                        console.log(targetElement_jScoresElement_element.value);
                                        console.log(detectedDuplicateJudgeScores_rematch);
                                        if (!detectedDuplicateJudgeScores_rematch.has(targetElement_jScoresElement_element.value)) {
                                            targetElement_jScoresElement_element.classList.replace("judge_scores", "judge_scores_removed");
                                            detectedDuplicateJudgeScores_rematch.add(targetElement_jScoresElement_element.value);
                                        }

                                        if (targetElement_jScoresElement_element.value == minValue_rematch && !minHighlighted_rematch) {
                                            console.log(minValue_rematch);
                                            targetElement_jScoresElement_element.classList.replace("judge_scores", "judge_scores_removed");
                                            minHighlighted_rematch = true;
                                            console.log(minHighlighted_rematch);
                                        }
                                        if (targetElement_jScoresElement_element.value == maxValue_rematch && !maxHighlighted_rematch) {
                                            console.log(maxValue_rematch);
                                            targetElement_jScoresElement_element.classList.replace("judge_scores", "judge_scores_removed");
                                            maxHighlighted_rematch = true;
                                            console.log(maxHighlighted_rematch);
                                        }
                                    }
                                    if (targetElement_jScoresElement_element.value == judgeScorePopped_rematch[currentRematch][i]) {
                                        if (!detectedDuplicateJudgeScores_rematch.has(targetElement_jScoresElement_element.value)) {
                                            targetElement_jScoresElement_element.classList.replace("judge_scores", "judge_scores_removed");
                                            detectedDuplicateJudgeScores_rematch.add(targetElement_jScoresElement_element.value);
                                        }

                                        if (targetElement_jScoresElement_element.value == minValue_rematch && !minHighlighted_rematch) {
                                            console.log(minValue_rematch);
                                            targetElement_jScoresElement_element.classList.replace("judge_scores", "judge_scores_removed");
                                            minHighlighted_rematch = true;
                                            console.log(minHighlighted_rematch);
                                        }
                                        if (targetElement_jScoresElement_element.value == maxValue_rematch && !maxHighlighted_rematch) {
                                            console.log(maxValue_rematch);
                                            targetElement_jScoresElement_element.classList.replace("judge_scores", "judge_scores_removed");
                                            maxHighlighted_rematch = true;
                                            console.log(maxHighlighted_rematch);
                                        }
                                    }
                                }

                                console.log("low:", judgeScoreShifted_rematch[currentRematch][i]);
                                console.log("high:", judgeScorePopped_rematch[currentRematch][i]);
                                console.log("sorted:", sortedJudgesScoreCol_rematch[currentRematch][i]);

                                var rawScoreSum_rematch = 0;
                                for (let l = 0; l < sortedJudgesScoreCol_rematch[currentRematch][i].length; l++) {
                                    rawScoreSum_rematch += sortedJudgesScoreCol_rematch[currentRematch][i][l];
                                }
                                rawScoreSum_rematch = parseFloat(rawScoreSum_rematch.toFixed(1));
                                console.log("rawScoreRematch:", rawScoreSum_rematch);
                            }
                        }

                        totalSum_rematch = rawScoreSum_rematch -
                        violationsInputRematch_element[currentRematch][i][0].value -
                        violationsInputRematch_element[currentRematch][i][1].value -
                        violationsInputRematch_element[currentRematch][i][2].value;

                        targetElement_finalScoreRematch.value = totalSum_rematch.toFixed(1);
                        finalScorePerCol_judgesSum_rematch[currentRematch].push(totalSum_rematch.toFixed(1));
                    }

                    duplicates_rematch = {};
                    // First, find duplicates
                    for (let i = 0; i < rowNumberValue_RematchArr[currentRematch]; i++) {
                        const currentValueRematch = finalScorePerCol_judgesSum_rematch[currentRematch];
                        
                        if (duplicates_rematch[currentValueRematch]) {
                            duplicates_rematch[currentValueRematch].count += 1;
                            duplicates_rematch[currentValueRematch].indices.push(i); // Store the index of the duplicate
                        } else {
                            duplicates_rematch[currentValueRematch] = { count: 1, indices: [i] };
                        }
                    }

                    for (const key in duplicates_rematch) { //set currentRematch = Rematch if bug
                        if (duplicates_rematch[key].count > 1) {
                            // If there are duplicates, apply your condition
                            for (const index of duplicates_rematch[key].indices) {
                                let rawScoreSum_rematch = 0;
                                let targetElement_finalScoreRematch = document.getElementById("finalScore_"+ (currentRematch+1) +"_"+(index+1));
                                // console.log(`Condition applied to player ${index+1} with value: ${key}`);
                                let playerNumberRematch = rowNumberInputRematch_element[currentRematch][index][0].value;
                                console.log(`Condition applied to player ${playerNumberRematch} with value: ${key}`);
                
                                for (let j = 0; j < jScoresElement_element[currentRematch][index].length; j++) {
                                    let targetElement_jScoresElement = jScoresElement_element[currentRematch][index][j];
                                    let judgeScoreColRematch = parseFloat(jScoresElement_element[currentRematch][index][j].value);
                                    targetElement_jScoresElement.classList.replace("judge_scores_removed", "judge_scores");
                                    judgeScoreColRematch.toFixed(1);
                                    console.log(`${rawScoreSum_rematch}+${judgeScoreColRematch}`);
                                    rawScoreSum_rematch += judgeScoreColRematch;
                                    console.log(`= ${rawScoreSum_rematch}`);
                                }
                                //compute total sum = final score rematch
                                totalSum_rematch = rawScoreSum_rematch - 
                                violationsInputRematch_element[currentRematch][index][0].value - 
                                violationsInputRematch_element[currentRematch][index][1].value -
                                violationsInputRematch_element[currentRematch][index][2].value;
                                console.log(index);
                                
                                targetElement_finalScoreRematch.value = totalSum_rematch.toFixed(1);
                                finalScorePerCol_judgesSum_rematch[currentRematch][index] = targetElement_finalScoreRematch.value;
                                console.log(finalScorePerCol_judgesSum_rematch[currentRematch][index]);
                                // finalScorePerCol_judgesSum_rematch[rematchRound][index].push(totalSum_rematch.toFixed(1));
                            }
                        }
                    }

                    //rankloop
                    uniqueSortedValues_rematch = [...new Set(finalScorePerCol_judgesSum_rematch[currentRematch])].sort((a, b) => b - a);
                    rankMap_rematch = {};
                    let currentRank = 1;
                    console.log(uniqueSortedValues_rematch);

                    for (let i = 0; i < uniqueSortedValues_rematch.length; i++) {
                        if (i > 0 && uniqueSortedValues_rematch[i] === uniqueSortedValues_rematch[i-1]) {
                            rankMap_rematch[uniqueSortedValues_rematch[i]] = currentRank;
                        } else {
                            rankMap_rematch[uniqueSortedValues_rematch[i]] = currentRank;
                            currentRank++;
                        }
                    }

                    //ranking to look for ties
                    for (let i = 0; i < finalScorePerCol_judgesSum_rematch[currentRematch].length; i++) {
                        let targetElement_rank_rematch = document.getElementById("rank_"+ (currentRematch+1) +"_"+ (i+1));
                        console.log(targetElement_rank_rematch);
                        let targetElement_finalScore_rematch = document.getElementById("finalScore_"+ (currentRematch+1) +"_"+ (i+1));
                        console.log(targetElement_finalScore_rematch);
                        targetElement_finalScore_rematch.classList.replace("finalscore_selected", "finalscore");
                        targetElement_rank_rematch.classList.replace("rank_gold", "rank");
                        targetElement_rank_rematch.classList.replace("rank_silver", "rank");
                        targetElement_rank_rematch.classList.replace("rank_bronze", "rank");
                
                        if (scoreRankInputRematch_element[currentRematch][i][0].value == finalScorePerCol_judgesSum_rematch[currentRematch][i]) {            
                            targetElement_rank_rematch.value = rankMap_rematch[finalScorePerCol_judgesSum_rematch[currentRematch][i]];
                        }
                        if (targetElement_rank_rematch.value == 1) {
                            targetElement_rank_rematch.classList.replace("rank", "rank_gold");
                            targetElement_finalScore_rematch.classList.replace("finalscore", "finalscore_selected");
                            gold_rematch++;
                        }
                        if (targetElement_rank_rematch.value == 2) {
                            targetElement_rank_rematch.classList.replace("rank", "rank_silver");
                            targetElement_finalScore_rematch.classList.replace("finalscore", "finalscore_selected");
                            silver_rematch++;
                        }
                        if (targetElement_rank_rematch.value == 3) {
                            targetElement_rank_rematch.classList.replace("rank", "rank_bronze");
                            targetElement_finalScore_rematch.classList.replace("finalscore", "finalscore_selected");
                            bronze_rematch++;
                        }
                    }    
                    console.log(`${rowNumberValue_Rematch-1}) ${finalScorePerCol_judgesSum_rematch}`);
                    document.getElementById("count_gold_rematch_"+(rematchRound+1)).textContent = gold_rematch.toString();
                    document.getElementById("count_silver_rematch_"+(rematchRound+1)).textContent = silver_rematch.toString();
                    document.getElementById("count_bronze_rematch_"+(rematchRound+1)).textContent = bronze_rematch.toString();
                    // let gold_rematch = 0;
                    // let silver_rematch = 0;
                    // let bronze_rematch = 0;
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

                for (let j = 0; j < jScoresElement_element[currentRematch][rowNumberValue_Rematch-1].length; j++) {
                    let targetElementJudgeLoopRematch = jScoresElement_element[currentRematch][rowNumberValue_Rematch-1][j];        

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
            console.log(currentRematch);
            console.log(rowNumberValue_Rematch);           
        }            
    }
    //END body content

    //Create full table
    createTable.appendChild(createHeader);
    createTable.appendChild(createBody);
    //END full table

    rematchTableContainer.insertBefore(createTable, rematchTableContainer.firstChild);
    // rematchTableContainer.insertBefore(calculateButtonRematch, rematchTableContainer.firstChild);
    rowNumberValue_RematchArr.push(rowNumberValue_Rematch);

} //END addRematchTable

function createHeaderCell(text, colspan = 1) {
    const th = document.createElement("th");
    th.innerText = text;
    if (colspan > 1) th.colSpan = colspan;
    return th;
}

addNewTableBtn.addEventListener("click", () => {
    console.log("rematchRound", rematchRound);
    let thRandomizeToHide = document.querySelector("thead tr:nth-child(2) th:first-child");
    thRandomizeToHide.style.display = "none";
    if (rematchRound == -1) {
        for (let i = 0; i < rowNumberValue; i++) {
            competitor_name_element[i][0].readOnly = true;
            for (let j = 0; j < 5; j++) {                
                judgesScoresPerCol_element[i][j].readOnly = true;
            }
            lineViolation_element[i][0].readOnly = true;
            disarmViolation_element[i][0].readOnly = true;
        }

        for (let i = 0; i < rowNumberValue; i++) {
            let checkBox = checkBox_element[i][0];
            if (checkBox.checked == true && rematchRound == -1) {
                addRematchTable();
                document.getElementById("main_table").style.display = "none";
                // Select the first <th> in the <thead>
                let thToHide = document.querySelector("#main_table thead th:first-child");
                thToHide.style.display = "none";

                let rows = document.querySelectorAll("#main_table tbody tr");
                // Get the first three <td> elements in that row
                rows.forEach(function(row) {       
                    let cellsToHide = row.querySelectorAll("td:nth-child(-n+4)");             
                    cellsToHide.forEach(function(cell) {
                        cell.style.display = "none";
                    });
                });
                break;
            }
        }
    }
    
    if (rematchRound >= 0) {
        if (viewTable == 1) {
            viewTableBtn.click();
        }        

        for (let i = 0; i < rowNumberValue_Rematch; i++) {
            let checkBoxRematch = checkBoxInputRematch_element[rematchRound][i][0];            
            if (checkBoxRematch.checked) {
                addRematchTable();
                console.log(rematchRound);
                let removeTableRematch = document.getElementById("rematch_table_"+(rematchRound));
                removeTableRematch.style.display = "none";

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

        if (rematchRound >= 1) {
            console.log(rematchRound);
            console.log(rowNumberValue_Rematch);
            for (let i = 0; i < rowNumberValue_RematchArr[rematchRound-1]; i++) {
                for (let j = 0; j < 5; j++) {                
                    jScoresElement_element[rematchRound-1][i][j].readOnly = true;
                }
                for (let k = 1; k < 3; k++) {
                    violationsInputRematch_element[rematchRound-1][i][k].readOnly = true;
                }
            }
        }
    }
});

let viewTable = 0;
viewTableBtn.addEventListener("click", () => {
    console.log("view");
    if (rematchRound > -1 && viewTable == 1) {
        console.log(rematchRound);
        if (rematchRound != -1) {
            document.getElementById("main_table").style.display = "none";
        } 
        for (let i = 0; i < rematchRound; i++) {
            let removeTableRematch = document.getElementById("rematch_table_"+(i+1));
            removeTableRematch.style.display = "none";
        }
        viewTable--;
        console.log("view", viewTable);
    }

    else if (rematchRound > -1 && viewTable == 0) {
        console.log(rematchRound);
        if (rematchRound != -1) {
            document.getElementById("main_table").removeAttribute("style");
        } 
        for (let i = 0; i < rematchRound; i++) {
            let removeTableRematch = document.getElementById("rematch_table_"+(i+1));
            removeTableRematch.removeAttribute("style");
        }
        viewTable++;
        console.log("view", viewTable);
    }
});

removeNewTableBtn.addEventListener("click", () => {
    console.log(rematchRound);
    if (rematchRound > -1) {
        let removeTableRematch = document.getElementById("rematch_table_"+(rematchRound+1));
        let calculateRematch = document.getElementById("calculateRematch_"+(rematchRound+1));
        removeTableRematch.remove();
        calculateRematch.remove();

        calculateButtonRematch_element.pop();
        checkBoxInputRematch_element.pop();
        resetBtnRematch_element.pop();
        recordBtnRematch_element.pop();
        rowNumberInputRematch_element.pop();
        competitorNameInputRematch_element.pop();
        jScoresElement_element.pop();
        timeStampRematch_element.pop();
        violationsInputRematch_element.pop();
        scoreRankInputRematch_element.pop();
        rowNumberValue_RematchArr.pop();
        // removeTableRematch.deleteRow(-1);
        // removeTableRematch.deleteRow(-1);
        if (rematchRound != 0) {
            let removeTableRematch2 = document.getElementById("rematch_table_"+(rematchRound));
            removeTableRematch2.removeAttribute("style");

            let removeTableRematch = document.getElementById("rematch_table_"+(rematchRound));
                removeTableRematch.removeAttribute("style");

            let thToHideActionRematch = removeTableRematch.querySelector("thead th:first-child");
            let thToHideAction2Rematch = removeTableRematch.querySelector("thead tr:nth-child(2)");
            let thToHideCalcRematch = thToHideAction2Rematch.querySelector("th");
            thToHideCalcRematch.removeAttribute("style");
            thToHideActionRematch.removeAttribute("style");

            let rows = removeTableRematch.querySelectorAll("tbody tr");
            // Get the first three <td> elements in that row
            rows.forEach(function(row) {       
                let cellsToHide = row.querySelectorAll("td:nth-child(-n+3)");             
                cellsToHide.forEach(function(cell) {
                    cell.removeAttribute("style");
                });
            });
        }
        
        if (rematchRound > 0) {
            console.log(rematchRound);
            console.log(rowNumberValue_Rematch);
            for (let i = 0; i < rowNumberValue_RematchArr[rematchRound-1]; i++) {
                for (let j = 0; j < 5; j++) {                
                    jScoresElement_element[rematchRound-1][i][j].removeAttribute("readonly");
                }
                for (let k = 1; k < 3; k++) {
                    violationsInputRematch_element[rematchRound-1][i][k].removeAttribute("readonly");
                }
            }
        }

        rematchRound--;
        console.log(rematchRound);
        rematchRoundIndicator.textContent = rematchRound+1;
    }
    if (rematchRound == -1) {
        for (let i = 0; i < rowNumberValue; i++) {
            competitor_name_element[i][0].removeAttribute("readonly");
            for (let j = 0; j < judgesScoresPerCol_element[i].length; j++) {                
                judgesScoresPerCol_element[i][j].removeAttribute("readonly");
            }
            lineViolation_element[i][0].removeAttribute("readonly");
            disarmViolation_element[i][0].removeAttribute("readonly");
        }

        rematchRoundIndicator.textContent = "";
        document.getElementById("main_table").removeAttribute("style");
        let thToHide = document.querySelector("#main_table thead th:first-child");
        thToHide.removeAttribute("style");

        let rows = document.querySelectorAll("#main_table tbody tr");
            // Get the first three <td> elements in that row
            rows.forEach(function(row) {       
            let cellsToHide = row.querySelectorAll("td:nth-child(-n+3)");             
            cellsToHide.forEach(function(cell) {
                cell.removeAttribute("style");
            });
        });
    }
});