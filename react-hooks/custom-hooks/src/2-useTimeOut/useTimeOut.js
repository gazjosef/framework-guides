import { useCallback, useEffect, useRef } from "react";

export default function useTimeOut(callback, delay) {
    const callbackRef = useRef(callback);
    const timeOutRef = useRef();

    useEffect(() => {
        callbackRef.current = callback
    }, [callback])

    const set = useCallback(() => {
        timeOutRef.current = setTimeout(() => callbackRef.current(), delay)
    }, [delay])

    const clear = useCallback(() => {
        timeOutRef.current && clearTimeout(timeOutRef.current)
    }, [])

    useEffect(() => {
        set()
        return clear
    }, [delay, clear, set])

    const reset = useCallback(() => {
        clear()
        set()
    }, [clear, set])

    return { reset, clear}
}