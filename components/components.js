class Component {
	constructor(childrenText){
		this.value = childrenText;
    }

	render(){
		return this.value;
	}
}

class Acs2  extends Component{
	constructor(innerHTML){
		super(innerHTML);
    }

	render(){
		return '<div style="background:red"><button onclick='+this.onclick()+'>'+this.value+'</button></div>';
    }
	
	onclick(){
		return 'alert("123")'
	}
}

class Iop  extends Component{
	constructor(innerHTML){
		super(innerHTML);
    }
}