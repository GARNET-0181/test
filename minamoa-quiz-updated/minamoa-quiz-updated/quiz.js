// クイズの状態管理
let quizState = {
    mode: '',              // 'minamoa', 'ekie', 'all'
    questions: [],         // 出題される問題
    currentIndex: 0,       // 現在の問題番号
    score: 0,              // 現在のスコア
    correctCount: 0,       // 正解数
    wrongCount: 0,         // 不正解数
    totalQuestions: 0,     // 総問題数
    answered: false        // 回答済みフラグ
};

// クイズ開始
function startQuiz(mode) {
    const questionCount = parseInt(document.getElementById('questionCount').value);
    
    // 状態を初期化
    quizState = {
        mode: mode,
        questions: getRandomShops(mode, questionCount),
        currentIndex: 0,
        score: 0,
        correctCount: 0,
        wrongCount: 0,
        totalQuestions: questionCount,
        answered: false
    };
    
    // 画面切り替え
    showScreen('quizScreen');
    
    // 最初の問題を表示
    displayQuestion();
    updateQuizHeader();
}

// 問題を表示
function displayQuestion() {
    const currentQuestion = quizState.questions[quizState.currentIndex];
    
    // ショップ名と建物を表示
    document.getElementById('shopName').textContent = currentQuestion.name;
    document.getElementById('buildingTag').textContent = getBuildingDisplayName(currentQuestion.building);
    
    // フィードバックを非表示
    const feedback = document.getElementById('feedback');
    feedback.style.display = 'none';
    feedback.className = 'feedback';
    
    // 回答済みフラグをリセット
    quizState.answered = false;
    
    // 選択肢を生成
    generateAnswerButtons(currentQuestion);
    
    // フロアマップを非表示にする
    hideFloorMap();
}

// 選択肢ボタンを生成
function generateAnswerButtons(question) {
    const answerGrid = document.getElementById('answerGrid');
    answerGrid.innerHTML = '';
    
    const floors = getFloorsForBuilding(question.building);
    
    floors.forEach(floor => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = floor;
        button.onclick = () => checkAnswer(floor, question.floor);
        answerGrid.appendChild(button);
    });
}

// 回答をチェック
function checkAnswer(selectedFloor, correctFloor) {
    if (quizState.answered) return;
    
    quizState.answered = true;
    const isCorrect = selectedFloor === correctFloor;
    
    // すべてのボタンを無効化
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach(btn => {
        btn.classList.add('disabled');
        
        // 正解のボタンを緑に
        if (btn.textContent === correctFloor) {
            btn.classList.add('correct');
        }
        
        // 不正解の選択を赤に
        if (btn.textContent === selectedFloor && !isCorrect) {
            btn.classList.add('wrong');
        }
    });
    
    // スコアと統計を更新
    if (isCorrect) {
        quizState.correctCount++;
        quizState.score += 10;
    } else {
        quizState.wrongCount++;
    }
    
    // フィードバックを表示
    showFeedback(isCorrect, correctFloor);
    
    // フロアマップを表示
    showFloorMap(correctFloor);
    
    // ヘッダーを更新
    updateQuizHeader();
    
    // 次の問題へ（4秒後に変更 - マップを見る時間を確保）
    setTimeout(() => {
        nextQuestion();
    }, 4000);
}

// フィードバックを表示
function showFeedback(isCorrect, correctFloor) {
    const feedback = document.getElementById('feedback');
    const feedbackText = feedback.querySelector('.feedback-text');
    const feedbackDetail = feedback.querySelector('.feedback-detail');
    
    const currentQuestion = quizState.questions[quizState.currentIndex];
    
    if (isCorrect) {
        feedback.classList.add('correct');
        feedbackText.textContent = '正解！';
        feedbackDetail.textContent = `${currentQuestion.name}は${correctFloor}にあります`;
    } else {
        feedback.classList.add('wrong');
        feedbackText.textContent = '不正解';
        feedbackDetail.textContent = `正解は${correctFloor}です（${currentQuestion.category}）`;
    }
    
    feedback.style.display = 'block';
}

// フロアマップを表示（位置マーカー付き）
function showFloorMap(floor) {
    const currentQuestion = quizState.questions[quizState.currentIndex];
    const mapContainer = document.getElementById('floorMapContainer');
    const mapCanvas = document.getElementById('floorMapCanvas');
    
    if (!mapContainer || !mapCanvas) return;
    
    const ctx = mapCanvas.getContext('2d');
    const containerWidth = 600;
    const containerHeight = 400;
    
    // キャンバスサイズを設定
    mapCanvas.width = containerWidth;
    mapCanvas.height = containerHeight;
    
    // 背景を描画
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, containerWidth, containerHeight);
    
    // フロア情報を描画
    ctx.fillStyle = '#333';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(`${floor} フロアマップ`, containerWidth / 2, 40);
    
    // ショップの位置にマーカーを描画
    if (currentQuestion.position) {
        const x = (currentQuestion.position.x / 100) * containerWidth;
        const y = (currentQuestion.position.y / 100) * containerHeight + 60; // オフセット追加
        
        // 赤い円を描画
        ctx.fillStyle = '#ff0000';
        ctx.beginPath();
        ctx.arc(x, y, 12, 0, Math.PI * 2);
        ctx.fill();
        
        // 白い枠線
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 3;
        ctx.stroke();
        
        // ショップ名を表示
        ctx.fillStyle = '#333';
        ctx.font = 'bold 16px Arial';
        ctx.fillText(currentQuestion.name, x, y + 35);
    }
    
    // 凡例を追加
    ctx.fillStyle = '#666';
    ctx.font = '14px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('● ショップ位置', 20, containerHeight - 20);
    
    // コンテナを表示
    mapContainer.style.display = 'block';
}

// フロアマップを非表示
function hideFloorMap() {
    const mapContainer = document.getElementById('floorMapContainer');
    if (mapContainer) {
        mapContainer.style.display = 'none';
    }
}

// 次の問題へ
function nextQuestion() {
    quizState.currentIndex++;
    
    if (quizState.currentIndex < quizState.totalQuestions) {
        // 次の問題を表示
        displayQuestion();
        updateQuizHeader();
    } else {
        // クイズ終了
        showResults();
    }
}

// クイズヘッダーを更新
function updateQuizHeader() {
    document.getElementById('currentQuestion').textContent = quizState.currentIndex + 1;
    document.getElementById('totalQuestions').textContent = quizState.totalQuestions;
    document.getElementById('currentScore').textContent = quizState.score;
    
    // プログレスバーを更新
    const progress = ((quizState.currentIndex + 1) / quizState.totalQuestions) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
}

// 結果を表示
function showResults() {
    showScreen('resultScreen');
    
    const accuracy = Math.round((quizState.correctCount / quizState.totalQuestions) * 100);
    
    // 結果を表示
    document.getElementById('finalScore').textContent = quizState.score;
    document.getElementById('maxScore').textContent = quizState.totalQuestions * 10;
    document.getElementById('correctCount').textContent = quizState.correctCount;
    document.getElementById('wrongCount').textContent = quizState.wrongCount;
    document.getElementById('accuracy').textContent = accuracy;
    
    // メッセージを生成
    let message = '';
    if (accuracy === 100) {
        message = '🎉 完璧です！全問正解おめでとうございます！';
    } else if (accuracy >= 80) {
        message = '👏 素晴らしい！かなり覚えていますね！';
    } else if (accuracy >= 60) {
        message = '👍 良い調子です！もう少しで完璧ですね！';
    } else if (accuracy >= 40) {
        message = '💪 頑張りました！復習して再挑戦しましょう！';
    } else {
        message = '📚 学習モードで覚えてから再挑戦してみましょう！';
    }
    
    document.getElementById('resultMessage').textContent = message;
    
    // 最高得点を保存
    const isNewRecord = saveBestScore(quizState.score);
    if (isNewRecord) {
        message += '\n🏆 新記録達成！';
        document.getElementById('resultMessage').textContent = message;
    }
    
    // 最高得点を更新
    updateStats();
}

// もう一度挑戦
function restartQuiz() {
    startQuiz(quizState.mode);
}

// クイズヘッダーにスコア表示のアニメーション
function animateScore() {
    const scoreDisplay = document.getElementById('currentScore');
    scoreDisplay.style.transform = 'scale(1.3)';
    setTimeout(() => {
        scoreDisplay.style.transform = 'scale(1)';
    }, 300);
}
