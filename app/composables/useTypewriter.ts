export function useTypewriter(texts: string[], options?: { speed?: number; deleteSpeed?: number; pause?: number }) {
  const { speed = 60, deleteSpeed = 30, pause = 2000 } = options || {}
  const display = ref('')
  const cursor = ref(true)

  if (import.meta.client) {
    let textIndex = 0
    let charIndex = 0
    let isDeleting = false

    function tick() {
      const current = texts[textIndex]

      if (isDeleting) {
        display.value = current.substring(0, charIndex--)
        if (charIndex < 0) {
          isDeleting = false
          textIndex = (textIndex + 1) % texts.length
          setTimeout(() => tick(), speed)
          return
        }
        setTimeout(() => tick(), deleteSpeed)
      } else {
        display.value = current.substring(0, charIndex++)
        if (charIndex > current.length) {
          setTimeout(() => {
            isDeleting = true
            setTimeout(() => tick(), deleteSpeed)
          }, pause)
          return
        }
        setTimeout(() => tick(), speed)
      }
    }

    onMounted(() => {
      const cursorInterval = setInterval(() => {
        cursor.value = !cursor.value
      }, 530)
      setTimeout(() => tick(), 300)
      onUnmounted(() => clearInterval(cursorInterval))
    })
  }

  return { display, cursor }
}
