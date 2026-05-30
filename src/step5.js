//テキスト入力
const text = document.getElementById("input");
text.addEventListener('keydown', function(event) {
    console.log(`キーが押されました: ${event.key}`);
});

//入力テキストが空の場合のアラート
const button = document.getElementById('button');
let count = 0;

button.addEventListener('click', function() {
    if (text.value === "") {
        alert('入力値が空です。');
        return;
    }

    //３件目以降順に削除
    if (tableBody.children.length >= 3) {
        tableBody.removeChild(tableBody.firstElementChild);
    }
    
    //行を追加
    const row =document.createElement("tr");
    const cell = document.createElement("td");
    
    cell.textContent = text.value;
    
    row.appendChild(cell);
    tableBody.appendChild(row);
    
    text.value = "";
    

    //表示回数3回まで
    count++;
    console.log("追加回数:" + count);

    text.value = "";

    if (count >= 3) {
        button.style.display = "none";
    }

    //表示ボタン押したときの配色
    button.style.backgroundColor = "red";
    button.style.color = "green";
});
    
    




//入力テキストを削除する
var deletbutton = document.getElementById('deletbutton');
deletbutton.addEventListener('click', function() {
    var input = document.querySelector('input');
    input.value = "";
    

    //削除後、3回未満で表示ボタンを再表示
    text.value = "";
    count <= 3;
    button.style.display = "block";
    });


    //画面全体の背景色
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