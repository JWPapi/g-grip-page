import axios from 'axios'


export default async function handler(req, res) {
  // read the location from the request header
  const ip = req.socket.remoteAddress
  console.log(ip)
  const {data} = await axios.get(`http://ip-api.com/json/${ip}?fields=status,message,continent,country,query`)
  console.log(data)

    res.send({
      data
    })
}
