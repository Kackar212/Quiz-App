const baseURL = 'http://localhost:8080/api';

const defaultOptions = {
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
}

function postOptions(body) {
  return {
    body: typeof body === 'string' ? body : JSON.stringify(body),
    method: 'post',
  }
}

async function post(url, body) {
  const options = {
    ...defaultOptions,
    ...postOptions(body)
  }

  return request(`${baseURL}/${url}`, options);
}

async function get(url) {
  return request(`${baseURL}/${url}`, defaultOptions);
}

async function deleteRequest(url) {
  return request(`${baseURL}/${url}`, { ...defaultOptions, method: 'delete' });
}

async function request(url, options) {
  const response = await fetch(url, options);

  return response.json();
}

async function authRequest(url, method = get, body) {
  const response = await method(url, body);

  if (response.statusCode === 401) {
    const response = await refreshToken();

    if (response.statusCode === 401) {
      return response;
    }

    return await method(url, body);
  }

  return response;
}

export async function authPost(url, body) {
  return authRequest(url, post, body);
}

export async function authGet(url) {
  return authRequest(url);
}

export async function fetchQuizzes() {
  return get('quizzes');
}

export async function fetchQuiz({ queryKey }) {
  const [_, quizId] = queryKey;

  return get(`quizzes/${quizId}`);
}

export async function refreshToken() {
  return await post('auth/refresh');
}

export async function createQuiz(quiz) {
  return authPost('quizzes', quiz);
}

export async function createUser(user) {
  return post('users', user);
}

export async function authUser(user) {
  return post('users/auth', user);
}

export async function deleteQuiz(id) {
  return deleteRequest(`quizzes/${id}`);
}
