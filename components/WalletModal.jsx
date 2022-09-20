import { ConnectButton, NativeBalance } from "@web3uikit/web3"
import React, { forwardRef, useContext, useEffect, useRef } from "react"
import { DarkModeContext } from "../contexts/darkModeprovider"

export default forwardRef(function WalletModal({}, ref) {
    const contRef = useRef(null)

    const { darkMode } = useContext(DarkModeContext)

    const handleCloseModal = (e) => {
        const { current } = contRef

        if (current && !current.contains(e.target)) {
            ref.current.classList.remove("show-wallet")
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleCloseModal)
        return () => {
            document.removeEventListener("mousedown", handleCloseModal)
        }
    }, [])

    return (
        <div
            className="fixed top-10 md:top-20 -mt-2 right-0 w-screen h-screen bg-lightest-black flex items-start justify-end wallet-cont duration-300 transition-all ease-linear invisible -z-50"
            ref={ref}
        >
            <div
                className={`w-screen md:w-96 h-full p-4 absolute -right-full transition-all duration-300 ease-linear wallet ${
                    darkMode ? "bg-dark text-white" : "bg-white"
                }`}
                ref={contRef}
            >
                <div className="m-auto w-max">
                    <ConnectButton />
                </div>
                <div className="w-95/100 m-auto text-center border rounded-lg my-2">
                    <p className="p-2 font-bold border-b mb-4">Funds</p>
                    <NativeBalance />
                    <div className="my-4">
                        <button className="w-1/2 rounded-full bg-blue text-white p-4 font-bold m-auto">
                            Add Funds
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
})
