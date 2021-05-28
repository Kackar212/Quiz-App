const baseURL = 'http://localhost:8080/api';

export async function fetchQuizzes() {
  const response = await fetch(`${baseURL}/quizzes`);
  
  return response.json();
}

export async function fetchQuiz({ queryKey }) {
  const [_, quizId] = queryKey;

  const response = await fetch(`${baseURL}/quizzes/${quizId}`);

  return response.json();
}

export async function createQuiz(quiz) {
  const response = await fetch(`${baseURL}/quizzes`, {
    method: "post",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(quiz),
  })

  return response.json();
}
