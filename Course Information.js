// Define an object containing the timetable data

let inputData = ['Class Info'];
let department = "";
const puppeteer = require('puppeteer');

async function launchPuppeteer() {
    const timetableData = {};
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://ug-schedules.tuj.ac.jp/ug/academics/semester-info/schedule/summer2023?_ga=2.162764348.1671429086.1677081448-1473158504.1652972778&_gl=1*1s9pxld*_ga*MTQ3MzE1ODUwNC4xNjUyOTcyNzc4*_ga_SWHSQQF0DM*MTY3NzE1MjI3MS4xMDAuMS4xNjc3MTUyMjc1LjU2LjAuMA..');

    const tableDatas = await page.$$('td');
    for (const tableData of tableDatas) {
        const classData = await tableData.evaluate(node => node.textContent);
        inputData.push(classData.toString());

    }
    ;

    for (let i = 0; i < inputData.length; i += 11) {
        // Split the block into inputData

        let j;
        // Extract the relevant information from the inputData

        const courseCode = inputData[2 + i];
        const courseNum = inputData[2 + i];
        const subject = inputData[1 + i];
        const courseName = inputData[3 + i];
        const credits = inputData[4 + i];
        const time = inputData[5 + i];
        const professor = inputData[6 + i];
        const crn = inputData[7 + i];
        const gened = inputData[8 + i];
        const prior = inputData[9 + i];
        const specialInfo = inputData[10 + i];
        // Determine if this course is a Gened course
        department += courseCode;
        // Add the course to the timetableData object
        timetableData[courseNum] = {
            "subject": subject,
            "courseCode": courseCode,
            "courseName": courseName,
            "credits": credits,
            "time": time,
            "professor": professor,
            "crn": crn,
            "gened": gened,
            "prior": prior,
            "specialInfo": specialInfo
        };

    }

    console.dir(department);
    await browser.close();
    //console.log(timetableData);


}

launchPuppeteer();

