import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";
function App() {
	const [currentNumber, setCurrentNumber] = useState("");
	const [firstNumber, setFirstNumber] = useState("");
	const [operation, setOperation] = useState("");

	const handleOnClear = () => {
		setCurrentNumber("");
		setFirstNumber("");
		setOperation("");
	};

	const handleAddNumber = (number) => {
		setCurrentNumber(
			(prev) => `${prev.charAt(0) === "0" ? "" : prev}${number}`
		);
	};

	const handleSumNumber = () => {
		if (currentNumber.charAt(0) !== "" && operation === "") {
			setFirstNumber(String(currentNumber));
			setCurrentNumber("");
			setOperation("+");
		} else {
			const sum = Number(firstNumber) + Number(currentNumber);
			setCurrentNumber(String(sum));
			setFirstNumber("");
			setOperation("");
		}
	};

	const handleSubNumber = () => {
		if (currentNumber.charAt(0) !== "" && operation === "") {
			setFirstNumber(String(currentNumber));
			setCurrentNumber("");
			setOperation("-");
		} else {
			const sub = Number(firstNumber) - Number(currentNumber);
			setCurrentNumber(String(sub));
			setFirstNumber("");
			setOperation("");
		}
	};

	const handleMultiNumber = () => {
		if (currentNumber.charAt(0) !== "" && operation === "") {
			setFirstNumber(String(currentNumber));
			setCurrentNumber("");
			setOperation("*");
		} else {
			const multi = Number(firstNumber) * Number(currentNumber);
			setCurrentNumber(String(multi));
			setFirstNumber("");
			setOperation("");
		}
	};

	const handleDivNumber = () => {
		if (currentNumber.charAt(0) !== "" && operation === "") {
			setFirstNumber(String(currentNumber));
			setCurrentNumber("");
			setOperation("/");
		} else {
			const div = Number(firstNumber) / Number(currentNumber);
			setCurrentNumber(String(div));
			setFirstNumber("");
			setOperation("");
		}
	};

	const handleEquals = () => {
		if (firstNumber !== "" && operation !== "" && currentNumber !== "") {
			switch (operation) {
				case "+":
					handleSumNumber();
					break;

				case "-":
					handleSubNumber();
					break;

				case "*":
					handleMultiNumber();
					break;

				case "/":
					handleDivNumber();
					break;

				default:
					break;
			}
		}
	};

	return (
		<div className="w-full h-screen bg-white  flex items-center justify-center">
			<div className="max-w-xs bg-gray-800 min-h-[350px] rounded-xl p-4 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all">
				<Input value={currentNumber} />
				<div className="grid grid-cols-4 gap-x-1 gap-y-2 p-2">
					<Button label="7" onClick={() => handleAddNumber("7")} />
					<Button label="8" onClick={() => handleAddNumber("8")} />
					<Button label="9" onClick={() => handleAddNumber("9")} />
					<Button
						className={"text-yellow-400/80"}
						label="/"
						onClick={handleDivNumber}
					/>
					<Button label="4" onClick={() => handleAddNumber("4")} />
					<Button label="5" onClick={() => handleAddNumber("5")} />
					<Button label="6" onClick={() => handleAddNumber("6")} />
					<Button
						className={"text-yellow-400/80"}
						label="*"
						onClick={handleMultiNumber}
					/>
					<Button label="1" onClick={() => handleAddNumber("1")} />
					<Button label="2" onClick={() => handleAddNumber("2")} />
					<Button label="3" onClick={() => handleAddNumber("3")} />
					<Button
						className={"text-yellow-400/80"}
						label="-"
						onClick={handleSubNumber}
					/>
					<Button label="C" onClick={handleOnClear} />
					<Button label="0" onClick={() => handleAddNumber("0")} />
					<Button label="=" onClick={handleEquals} />
					<Button
						className={"text-yellow-400/80"}
						label="+"
						onClick={handleSumNumber}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
