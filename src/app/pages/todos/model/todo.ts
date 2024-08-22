export interface Todo {
  id?: number
  todo: string
  isActive: boolean
}

export interface TodoJson {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}
