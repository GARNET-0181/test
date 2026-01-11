// アプリケーションのメイン処理

// 画面を切り替える関数
function showScreen(screenId) {
    // すべての画面を非表示
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // 指定された画面を表示
    document.getElementById(screenId).classList.add('active');
}

// スタート画面に戻る
function backToStart() {
    showScreen('startScreen');
    updateStats();
}

// 統計情報を更新
function updateStats() {
    const stats = getStats();
    document.getElementById('totalShops').textContent = stats.totalShops;
    document.getElementById('bestScore').textContent = stats.bestScore;
}

// ページ読み込み時の初期化
document.addEventListener('DOMContentLoaded', function() {
    // スタート画面を表示
    showScreen('startScreen');
    
    // 統計情報を更新
    updateStats();
    
    // スムーズスクロールを有効化
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // キーボードショートカット
    document.addEventListener('keydown', function(e) {
        // Escapeキーでスタート画面に戻る
        if (e.key === 'Escape') {
            const currentScreen = document.querySelector('.screen.active');
            if (currentScreen && currentScreen.id !== 'startScreen') {
                if (confirm('クイズを中断してトップに戻りますか？')) {
                    backToStart();
                }
            }
        }
        
        // クイズ画面で数字キーで回答
        if (document.getElementById('quizScreen').classList.contains('active')) {
            const key = e.key;
            if (/^[0-9]$/.test(key)) {
                const buttons = document.querySelectorAll('.answer-btn:not(.disabled)');
                const index = parseInt(key) - 1;
                if (buttons[index]) {
                    buttons[index].click();
                }
            }
        }
    });
    
    // タッチデバイスの検出
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
    }
    
    // オフラインモードの検出
    window.addEventListener('online', function() {
        console.log('オンラインに接続されました');
    });
    
    window.addEventListener('offline', function() {
        console.log('オフラインモードです');
    });
    
    // サービスワーカーの登録（PWA化の準備）
    if ('serviceWorker' in navigator) {
        // 将来的にPWA化する場合はここでサービスワーカーを登録
        // navigator.serviceWorker.register('/sw.js');
    }
    
    // デバッグ情報
    console.log('🏢 ミナモア・ekie フロアクイズ');
    console.log(`📊 登録店舗数: ${shopsDatabase.length}`);
    console.log(`🏆 最高得点: ${getBestScore()}`);
    
    // アニメーション効果の追加
    addAnimationEffects();
});

// アニメーション効果を追加
function addAnimationEffects() {
    // スタートボタンにホバーエフェクト
    const modeButtons = document.querySelectorAll('.mode-btn');
    modeButtons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// パフォーマンス測定
function measurePerformance() {
    if (window.performance && window.performance.timing) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`⚡ ページ読み込み時間: ${pageLoadTime}ms`);
    }
}

// ページが完全に読み込まれたら
window.addEventListener('load', function() {
    measurePerformance();
});

// エラーハンドリング
window.addEventListener('error', function(e) {
    console.error('エラーが発生しました:', e.message);
});

// Promise エラーハンドリング
window.addEventListener('unhandledrejection', function(e) {
    console.error('Promise エラー:', e.reason);
});

// ブラウザの戻るボタン対応
window.addEventListener('popstate', function(e) {
    // 必要に応じて画面遷移を処理
});

// ビューポートの高さを動的に設定（モバイル対応）
function setViewportHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// 初期設定とリサイズ時
setViewportHeight();
window.addEventListener('resize', setViewportHeight);
window.addEventListener('orientationchange', setViewportHeight);

// デバッグモード（開発用）
const DEBUG_MODE = false;

if (DEBUG_MODE) {
    console.log('🔧 デバッグモード有効');
    console.log('📦 全ショップデータ:', shopsDatabase);
    
    // デバッグ用のグローバル関数
    window.debugQuiz = {
        getShops: () => shopsDatabase,
        getStats: () => getStats(),
        resetScore: () => {
            localStorage.removeItem(STORAGE_KEY);
            updateStats();
            console.log('スコアをリセットしました');
        },
        skipToResults: () => {
            quizState.correctCount = 8;
            quizState.wrongCount = 2;
            quizState.score = 80;
            quizState.totalQuestions = 10;
            showResults();
        }
    };
    
    console.log('💡 デバッグコマンド:');
    console.log('  debugQuiz.getShops() - 全ショップデータを表示');
    console.log('  debugQuiz.getStats() - 統計情報を表示');
    console.log('  debugQuiz.resetScore() - スコアをリセット');
    console.log('  debugQuiz.skipToResults() - 結果画面へスキップ');
}

// ユーティリティ関数
const utils = {
    // ランダムな要素を取得
    randomElement: (array) => array[Math.floor(Math.random() * array.length)],
    
    // 配列をシャッフル
    shuffle: (array) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    },
    
    // 時間をフォーマット
    formatTime: (ms) => {
        const seconds = Math.floor(ms / 1000);
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    },
    
    // スコアをフォーマット
    formatScore: (score) => {
        return score.toString().padStart(3, '0');
    }
};

// グローバルに公開
window.utils = utils;

console.log('✅ アプリケーションの初期化が完了しました');
