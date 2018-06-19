const cheat = (cycleTime = 1) => {
    // let ele = window.frames['w_main'].frames['w_lms_content'].document.getElementById('tdRemark');

    // console.log(ele);
    try {
        let tblDataList = window.frames['w_main'].document.querySelector('#frame_learning_content_1 #tblDataList');//frame_learning_content_1
        let incomplete = tblDataList.querySelector('.scorm.incomplete');
        let notattempt = tblDataList.querySelector('.scorm.notattempt');
        let currentElement = incomplete || notattempt;
        if (currentElement){
            currentElement.parentElement.parentElement.querySelector('a').onclick();
        }
    } catch (e) {
        console.log(e);
    } finally {
        setTimeout(cheat, 1000 * cycleTime, cycleTime);
    }

    // if (ele) {
    //     let text = ele.innerText;
    //     console.log(text, text.includes('已经学习完毕！'));
    //     if (text.includes('已经学习完毕！') || text.includes('学习课件完毕')) { // 学习课件完毕
    //         window.frames['w_main'].frames['w_code'].document.getElementById('btnNext').onclick();
    //     }
    // }
};

cheat(1);


//.scorm.incomplete     正在学习
//.scorm.notattempt     未学习