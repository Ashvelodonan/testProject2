function forRematch() {
    // rowNumberValue_Rematch = 0;
    // rematchRound++;
    // rematchRoundIndicator.textContent = rematchRound+1;
    // console.log(rematchRound);

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
    const totalLengthRematch = checkBoxInputRematch_element[rematchRound-1][0].length
    +resetBtnRematch_element[rematchRound-1][0].length
    +recordBtnRematch_element[rematchRound-1][0].length
    +rowNumberInputRematch_element[rematchRound-1][0].length
    +competitorNameInputRematch_element[rematchRound-1][0].length
    +jScoresElement_element[rematchRound-1][0].length
    +timeStampRematch_element[rematchRound-1][0].length
    +violationsInputRematch_element[rematchRound-1][0].length
    +scoreRankInputRematch_element[rematchRound-1][0].length;    
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
    targetElement_competitorNameInputRematch.addEventListener("click", () => {
        let maxChLength = 0;
        let selectCompNameElement = competitorNameInputRematch_element[rematchRound];

        for (let i = 0; i < rowNumberValue_Rematch; i++) {
            let selectCompNameElementPerI = competitorNameInputRematch_element[rematchRound][i][0];

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
        let totalSum_rematch = 0;
        for (let i = 0; i < rowNumberValue_Rematch; i++) {
            if (!finalScorePerCol_judgesSum_rematch[rematchRound]) {
                finalScorePerCol_judgesSum_rematch[rematchRound] = [];
            }
            finalScorePerCol_judgesSum_rematch[rematchRound] = [];
            // if (!finalScorePerCol_judgesSum_rematch[rematchRound][i]) {
            //     finalScorePerCol_judgesSum_rematch[rematchRound][i] = [];
            // }
            // finalScorePerCol_judgesSum_rematch = [];
            // finalScorePerCol_judgesSum_rematch[rematchRound][i] = []
            if (!judgeScoreShifted_rematch[rematchRound]) {
                judgeScoreShifted_rematch[rematchRound] = [];
            }
            if (!judgeScoreShifted_rematch[rematchRound][i]) {
                judgeScoreShifted_rematch[rematchRound][i] = [];
            }
            // judgeScoreShifted_rematch = [];
            judgeScoreShifted_rematch[rematchRound][i] = [];
            if (!judgeScorePopped_rematch[rematchRound]) {
                judgeScorePopped_rematch[rematchRound] = [];
            }
            if (!judgeScorePopped_rematch[rematchRound][i]) {
                judgeScorePopped_rematch[rematchRound][i] = [];
            }
            // judgeScorePopped_rematch = [];
            judgeScorePopped_rematch[rematchRound][i] = [];

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

                    for (let r = 0; r < jScoresElement_element[rematchRound][i].length; r++) {
                        let targetElement_jScoresElement_element = jScoresElement_element[rematchRound][i][r];
                        minValue_rematch = parseFloat(minValue_rematch).toFixed(1);
                        maxValue_rematch = parseFloat(maxValue_rematch).toFixed(1);

                        if (targetElement_jScoresElement_element.value == judgeScoreShifted_rematch[rematchRound][i]) {
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
                        if (targetElement_jScoresElement_element.value == judgeScorePopped_rematch[rematchRound][i]) {
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

                    console.log("low:", judgeScoreShifted_rematch[rematchRound][i]);
                    console.log("high:", judgeScorePopped_rematch[rematchRound][i]);
                    console.log("sorted:", sortedJudgesScoreCol_rematch[rematchRound][i]);

                    var rawScoreSum_rematch = 0;
                    for (let l = 0; l < sortedJudgesScoreCol_rematch[rematchRound][i].length; l++) {
                        rawScoreSum_rematch += sortedJudgesScoreCol_rematch[rematchRound][i][l];
                    }
                    rawScoreSum_rematch = parseFloat(rawScoreSum_rematch.toFixed(1));
                    console.log("rawScoreRematch:", rawScoreSum_rematch);
                }
            }
            totalSum_rematch = rawScoreSum_rematch -
            violationsInputRematch_element[rematchRound][i][0].value -
            violationsInputRematch_element[rematchRound][i][1].value -
            violationsInputRematch_element[rematchRound][i][2].value;

            targetElement_finalScoreRematch.value = totalSum_rematch.toFixed(1);
            finalScorePerCol_judgesSum_rematch[rematchRound].push(totalSum_rematch.toFixed(1));
        }

        duplicates_rematch = {};
        // First, find duplicates
        for (let i = 0; i < rowNumberValue_RematchArr[rematchRound]; i++) {
            const currentValueRematch = finalScorePerCol_judgesSum_rematch[rematchRound];
            
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
                    let targetElement_finalScoreRematch = document.getElementById("finalScore_"+ (rematchRound+1) +"_"+(index+1));
                    // console.log(`Condition applied to player ${index+1} with value: ${key}`);
                    let playerNumberRematch = rowNumberInputRematch_element[0][index][0].value;
                    console.log(`Condition applied to player ${playerNumberRematch} with value: ${key}`);
    
                    for (let j = 0; j < jScoresElement_element[rematchRound][index].length; j++) {
                        let targetElement_jScoresElement = jScoresElement_element[rematchRound][index][j];
                        let judgeScoreColRematch = parseFloat(jScoresElement_element[rematchRound][index][j].value);
                        targetElement_jScoresElement.classList.replace("judge_scores_removed", "judge_scores");
                        judgeScoreColRematch.toFixed(1);
                        console.log(`${rawScoreSum_rematch}+${judgeScoreColRematch}`);
                        rawScoreSum_rematch += judgeScoreColRematch;
                        console.log(`= ${rawScoreSum_rematch}`);
                    }
                    //compute total sum = final score rematch
                    totalSum_rematch = rawScoreSum_rematch - 
                    violationsInputRematch_element[rematchRound][index][0].value - 
                    violationsInputRematch_element[rematchRound][index][1].value -
                    violationsInputRematch_element[rematchRound][index][2].value;
                    console.log(index);
                    
                    targetElement_finalScoreRematch.value = totalSum_rematch.toFixed(1);
                    finalScorePerCol_judgesSum_rematch[rematchRound][index] = targetElement_finalScoreRematch.value;
                    console.log(finalScorePerCol_judgesSum_rematch[rematchRound][index]);
                    // finalScorePerCol_judgesSum_rematch[rematchRound][index].push(totalSum_rematch.toFixed(1));
                }
            }
        }

        //rankloop
        uniqueSortedValues_rematch = [...new Set(finalScorePerCol_judgesSum_rematch[rematchRound])].sort((a, b) => b - a);
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
        for (let i = 0; i < finalScorePerCol_judgesSum_rematch[rematchRound].length; i++) {
            let targetElement_rank_rematch = document.getElementById("rank_"+ (rematchRound+1) +"_"+ (i+1));
            console.log(targetElement_rank_rematch);
            let targetElement_finalScore_rematch = document.getElementById("finalScore_"+ (rematchRound+1) +"_"+ (i+1));
            console.log(targetElement_finalScore_rematch);
            targetElement_finalScore_rematch.classList.replace("finalscore_selected", "finalscore");
            targetElement_rank_rematch.classList.replace("rank_gold", "rank");
            targetElement_rank_rematch.classList.replace("rank_silver", "rank");
            targetElement_rank_rematch.classList.replace("rank_bronze", "rank");
    
            if (scoreRankInputRematch_element[rematchRound][i][0].value == finalScorePerCol_judgesSum_rematch[rematchRound][i]) {            
                targetElement_rank_rematch.value = rankMap_rematch[finalScorePerCol_judgesSum_rematch[rematchRound][i]];
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
            
    checkBoxInputRematch_element.checked = false;
    console.log(rematchRound);
    console.log(rowNumberValue_Rematch);            
    
    //END body content

    //Create full table
    createTable.appendChild(createHeader);
    createTable.appendChild(createBody);
    //END full table

    rematchTableContainer.insertBefore(createTable, rematchTableContainer.firstChild);
    rematchTableContainer.insertBefore(calculateButtonRematch, rematchTableContainer.firstChild);
    rowNumberValue_RematchArr.push(rowNumberValue_Rematch);
}