import Output from "./Output";
import Buttons from "./Buttons";
import { useState } from "react";

export default function App() {
    const [curr, setCurr] = useState("");
    const [prev, setPrev] = useState("");
    const [num1, setNum1] = useState(null);
    const [oprand, setOprand] = useState(null);

    const operator = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const operand = ["+", "-", "*", "/"];

    function buttonHandler(prop) {
        if (prop === "=") {
            // Ensure num1 and num2 are parsed as numbers
            const parsedNum1 = parseFloat(num1);
            const parsedNum2 = parseFloat(curr);

            // Check if num1 and num2 are valid numbers
            if (!isNaN(parsedNum1) && !isNaN(parsedNum2)) {
                switch (oprand) {
                    case "+":
                        setCurr((parsedNum1 + parsedNum2).toString());
                        break;
                    case "-":
                        setCurr((parsedNum1 - parsedNum2).toString());
                        break;
                    case "*":
                        setCurr((parsedNum1 * parsedNum2).toString());
                        break;
                    case "/":
                        setCurr((parsedNum1 / parsedNum2).toString());
                        break;
                    default:
                        setCurr("Error");
                        break;
                }
            }
            setNum1(null);
            setOprand(null);
            setPrev("");
            
        } else if (operand.includes(prop)) { // operators
            setNum1(curr);
            setOprand(prop);
            setPrev((curr + prop).toString());
            setCurr("");

        } else if (operator.includes(prop)) { // numbers
            setCurr(curr + prop);

        } else if (prop === "AC") {
            setCurr("");
            setPrev("");
        }
    }

    return (
        <div className="flex flex-col h-screen justify-center items-center">
            {/* Output Section */}
            <Output current={curr} previous={prev} />

            {/* Buttons Section */}
            <Buttons onClick={buttonHandler} />
        </div>
    );
}
