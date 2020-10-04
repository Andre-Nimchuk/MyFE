function countPoints(score){
	let points = 0;
	for (let i = 0;i < score.length; ++i) { 
		if(score[i][0]>score[i][2]){
			points += 3;
		} else if(score[i][0] === score[i][2]){
			++points;
		}
	}
	return points;
}
alert(countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0']));