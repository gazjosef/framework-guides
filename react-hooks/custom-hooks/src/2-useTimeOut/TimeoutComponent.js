import { useState } from "react";
import useTimeOut from "./useTimeOut";


export default function TimeOutComponent() {
    // Increment
    const [count, setCount] = useState(10)
    // Clear & Reset Timeout
    const {clear, reset} = useTimeOut(() => setCount(0), 500)

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
            <button onClick={clear}>Clear Timeout</button>
            <button onClick={reset}>Reset Timeout</button>
        </div>
    )
}