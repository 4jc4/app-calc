import { useContext } from 'react'
import { CalculatorContext } from '@/contexts/CalculatorContext'
import { Card } from './Card'
import { Txt } from './Txt'

export function OperationHistory() {
  const context = useContext(CalculatorContext)

  if (!context) {
    return null
  }

  const { history } = context

  return (
    <Card className="w-full py-10 px-8">
      <Txt as="h1" variant="heading" className="mb-4">
        Histórico de Operações
      </Txt>

      {history.length > 0 ? (
        <ul className="flex flex-col gap-3">
          {history.map((item, index) => (
            <Txt key={`${index}-${item}`} as="li">
              {item}
            </Txt>
          ))}
        </ul>
      ) : (
        <Txt as="p" variant="muted">
          Nenhuma operação recente.
        </Txt>
      )}
    </Card>
  )
}
