export interface ChatInterface {
  name: string;
  status: string;
  avatar: string;
  messages: {
    message: string,
    mine: boolean
  }[]
}
