import { Card } from './Card'
import { Txt } from './Txt'

export function OperationHistory() {
  return (
    <Card className="w-full py-10 px-8">
      <Txt as="h1" variant="heading" className="mb-4">
        Histórico de Operações
      </Txt>
      <ul className="flex flex-col gap-3">
        <Txt as="li">1 + 1 = 2</Txt>
        <Txt as="li">2 + 3 + 1 = 6</Txt>
        <Txt as="li">2 + 3 = 5</Txt>
      </ul>
    </Card>
  )
}
