import { ClientModel } from '@/models/ClientModel'
import {useEffect, useState} from 'react'
import ClientCard from './ClientCard'
import style from './style.module.scss'

interface Props {
  clients: ClientModel[]
}

const ClientList = (props: Props) => {
  const [clients, setClients] = useState<ClientModel[] | null>()

  useEffect(() => {
    setClients(clients => clients = props.clients)
  }, [clients])

  return (
    <div className={style.clientList}>
      { (clients && clients.length) && clients.map(item => <ClientCard {...item} key={item.id} />) }
    </div>
  )
}

export default ClientList
