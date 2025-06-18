const levelInfo = [
    "<p>The assessment is completed entirely without AI assistance in a controlled environment, ensuring that students rely solely on their existing knowledge, understanding, and skills.</p> <p><strong><em>You must not use AI at any point during the assessment. You must demonstrate your core skills and knowledge.</em></strong></p>",
    "<p>AI may be used for pre-task activities such as brainstorming, outlining and initial research. This level focuses on the effective use of AI for planning, synthesis, and ideation, but assessments should emphasise the ability to develop and refine these ideas independently.</p><p><strong><em>You may use AI for planning, idea development, and research. Your final submission should show how you have developed and refined these ideas.</em></strong></p>"
]

document.querySelector("#levelDesc").innerHTML = levelInfo[0];

const changeVal = () => {
    var level = document.querySelector("#slider").value;
    document.querySelector("#level").innerHTML = level;
    document.querySelector("#levelDesc").innerHTML = levelInfo[level-1];
}

document.querySelector("#slider").addEventListener("change", changeVal);