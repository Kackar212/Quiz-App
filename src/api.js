const baseURL = 'http://localhost:8080/api';

async function post(url, options) {
  const { body } = options;

  options = {
    ...options,
    body: typeof body === 'string' ? body : JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'post',
  }

  return request(`${baseURL}/${url}`, options);
}

async function get(url, options) {
  return request(`${baseURL}/${url}`, options);
}

async function request(url, options) {
  const response = await fetch(url, options);

  return response.json();
}

export async function fetchQuizzes() {
  return get('quizzes');
}

export async function fetchQuiz({ queryKey }) {
  const [_, quizId] = queryKey;

  return get(`quizzes/${quizId}`);
}

export async function createQuiz(quiz) {
  return post('quizzes', { body: quiz });
}

export async function createUser(user) {
  return post('users', { body: user });
}
