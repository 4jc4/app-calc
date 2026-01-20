import { Calculator } from './components/Calculator'
import { OperationHistory } from './components/OperationHistory'
import { CalculatorProvider } from './contexts/CalculatorContext'

export function App() {
  return (
    <main className="py-28 px-4 flex flex-col gap-2 items-center sm:flex-row sm:items-stretch sm:px-10">
      <CalculatorProvider>
        <Calculator />
        <OperationHistory />
      </CalculatorProvider>
    </main>
  )
}
