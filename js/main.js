document.getElementById('execute-btn').addEventListener('click', function() {
    const select = document.getElementById('policy-select');
    const policyPage = select.value;
    const loadingScreen = document.getElementById('loading-screen');
    const loadingText = document.getElementById('loading-text');

    document.querySelector('select').disabled = true;
    this.disabled = true;

    loadingScreen.classList.remove('hidden');

    const messages = [
        "booting gov.decision.module ...",
        "loading child_policy_proposal.exe ...",
        "user-role detected: DECISION-MAKER",
        "----------------------------------------",
        ">>> PROCESSING CHILD POLICY PROPOSAL...",
        "----------------------------------------",
        "[35%] ███████▒▒▒▒▒▒▒▒▒▒▒▒▒ 35% 準備傾聽兒少意見...",
        "[50%] ███████████▒▒▒▒▒▒▒▒ 50% 專家資料整合中...",
        "[75%] ███████████████▒▒▒ 75% 彙整跨部會建議...",
        "[100%] ██████████████████ 100% 完成！",
        "----------------------------------------",
        ">>> DECISION PACKAGE GENERATED",
        "----------------------------------------",
        `gov.execute(module="${policyPage.split('.')[0]}", selected_policy="selected", priority=1);`,
        "----------------------------------------",
        "# Change Visualization",
        "----------------------------------------"
    ];

    let i = 0;

    function typeNext() {
        if(i < messages.length) {
            loadingText.textContent += messages[i] + "\n";
            i++;
            setTimeout(typeNext, 150);
        } else {
            setTimeout(() => {
                window.location.href = policyPage;
            }, 500); // 等待半秒再跳轉
        }
    }

    typeNext();
});
