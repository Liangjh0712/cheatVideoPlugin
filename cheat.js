const cheat = (cycleTime = 1) => {
    try {
        let tblDataList = window.frames['w_main'].document.querySelector('#frame_learning_content_1 #tblDataList');
        let incomplete = tblDataList.querySelector('.scorm.incomplete');
        let notattempt = tblDataList.querySelector('.scorm.notattempt');
        let currentElement = incomplete || notattempt;
        if (currentElement) {
            currentElement.parentElement.parentElement.querySelector('a').click();
            cheatVideo(60);
        }
    } catch (e) {
        setTimeout(cheat, 1000 * cycleTime, cycleTime);
    }
};

cheat(1);

const cheatVideo = (cycleTime = 1) => {
    try {
        let ele = window.frames['w_main'].frames['w_lms_content'].document.getElementById('tdRemark');
        if (ele) {
            let text = ele.innerText;
            console.log(text, text.includes('已经学习完毕！'));
            if (text.includes('已经学习完毕！') || text.includes('学习课件完毕')) { // 学习课件完毕
                window.frames['w_main'].frames['w_code'].document.getElementById('btnNext').click();
                window.location.reload();
            }
        }
    } catch (e) {
        console.error(e);
    } finally {
        setTimeout(cheatVideo, 1000 * cycleTime, cycleTime);
    }
};


//.scorm.incomplete     正在学习
//.scorm.notattempt     未学习