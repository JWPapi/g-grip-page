export default async function handler(req, res) {
  // read the location from the request header
  const ip = req.socket.remoteAddress
  const country = await axios.get(`http://ip-api.com/json/${ip}`)

    res.send({
      ip,
      country
    })
}
