import { useState, useEffect, useRef } from "react"

export function useTyping(words: string[], typingSpeed = 80, deletingSpeed = 45, pauseTime = 1800) {
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const currentWord = words[wordIndex % words.length]

    const tick = () => {
      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length + 1))
        if (displayText.length + 1 === currentWord.length) {
          timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseTime)
          return
        }
        timeoutRef.current = setTimeout(tick, typingSpeed)
      } else {
        setDisplayText(currentWord.substring(0, displayText.length - 1))
        if (displayText.length - 1 === 0) {
          setIsDeleting(false)
          setWordIndex((prev) => prev + 1)
          return
        }
        timeoutRef.current = setTimeout(tick, deletingSpeed)
      }
    }

    timeoutRef.current = setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [displayText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime])

  return displayText
}
