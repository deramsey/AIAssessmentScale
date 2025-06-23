const levelTitle = ["No AI", "AI Planning", "AI Collaboration", "Full AI", "AI Exploration"]
const levelInfo = [
    "<p>The assessment is completed entirely without AI assistance in a controlled environment, ensuring that students rely solely on their existing knowledge, understanding, and skills.</p> <p><strong><em>You must not use AI at any point during the assessment. You must demonstrate your core skills and knowledge.</em></strong></p>",
    "<p>AI may be used for pre-task activities such as brainstorming, outlining and initial research. This level focuses on the effective use of AI for planning, synthesis, and ideation, but assessments should emphasise the ability to develop and refine these ideas independently.</p><p><strong><em>You may use AI for planning, idea development, and research. Your final submission should show how you have developed and refined these ideas.</em></strong></p>",
    "<p>AI may be used to help complete the task, including idea generation, drafting, feedback, and refinement. Students should critically evaluate and modify the AI suggested outputs, demonstrating their understanding.</p><p><strong><em>You may use AI to assist with specific tasks such as drafting text, refining and evaluating your work. You must critically evaluate and modify any AI-generated content you use.</em></strong></p>",
    "<p>AI may be used to complete any elements of the task, with students directing AI to achieve the assessment goals. Assessments at this level may also require engagement with AI to achieve goals and solve problems.</p><p><strong><em>You may use AI extensively throughout your work either as you wish, or as specifically directed in your assessment. Focus on directing AI to achieve your goals while demonstrating your critical thinking.</em></strong></p>",
    "<p>AI is used creatively to enhance problem-solving, generate novel insights, or develop innovative solutions to solve problems. Students and educators co-design assessments to explore unique AI applications within the field of study.</p><p><strong><em>You should use AI creatively to solve the task, potentially co-designing new approaches with your instructor.</em></strong></p>"
]
const icons = ["no_ai.png", "ai_idea.png", "ai_collab.png", "all_ai.png", "ai_explore.png"]

document.querySelector("#levelDesc").innerHTML = levelInfo[0];

const changeVal = () => {
    var level = document.querySelector("#slider").value;
    document.querySelector("#level").innerHTML = level;
    document.querySelector("#levelTitle").innerHTML = levelTitle[level-1];
    document.querySelector("#levelDesc").innerHTML = levelInfo[level-1];
    document.querySelector(".i").src = "./resources/icons/"+icons[level-1];
}

function copyToClip() {
    let toCopy = document.querySelector("#output").innerHTML;
    function listener(e) {
        e.clipboardData.setData("text/html", toCopy);
        //e.clipboardData.setData("text/plain", toCopy);
        e.preventDefault();
  }
    document.addEventListener("copy", listener);
    document.execCommand("copy");
    document.removeEventListener("copy", listener);
};

document.querySelector("#slider").addEventListener("change", changeVal);
document.querySelector("#copy").addEventListener("click", copyToClip);