import axios from 'axios'


const api = axios.create({
	baseURL:"https://dev.eduplay.rnp.br/services",
	headers:{
		'clientKey':'3247cb085ea21b1bfb9364437302d9ab34a037c38d3181fadee61bed38fbb963',
		'Accept': 'application/json'
	}
})

export default api