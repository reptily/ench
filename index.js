function Controller(){
this.next =(i,str,v)=>{
    let ret="";
	if(str.length>0){ //если она не пустая
        if(str.charAt(str.length-1-i) == v.charAt(v.length-1)){ //Если это последний символ
            let r=0;
			let newStr="";
			while(r<str.length){
				if(r<str.length-1-i){
					 newStr+=str.charAt(r);
				}
				else{
					newStr+=v.charAt(0);
				}
				r++;
			}
			
			let g=0;
			let max = false;
			let m = "";
			while(g<str.length){
                if(str.charAt(g) != v.charAt(v.length-1)){
					max=true;
				}
                    m+=v.charAt(0);
					g++;
			}
			m+=v.charAt(0);
            
			if(max){ 
				ret=this.next(i+1,newStr,v);
			}
			else{
                ret=m;
			}
		}
		else{ //Если еще есть символы
			let u=0;
			while(u<v.length){ //Определяем позицию символа
				if(v.charAt(u) == str.charAt(str.length-1-i)){ //Нашли позицию
					let r=0;
					let newStr="";
					while(r<str.length){
						if(r == str.length-i-1){
							newStr+=v.charAt(u+1);
						}
						else{
							newStr+=str.charAt(r);
						}
						r++;
					}
					ret=newStr;
				}
				u++;
			}
		}
	}
	else{ //если строка пустая то добавим первый символ
		str+=v.charAt(0);
		ret=str;
	}
	
	return ret;
    };
}

module.exports = Controller;
