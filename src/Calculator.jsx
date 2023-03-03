import { useState } from "react"

function Calculator() {

    const [var1, setVar1] = useState("")
    const [ans, setAns] = useState("")


    const demo = () => {
        setAns(var1)
        const Eval = eval(var1)
        setVar1(Eval)
    }

    return (
        <>
            <div className="display">
                <span className="hist">{ans}</span>
                <input className="inp" type="text" value={var1} onChange={((e) => { setVar1(e.target.value) })} disabled placeholder="0" />
            </div>
            <div className="buttons">
                <div className="row" id="color-row">
                <button className="operators" onClick={() => setVar1("") & setAns("")}>C</button>
                <button className="operators" onClick={() => setVar1(var1 + "%")}>%</button>
                <button className="operators" onClick={() => setVar1(var1 + "/")}>/</button>
                <button className="operators" value="*" onClick={() => setVar1(var1 + "*")}>X</button>
                </div>
                <div className="row">
                    <button className="operands" value="7" onClick={() => setVar1(var1 + "7")}>7</button>
                    <button className="operands" value="8" onClick={() => setVar1(var1 + "8")}>8</button>
                    <button className="operands" value="9" onClick={() => setVar1(var1 + "9")}>9</button>
                    <button className="operators" value="-" onClick={() => setVar1(var1 + "-")}>-</button>
                </div>

                <div className="row">
                    <button className="operands" value="4" onClick={() => setVar1(var1 + "4")}>4</button>
                    <button className="operands" value="5" onClick={() => setVar1(var1 + "5")}>5</button>
                    <button className="operands" value="6" onClick={() => setVar1(var1 + "6")}>6</button>
                    <button className="operators" id="plus" value="+" onClick={() => setVar1(var1 + "+")}>+</button>
                </div>

                <div className="row-btn">
                    <button className="operands" value="1" onClick={() => setVar1(var1 + "1")}>1</button>
                    <button className="operands" value="2" onClick={() => setVar1(var1 + "2")}>2</button>
                    <button className="operands" value="3" onClick={() => setVar1(var1 + "3")}>3</button>
                    <button id="equal" onClick={() => demo()}>=</button>
                </div>

                <div className="Row">
                    <button className="operands" id="zero" value="0" onClick={() => setVar1(var1 + "0")}>0</button>
                    <button className="operands" value="." onClick={() => setVar1(var1 + ".")}>.</button>
                </div>
            </div>

        </>
    )
}
export default Calculator