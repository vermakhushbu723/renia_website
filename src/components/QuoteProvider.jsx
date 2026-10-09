import { useEffect, useMemo, useState } from 'react'
import { App } from 'antd'
import { QuoteContext } from './quoteContext'
import QuoteDrawer from './QuoteDrawer'

const KEY = 'gb-quote-list'

const load = () => {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || []
  } catch {
    return []
  }
}

export default function QuoteProvider({ children }) {
  const [items, setItems] = useState(load)
  const [open, setOpen] = useState(false)
  const { message } = App.useApp()

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(items))
    } catch {
      // storage unavailable, list stays in memory
    }
  }, [items])

  const value = useMemo(
    () => ({
      items,
      count: items.reduce((n, i) => n + i.qty, 0),
      openQuote: () => setOpen(true),
      add: (code) => {
        setItems((list) => {
          const found = list.find((i) => i.code === code)
          return found ? list.map((i) => (i.code === code ? { ...i, qty: i.qty + 1 } : i)) : [...list, { code, qty: 1 }]
        })
        message.success('Added to your quote list')
      },
      setQty: (code, qty) => setItems((list) => list.map((i) => (i.code === code ? { ...i, qty } : i))),
      remove: (code) => setItems((list) => list.filter((i) => i.code !== code)),
      clear: () => setItems([]),
    }),
    [items, message],
  )

  return (
    <QuoteContext.Provider value={value}>
      {children}
      <QuoteDrawer open={open} onClose={() => setOpen(false)} />
    </QuoteContext.Provider>
  )
}
