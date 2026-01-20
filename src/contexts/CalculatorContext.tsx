import type React from 'react'
import { createContext, useContext, useEffect, useState } from 'react'

interface CalculatorContextType {
  history: string[]
  updateHistory: (operation: string, parsedResult: string) => void
}

export const CalculatorContext = createContext<CalculatorContextType | null>(
  null,
)

type CalculatorProviderProps = {
  children: React.ReactNode
}

export function CalculatorProvider({ children }: CalculatorProviderProps) {
  const [history, setHistory] = useState<string[]>([])
  const historyStorageKey = 'history'

  useEffect(() => {
    const savedHistory = localStorage.getItem(historyStorageKey)
    setHistory(JSON.parse(savedHistory || '[]'))
  }, [])

  function updateHistory(operation: string, parsedResult: string) {
    setHistory((prev) => {
      const updatedHistory = [...prev, `${operation}=${parsedResult}`]
      localStorage.setItem(historyStorageKey, JSON.stringify(updatedHistory))
      return updatedHistory
    })
  }

  return (
    <CalculatorContext.Provider value={{ history, updateHistory }}>
      {children}
    </CalculatorContext.Provider>
  )
}

export function useCalculator() {
  const context = useContext(CalculatorContext)

  if (!context) {
    throw new Error('useCalculator must be used within a CalculatorProvider')
  }

  const { updateHistory } = context
  const [operation, setOperation] = useState('')
  const [result, setResult] = useState('')

  function doOperation(input: string) {
    if (input === 'C') {
      setOperation('')
      setResult('')
      return
    }

    if (input === 'CE') {
      setResult('')
      setOperation(operation.slice(0, -1))
      return
    }

    try {
      if (input === '=') {
        const operationResult = eval(operation.replace(/,/g, '.'))
        const parsedResult = operationResult.toString()?.replace(/\./g, ',')
        setResult(parsedResult)
        updateHistory(operation, parsedResult)
        return
      }
    } catch (e) {
      setResult('Erro')
    }

    if (result) {
      // Converte para Number: se for operador (+, -, *), resultará em NaN
      const isNotANumber = Number.isNaN(Number(input.replace(',', '.')))

      setOperation(isNotANumber ? `${result}${input}` : input)
      setResult('')
      return
    }

    if (input === ',' && !operation.endsWith(',')) {
      setOperation(`${operation},`)
      return
    }

    setOperation(`${operation}${input}`)
  }

  return {
    operation,
    result,
    doOperation,
  }
}
