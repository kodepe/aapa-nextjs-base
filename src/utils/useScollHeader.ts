import { useEffect, useState } from 'react'

const useScollHeader = () => {
    const [clientWindowHeight, setClientWindowHeight] = useState(0)

    const [backgroundTransparacy, setBackgroundTransparacy] = useState(0)
    const [padding, setPadding] = useState(30)
    const [boxShadow, setBoxShadow] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })

    const handleScroll = () => {
        setClientWindowHeight(window.scrollY)
    }

    useEffect(() => {
        const backgroundTransparacyVar = clientWindowHeight / 600

        if (backgroundTransparacyVar < 1) {
            const paddingVar = 30 - backgroundTransparacyVar * 20
            const boxShadowVar = backgroundTransparacyVar * 0.1
            setBackgroundTransparacy(backgroundTransparacyVar)
            setPadding(paddingVar)
            setBoxShadow(boxShadowVar)
        }
    }, [clientWindowHeight])
    return { clientWindowHeight, padding, boxShadow, backgroundTransparacy }
}
export default useScollHeader
