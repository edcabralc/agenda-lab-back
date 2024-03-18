import { connect, ConnectOptions } from "mongoose";

export const mongoConnect = async () => {
  try {

    console.log('Conectando...')
    await connect(process.env.MONGO_URL as string, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    } as ConnectOptions)
    console.log('Conectado com sucesso')
  } catch (error) {
    console.log("Erro ao conectar: ", error)
  }
}
