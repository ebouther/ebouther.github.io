import { isRef } from 'vue'
import type { ComputedRef } from 'vue'

export function useTypewriter(texts: string[] | ComputedRef<string[]>, options?: { speed?: number; deleteSpeed?: number; pause?: number }) {
  const { speed = 60, deleteSpeed = 30, pause = 2000 } = options || {}
  const display = ref('')
  const cursor = ref(true)

  const textsArray = computed(() => {
    if (isRef(texts)) return texts.value
    return texts as string[]
  })

  let textIndex = 0
  let charIndex = 0
  let isDeleting = false
  let tickTimer: ReturnType<typeof setTimeout> | null = null
  let cursorInterval: ReturnType<typeof setInterval> | null = null

  function stop() {
    if (tickTimer) { clearTimeout(tickTimer); tickTimer = null }
    if (cursorInterval) { clearInterval(cursorInterval); cursorInterval = null }
  }

  function tick() {
    const current = textsArray.value[textIndex]
    if (!current) return

    if (isDeleting) {
      display.value = current.substring(0, charIndex--)
      if (charIndex < 0) {
        isDeleting = false
        textIndex = (textIndex + 1) % textsArray.value.length
        tickTimer = setTimeout(() => tick(), speed)
        return
      }
      tickTimer = setTimeout(() => tick(), deleteSpeed)
    } else {
      display.value = current.substring(0, charIndex++)
      if (charIndex > current.length) {
        tickTimer = setTimeout(() => {
          isDeleting = true
          tickTimer = setTimeout(() => tick(), deleteSpeed)
        }, pause)
        return
      }
      tickTimer = setTimeout(() => tick(), speed)
    }
  }

  function start() {
    if (!import.meta.client) return
    stop()
    textIndex = 0
    charIndex = 0
    isDeleting = false
    display.value = ''
    cursorInterval = setInterval(() => {
      cursor.value = !cursor.value
    }, 530)
    tickTimer = setTimeout(() => tick(), 300)
  }

  function restart() {
    start()
  }

  onMounted(() => start())
  onUnmounted(() => stop())

  return { display, cursor, restart }
}
