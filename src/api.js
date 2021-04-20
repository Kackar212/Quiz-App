const baseURL = 'http://localhost:8080/api';

export async function fetchQuizzes() {
  const response = await fetch(`${baseURL}/quizzes`);
  
  return response.json();
}
