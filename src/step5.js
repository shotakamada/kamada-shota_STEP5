//テキスト入力(設問1-a)
const text = document.getElementById("input");
text.addEventListener('keydown', function(event) {
    console.log(`キーが押されました: ${event.key}`);
});

//入力テキストが空の場合のアラート(設問1-b)
const button = document.getElementById('button');
let count = 0;

button.addEventListener('click', function() {
    text.classList.toggle("highlight");
    if (text.value === "") {
        alert('入力値が空です。');
        return;
    }
});

//表示ボタンの切り替え(設問3)
button.addEventListener('click', function() {
    button.classList.toggle('clicked');

});

//入力テキストを削除する
var deletbutton = document.getElementById('deletBtn');
deletbutton.addEventListener('click', function() {
    var input = document.querySelector('input');
    input.value = "";

});

//テーブルの追加(設問4-a)
const tableBody = document.getElementById("tableBody");
button.addEventListener('click', () => {
    const row = document.createElement("tr");

    const detaCell = document.createElement("td");
    detaCell.textContent = text.value;

    const deletCell= document.createElement("td");

    const deletBtn = document.createElement("button");
    deletBtn.textContent = "削除";

    deletBtn.addEventListener('click', () => {
        row.remove();

        //削除機能(設問5-a,b)
        count--;

        console.log("削除後の回数:", count);

        if (count < 3) {
            button.style.display = "block";
        }
    });

    deletCell.appendChild(deletBtn);

    row.appendChild(detaCell);
    row.appendChild(deletCell);

    //テストデータ制限(設問6)
    tableBody.appendChild(row);
    if (tableBody.children.length > 3) {
        tableBody.removeChild(tableBody.firstElementChild);
    }

    //テキスト追加3回以上となると表示ボタンが非表示になる（設問4-b）
    count++;
    console.log("追加回数:", count);

    if (count >= 3) {
        button.style.display = "none";
    }

    text.value = " ";



});



    //画面全体の背景色(設問2)
    const color = ["lightblue", "lightgreen", "lightcoral"];
    let index = 0;
    const changeBtn = document.getElementById("changeBtn")
    changeBtn.addEventListener("click", function() {
        document.body.style.backgroundColor = color[index];
    index++;
    
    if (index >= color.length) {
        index = 0;
    }
    });


//ループ表示(設問7)
for (let i = 1;i <= 5;i++) {
    console.log(i);
}