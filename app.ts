#! \env\bin\usr\ node
import inquirer from "inquirer";
import chalk from "chalk";

let todoList:string[] = [" "];
let condition:boolean = true;

console.log("\n\t==============================================================================================\n\t\t");
console.log("\t\t ===================  Welcome to my TodoList Application  ==========================\t ");

let main = async () => {
    while(condition){
        let option = await inquirer.prompt([
            {
                name:'choices',
                type:"list",
                message:"select an option you want to do:",
                choices:['Add_task', 'Delete_task', 'Update_task', 'View_task', 'Exit']

            }
        ]);
        if(option.choices === 'Add_task'){
            await addtask()

        }
        else if(option.choices === 'Delete_task'){
            await deletetask();

        }
        else if(option.choices === 'Update_task'){
            await updateTask()
    

        }
        else if(option.choices === 'View_task'){
            await viewTask()

        }
        else if(option.choices === 'Exit'){
            condition = false;
        }

    }
}
// function to add new task to the list
let addtask = async () => {
    let newtask = await inquirer.prompt([
        {
            name:'task',
            type:'input',
            message:'Enter your new Task :'
        }
    ]);
    todoList.push(newtask.task);
    console.log(`\n ${newtask.task} task added successfully in TodoList`);

}
// Function to view all todo list task
let viewTask = async () => {
    console.log('\n Your Todp-List: \n');
    todoList.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`)
    })      
}
// function to delete a task from the list
let deletetask = async () => {
    await viewTask()
    let taskIndex = await inquirer.prompt([
        {
            name:'index',
            type:'number',
            message:"Enter the index no.' of the task you want to delete :",
        }
    ]);
    let deletedtask = todoList.splice(taskIndex.index - 1,1);
    console.log(`\n ${deletedtask} this task has been deleted successfully from your Todolist`);
}

// function to update task
let updateTask = async () => {
    await viewTask()
    let update_task_index = await inquirer.prompt([
        {
            name:'index',
            type:'number',
            message:'Enter the index no of the task you want to update :'
        },
        {
            name:'new_task',
            type:'input',
            message:'Now enter new task name : '
        }
    ]);
    todoList[update_task_index.index - 1] = update_task_index.new_task;
    console.log(`\n Task at index no. ${update_task_index.index -1} updated successfully [for updated list check option: "view todo list" ]`)
}

main();

