import { useState } from 'react'
import { Button } from './Button'
import { CalculatorDisplay } from './CalculatorDisplay'
import { Card } from './Card'

type ButtonVariant = 'primary' | 'default'

interface ButtonConfig {
  input: string
  className?: string
  variant?: ButtonVariant
}

const buttons: ButtonConfig[][] = [
  [
    { input: 'CE' },
    { input: 'C', className: 'flex-1 h-16' },
    { input: '/', variant: 'primary' },
  ],
  [
    { input: '7' },
    { input: '8' },
    { input: '9' },
    { input: '*', variant: 'primary' },
  ],
  [
    { input: '4' },
    { input: '5' },
    { input: '6' },
    { input: '-', variant: 'primary' },
  ],
  [
    { input: '1' },
    { input: '2' },
    { input: '3' },
    { input: '+', variant: 'primary' },
  ],
  [
    { input: '0', className: 'flex-1 h-16' },
    { input: ',' },
    { input: '=', className: 'w-16 h-16 bg-[#7F45E2]' },
  ],
]

export function Calculator() {
  const [operation, setOperation] = useState('')
  const [result, setResult] = useState('')

  function handleInputClick(input: string) {
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

    if (input === '=') {
      const operationResult = eval(operation.replace(/,/g, '.'))
      const parsedResult = operationResult.toString()?.replace(/\./g, ',')
      setResult(parsedResult)
      return
    }

    if (result) {
      setOperation(isNaN(input) ? `${result}${input}` : input)
      setResult('')
      return
    }

    if (input === ',' && !operation.endsWith(',')) {
      setOperation(`${operation},`)
      return
    }

    setOperation(`${operation}${input}`)
  }

  return (
    <Card className="flex flex-col gap-6.5 w-89 pt-14 px-8 pb-8 ">
      <CalculatorDisplay operation={operation} result={result} />
      <div className="flex flex-col gap-3">
        {buttons.map((row) => (
          <div key={row.map((b) => b.input).join('')} className="flex gap-3">
            {row.map((btn) => (
              <Button
                key={btn.input}
                className={btn.className || 'w-16 h-16'}
                variant={btn.variant}
                onClick={() => handleInputClick(btn.input)}
              >
                {btn.input}
              </Button>
            ))}
          </div>
        ))}
      </div>
    </Card>
  )
}
