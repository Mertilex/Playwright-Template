import { APIRequestContext, APIResponse } from 'playwright'
import { Headers } from './models/headers.model'

export class Request {
  private headers: Headers = {}

  constructor(private request: APIRequestContext) {}

  setHeaders(headers: Headers) {
    this.headers = headers
  }

  async get(url: string, headers?: Headers): Promise<APIResponse> {
    const response = await this.request.get(url, { headers: headers ?? this.headers })
    return response
  }

  async post(url: string, data?: unknown, headers?: Headers): Promise<APIResponse> {
    const response = await this.request.post(url, { data, headers: headers ?? this.headers })
    return response
  }

  async put(url: string, data?: unknown, headers?: Headers): Promise<APIResponse> {
    const response = await this.request.put(url, { data, headers: headers ?? this.headers })
    return response
  }

  async delete(url: string, headers?: Headers): Promise<APIResponse> {
    const response = await this.request.delete(url, { headers: headers ?? this.headers })
    return response
  }
}
