// ミナモア・ekieの正確なショップデータ (2F/3F 東西完全分離版)
// 公式サイト https://www.minamoa-ekie.jp/ に基づく

const shopsDatabase = [
    // ========== minamoa B1F ==========
    { id: 1, name: "キンコーズ", building: "minamoa", floor: "B1F", category: "サービス", position: { x: 50, y: 50 } },
    { id: 2, name: "吉野家", building: "minamoa", floor: "B1F", category: "レストラン", position: { x: 40, y: 60 } },
    { id: 3, name: "リトルマーメイド", building: "minamoa", floor: "B1F", category: "ベーカリー", position: { x: 60, y: 40 } },
    { id: 4, name: "リンガーハット", building: "minamoa", floor: "B1F", category: "レストラン", position: { x: 70, y: 55 } },
    { id: 5, name: "セブン-イレブン ハートイン", building: "minamoa", floor: "B1F", category: "コンビニ", position: { x: 45, y: 70 } },

    // ========== minamoa 1F ==========
    { id: 10, name: "スターバックス コーヒー", building: "minamoa", floor: "1F", category: "カフェ", position: { x: 50, y: 50 } },
    { id: 11, name: "もみじ饅頭のやまだ屋", building: "minamoa", floor: "1F", category: "おみやげ", position: { x: 30, y: 40 } },
    { id: 12, name: "にしき堂", building: "minamoa", floor: "1F", category: "おみやげ", position: { x: 35, y: 50 } },
    { id: 13, name: "藤い屋", building: "minamoa", floor: "1F", category: "おみやげ", position: { x: 40, y: 60 } },
    { id: 14, name: "八天堂", building: "minamoa", floor: "1F", category: "おみやげ", position: { x: 45, y: 70 } },
    { id: 15, name: "広島駅ビル名店街", building: "minamoa", floor: "1F", category: "おみやげ", position: { x: 50, y: 40 } },
    { id: 16, name: "ドンク", building: "minamoa", floor: "1F", category: "ベーカリー", position: { x: 60, y: 50 } },
    { id: 17, name: "タリーズコーヒー", building: "minamoa", floor: "1F", category: "カフェ", position: { x: 70, y: 45 } },
    { id: 18, name: "銀座に志かわ", building: "minamoa", floor: "1F", category: "ベーカリー", position: { x: 55, y: 65 } },
    { id: 19, name: "カルビー プラス", building: "minamoa", floor: "1F", category: "おみやげ", position: { x: 65, y: 55 } },

    // ========== minamoa 2F北 (コスメ・ザッカ) ==========
    { id: 20, name: "熊野筆ショップ", building: "minamoa", floor: "2F北", category: "工芸品・生活雑貨", position: { x: 50, y: 30 } },
    { id: 21, name: "PLAZA", building: "minamoa", floor: "2F北", category: "ライフスタイルストア", position: { x: 45, y: 35 } },
    { id: 22, name: "ISETAN MiRROR Make&Cosmetics", building: "minamoa", floor: "2F北", category: "コスメ", position: { x: 55, y: 40 } },
    { id: 23, name: "ANEMONE", building: "minamoa", floor: "2F北", category: "バッグ・アクセサリー", position: { x: 40, y: 38 } },
    { id: 24, name: "Garland of Dew", building: "minamoa", floor: "2F北", category: "アクセサリー", position: { x: 35, y: 42 } },
    { id: 25, name: "LOVERARY BY FEILER", building: "minamoa", floor: "2F北", category: "ファッション雑貨", position: { x: 48, y: 45 } },
    { id: 26, name: "Aesop", building: "minamoa", floor: "2F北", category: "コスメ", position: { x: 60, y: 35 } },
    { id: 27, name: "A de Vivre", building: "minamoa", floor: "2F北", category: "レディスシューズ", position: { x: 42, y: 48 } },
    { id: 28, name: "Matoeru", building: "minamoa", floor: "2F北", category: "アクセサリー・生活雑貨", position: { x: 52, y: 38 } },
    { id: 29, name: "Marche de Bleuet plus", building: "minamoa", floor: "2F北", category: "生活雑貨", position: { x: 58, y: 42 } },
    { id: 30, name: "Smith", building: "minamoa", floor: "2F北", category: "文具・雑貨", position: { x: 38, y: 35 } },
    { id: 31, name: "Biople", building: "minamoa", floor: "2F北", category: "オーガニックコスメ・食品", position: { x: 43, y: 32 } },
    { id: 32, name: "L'OCCITANE", building: "minamoa", floor: "2F北", category: "コスメ", position: { x: 63, y: 38 } },
    { id: 33, name: "Lindt Chocolat Boutique", building: "minamoa", floor: "2F北", category: "スイーツ", position: { x: 47, y: 28 } },
    { id: 34, name: "スリーフォータイム", building: "minamoa", floor: "2F北", category: "ファッション雑貨", position: { x: 53, y: 33 } },
    { id: 35, name: "robinet + PETALE", building: "minamoa", floor: "2F北", category: "フラワーショップ", position: { x: 57, y: 28 } },
    { id: 36, name: "STARBUCKS", building: "minamoa", floor: "2F北", category: "カフェ", position: { x: 50, y: 25 } },
    { id: 37, name: "CHANEL FRAGRANCE & BEAUTY", building: "minamoa", floor: "2F北", category: "コスメ", position: { x: 65, y: 32 } },
    { id: 38, name: "BAUM", building: "minamoa", floor: "2F北", category: "コスメ", position: { x: 33, y: 45 } },
    { id: 39, name: "MUCHA", building: "minamoa", floor: "2F北", category: "フレグランス", position: { x: 68, y: 35 } },
    { id: 40, name: "花の器", building: "minamoa", floor: "2F北", category: "コスメ", position: { x: 37, y: 30 } },
    { id: 41, name: "靴下屋", building: "minamoa", floor: "2F北", category: "ファッション雑貨", position: { x: 62, y: 30 } },
    { id: 42, name: "SuiSavon-首里石鹸-", building: "minamoa", floor: "2F北", category: "コスメ", position: { x: 70, y: 38 } },
    { id: 43, name: "成城石井", building: "minamoa", floor: "2F北", category: "スーパーマーケット", position: { x: 32, y: 38 } },
    { id: 44, name: "リファ", building: "minamoa", floor: "2F北", category: "美容機器・コスメ", position: { x: 55, y: 30 } },

    // ========== minamoa 2F東 (コスメ・ザッカ) ==========
    { id: 50, name: "Vendome Aoyama", building: "minamoa", floor: "2F東", category: "ジュエリー", position: { x: 75, y: 50 } },
    { id: 51, name: "russet", building: "minamoa", floor: "2F東", category: "レディスファッション", position: { x: 80, y: 45 } },
    { id: 52, name: "BIRTHDAY BAR", building: "minamoa", floor: "2F東", category: "生活雑貨", position: { x: 85, y: 50 } },
    { id: 53, name: "ete", building: "minamoa", floor: "2F東", category: "ジュエリー", position: { x: 78, y: 55 } },
    { id: 54, name: "kate spade new york", building: "minamoa", floor: "2F東", category: "レディスファッション", position: { x: 82, y: 60 } },
    { id: 55, name: "ORBIS", building: "minamoa", floor: "2F東", category: "コスメ", position: { x: 75, y: 60 } },
    { id: 56, name: "アニエスベー", building: "minamoa", floor: "2F東", category: "レディスファッション", position: { x: 88, y: 55 } },
    { id: 57, name: "emmi", building: "minamoa", floor: "2F東", category: "レディスファッション", position: { x: 80, y: 65 } },
    { id: 58, name: "MOTHERHOUSE", building: "minamoa", floor: "2F東", category: "バッグ・革小物", position: { x: 73, y: 65 } },
    { id: 59, name: "IL BISONTE", building: "minamoa", floor: "2F東", category: "ファッション雑貨", position: { x: 85, y: 58 } },
    { id: 60, name: "B AND A", building: "minamoa", floor: "2F東", category: "生活雑貨", position: { x: 78, y: 68 } },
    { id: 61, name: "Dr. Vranjes Hiroshima", building: "minamoa", floor: "2F東", category: "ルームフレグランス", position: { x: 75, y: 58 } },
    { id: 62, name: "OSAJI", building: "minamoa", floor: "2F東", category: "コスメ", position: { x: 82, y: 52 } },
    { id: 63, name: "Aíam", building: "minamoa", floor: "2F東", category: "コスメ・フレグランス", position: { x: 87, y: 48 } },
    { id: 64, name: "SHIRO", building: "minamoa", floor: "2F東", category: "コスメ", position: { x: 73, y: 55 } },
    { id: 65, name: "Shake Shack", building: "minamoa", floor: "2F東", category: "レストラン", position: { x: 85, y: 65 } },

    // ========== minamoa 2F西 (フード・スイーツ) ==========
    { id: 70, name: "あさぎり牛乳", building: "minamoa", floor: "2F西", category: "洋菓子", position: { x: 15, y: 50 } },
    { id: 71, name: "セブンーイレブン ハートイン", building: "minamoa", floor: "2F西", category: "コンビニ", position: { x: 10, y: 55 } },
    { id: 72, name: "フルーツタルト専門店Gowdy", building: "minamoa", floor: "2F西", category: "洋菓子", position: { x: 20, y: 45 } },
    { id: 73, name: "りんごとバター。苺のワルツ", building: "minamoa", floor: "2F西", category: "洋菓子", position: { x: 18, y: 60 } },
    { id: 74, name: "治一郎", building: "minamoa", floor: "2F西", category: "洋菓子", position: { x: 12, y: 48 } },
    { id: 75, name: "御座候", building: "minamoa", floor: "2F西", category: "和菓子", position: { x: 22, y: 55 } },
    { id: 76, name: "グリーン・グルメ", building: "minamoa", floor: "2F西", category: "惣菜", position: { x: 25, y: 50 } },
    { id: 77, name: "広島牛 青ひげ", building: "minamoa", floor: "2F西", category: "広島牛の弁当・総菜", position: { x: 8, y: 60 } },
    { id: 78, name: "PRESS BUTTER SAND", building: "minamoa", floor: "2F西", category: "おみやげ＆スイーツ", position: { x: 13, y: 65 } },
    { id: 79, name: "COCONCA MAISON by 藤い屋", building: "minamoa", floor: "2F西", category: "おみやげ＆スイーツ", position: { x: 16, y: 42 } },
    { id: 80, name: "Soup Stock Tokyo", building: "minamoa", floor: "2F西", category: "食品＆デリカ", position: { x: 20, y: 65 } },
    { id: 81, name: "WithGreen", building: "minamoa", floor: "2F西", category: "食品＆デリカ", position: { x: 24, y: 58 } },
    { id: 82, name: "すし辰の立ち食い", building: "minamoa", floor: "2F西", category: "食品＆デリカ", position: { x: 10, y: 45 } },
    { id: 83, name: "THE CITY BAKERY", building: "minamoa", floor: "2F西", category: "ベーカリー", position: { x: 15, y: 55 } },
    { id: 84, name: "AKOMEYA TOKYO", building: "minamoa", floor: "2F西", category: "食品・生活雑貨", position: { x: 22, y: 48 } },

    // ========== minamoa 3F東 (ライフスタイル・ファッション) ==========
    { id: 100, name: "Editorial", building: "minamoa", floor: "3F東", category: "ファッション雑貨", position: { x: 75, y: 50 } },
    { id: 101, name: "CLASKA Gallery & Shop DO", building: "minamoa", floor: "3F東", category: "生活雑貨", position: { x: 80, y: 55 } },
    { id: 102, name: "LE TALON", building: "minamoa", floor: "3F東", category: "レディスシューズ", position: { x: 85, y: 48 } },
    { id: 103, name: "Mila Owen", building: "minamoa", floor: "3F東", category: "レディスファッション", position: { x: 78, y: 60 } },
    { id: 104, name: "金子眼鏡店", building: "minamoa", floor: "3F東", category: "メガネ・サングラス", position: { x: 82, y: 53 } },
    { id: 105, name: "Jouete", building: "minamoa", floor: "3F東", category: "ジュエリー", position: { x: 73, y: 58 } },
    { id: 106, name: "tandey waltz", building: "minamoa", floor: "3F東", category: "レディスファッション", position: { x: 88, y: 52 } },
    { id: 107, name: "SNIDEL HOME", building: "minamoa", floor: "3F東", category: "レディスファッション", position: { x: 75, y: 65 } },
    { id: 108, name: "CAFÉ AUX BACCHANALES", building: "minamoa", floor: "3F東", category: "レストラン＆カフェ", position: { x: 85, y: 60 } },

    // ========== minamoa 3F西 (ライフスタイル・ファッション) ==========
    { id: 120, name: "deux C", building: "minamoa", floor: "3F西", category: "生活雑貨", position: { x: 15, y: 50 } },
    { id: 121, name: "Afternoon Tea LIVING", building: "minamoa", floor: "3F西", category: "生活雑貨", position: { x: 20, y: 55 } },
    { id: 122, name: "MLESNA TEA HIROSHIMA", building: "minamoa", floor: "3F西", category: "レストラン＆カフェ", position: { x: 12, y: 48 } },
    { id: 123, name: "BOOK GALLERY KOBUNKAN", building: "minamoa", floor: "3F西", category: "書籍", position: { x: 18, y: 60 } },
    { id: 124, name: "mio by DOTS", building: "minamoa", floor: "3F西", category: "雑貨", position: { x: 22, y: 52 } },

    // ========== minamoa 4F ==========
    { id: 140, name: "MERCURYDUO", building: "minamoa", floor: "4F", category: "レディスファッション", position: { x: 50, y: 50 } },
    { id: 141, name: "SLY", building: "minamoa", floor: "4F", category: "レディスファッション", position: { x: 45, y: 55 } },
    { id: 142, name: "Zoff", building: "minamoa", floor: "4F", category: "メガネ・サングラス", position: { x: 55, y: 48 } },
    { id: 143, name: "SM2", building: "minamoa", floor: "4F", category: "レディスファッション", position: { x: 60, y: 52 } },
    { id: 144, name: "Ungrid", building: "minamoa", floor: "4F", category: "レディスファッション", position: { x: 40, y: 58 } },
    { id: 145, name: "mystic", building: "minamoa", floor: "4F", category: "レディスファッション", position: { x: 65, y: 55 } },
    { id: 146, name: "Chico", building: "minamoa", floor: "4F", category: "レディスファッション", position: { x: 35, y: 50 } },
    { id: 147, name: "B.Kastane", building: "minamoa", floor: "4F", category: "レディス・メンズファッション", position: { x: 70, y: 50 } },
    { id: 148, name: "RANDA", building: "minamoa", floor: "4F", category: "レディスシューズ", position: { x: 42, y: 62 } },

    // ========== minamoa 5F ==========
    { id: 160, name: "ユニクロ", building: "minamoa", floor: "5F", category: "レディス・メンズファッション", position: { x: 50, y: 50 } },
    { id: 161, name: "ハンズ", building: "minamoa", floor: "5F", category: "生活雑貨", position: { x: 60, y: 55 } },
    { id: 162, name: "ABC-MART", building: "minamoa", floor: "5F", category: "シューズ", position: { x: 40, y: 52 } },
    { id: 163, name: "JINS", building: "minamoa", floor: "5F", category: "メガネ・サングラス", position: { x: 55, y: 48 } },
    { id: 164, name: "ディズニーストア", building: "minamoa", floor: "5F", category: "ホビー・キャラクター", position: { x: 45, y: 60 } },
    { id: 165, name: "JUMP SHOP", building: "minamoa", floor: "5F", category: "ホビー・キャラクター", position: { x: 65, y: 58 } },
    { id: 166, name: "MOOMIN SHOP CASUAL EDITION", building: "minamoa", floor: "5F", category: "ホビー・キャラクター", position: { x: 35, y: 55 } },

    // ========== minamoa 6F (DINING) ==========
    { id: 200, name: "鼎泰豊", building: "minamoa", floor: "6F", category: "台湾点心料理", position: { x: 50, y: 50 } },
    { id: 201, name: "一風堂", building: "minamoa", floor: "6F", category: "ラーメン", position: { x: 45, y: 55 } },
    { id: 202, name: "串家物語", building: "minamoa", floor: "6F", category: "串揚げバイキング", position: { x: 55, y: 60 } },
    { id: 203, name: "とんかつ新宿さぼてん", building: "minamoa", floor: "6F", category: "とんかつ", position: { x: 60, y: 52 } },
    { id: 204, name: "韓国料理 bibim'", building: "minamoa", floor: "6F", category: "韓国料理", position: { x: 40, y: 58 } },
    { id: 205, name: "オムライスの店 卵と私", building: "minamoa", floor: "6F", category: "オムライス・卵料理", position: { x: 35, y: 50 } },
    { id: 206, name: "叙々苑", building: "minamoa", floor: "6F", category: "焼肉", position: { x: 65, y: 55 } },
    { id: 207, name: "タリーズコーヒー", building: "minamoa", floor: "6F", category: "カフェ", position: { x: 70, y: 48 } },
    { id: 208, name: "BAQET", building: "minamoa", floor: "6F", category: "ベーカリーレストラン", position: { x: 42, y: 62 } },
    { id: 209, name: "スキッズガーデン", building: "minamoa", floor: "6F", category: "プレイグラウンド", position: { x: 75, y: 50 } },

    // ========== ekie 1F ==========
    { id: 300, name: "マクドナルド", building: "ekie", floor: "1F", category: "ファストフード", position: { x: 50, y: 50 } },
    { id: 301, name: "ケンタッキーフライドチキン", building: "ekie", floor: "1F", category: "ファストフード", position: { x: 45, y: 55 } },
    { id: 302, name: "モスバーガー", building: "ekie", floor: "1F", category: "ファストフード", position: { x: 55, y: 48 } },
    { id: 303, name: "ミスタードーナツ", building: "ekie", floor: "1F", category: "カフェ", position: { x: 60, y: 52 } },
    { id: 304, name: "ドトールコーヒーショップ", building: "ekie", floor: "1F", category: "カフェ", position: { x: 40, y: 58 } },

    // ========== ekie 2F ==========
    { id: 320, name: "広島お土産館", building: "ekie", floor: "2F", category: "おみやげ", position: { x: 50, y: 50 } },
    { id: 321, name: "広島銘品館", building: "ekie", floor: "2F", category: "おみやげ", position: { x: 55, y: 55 } },
];

// フロアの選択肢を生成する関数
function getFloorsForBuilding(building) {
    if (building === 'minamoa') {
        return ['B1F', '1F', '2F北', '2F東', '2F西', '3F東', '3F西', '4F', '5F', '6F'];
    } else if (building === 'ekie') {
        return ['1F', '2F'];
    } else {
        // 全店舗モードの場合
        return ['B1F', '1F', '2F北', '2F東', '2F西', '3F東', '3F西', '4F', '5F', '6F'];
    }
}

// ランダムにショップを取得
function getRandomShops(building, count) {
    let filteredShops = shopsDatabase;
    
    if (building !== 'all') {
        filteredShops = shopsDatabase.filter(shop => shop.building === building);
    }
    
    // シャッフル
    const shuffled = [...filteredShops].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

// 建物名の表示名
function getBuildingDisplayName(building) {
    return building === 'minamoa' ? 'minamoa' : 'ekie';
}

// ローカルストレージのキー
const STORAGE_KEY = 'minamoa_quiz_best_score';

// 最高得点を保存
function saveBestScore(score) {
    const currentBest = getBestScore();
    if (score > currentBest) {
        localStorage.setItem(STORAGE_KEY, score.toString());
        return true; // 新記録
    }
    return false;
}

// 最高得点を取得
function getBestScore() {
    const score = localStorage.getItem(STORAGE_KEY);
    return score ? parseInt(score) : 0;
}

// 統計情報を取得
function getStats() {
    return {
        totalShops: shopsDatabase.length,
        minamoaShops: shopsDatabase.filter(s => s.building === 'minamoa').length,
        ekieShops: shopsDatabase.filter(s => s.building === 'ekie').length,
        bestScore: getBestScore()
    };
}
