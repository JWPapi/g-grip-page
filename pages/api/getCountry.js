import axios from 'axios'
import requestIp from 'request-ip'


export default async function handler(req, res) {
  const ip = process.env.NODE_ENV === 'development' ? '84.148.226.173' : requestIp.getClientIp(req)
  const {data} = await axios.get(`http://ip-api.com/json/${ip}?fields=status,message,continent,country,query`)

    res.send({
      data
    })
}
