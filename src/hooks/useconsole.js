import { useEffect } from "react";

const useConsole = (varName) => {
    useEffect(() => {
        console.log(varName);

    }, [varName])
}

export default useConsole;