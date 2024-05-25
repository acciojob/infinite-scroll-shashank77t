//your code here!
const list=document.getElementById("infi-list");
function addListItems(count){
	for(let i=0;i<count;i++){
		const listItem=document.createElement("li");
		listItem.textContent=`Item ${list.children.length+1}`;
		list.appendChild(listItem);
	}
}
addListItems(10);
list.addEventListener("scroll",function ab(){
	if(this.scrollHeight-this.scrollTop-this.clientHeight<1){
		addListItems(2);
	}
})

