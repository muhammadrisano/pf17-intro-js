
const myName = "toni"
const biodata = {
    myName: "risano",
    address: 'padang',
    // showMyName: function (friend){
    //     const text = `helo ${this.myName}, im ${friend}`
    //     console.log(text);
    // }
    showMyName(friend){
        const text = `helo ${this.myName}, im ${friend}`
        console.log(text);
    }
    // showMyName: (friend)=>{
    //     const text = `helo ${biodata.myName}, im ${friend}`
    //     console.log(text);
    // }
}

biodata.showMyName('budi')