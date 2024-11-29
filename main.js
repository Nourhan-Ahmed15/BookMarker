var Inputname = document.getElementById("bookmarkName");
var url = document.getElementById("BookmarkUrl");            
var addBtn = document.getElementById("addBtn");
var tablebody = document.getElementById("tablebody");

var BookMarks=[];
addBtn.onclick = function(){
    var bookMark = {
        Inputname : BookmarkName.value,
        url : BookmarkUrl.value
    }
    BookMarks.push(bookMark);
    console.log(BookMarks);
    localStorage.setItem(BookMarks,JSON.stringify(BookMarks))
}
function DisplayBook(){
    var marks=``;
    for(var i=0;i<BookMarks.length;i++){
        marks=`
        <tr>
        <td>${BookMarks[i].BookmarkName}</td>
        `
    }
}
// addBtn.addEventListener("click",function(){
//     console.log(BookmarkName.value);
// })