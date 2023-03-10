import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useContext } from 'react'
import { CyclesContext } from '../CyclesContext'
import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <div>
      <HistoryContainer>
        <h1>Meu historico</h1>

        <HistoryList>
          <table>
            <thead>
              <tr>
                <th>Tarefa</th>
                <th>Duração</th>
                <th>Início</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {cycles.map((cycle) => {
                return (
                  <>
                    <tr key={cycle.id}>
                      <td>{cycle.task}</td>
                      <td>{cycle.minutesAmount}</td>
                      <td>{cycle.startDate.toISOString()}</td>
                      <td>
                        {formatDistanceToNow(cycle.startDate, {
                          addSuffix: true,
                          locale: ptBR,
                        })}
                      </td>
                    </tr>
                    <td>
                      {cycle.finishedDate && (
                        <Status statusColor="green">Concluído</Status>
                      )}
                      {cycle.interruptDate && (
                        <Status statusColor="red">Interrompido</Status>
                      )}
                      {!cycle.finishedDate && (
                        <Status statusColor="yellow">Em andamento</Status>
                      )}
                    </td>
                  </>
                )
              })}
            </tbody>
          </table>
        </HistoryList>
      </HistoryContainer>
    </div>
  )
}
