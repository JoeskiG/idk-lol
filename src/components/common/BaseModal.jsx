import { useGlobalContext } from "../../contexts/useGlobalContext"

export const BaseModal = ({ children }) => {
    

    return (
        <div
            className="w-full h-full absolute left-0 right-0 top-0 bottom-0 bg-opacity-70 bg-black flex items-center justify-center">
            <div className="min-w-[20vw] min-h-[20vh] flex flex-col items-center justify-center bg-gray-800 rounded-lg">
                {children}
            </div>

        </div>
    )
}