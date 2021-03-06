import fetch from 'utils/fetch'

// login and get ID-Token
export function login (params) {
  const data = {
    email: params.mail,
    password: params.password,
    client_id: params.client_id
  }
  return fetch({
    url: 'http://dev-oidc.wuanla.tk/api/users/login', // del /api
    method: 'post',
    data
  })
}

// get Access-Token
export function getAccessToken (params = {scope: 'public_profile'}) {
  const data = {
    scope: params.scope
  }
  return fetch({
    url: 'http://dev-oidc.wuanla.tk/api/auth', // del /api
    method: 'post',
    data
  })
}

// 验证Token完整性
export function loginOrNot (params) {
  return fetch({
    url: 'http://dev-oidc.wuanla.tk/api/auth', // del /api
    method: 'get'
  })
}

export function signup (params) {
  const data = {
    name: params.name,
    email: params.mail,
    password: params.password,
    client_id: 'wuan'
  }
  return fetch({
    url: 'http://dev-oidc.wuanla.tk/api/users/register', // del /api
    method: 'post',
    data
  })
}
