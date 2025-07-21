export interface IResponse<T> {
  // <T> refers to a generic type, allowing the interface to be used with any data type
  data: T // This is the main data returned in the response with type T
  message?: string
  statusCode?: number
}
