import { Headers } from '@_api/models/headers.model'
import { Request } from '@_api/request'
import { customerEmail, customerPass } from '@_globals/config'
import { APIRequestContext } from 'playwright'

export async function getToken(request: APIRequestContext): Promise<string> {
  const requestApi = new Request(request)
  const headers: Headers = { 'Content-Type': 'application/json' }
  const payload = { email: customerEmail, password: customerPass }
  const response = await requestApi.post('/rest/user/login', payload, headers)
  const jsonBody = await response.json()
  return jsonBody.authentication.token
}
