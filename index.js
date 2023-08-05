
const superbowlWin = (array) => 
    array.find((element) => element.result == "W") ?   array.find((element) => element.result == "W").year : undefined
