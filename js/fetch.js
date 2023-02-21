const castBox = document.querySelector("#container");
let statusText, rainIcon, locText;
rainIcon = ['<i class="bi bi-brightness-high-fill"></i>', '<i class="bi bi-cloud-drizzle-fill"></i>', '<i class="bi bi-cloud-fog2-fill"></i>', '<i class="bi bi-lightning-fill"></i>', '<i class="bi bi-snow3"></i>'];
let url = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/";
let params = {
	type: ["getUltraSrtNcst", "getVilageFcst"], //(초단기실황)(단기예보)
	key: "eRJMein3NmELUx%2FLuPHfoRdlohmVIL3MZGIGrRpkWdIm%2FnvpP%2FvML0v%2FvRtEDnylTAkvdh4qD7Iw19Op%2Fqmz8w%3D%3D",
	pageNo: "1",
	numOfRows: "1000",
	dataType: "JSON",
	base_date: now,
	base_time: "0600",
	nx: "73",
	ny: "134",
};

url = `${url}${params.type[0]}?serviceKey=${params.key}&pageNo=${params.pageNo}&numOfRows=${params.numOfRows}&dataType=${params.dataType}&base_date=${params.base_date}&base_time=${params.base_time}&nx=${params.nx}&ny=${params.ny}`;

async function getPosts() {
	const res = await fetch(url);
	const data = await res.json();
	return data;
}

async function setPosts() {
	const posts = await getPosts();
	const datas = posts.response.body.items.item;
	//동적요소생성
	const castEl = document.createElement("table");
	castEl.classList.add("table");
	const tr = document.createElement("tr");
	console.log(datas);
	let cast = {
		baseDate: datas[0].baseDate,
		rain: datas[0].obsrValue,
		rainInfo: function () {
			let info = this.rain+7;
			console.log(info);
			if (info == 0) {
				statusText = "맑음";
        rainIcon=rainIcon[0];
			}else{
        if(info==1){
          statusText = "비옴";
          rainIcon=rainIcon[1];
        }else if(info==2){
          statusText = "비/눈";
          rainIcon=rainIcon[2];
        }else if(info==7){
          statusText = "눈";
          rainIcon=rainIcon[3];
        }
      }
		},
		temperature: datas[3].obsrValue,
		wind: datas[5].obsrValue,
	};
	cast.rainInfo();

	weather1.innerHTML = `
    <span>오늘날짜: ${cast.baseDate}</span>
    <span>지역:서울/강남</span>
    <span>강수형태:${statusText}${rainIcon}</span>
    <span>기온:${cast.temperature}도</span>
    <span>바람:${cast.wind}/ms</span>
  `;
	castEl.appendChild(tr);
	castBox.appendChild(castEl);
}
setPosts();
