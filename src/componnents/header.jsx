import { useState, useEffect } from "react"

export const Header = () => {

    const [darkMode, setDarkMode] = useState(false)

    const handleClick = () => {
        setDarkMode(!darkMode)
    }

    useEffect(() => {
        if(darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])

    return (
        <header className="bg-Very-Pale-Blue h-[235px] rounded-b-[20px] pt-8 px-6 dark:bg-Very-Dark-Blue">
            <h1 className="text-Very-Dark-Blue dark:text-Very-Pale-Blue text-2xl font-bold mb-1">
                Social Media Dashboard
            </h1>
            <p className="text-Dark-Grayish-Blue dark:text-Desaturated-Blue  font-bold mb-6">
                Total Followers: 23,004
            </p>
            <hr className="bg-black h-[2px] mb-[19px]"/>

            <div className="flex justify-between">
                <p className="text-Dark-Grayish-Blue dark:text-Desaturated-Blue  font-bold">
                    Dark Mode
                </p>

                <label htmlFor="darkModeSwitch" className="border relative bg-Toggle w-12 h-6 rounded-full overflow-hidden cursor-pointer p-[2px]">
                    <input onClick={handleClick} type="checkbox" name="" id="darkModeSwitch" className="peer sr-only"/>

                    <div className="w-full h-full peer-checked:bg-Toggle-Gradient absolute top-0 left-0"></div>

                    <div className="w-[18px] h-[18px] bg-Light-Grayish-Blue rounded-full peer-checked:translate-x-[24px] transition-all"></div>
                </label>
            </div>
        </header>
    )
}