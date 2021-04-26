const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1';
const results = document.getElementById('results');

const scoreTagList = {
	"P+": "strong positive",
	"P": "positive",
	"NEU": "neutral",
	"N": "negative",
	"N+": "strong negative",
	"NONE": "without sentiment"
}


const getData = async (url) => {
	
	const res = await fetch(url);
		
	try{ const data = await res.json(); /* console.log(data) */;return data;}
	
	catch(error){console.log(error)}
}



const getArticleData = (event) => {
	
	let formText = document.getElementById("name").value
	
	if(Client.checkURLValidation(formText)){
				
		event.preventDefault();
		
		getData('http://localhost:8081/api').then(
		
			(data) => {
				results.innerHTML = "<span>please wait ..."
					
				return getData(`${baseUrl}?key=${data.APIKey}&url=${formText}&lang=en`);
			}
		)
		.then((data) => {
			results.innerHTML =
				`status: <span>${data.status.msg}</span>,<br>
				model: <span>${data.model}</span>,<br>
				score_tag: <span>${scoreTagList[data.score_tag]}</span>,<br>
				agreement: <span>${data.agreement}</span>,<br>
				subjectivity: <span>${data.subjectivity}</span>,<br>
				confidence: <span>${data.confidence}</span>,<br>
				irony: <span>${data.irony}`
				
				results_section.style.border = "solid blue"
		})
	}else{
		alert('Please Enter The Full Path Of The URL')
	}
}
export {getArticleData}

/*
{"status": {
	"code":"0",
	"msg":"OK",
	"credits":"1",
	"remaining_credits":"19997"},
	
"model":"general_en",
"score_tag":"P+",
"agreement":"AGREEMENT",
"subjectivity":"SUBJECTIVE",
"confidence":"98",
"irony":"NONIRONIC",
"sentence_list": // long array for each sentence
*/