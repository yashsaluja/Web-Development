var todos =["FIFA

var input = prompt("What would you like to do?");

while(input !== "quit")
{
	if(input === "list")
	{ 
		console.log("**********");
		todos.forEach(function(todo, i)
		{
			console.log(i + ": " + todo);
		});
		console.log("*********");

	}

	else if(input === "new")
	{
		var newtodo =prompt("Enter new todo");
		todos.push(newtodo);
	}
	else if(input === "delete")
	{
		var index = prompt("Enter index of todo to delete");
		todos.splice(index,1);
	}

	input = prompt("what would you like to do?");
}  
console.log("quit");
