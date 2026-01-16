import { Txt } from './Txt'

type CalculatorDisplayProps = {
  operation: string
  result: string
}

export function CalculatorDisplay({
  operation,
  result,
}: CalculatorDisplayProps) {
  return (
    <div className="flex flex-col gap-2 px-5.5 cursor-default select-none">
      <Txt as="div" variant="muted" className="flex items-center justify-end">
        {operation}
      </Txt>
      <div className="flex items-center justify-between">
        <Txt variant="muted">=</Txt>
        <Txt variant="blast">{result}</Txt>
      </div>
    </div>
  )
}
