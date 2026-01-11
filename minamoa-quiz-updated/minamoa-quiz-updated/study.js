// 学習モードの状態管理
let studyState = {
    currentFilter: 'all',
    searchQuery: ''
};

// 学習モードを表示
function showStudyMode() {
    showScreen('studyScreen');
    studyState.currentFilter = 'all';
    studyState.searchQuery = '';
    
    // 検索ボックスをクリア
    document.getElementById('studySearch').value = '';
    
    // フィルターボタンをリセット
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.building === 'all') {
            btn.classList.add('active');
        }
    });
    
    // ショップリストを表示
    displayShopList();
}

// ショップリストを表示
function displayShopList() {
    let shops = [...shopsDatabase];
    
    // 建物フィルター
    if (studyState.currentFilter !== 'all') {
        shops = shops.filter(shop => shop.building === studyState.currentFilter);
    }
    
    // 検索フィルター
    if (studyState.searchQuery) {
        const query = studyState.searchQuery.toLowerCase();
        shops = shops.filter(shop => 
            shop.name.toLowerCase().includes(query) ||
            shop.category.toLowerCase().includes(query) ||
            shop.floor.toLowerCase().includes(query)
        );
    }
    
    // フロア順にソート
    shops.sort((a, b) => {
        // 建物でソート
        if (a.building !== b.building) {
            return a.building === 'minamoa' ? -1 : 1;
        }
        // フロアでソート
        return compareFloors(a.floor, b.floor);
    });
    
    // リストを表示
    const shopList = document.getElementById('shopList');
    shopList.innerHTML = '';
    
    if (shops.length === 0) {
        shopList.innerHTML = `
            <div class="no-results" style="display: block; background: white; padding: 40px; text-align: center; border-radius: 12px;">
                <i class="fas fa-search" style="font-size: 3rem; color: #ddd; margin-bottom: 15px;"></i>
                <p style="color: #666; font-size: 1.1rem;">該当するショップが見つかりませんでした</p>
            </div>
        `;
        return;
    }
    
    shops.forEach(shop => {
        const shopItem = document.createElement('div');
        shopItem.className = 'shop-item';
        shopItem.innerHTML = `
            <div class="shop-info">
                <h3>${shop.name}</h3>
                <p>
                    <i class="fas fa-building" style="color: var(--primary-color); margin-right: 5px;"></i>
                    ${getBuildingDisplayName(shop.building)} | 
                    <i class="fas fa-tag" style="color: var(--primary-color); margin-right: 5px;"></i>
                    ${shop.category}
                </p>
            </div>
            <div class="floor-badge">${shop.floor}</div>
        `;
        shopList.appendChild(shopItem);
    });
}

// フロアの比較関数
function compareFloors(floor1, floor2) {
    const floorOrder = ['B1F', '1F', '2F', '3F', '4F', '5F', '6F', '7F'];
    const index1 = floorOrder.indexOf(floor1);
    const index2 = floorOrder.indexOf(floor2);
    return index1 - index2;
}

// フィルターを切り替え
function filterShops(building) {
    studyState.currentFilter = building;
    
    // ボタンのアクティブ状態を更新
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.building === building) {
            btn.classList.add('active');
        }
    });
    
    // リストを再表示
    displayShopList();
}

// ショップを検索
function searchShops(query) {
    studyState.searchQuery = query;
    displayShopList();
}

// 学習モードの統計情報を生成
function getStudyStats() {
    const stats = {
        total: shopsDatabase.length,
        minamoa: shopsDatabase.filter(s => s.building === 'minamoa').length,
        ekie: shopsDatabase.filter(s => s.building === 'ekie').length
    };
    
    // カテゴリー別の集計
    const categories = {};
    shopsDatabase.forEach(shop => {
        categories[shop.category] = (categories[shop.category] || 0) + 1;
    });
    stats.categories = categories;
    
    // フロア別の集計
    const floors = {};
    shopsDatabase.forEach(shop => {
        const key = `${shop.building}_${shop.floor}`;
        floors[key] = (floors[key] || 0) + 1;
    });
    stats.floors = floors;
    
    return stats;
}

// フラッシュカード形式で学習（将来の拡張機能）
function startFlashcardMode() {
    // TODO: フラッシュカード学習モードの実装
    alert('フラッシュカード機能は今後追加予定です！');
}

// ショップデータをCSVでエクスポート（将来の拡張機能）
function exportShopsToCSV() {
    let csv = 'ショップ名,建物,フロア,カテゴリー\n';
    
    shopsDatabase.forEach(shop => {
        csv += `${shop.name},${shop.building},${shop.floor},${shop.category}\n`;
    });
    
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'minamoa_shops.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
