export const uniqueDatas = () =>{
    const unique = [];

    tasks.forEach((task) => {
        console.log(task.dateFormat);
        if(!unique.includes(task.dateFormat)){
            unique.push(task.dateFormat);
        }
    });
}