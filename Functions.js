const pressGrindBeans = () => {
    console.log("Grinding for 20 seconds");
}

pressGrindBeans();


const pressButton = () => {
    if (onOff){
        console.log("Bool is true");
        onOff = false;
    } else {
        console.log("Bool is false");
        onOff = true;
    }
}

pressButton();
pressButton();
pressButton();