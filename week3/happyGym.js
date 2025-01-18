const members = ["Alice", "Bob", "Charlie", "Diana", "Evan", "Fiona", "George", "Hannah"];

// 第一階段：新增課程購買記錄（優惠定價）
// 撰寫函式 addPurchaseRecord，用於新增會員購買課程的記錄，並依購買數量套用優惠價格：

// 購買數量 / 單價 (每堂課)

// 1-10 堂 / 1500 元
// 11-20 堂 / 1300 元
// 21 堂以上 / 1100 元

// 記錄內容：

// 會員名稱 (name)：字串
// 購買課程數量 (courses)：數字
// 課程單價（自動計算）
// 總金額（courses × 單價）
// 功能要求：
// 使用陣列 purchaseRecords 儲存每筆記錄。
// 如果輸入無效（如名稱為空或數值不正確），提示輸入錯誤，並不儲存該記錄。
// 成功新增後，印出「新增購買記錄成功！會員 [會員名稱] 購買 [數量] 堂課，總金額為 [金額] 元。」

let purchaseRecords = [];

function addPurchaseRecord(name, session) {
    let price = 0;
    let totalPrice = 0;
    // first check insert data
    // then check the discount for each one and calculate it
    if (members.includes(name) === false || session <= 0) {
        console.log('輸入錯誤，請輸入有效的會員名稱和課程數量。');
        return
    } else {
        if (session <= 10) {
            // 每堂課1500元
            price = 1500;
            totalPrice = price * session;
            console.log(`新增購買記錄成功！會員 ${name} 購買 ${session} 堂課，總金額為 ${totalPrice} 元。`);
        } else if (session <= 20) {
            // 每堂課1300元
            price = 1300;
            totalPrice = price * session;
            console.log(`新增購買記錄成功！會員 ${name} 購買 ${session} 堂課，總金額為 ${totalPrice} 元。`);
        } else {
            price = 1100;
            totalPrice = price * session;
            console.log(`新增購買記錄成功！會員 ${name} 購買 ${session} 堂課，總金額為 ${totalPrice} 元。`);
        }
    }
    // add data to purchaseRecords array
    purchaseRecords.push(
        {
            name: name,
            courses: session,
            unitPrice: price,
            courseTotalPrice: totalPrice
        }
    )
}

function calculateTotalPrice() {
    let totalPrice = 0;
    purchaseRecords.forEach(function(item){
        totalPrice += item.courseTotalPrice;
    });
    console.log(`目前總營業額為 ${totalPrice} 元`);
}

function filterNoPurchaseMember() {
    // pickup the name who purcahse course
    let purchaseMembers = [];
    purchaseRecords.forEach(function(item){
        purchaseMembers.push(item.name);
        })
    // use two array to filter the name from members
    noMembers = members.filter(function(name){
        return !purchaseMembers.includes(name);
    })
    
    console.log(`未購買課程的會員有： ${noMembers}`);
}
addPurchaseRecord("Alice", 4);
addPurchaseRecord("Bob", 12);
addPurchaseRecord("Charlie", 25);
addPurchaseRecord("Hannah", 50);
addPurchaseRecord("名稱", "課程數量");
// console.log(purchaseRecords);
calculateTotalPrice();
filterNoPurchaseMember()